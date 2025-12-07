import { Facebook, Instagram, Linkedin, Menu, Twitter } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className="bg-nav-bg w-full text-white text-sm">
        <div className="container px-3 mx-auto flex gap-6 items-center justify-between min-h-[49px]">
          <div className="flex flex-wrap gap-3 lg:gap-6 items-center text-nowrap overflow-x-auto ">
            <div className="flex gap-3 items-center">
              <Menu />
              <div className="text-lg font-light">Browse By Category</div>
            </div>

            <div className="flex gap-4 items-center overflow-x-auto pb-2 md:pb-0">
              <Link href="/" className="hover:text-secondary">
                Home
              </Link>
              <Link href="#" className="hover:text-secondary">
                Easy Monthly Installments
              </Link>
              <Link href="#" className="hover:text-secondary">
                Shop by Brands
              </Link>
              <Link href="#" className="hover:text-secondary">
                Become a Vendor
              </Link>
            </div>
          </div>

          <div className="md:flex gap-5 hidden">
            <Facebook></Facebook>
            <Twitter></Twitter>

            <Linkedin></Linkedin>

            <Instagram></Instagram>
          </div>
        </div>
      </div>
    </>
  );
}
