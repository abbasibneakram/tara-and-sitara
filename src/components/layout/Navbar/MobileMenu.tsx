"use client";

import { useState } from "react";
import Link from "next/link";
import type { NavigationItem } from "./types";
import Search from "@/src/features/search/components/Search";

interface MobileMenuProps {
  items: NavigationItem[];
}

export default function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Menu"}
      </button>

      {isOpen && (
        <nav className="absolute right-0 top-full mt-2 flex w-48 flex-col gap-4 rounded-lg border bg-white p-4 shadow-lg">
          <Search />
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
