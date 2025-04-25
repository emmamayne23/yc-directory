import Image from "next/image"
import LogoImage from "@/public/logo.png"

import SignIn from "./SignIn"

const Navbar = () => {
  return (
    <nav className="bg-white flex items-center justify-between p-3 md:p-5 text-black">
        <div>
            <Image src={LogoImage} alt="Logo" width={100} height={100} className="w-40"/>
        </div>
        <div>
            <SignIn />
        </div>
    </nav>
  )
}

export default Navbar