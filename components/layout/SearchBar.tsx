"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { IProduct } from "@/types/product";
import { searchProducts } from "@/lib/actions";

// Client component for search functionality only
export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<IProduct[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const performSearch = useCallback(async (query: string) => {
    if (query.length < 2) return;
    setIsSearching(true);
    const results = await searchProducts(query);
    setSearchResults(results);
    setShowResults(true);
    setIsSearching(false);
  }, []);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    if (timerRef.current) clearTimeout(timerRef.current);
    if (value.length < 2) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }
    timerRef.current = setTimeout(() => performSearch(value), 300);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setShowResults(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div ref={searchRef} className="hidden md:flex relative">
      <div className="flex bg-white rounded-md overflow-hidden text-gray-700 h-8 sm:h-9 w-96">
        <select className="bg-transparent px-3 text-xs border-r border-gray-300 outline-none cursor-pointer hidden lg:block">
          <option>All categories</option>
          <option>Electronics</option>
          <option>Jewelry</option>
          <option>Men&apos;s Clothing</option>
          <option>Women&apos;s Clothing</option>
        </select>
        <input
          type="text"
          placeholder="Search for products"
          className="px-3 w-full outline-none text-sm"
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          onFocus={() => searchQuery.length >= 2 && setShowResults(true)}
        />
        {searchQuery && (
          <button
            onClick={handleClearSearch}
            className="px-2 text-gray-400 hover:text-gray-600"
          >
            <X size={14} />
          </button>
        )}
        <button className="bg-gray-400 px-3 flex items-center justify-center text-white hover:bg-gray-500">
          <Search size={16} />
        </button>
      </div>

      {showResults && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg border border-gray-200 z-50 max-h-80 overflow-y-auto">
          {isSearching ? (
            <div className="p-4 text-center text-gray-500">Searching...</div>
          ) : searchResults.length > 0 ? (
            <ul>
              {searchResults.map((product) => (
                <li
                  key={product.id}
                  className="border-b border-gray-100 last:border-0"
                >
                  <Link
                    href="#"
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors"
                    onClick={() => setShowResults(false)}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-10 h-10 object-contain shrink-0"
                    />
                    <div className="grow min-w-0">
                      <p className="text-sm text-gray-800 truncate">
                        {product.title}
                      </p>
                      <p className="text-xs text-secondary font-medium">
                        RS {product.price}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-4 text-center text-gray-500">
              No products found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
