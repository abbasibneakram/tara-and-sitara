"use client";

import { Product } from "@/features/catalog/types/product.types";
import { useCart } from "../hooks/useCart";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();

  return (
    <button type="button" onClick={() => addItem(product)}>
      Add to Cart
    </button>
  );
}
