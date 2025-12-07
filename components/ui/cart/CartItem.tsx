"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { ICartItem } from "@/types/cart";
import { useCartContext } from "@/context/CartContext";

interface CartItemProps {
  item: ICartItem;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCartContext();

  return (
    <div className="flex gap-4 py-4 border-b border-gray-100">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md border border-gray-200 bg-white">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-contain p-2"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3 className="line-clamp-1 mr-2">{item.title}</h3>
            <p className="ml-4">RS{(item.price * item.quantity).toFixed(2)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500 capitalize">
            {item.category}
          </p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center border border-gray-200 rounded-lg">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="p-1 hover:bg-gray-100 rounded-l-lg transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4 text-gray-600" />
            </button>
            <span className="px-2 py-1 font-medium text-gray-900 w-8 text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-1 hover:bg-gray-100 rounded-r-lg transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4 text-gray-600" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => removeFromCart(item.id)}
            className="flex items-center text-red-500 hover:text-red-700 font-medium transition-colors"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
