"use client";

import { useCart } from "../hooks/useCart";

export default function CartButton() {
  const { items } = useCart();

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return <button type="button">Cart ({totalItems})</button>;
}
