import Image from "next/image";
import Link from "next/link";

type Startup = {
    id: string,
    authorName: string,
    authorImage: string,
    image: string
    title: string,
    description: string,
    createdAt: string
}

export function StartupCard({ startup }: { startup: Startup }) {
  return (
    <>
      <div
        className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      >
        <div className="flex justify-between items-center m-2">
          <p className="">{startup.authorName || "Anonymous"}</p>
          <span>
            {startup.authorImage && (
              <Image
                src={startup.authorImage}
                width={50}
                height={50}
                alt={startup.authorName || "User"}
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
            )}
          </span>
        </div>
        {startup.image && (
          <Image
            src={startup.image}
            alt={startup.title}
            width={200}
            height={150}
            className="w-full h-52 object-cover"
          />
        )}
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{startup.title}</h3>
          <p className="text-gray-600 mb-4">{startup.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-xs text-green-500">
              {new Date(startup.createdAt).toLocaleString()}
            </span>
            {/* Add upvote button later */}
            <Link href={`/startup/${startup.id}`}>Details</Link>
          </div>
        </div>
      </div>
    </>
  );
}
