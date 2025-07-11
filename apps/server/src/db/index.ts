import { drizzle } from "drizzle-orm/node-postgres";
import { posts } from "./schema/post.schema";
import { threads } from "./schema/thread.schema";
import { topics } from "./schema/topic.schema";
import { users } from "./schema/user.schema";

export const DrizzleClient = drizzle(process.env.DATABASE_URL || "", {
	schema: { users, topics, threads, posts },
});
