"use client";
import { useCartContext } from "@/context/CartContext";
import { ICartItem } from "@/types/cart";
import { ShoppingBag, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { CartItem } from "./CartItem";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleCart,
    clearCart,
    subtotal,
  } = useCartContext();

  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        toggleCart();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, toggleCart]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="relative z-50"
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-gray-500/75 transition-opacity backdrop-blur-sm"
          aria-hidden="true"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div
                ref={drawerRef}
                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out sm:duration-700"
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2
                        className="text-lg font-medium text-gray-900"
                        id="slide-over-title"
                      >
                        Shopping Cart (
                        {items.reduce(
                          (acc: number, item: ICartItem) => acc + item.quantity,
                          0
                        )}{" "}
                        items)
                      </h2>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={toggleCart}
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-64 text-center">
                          <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
                          <p className="text-lg font-medium text-gray-900">
                            Your cart is empty
                          </p>
                          <p className="mt-2 text-gray-500">
                            Looks like you haven't added anything yet.
                          </p>
                          <button
                            onClick={toggleCart}
                            className="mt-6 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </div>
                      ) : (
                        <div className="flow-root">
                          <ul className="-my-6 divide-y divide-gray-200">
                            {items.map((item: ICartItem) => (
                              <li key={item.id}>
                                <CartItem item={item} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {items.length > 0 && (
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>RS{subtotal.toFixed(2)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6 space-y-3">
                        <button
                          onClick={toggleCart}
                          className="w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors"
                        >
                          Continue Shopping
                        </button>
                        <button
                          onClick={clearCart}
                          className="w-full flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
                        >
                          Clear Cart
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
