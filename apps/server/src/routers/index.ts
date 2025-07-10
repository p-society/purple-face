import { authRoutes } from "./auth";
import type{ FastifyInstance } from "fastify";

export async function appRouter(fastify: FastifyInstance) {
  fastify.register(authRoutes, { prefix: "/auth" });
}