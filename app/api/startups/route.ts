import { db } from "@/lib/db-edge";
import { startUps } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const startups = await db.select().from(startUps).orderBy(startUps.createdAt)
        return NextResponse.json(startups)
    } catch (error) {
        console.error("Could not fetch startups", error)
        return NextResponse.json({ error: "Fetching failed" }, { status: 500 })
    }
}

export async function POST(req: Request) {
    try {
        const { title, description, image, pitch } = await req.json()
        if (!title || !description || !pitch) {
            return new NextResponse("Missing required fields", { status: 400 });
        }
        await db.insert(startUps).values({
            title,
            description,
            image,
            pitch,
          });
        
    } catch (error) {
        console.error("Could not post startup", error)
        return NextResponse.json({ error: "Posting failed" }, { status: 500 })
    }
}
