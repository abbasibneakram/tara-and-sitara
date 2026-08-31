"use client";

import { useEffect, useRef, useState } from "react";
import SearchInput from "./SearchInput";
import { products } from "../../catalog/data/products";
import SearchResults from "./SearchResults";
import { useDebounce } from "../hooks/useDebounce";

export default function Search() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const debouncedQuery = useDebounce(query, 500);

  const searchRef = useRef<HTMLDivElement>(null);

  const filteredProducts =
    debouncedQuery.trim() === ""
      ? []
      : products.filter((product) =>
          product.name.toLowerCase().includes(debouncedQuery.toLowerCase()),
        );

  useEffect(() => {
    console.log(searchRef.current);
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      console.log(event.target);
      const isInside = searchRef.current?.contains(event.target as Node);
      if (!isInside) {
        setIsOpen(false);
      }
      console.log(isInside);
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div ref={searchRef} className="relative w-64">
      <SearchInput
        query={query}
        onQueryChange={setQuery}
        onFocus={() => setIsOpen(true)}
      />

      {isOpen &&
        debouncedQuery.trim() !== "" &&
        (filteredProducts.length > 0 ? (
          <SearchResults
            products={filteredProducts}
            onProductClick={() => setIsOpen(false)}
          />
        ) : (
          <p className="absolute mt-2 w-full rounded-md border bg-white p-2 shadow">
            No products found.
          </p>
        ))}
    </div>
  );
}
