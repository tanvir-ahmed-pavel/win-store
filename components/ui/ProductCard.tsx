import { IProduct } from "@/types/product";
import Image from "next/image";
import { AddToCartButton } from "./Buttons";

interface ProductCardProps {
  product: IProduct;
}

function formatName(name: string): string {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <>
      <div className="border border-gray-200 p-3 group">
        <div className="text-xs mb-2">{formatName(product.category)}</div>
        <div className="font-light truncate w-full">{product.title}</div>

        <div className="relative h-[129px] w-full flex items-center justify-center my-8">
          <Image
            alt={product.title}
            src={product.image}
            fill
            sizes="object-contain"
            className="object-contain h-full w-full group-hover:scale-110 transition duration-500"
          ></Image>
        </div>

        <div className="mb-3 text-sm font-medium text-primary">
          RS {product.price.toFixed(3)}
        </div>

        <div>
          <AddToCartButton product={product}></AddToCartButton>
        </div>
      </div>
    </>
  );
}

// Skeleton Loading Component (Server Component - no interactivity)
export function ProductCardSkeleton() {
  return (
    <div className="border border-gray-100 rounded-lg p-4 bg-white animate-pulse">
      <div className="h-40 w-full mb-4 bg-gray-200 rounded-md" />
      <div className="h-2 w-16 bg-gray-200 rounded mb-2" />
      <div className="h-4 w-full bg-gray-200 rounded mb-1" />
      <div className="h-4 w-3/4 bg-gray-200 rounded mb-3" />
      <div className="h-3 w-20 bg-gray-200 rounded mb-3" />
      <div className="flex gap-2 mb-4">
        <div className="h-4 w-20 bg-gray-200 rounded" />
        <div className="h-4 w-16 bg-gray-200 rounded" />
      </div>
      <div className="h-9 w-full bg-gray-200 rounded" />
    </div>
  );
}
