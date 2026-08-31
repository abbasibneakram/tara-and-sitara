import { products } from "@/features/catalog/data/products";
import ProductCard from "@/features/catalog/components/ProductCard";

export default function ProductsPage() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
