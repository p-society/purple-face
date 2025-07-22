import crypto from "node:crypto";
import type { FastifyInstance } from "fastify";
import jwt from "jsonwebtoken";
import { DrizzleClient } from "../db/index.js";
import { users } from "../db/schema/user.schema.js";

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

			fastify.log.info(" Google user info:", userInfo);
			const { email } = userInfo;
			console.log("👤 Google user info:", userInfo);
			const user = await DrizzleClient.query.users.findFirst({
				where: (u, { eq }) => eq(u.email, email),
			});

			const jwtSecret = process.env.JWT_SECRET;
			if (!jwtSecret) {
				fastify.log.error("JWT_SECRET is missing in .env");
				return reply.status(500).send({
					error: "Server misconfiguration: missing JWT_SECRET",
				});
			}

			let userId: string;
			let redirectPath: string;

			if (user) {
				console.log("Existing user found");
				userId = user.id;
				redirectPath = "/home";
				fastify.log.info("Existing user found");
			} else {
				console.log("Creating new user");
				const newUserResult = await DrizzleClient.insert(users)
					.values({
						id: crypto.randomUUID(),
						username: null,
						email,
						firstName: "",
						lastName: "",
						pronouns: "",
						bio: "",
						branch: "",
						passingOutYear: "",
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

			const jwtToken = jwt.sign({ userId }, jwtSecret, {
				expiresIn: "1h",
			});

			fastify.log.info(`JWT created. Redirecting to ${redirectPath}`);
			return reply.redirect(`${redirectPath}?token=${jwtToken}`);
		} catch (err) {
			fastify.log.error(" Error during Google OAuth:", err);
			return reply
				.status(500)
				.send({ error: "Something went wrong during Google login" });
		}
	});
}
