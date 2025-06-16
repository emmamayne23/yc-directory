import { db } from "@/lib/db-edge";
import { startUps, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { id: string };
};

export default async function StartupDetailsPage({ params }: Props) {
  const { id } = await params;

  const startup = await db
    .select({
      id: startUps.id,
      title: startUps.title,
      description: startUps.description,
      image: startUps.image,
      pitch: startUps.pitch,
      createdAt: startUps.createdAt,
      userId: startUps.userId,
      userName: users.name,
      userImage: users.profileImage,
    })
    .from(startUps)
    .leftJoin(users, eq(startUps.userId, users.id))
    .where(eq(startUps.id, id))
    .execute()
    .then((res) => res[0]);

  if (!startup) {
    return <div>Startup not found</div>;
  }

  return (
    <>
      <div className="max-w-4xl text-black mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
        <p className="text-center bg-amber-500 py-2 my-3 rounded-lg text-white font-semibold w-40 mx-auto">
          {new Date(startup.createdAt).toDateString()}
        </p>
        <h1 className="text-5xl font-bold mb-6 text-center">{startup.title}</h1>

        {startup.image && (
          <div className="w-full h-96 relative mb-6">
            <Image
              src={startup.image}
              fill
              alt={startup.title}
              className="object-cover rounded-2xl"
            />
          </div>
        )}

        <p className="text-gray-700 font-semibold text-xl leading-relaxed mb-6">
          {startup.description}
        </p>

        <div className="flex items-center mb-6">
          <Link
            href={`/profile/${startup.userId}`}
            className="flex items-center hover:opacity-80"
          >
            {startup.userImage ? (
              <Image
                src={startup.userImage}
                width={50}
                height={50}
                alt={startup.userName || "User"}
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full mr-3 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-lg">
                  {startup.userName?.[0]?.toUpperCase() || "U"}
                </span>
              </div>
            )}
            <span className="text-gray-700 font-medium underline">
              {startup.userName}
            </span>
          </Link>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl">
          <h2 className="text-3xl font-bold mb-2">Pitch Details: </h2>
          <p className="text-gray-800">{startup.pitch}</p>
        </div>
      </div>
    </>
  );
}
