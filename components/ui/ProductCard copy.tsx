import { Star } from "lucide-react";
import { AddToCartButton, WishlistButton } from "./Buttons";
import { IProduct } from "@/types/product";

// Server Component - renders product data, imports client buttons
interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, title, price, image, category, rating } = product;

  // Calculate a deterministic "discount" based on product ID (15-30% higher)
  const discount = 15 + (id % 16);
  const originalPrice = Math.round(price * (1 + discount / 100));

  return (
    <div className="group border border-gray-100 rounded-lg p-4 transition-shadow hover:shadow-lg bg-white relative flex flex-col h-full">
      {/* Wishlist Button - Client Component */}
      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <WishlistButton />
      </div>

      {/* Product Image */}
      <div className="relative h-40 w-full mb-4 flex items-center justify-center bg-gray-50 rounded-md overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-contain h-full w-full p-2"
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="mb-2 grow">
        <p className="text-[10px] text-gray-500 capitalize">{category}</p>
        <h3
          className="text-secondary font-medium text-sm line-clamp-2"
          title={title}
        >
          {title}
        </h3>
      </div>

      {/* Rating */}
      {rating && (
        <div className="flex items-center gap-1 mb-2">
          <Star size={12} className="fill-yellow-400 text-yellow-400" />
          <span className="text-xs text-gray-600">{rating.rate}</span>
          <span className="text-xs text-gray-400">({rating.count})</span>
        </div>
      )}

      {/* Pricing */}
      <div className="flex items-center gap-2 mb-4 text-sm">
        <span className="font-bold text-gray-800">
          RS {Math.round(price * 280).toLocaleString()}
        </span>
        <span className="text-xs text-gray-400 line-through">
          RS {Math.round(originalPrice * 280).toLocaleString()}
        </span>
      </div>

      {/* Add to Cart Button - Client Component */}
      <AddToCartButton />
    </div>
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
