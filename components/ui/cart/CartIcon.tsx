"use client";

import { ShoppingCart } from "lucide-react";
import { ICartItem } from "@/types/cart";
import { useCartContext } from "@/context/CartContext";

export default function CartIcon() {
  const { items, toggleCart } = useCartContext();
  const itemCount = items.reduce(
    (acc: number, item: ICartItem) => acc + item.quantity,
    0
  );

  return (
    <button
      onClick={toggleCart}
      className="flex items-center gap-1 hover:text-secondary relative"
    >
      <ShoppingCart size={20} />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
          {itemCount}
        </span>
      )}
      <span className="hidden sm:inline">Cart</span>
    </button>
  );
}
