import { db } from "@/lib/db-edge";
import { startUps } from "@/db/schema";
import { eq } from "drizzle-orm";
import Image from "next/image";

type Props = {
  params: { id: string };
};

export default async function StartupDetailsPage({ params }: Props) {
    const { id } = params

    // Fetch the startup
  const startup = await db
  .select()
  .from(startUps)
  .where(eq(startUps.id, id))
  .execute()
  .then(res => res[0]); // Only take first result

if (!startup) {
  return <div>Startup not found</div>;
}
  return (
    <>
      <div>
      <div className="p-6">
      <h1 className="text-3xl font-bold">{startup.title}</h1>
      {startup.image && <Image src={startup.image} width={400} height={400} alt={startup.title} className="my-4" />}
      <p className="text-lg">{startup.description}</p>
      <p className="mt-4">{startup.pitch}</p>
    </div>
      </div>
    </>
  );
}
