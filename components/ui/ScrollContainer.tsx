"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Client component for scroll controls only
interface ScrollContainerProps {
  children: React.ReactNode;
}

export function ScrollContainer({ children }: ScrollContainerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <div className="absolute -top-12 right-0 flex gap-2">
        <button
          onClick={() => scroll("left")}
          className="hidden sm:flex p-2 rounded-full text-gray-400 hover:text-gray-800 hover:bg-gray-100 transition-colors"
          aria-label="Scroll left"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden sm:flex p-2 rounded-full text-gray-400 hover:text-gray-800 hover:bg-gray-100 transition-colors"
          aria-label="Scroll right"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:overflow-visible"
      >
        {children}
      </div>
    </div>
  );
}
