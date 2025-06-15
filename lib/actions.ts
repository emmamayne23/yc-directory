"use server"

import { db } from "./db-edge";
import { startUps } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export async function createStartUp(formData: FormData) {
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const image = formData.get("image") as string
    const pitch = formData.get("pitch") as string

    const session = await auth()
    if(!session?.user) {
        throw new Error("Unauthorized")
    }

    await db.insert(startUps).values({
        title, description, image, pitch, userId: session.user.id
    })

    revalidatePath("/")
    redirect("/")
}