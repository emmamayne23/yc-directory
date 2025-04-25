import { varchar, text, timestamp, uuid , pgTable } from "drizzle-orm/pg-core";


export const users = pgTable("users", {
    id: uuid("id").primaryKey(),
    name: text("name").notNull(),
    // email: text("email").unique()
})

export const startUp = pgTable("startup", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id").references(() => users.id),
    title: text("title").notNull(),
    description: text("description"),
    image: varchar("image"),
    createdAt: timestamp("created_at").notNull().defaultNow()
})