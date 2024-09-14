import { relations } from "drizzle-orm";
import { blob, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { organizations } from "./organizations";

export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  // other user attributes
  name: text("name").notNull(),
  email: text("email"),
  picture: text("picture").notNull(),
  organization_id: text("organization_id"),
});

export const userRelations = relations(user, ({ one }) => ({
  organizations: one(organizations, {
    fields: [user.organization_id],
    references: [organizations.id],
  }),
}));

export const session = sqliteTable("user_session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  activeExpires: blob("active_expires", {
    mode: "bigint",
  }).notNull(),
  idleExpires: blob("idle_expires", {
    mode: "bigint",
  }).notNull(),
});

export const key = sqliteTable("user_key", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  hashedPassword: text("hashed_password"),
});
