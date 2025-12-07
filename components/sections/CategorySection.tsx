import Image from "next/image";
import heroImage from "@/public/hero-bg.png";
import Link from "next/link";
import { getCategories } from "@/lib/actions";

const categoryImages: Record<string, string> = {
  electronics: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
  jewelery: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
  "men's clothing":
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  "women's clothing":
    "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
};

function formatCategoryName(name: string): string {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default async function CategorySection() {
  const categories = await getCategories();

  return (
    <>
      <section className="bg-gradient-to-b from-[#F8F4D1] to-transparent pt-16">
        <div className="container px-3 mx-auto relative">
          <div className="flex overflow-x-auto justify-evenly gap-6 pb-3">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden md:h-54 min-w-46 md:w-72 h-40 shadow border-4 border-white bg-white"
              >
                <img
                  src={
                    categoryImages[cat.name] ||
                    "https://placehold.co/400x300/f3f4f6/1f2937?text=Category"
                  }
                  loading="eager"
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-10 left-0 right-0 bg-white/90 px-4 py-3 flex items-center justify-between shadow">
                  <div className="flex items-center gap-2 flex-wrap lg:flex-nowrap justify-between w-full">
                    <h3 className="font-light text-gray-800 text-2xl w-full truncate">
                      {formatCategoryName(cat.name)}
                    </h3>
                    <div>
                      <Link
                        href="#"
                        className="text-primary font-medium hover:underline"
                      >
                        Shop
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
