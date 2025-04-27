import { db } from "@/lib/db-edge";
import { startUps, users } from "@/db/schema";
import { eq } from "drizzle-orm";

import { StartupCard } from "@/components/StartupCard";

export default async function Home() {
  const startups = await db
    .select({ 
      id: startUps.id, 
      title: startUps.title, 
      description: startUps.description, 
      image: startUps.image, 
      createdAt: startUps.createdAt, 
      authorId: users.id,
      authorName: users.name,
      authorImage: users.profileImage 
    })
    .from(startUps)
    .leftJoin(users, eq(startUps.userId, users.id))
    .orderBy(startUps.createdAt)

  return (
    <div className="">
      <section className="w-full bg-pink-700 bg-primary min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6">
        <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="font-medium text-[20px] text-white max-w-2xl text-center break-words">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        {/* <SearchForm query={query} /> */}
        <input
          type="search"
          placeholder="Search Startups"
          className=" mt-5 py-4 pl-10 md:mt-7 md:w-2xl lg:w-3xl text-xl font-bold text-gray-700 bg-white rounded-4xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
        />
      </section>
      <section className="p-3 bg-white text-black">
        <h2 className="text-2xl font-bold">All Startups</h2>
        {/* display the startups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {startups.map((startup) => (
            <StartupCard key={startup.id} startup={startup} />
          ))}
        </div>
      </section>
    </div>
  );
}
