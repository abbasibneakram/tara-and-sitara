"use client";

import { useCart } from "@/features/cart/hooks/useCart";

export default function CartPage() {
  const { items, increaseQuantity, decreaseQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <main>
        <h1>Shopping Cart</h1>
        <p>Your cart is empty.</p>
      </main>
    );
  }

  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  return (
    <main>
      <h1>Shopping Cart</h1>

      {items.map((item) => (
        <div key={item.product.id}>
          <h2>{item.product.name}</h2>
          <p>Price: ${item.product.price.toFixed(2)}</p>
          <button
            type="button"
            onClick={() => decreaseQuantity(item.product.id)}
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            type="button"
            onClick={() => increaseQuantity(item.product.id)}
          >
            +
          </button>
          <button type="button" onClick={() => removeItem(item.product.id)}>
            Remove
          </button>
          <p>Total: ${(item.product.price * item.quantity).toFixed(2)}</p>
        </div>
      ))}
      <p className="text-xl font-bold">Subtotal: ${subtotal.toFixed(2)}</p>
    </main>
  );
}
