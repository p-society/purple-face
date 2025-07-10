import { drizzle } from "drizzle-orm/node-postgres";
import { users } from "./schema/user.schema";
import { topics } from "./schema/topic.schema";
import { threads } from "./schema/thread.schema";
import { posts } from "./schema/post.schema";

export const DrizzleClient = drizzle(process.env.DATABASE_URL || "", {
  schema: { users, topics, threads, posts },
});

