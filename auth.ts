import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { db } from "./lib/db-edge";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user, account, profile }) {
      // 1. Check if user exists in your DB
      const existingUser = await db
        .select()
        .from(users)
        .where(eq(users.email, user.email))
        .execute();

      // 2. If not, create them
      if (existingUser.length === 0) {
        await db.insert(users).values({
          id: user.id, // Google's ID
          name: user.name || "Anonymous", // Fallback for missing names
          email: user.email || "",
          profileImage: user.image || null,
        });
      }

      return true; // Allow sign-in
    },
    async session({ session, token }) {
      // 3. Attach user ID to the session (useful for frontend)
      if (session.user) {
        session.user.id = token.sub; // Google's ID
      }
      return session;
    },
    async jwt({ token }) {
      // 4. Include user ID in JWT token
      return token;
    },
  },
});