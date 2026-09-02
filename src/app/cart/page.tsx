"use client";

import { useCart } from "@/features/cart/hooks/useCart";

export default function CartPage() {
  const { items } = useCart();

  return (
    <main>
      <h1>Shopping Cart</h1>

      {items.map((item) => (
        <div key={item.product.id}>
          <h2>{item.product.name}</h2>
          <p>Price: ${item.product.price.toFixed(2)}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </main>
  );
}
