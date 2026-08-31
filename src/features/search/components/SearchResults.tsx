import { Product } from "@/features/catalog/types/product.types";
import Link from "next/link";

interface SearchResultsProps {
  products: Product[];
  onProductClick: () => void;
}

export default function SearchResults({
  products,
  onProductClick,
}: SearchResultsProps) {
  return (
    <ul className="absolute left-0 top-full mt-2 w-full rounded-md border bg-white shadow-lg">
      {products.map((product) => (
        <li key={product.id}>
          <Link
            href={`/products/${product.id}`}
            onClick={onProductClick}
            className="block px-3 py-2 hover:bg-gray-100"
          >
            {product.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
