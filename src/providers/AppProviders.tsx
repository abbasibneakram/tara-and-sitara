"use client";

import CartProvider from "@/features/cart/context/CartProvider";

interface AppProvidersProps {
  children: React.ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
  return <CartProvider>{children}</CartProvider>;
}
