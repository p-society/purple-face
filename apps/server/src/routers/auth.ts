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

		const oauthURL =
			`https://accounts.google.com/o/oauth2/v2/auth` +
			`?client_id=${clientId}` +
			`&redirect_uri=${encodeURIComponent(redirectURL)}` +
			`&response_type=code` +
			`&scope=${encodeURIComponent(scope)}` +
			`&access_type=offline` +
			`&prompt=consent`;

		fastify.log.info("🔗 Redirecting user to Google OAuth:", oauthURL);
		reply.redirect(oauthURL.toString());
	});

	fastify.get("/google/callback", async (request, reply) => {
		const { code } = request.query as { code?: string };

		if (!code) {
			fastify.log.warn("⚠️ No authorization code found in callback URL");
			return reply.send({ error: "No code found" });
		}

		fastify.log.info("🎉 Received Google authorization code:", code);

		try {
			const clientId = process.env.GOOGLE_CLIENT_ID as string;
			const clientSecret = process.env.GOOGLE_CLIENT_SECRET as string;
			const redirectURL = process.env.GOOGLE_REDIRECT_URI as string;

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

			if (user) {
				const token = jwt.sign({ userId: user.id }, jwtSecret, {
					expiresIn: "1h",
				});
				fastify.log.info("🔑 Existing user JWT:", token);
				return reply.redirect(`/home?token=${token}`);
			}

			const newUser = await DrizzleClient.insert(users)
				.values({
					id: crypto.randomUUID(),
					username: name,
					email,
					firstName: "",
					lastName: "",
					pronouns: "",
					bio: "",
					branch: "",
					passingOutYear: "",
					totalPosts: 0,
				})
				.returning();

			const token = jwt.sign({ userId: newUser[0].id }, jwtSecret, {
				expiresIn: "1h",
			});
			fastify.log.info("🆕 New user created, JWT:", token);

			return reply.redirect(`/user-details?token=${token}`);
		} catch (err) {
			fastify.log.error("🔥 Error during Google OAuth:", err);
			return reply.send({ error: "Something went wrong during Google login" });
		}
	});
}
