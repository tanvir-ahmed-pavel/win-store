import Image from "next/image";
import heroImage from "@/public/hero-bg.png";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="relative w-full">
        {/* Image */}
        <div className="mx-auto w-full h-[500px] relative">
          <Image
            src={heroImage}
            alt="Hero Banner"
            priority
            fill
            className="object-cover "
            placeholder="blur"
          />
        </div>

        <div className="absolute top-0 w-full h-full">
          <div className="flex container items-center justify-center text-center lg:text-start lg:justify-between mx-auto bg-transparent h-full">
            <div>
              <div className="mb-5">
                <span className="text-4xl lg:text-7xl me-3 font-light">
                  Shop
                </span>
                <span className="text-primary font-light text-4xl lg:text-7xl">
                  Compuner <br /> & Experience
                </span>
              </div>
              <div className="mb-7 text">
                You cannot inspect quality into the product; it is already
                there. <br /> I am not a product of my circumstances. <br /> I
                am a product of my decisions.
              </div>

              <Link
                href="#"
                className="bg-accent text-white px-8 py-3 rounded-md font-semibold hover:bg-teal-500 transition-shadow shadow-md inline-block"
              >
                View More
              </Link>
            </div>

            <div className="bg-gradient-to-r rounded-full from-[#FDC830] to-[#F37335] p-7 text-6xl font-light text-white mb-20 hidden lg:block">
              40% <br />
              Off
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-8 h-2 bg-header-bg rounded-full cursor-pointer"></div>
            <div className="w-8 h-2 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400"></div>
            <div className="w-8 h-2 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400"></div>
          </div>
        </div>
      </section>
    </>
  );
}
