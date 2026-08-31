import { Product } from "@/features/catalog/types/product.types";

export interface CartItem {
  product: Product;
  quantity: number;
}
