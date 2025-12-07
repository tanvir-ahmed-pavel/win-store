"use client";

// Small client components for interactive elements only

export function AddToCartButton() {
  return (
    <button
      onClick={() => {
        console.log("Add to cart clicked");
      }}
      className="w-full bg-primary text-white py-2 font-light text-sm hover:bg-teal-500 transition-colors mt-auto cursor-pointer"
    >
      Add To Cart
    </button>
  );
}
