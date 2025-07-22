import "dotenv/config";
import fastifyCors from "@fastify/cors";
import Fastify from "fastify";
import { DrizzleClient } from "./db/index.js";
import { appRouter } from "./routers/index";
import fastifyOauth2 from '@fastify/oauth2';

const baseCorsConfig = {
	origin: process.env.CORS_ORIGIN || "",
	methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
	allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
	credentials: true,
	maxAge: 86400,
};

const fastify = Fastify({
	logger: true,
});

fastify.register(fastifyOauth2, {
  name: 'googleOAuth2',
  credentials: {
    client: {
      id: process.env.GOOGLE_CLIENT_ID!,
      secret: process.env.GOOGLE_CLIENT_SECRET!,
    },
    auth: fastifyOauth2.GOOGLE_CONFIGURATION,
  },
  scope: ['openid', 'profile', 'email'],
  startRedirectPath: '/auth/google',
  callbackUri: process.env.GOOGLE_REDIRECT_URI!,
});

fastify.register(fastifyCors, baseCorsConfig);
fastify.register(appRouter);

fastify.get("/", async () => {
	return "OK";
});

fastify.addHook("onClose", async () => {
	console.log("Closing server Gracefully...");
	if (DrizzleClient && "end" in DrizzleClient) {
		try {
			if (typeof DrizzleClient.end === "function") {
				await DrizzleClient.end();
				console.log("Database connection closed.");
			} else {
				console.warn("DrizzleClient.end is not a function.");
			}
		} catch (error) {
			console.error("Error closing database connection:", error);
		}
	}
});

const shutdown = async () => {
	try {
		await fastify.close();
		console.log("Server closed gracefully.");
		process.exit(0);
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
};
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

fastify.listen({ port: 3000 }, (err) => {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
	console.log("Server running on port 3000");
});
