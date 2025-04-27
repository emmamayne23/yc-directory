import { db } from "@/lib/db-edge";
import { startUps, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { StartupCard } from "@/components/StartupCard";
import Image from "next/image";

export default async function ProfilePage({ params }: { params: { id: string } }) {
  const { id: userId } = await params;

  const user = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .then(res => res[0]);

  const userStartups = await db
    .select({
      id: startUps.id,
      title: startUps.title,
      description: startUps.description,
      image: startUps.image,
      createdAt: startUps.createdAt,
      authorId: users.id,
      authorName: users.name,
      authorImage: users.profileImage,
    })
    .from(startUps)
    .leftJoin(users, eq(startUps.userId, users.id))
    .where(eq(startUps.userId, userId))
    .orderBy(startUps.createdAt);

  if (!user) {
    return <div className="p-10">User not found 😢</div>;
  }

  return (
    <div className="p-10">
      <div className="flex items-center gap-4 mb-10">
        {user.profileImage && (
          <Image src={user.profileImage} width={200} height={200} alt={user.name} className="w-20 h-20 rounded-full" />
        )}
        <div>
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Startups by {user.name}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {userStartups.map((startup) => (
          <StartupCard key={startup.id} startup={startup} />
        ))}
      </div>
    </div>
  );
}
