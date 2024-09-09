import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import NavItems from "./NavItems"

  

function MobileNav ()  {
  return (
    <nav className="md:hidden">
        <Sheet>
  <SheetTrigger className="align-middle">
    <Image src="assets/icons/menu.svg"
    width="24"
    height="24"
    alt="menu"
    className="cursor-pointer"
    />
  </SheetTrigger>
  <SheetContent className="flex flex-col gap-6 bg-white
  md:hidden">
   <Image 
   src="/assets/images/Logo.svg"
   alt="logo"
   width="128"
   height="38"
   />
   <Separator  className="border border-gray-100"/>
   <NavItems/>

  </SheetContent>
</Sheet>

    </nav>
  )
}

export default MobileNav