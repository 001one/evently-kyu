import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./shared/NavItems"
import MobileNav from "./shared/MobileNav"
const Header = () => {
  return (
    <>
    <header className="w-full border-b">
   
    <div className="wrapper flex items-center justify-between ">
        <Link href="/" className="w-36">
        <Image
        src="/assets/images/logo.svg"
        width={128}
        height={38}
        alt="logo"/>
         </Link>
         
        <div className="md:flex-between hidden w-full max-w-xs">
        <SignedIn>
       <nav>
        <NavItems/>
       </nav>
      </SignedIn></div>
      <div className="flex gap-5"> 
        <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedIn>
       <nav>
        <MobileNav/>
       </nav>
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <Button asChild className="rounded-full bg-purple-600" size="lg">
      <Link href="/sign-in">
      Login
      </Link>
        </Button>
        <SignInButton />
      </SignedOut>
</div>
        

    </div>
     </header>
    </>
  )
}

export default Header