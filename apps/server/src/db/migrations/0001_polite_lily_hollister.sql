CREATE INDEX "idx_post_created_by" ON "post" USING btree ("created_by");--> statement-breakpoint
CREATE INDEX "idx_post_updated_by" ON "post" USING btree ("updated_by");--> statement-breakpoint
CREATE INDEX "idx_post_created_at" ON "post" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "idx_view_count" ON "thread" USING btree ("view_count");--> statement-breakpoint
CREATE INDEX "idx_thread_created_by" ON "thread" USING btree ("created_by");--> statement-breakpoint
CREATE INDEX "idx_thread_updated_by" ON "thread" USING btree ("updated_by");--> statement-breakpoint
CREATE INDEX "idx_thread_created_at" ON "thread" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "idx_topic_created_by" ON "topic" USING btree ("created_by");