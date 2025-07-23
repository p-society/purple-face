import crypto from "node:crypto";
import type { FastifyInstance } from "fastify";
import jwt from "jsonwebtoken";
import { DrizzleClient } from "../db/index.js";
import { users } from "../db/schema/user.schema.js";
import { env } from "../envSchema.js";

export async function authRoutes(fastify: FastifyInstance) {
	fastify.get("/google/callback", async (request, reply) => {
		try {
			const token =
				await fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(
					request,
				);
			const idToken = token.token.id_token;

			const userInfoResponse = await fetch(
				`https://oauth2.googleapis.com/tokeninfo?id_token=${idToken}`,
			);
			const userInfo = await userInfoResponse.json();

			if (!userInfoResponse.ok) {
				fastify.log.error("Failed to fetch user info:", userInfo);
				return reply
					.status(400)
					.send({ error: "Failed to fetch user info from Google" });
			}

			const { email } = userInfo;
			const user = await DrizzleClient.query.users.findFirst({
				where: (u, { eq }) => eq(u.email, email),
			});

			let userId: string;
			let redirectPath: string;

			if (user) {
				userId = user.id;
				redirectPath = "/home";
				fastify.log.info("Existing user found");
			} else {
				const newUserResult = await DrizzleClient.insert(users)
					.values({
						id: crypto.randomUUID(),
						username: null,
						email,
						firstName: null,
						lastName: null,
						pronouns: null,
						bio: null,
						branch: null,
						passingOutYear: null,
						totalPosts: 0,
					})
					.returning({ id: users.id });

				if (!newUserResult?.[0]?.id) {
					fastify.log.error("Failed to create new user");
					return reply.status(500).send({ error: "Failed to create user" });
				}

				userId = newUserResult[0].id;
				redirectPath = "/user-details";
				fastify.log.info("New user created");
			}

			const jwtToken = jwt.sign({ userId }, env.JWT_SECRET, {
				expiresIn: "7d",
			});

			reply.setCookie("auth_token", jwtToken, {
				httpOnly: true,
				secure: env.NODE_ENV === "production",
				sameSite: "lax",
				maxAge: 60 * 60 * 24 * 7,
				path: "/",
			});

			fastify.log.info(`JWT cookie set. Redirecting to ${redirectPath}`);
			return reply.redirect(redirectPath);
		} catch (err) {
			fastify.log.error("Error during Google OAuth:", err);
			return reply
				.status(500)
				.send({ error: "Something went wrong during Google login" });
		}
	});

	fastify.post("/logout", async (request, reply) => {
		reply.clearCookie("auth_token", { path: "/" });
		fastify.log.info("User logged out");
		return reply.send({ message: "Logged out successfully" });
	});

}

