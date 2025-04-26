import { varchar, text, timestamp, uuid , pgTable } from "drizzle-orm/pg-core";


export const users = pgTable("users", {
    id: uuid("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").unique().notNull(),
    profileImage: text("profile_image"),
})

export const startUps = pgTable("startups", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id").references(() => users.id),
    title: text("title").notNull(),
    description: text("description"),
    image: varchar("image"),
    pitch: text("pitch"),
    createdAt: timestamp("created_at").notNull().defaultNow()
})