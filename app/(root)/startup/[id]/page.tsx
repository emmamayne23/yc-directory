import { db } from "@/lib/db-edge";
import { startUps } from "@/db/schema";
import { eq } from "drizzle-orm";
import Image from "next/image";

type Props = {
  params: { id: string };
};

export default async function StartupDetailsPage({ params }: Props) {
  const { id } = params;

  // Fetch the startup
  const startup = await db
    .select()
    .from(startUps)
    .where(eq(startUps.id, id))
    .execute()
    .then((res) => res[0]);

  if (!startup) {
    return <div>Startup not found</div>;
  }
  return (
    <>
      <div className="max-w-4xl text-black mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
        <h1 className="text-4xl font-bold mb-6 text-center">{startup.title}</h1>

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

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          {startup.description}
        </p>

        <div className="bg-gray-100 p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Pitch</h2>
          <p className="text-gray-800">{startup.pitch}</p>
        </div>
      </div>
    </>
  );
}
