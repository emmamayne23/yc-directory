import { auth } from "@/auth";
import { redirect } from "next/navigation";

import { createStartUp } from "@/lib/actions";

export default async function CreatePage() {
  const session = await auth();
  if (!session?.user) redirect("/");

  return (
    <div>
      <section className="w-full bg-pink-700 bg-primary min-h-[230px] pattern flex justify-center items-center flex-col py-10 px-6">
        <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">
          Submit your startup
        </h1>
      </section>
      <section className="bg-white text-black font-semibold">
        <form
          action={createStartUp}
          className=" px-10 py-5 space-y-10 mx-auto max-w-[610px]"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="title"
              className="font-semibold uppercase text-base"
            >
              TITLE
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="ring-2 ring-black rounded-4xl p-3 pl-5 focus:ring-2 focus:outline-none focus:ring-pink-600"
              placeholder="Startup Title"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="description"
              className="font-semibold text-base uppercase"
            >
              {" "}
              description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="ring-2 ring-black rounded-4xl p-3 pl-5 focus:ring-2 focus:outline-none focus:ring-pink-600"
              placeholder="Startup Description"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="image"
              className="font-semibold uppercase text-base"
            >
              Image URL
            </label>
            <input
              type="text"
              name="image"
              id="image"
              className="ring-2 ring-black rounded-4xl p-3 pl-5 focus:ring-2 focus:outline-none focus:ring-pink-600"
              placeholder="Startup Image URL"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="pitch"
              className="font-semibold uppercase text-base"
            >
              pitch
            </label>
            <textarea
              name="pitch"
              id="pitch"
              className="border-2 border-black h-48 rounded-2xl"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer rounded-4xl text-white py-3 md:py-5 bg-pink-700"
          >
            👉 Submit Your Pitch{" "}
          </button>
        </form>
      </section>
    </div>
  );
}
