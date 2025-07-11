import crypto from "node:crypto";
import type { FastifyInstance } from "fastify";
import jwt from "jsonwebtoken";
import { DrizzleClient } from "../db/index.js";
import { users } from "../db/schema/user.schema.js";

export async function authRoutes(fastify: FastifyInstance) {
	fastify.get("/google", async (_request, reply) => {
		const clientId = process.env.GOOGLE_CLIENT_ID;
		const redirectURL = process.env.GOOGLE_REDIRECT_URI;
		const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

		if (!clientId || !clientSecret || !redirectURL) {
			fastify.log.error("❌ Missing Google OAuth environment variables");
			return reply.send({
				error: "Server misconfiguration: missing Google OAuth keys",
			});
		}

		const scope = ["openid", "profile", "email"].join(" ");

		const oauthURL = new URL("https://accounts.google.com/o/oauth2/v2/auth");
		oauthURL.searchParams.append("client_id", clientId);
		oauthURL.searchParams.append("redirect_uri", redirectURL);
		oauthURL.searchParams.append("response_type", "code");
		oauthURL.searchParams.append("scope", scope);
		oauthURL.searchParams.append("access_type", "offline");
		oauthURL.searchParams.append("prompt", "consent");

		fastify.log.info("🔗 Redirecting user to Google OAuth:", oauthURL);
		reply.redirect(oauthURL.toString());
	});

	fastify.get("/google/callback", async (request, reply) => {
		const { code } = request.query as { code?: string };
		const clientId = process.env.GOOGLE_CLIENT_ID;
		const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
		const redirectURL = process.env.GOOGLE_REDIRECT_URI;

		if (!clientId || !clientSecret || !redirectURL) {
			fastify.log.error("❌ Missing Google OAuth environment variables");
			return reply.status(500).send({
				error: "Server misconfiguration: missing Google OAuth keys",
			});
		}

		if (!code) {
			fastify.log.warn("⚠️ No authorization code found in callback URL");
			return reply.send({ error: "No code found" });
		}

		fastify.log.info("🎉 Received Google authorization code:", code);

		try {
			const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams({
					code,
					client_id: clientId,
					client_secret: clientSecret,
					redirect_uri: redirectURL,
					grant_type: "authorization_code",
				}),
			});

			const tokenData = await tokenResponse.json();

			if (!tokenResponse.ok) {
				fastify.log.error("❌ Failed to fetch tokens:", tokenData);
				return reply.send({ error: "Failed to fetch tokens from Google" });
			}

			fastify.log.info("✅ Tokens received from Google:", tokenData);

			const idToken = tokenData.id_token;

			const userInfoResponse = await fetch(
				`https://oauth2.googleapis.com/tokeninfo?id_token=${idToken}`,
			);

			const userInfo = await userInfoResponse.json();

			if (!userInfoResponse.ok) {
				fastify.log.error("❌ Failed to fetch user info:", userInfo);
				return reply.send({ error: "Failed to fetch user info from Google" });
			}

			fastify.log.info("👤 Google user info:", userInfo);

			const { email, name } = userInfo;

			const user = await DrizzleClient.query.users.findFirst({
				where: (u, { eq }) => eq(u.email, email),
			});

			const jwtSecret = process.env.JWT_SECRET;

			if (!jwtSecret) {
				fastify.log.error("❌ JWT_SECRET is missing in .env");
				return reply.send({
					error: "Server misconfiguration: missing JWT_SECRET",
				});
			}
			let userId: string;
			let redirectPath: string;

			if (user) {
				userId = user.id;
				redirectPath = "/home";
				fastify.log.info("✅ Existing user found");
			} else {
				const newUserResult = await DrizzleClient.insert(users)
					.values({
						id: crypto.randomUUID(),
						username: null, // Let user set this on the details page
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
					fastify.log.error("❌ Failed to create new user or retrieve new user's ID", { newUser: newUserResult });
					return reply.status(500).send({ error: "Failed to create user" });
				}
				
				userId = newUserResult[0].id;
				redirectPath = "/user-details";
				fastify.log.info("🆕 New user created");
			}
			const token = jwt.sign({ userId }, jwtSecret, {
				expiresIn: "1h",
			});

			fastify.log.info(`🔑 JWT created. Redirecting to ${redirectPath}`);
			return reply.redirect(`${redirectPath}?token=${token}`);
		} catch (err) {
			fastify.log.error("🔥 Error during Google OAuth:", err);
			return reply.send({ error: "Something went wrong during Google login" });
		}
	});
}
