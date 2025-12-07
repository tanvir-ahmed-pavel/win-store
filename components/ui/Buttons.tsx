"use client";

import { useCartContext } from "@/context/CartContext";
import { IProduct } from "@/types/product";

interface AddToCartButtonProps {
  product: IProduct;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCartContext();
  return (
    <button
      onClick={() => {
        addToCart(product);
      }}
      className="w-full bg-primary text-white py-2 font-light text-sm hover:bg-teal-500 transition-colors mt-auto cursor-pointer"
    >
      Add To Cart
    </button>
  );
}
