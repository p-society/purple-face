CREATE TABLE "post" (
	"id" uuid PRIMARY KEY NOT NULL,
	"thread_id" uuid NOT NULL,
	"vote" integer,
	"content" text,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp,
	"deleted_at" timestamp,
	"created_by" uuid NOT NULL,
	"updated_by" uuid,
	"deleted_by" uuid,
	"is_approved" boolean,
	CONSTRAINT "post_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "thread" (
	"id" uuid PRIMARY KEY NOT NULL,
	"topic_id" uuid NOT NULL,
	"view_count" integer,
	"thread_title" varchar(255),
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp,
	"deleted_at" timestamp,
	"created_by" uuid NOT NULL,
	"updated_by" uuid,
	"deleted_by" uuid,
	"pinned_at" timestamp,
	"is_locked" boolean DEFAULT false,
	CONSTRAINT "thread_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "topic" (
	"id" uuid PRIMARY KEY NOT NULL,
	"topic_name" varchar(255),
	"topic_description" text,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp,
	"deleted_at" timestamp,
	"created_by" uuid NOT NULL,
	"updated_by" uuid,
	"deleted_by" uuid,
	CONSTRAINT "topic_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" uuid PRIMARY KEY NOT NULL,
	"username" varchar(255),
	"email" varchar(255),
	"first_name" varchar(255),
	"last_name" varchar(255),
	"total_posts" integer,
	"pronouns" varchar(64),
	"bio" varchar(255),
	"branch" varchar(5),
	"passing_out_year" varchar(4),
	CONSTRAINT "user_id_unique" UNIQUE("id"),
	CONSTRAINT "user_username_unique" UNIQUE("username"),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "post" ADD CONSTRAINT "post_thread_id_thread_id_fk" FOREIGN KEY ("thread_id") REFERENCES "public"."thread"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "post" ADD CONSTRAINT "post_created_by_user_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "post" ADD CONSTRAINT "post_updated_by_user_id_fk" FOREIGN KEY ("updated_by") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "post" ADD CONSTRAINT "post_deleted_by_user_id_fk" FOREIGN KEY ("deleted_by") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "thread" ADD CONSTRAINT "thread_topic_id_topic_id_fk" FOREIGN KEY ("topic_id") REFERENCES "public"."topic"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "thread" ADD CONSTRAINT "thread_created_by_user_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "thread" ADD CONSTRAINT "thread_updated_by_user_id_fk" FOREIGN KEY ("updated_by") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "thread" ADD CONSTRAINT "thread_deleted_by_user_id_fk" FOREIGN KEY ("deleted_by") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "topic" ADD CONSTRAINT "topic_created_by_user_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "topic" ADD CONSTRAINT "topic_updated_by_user_id_fk" FOREIGN KEY ("updated_by") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "topic" ADD CONSTRAINT "topic_deleted_by_user_id_fk" FOREIGN KEY ("deleted_by") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;