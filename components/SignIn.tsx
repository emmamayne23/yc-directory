
import { signIn, auth, signOut } from "@/auth"
import Image from "next/image"
import Link from "next/link"
 
export default async function SignIn() {
  const session = await auth()
  const user = session?.user
  // console.log(user)
  return user ?
  (
    <div className="flex items-center gap-3 md:gap-5 lg:gap-7 text-sm md:text-base font-medium">
      { user && (
        <Link href={"/startup/create"}>
          <p>Create</p>
        </Link>
      ) }
      <form
      action={async () => {
        "use server"
        await signOut({redirectTo: "/"})
      }}
    >
      <button type="submit" className="cursor-pointer">Sign Out</button>
    </form>
    <Link href={""}>
      <Image src={user.image || ""} width={30} height={30} alt={user.name || ""} className="rounded-full" />
    </Link>
    </div>
  ) : (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit" className="cursor-pointer text-sm md:text-base font-medium">Sign in</button>
    </form>
  )
} 