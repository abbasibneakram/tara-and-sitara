import { createContext } from "react";
import { Product } from "@/features/catalog/types/product.types";
import { CartItem } from "../types/cart.types";

interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeItem: (productId: number) => void;
}

export const CartContext = createContext<CartContextValue | undefined>(
  undefined,
);
