import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-white pt-12 pb-6 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/">
              <Image
                src="/app-logo.png"
                alt="WinStore"
                width={132}
                height={48}
                className="w-auto"
              />
            </Link>

            <p className="text-primary my-4 font-medium">
              Got questions? Call us 24/7!
            </p>
            <p className="text-gray-400 mb-1">03 111 666 144</p>
            <p className="text-gray-400 mb-4">0317 1777015</p>

            <div className="mb-6">
              <h4 className="text-blue-400 font-medium mb-1">Contact info</h4>
              <p className="text-gray-400">info@winstore.pk</p>
            </div>

            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-primary text-lg font-medium mb-2">Trending</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Installments
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Grocery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Health & Beauty
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Home Appliances
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Mobile Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary text-lg font-medium mb-2">
              Information
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Shipping & Return
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary text-lg font-medium mb-2">
              Customer Care
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Recently Viewed
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Compare
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Become a Vendor
                </Link>
              </li>
            </ul>

            <div className="mt-8">
              <div className="flex gap-2 flex-wrap">
                <div className="bg-white p-1 rounded w-18 h-10 flex items-center justify-center text-black text-[10px] font-bold">
                  VISA
                </div>
                <div className="bg-white p-1 rounded w-18 h-10 flex items-center justify-center text-black text-[10px] font-bold">
                  Master
                </div>
                <div className="bg-white p-1 rounded w-18 h-10 flex items-center justify-center text-black text-[10px] font-bold">
                  Cash
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear().toString()} Winstore. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}
