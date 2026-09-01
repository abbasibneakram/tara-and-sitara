"use client";

import { useState } from "react";
import { CartItem } from "../types/cart.types";
import { Product } from "@/features/catalog/types/product.types";
import { CartContext } from "./CartContext";

interface CartProviderProps {
  children: React.ReactNode;
}

export default function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product) => {
    setItems((currentItems) => [
      ...currentItems,
      {
        product,
        quantity: 1,
      },
    ]);
  };

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
}
