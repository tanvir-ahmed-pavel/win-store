import Link from "next/link";
import Image from "next/image";
import { Headphones, Heart, ShoppingCart, User } from "lucide-react";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
export default function Header() {
  return (
    <header className="w-full ">
      <div className="bg-header-bg text-white">
        <div className="container px-3 mx-auto flex justify-between items-center min-h-[69px]">
          <div className="flex items-center gap-10">
            <Link href="/">
              <Image
                src="/app-logo.png"
                alt="WinStore"
                width={132}
                height={48}
                className="h-auto"
              />
            </Link>
            <div className="hidden lg:block">
              <SearchBar></SearchBar>
            </div>
          </div>

          <div className="flex items-center text-xs gap-6">
            <div className="hidden lg:block">
              <div className="font-light text-[9px]">Call Us Now</div>
              <div className="flex items-center gap-1">
                <Headphones size={12}></Headphones>
                <span>+011 5827918</span>
              </div>
              <div className="hover:text-secondary cursor-pointer">Sign In</div>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="flex items-center gap-1 hover:text-secondary"
              >
                <User size={20} />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-1 hover:text-secondary"
              >
                <Heart size={20} />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-1 hover:text-secondary"
              >
                <ShoppingCart size={20} />
                <span className="hidden sm:inline">Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <NavBar></NavBar>
    </header>
  );
}
