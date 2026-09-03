"use client";

import { useCart } from "../hooks/useCart";
import Link from "next/link";

export default function CartButton() {
  const { items } = useCart();

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return <Link href="/cart">Cart ({totalItems})</Link>;
}
