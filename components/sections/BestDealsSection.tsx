"use client";
import {
  getCategories,
  getNewArraivals,
  getProductsByCategory,
} from "@/lib/actions";
import { ProductCard } from "../ui";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { IProduct } from "@/types/product";
import { ICategory } from "@/types/category";
import { ProductCardSkeleton } from "../ui/ProductCard";

function formatCategoryName(name: string): string {
  return name.toUpperCase();
}

export default function BestDealsSection() {
  const [currentCategory, setCurrentCategory] = useState("");
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      const cats = await getCategories();
      setCategories(cats);
      if (cats.length > 0) {
        setCurrentCategory(cats[0].name);
      }
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    if (!currentCategory) return;
    async function fetchProducts() {
      try {
        setLoading(true);
        const res = await getProductsByCategory(currentCategory);
        setProducts(res);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [currentCategory]);

  const nextCat = () => {
    const index = categories.findIndex((cat) => cat.name === currentCategory);
    if (index >= 0) {
      setCurrentCategory(categories[(index + 1) % categories.length].name);
    }
  };

  const prevCat = () => {
    const index = categories.findIndex((cat) => cat.name === currentCategory);
    if (index >= 0) {
      setCurrentCategory(
        categories[(index - 1 + categories.length) % categories.length].name
      );
    }
  };

  return (
    <>
      <section className="my-16 mt-26 container px-3 mx-auto">
        <div className="flex flex-wrap items-center lg:justify-between justify-center">
          <div className="font-light text-2xl px-5 mb-5">
            <span className="text-primary font-medium">Best</span>{" "}
            <span className="font-medium">Deals</span>
          </div>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-5">
            {categories.map((cat, idx) => (
              <button
                key={cat.id}
                className={`${
                  cat.name == currentCategory ? "text-primary border-b-2" : ""
                } font-semibold hover:text-accent  px-1 py-1 cursor-pointer`}
                onClick={() => setCurrentCategory(cat.name)}
              >
                {formatCategoryName(cat.name)}
              </button>
            ))}
            <div className="flex items-center gap-2">
              <ChevronLeft
                onClick={() => prevCat()}
                className="hover:text-primary cursor-pointer"
              />
              <ChevronRight
                onClick={() => nextCat()}
                className="hover:text-primary cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 gap-4">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="min-w-[200px] lg:min-w-[200px] snap-start"
                >
                  <ProductCardSkeleton key={index}></ProductCardSkeleton>
                </div>
              ))
            : products.map((product) => (
                <div
                  key={product.id}
                  className="min-w-[200px] lg:min-w-[200px] snap-start"
                >
                  <ProductCard product={product} />
                </div>
              ))}
        </div>
      </section>
    </>
  );
}
