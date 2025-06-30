import { drizzle } from "drizzle-orm/node-postgres";

export const DrizzleClient = drizzle(process.env.DATABASE_URL || "");
