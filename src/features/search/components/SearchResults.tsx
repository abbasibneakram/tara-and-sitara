import { Product } from "../../catalog/types/product.types";

interface SearchResultsProps {
  products: Product[];
}

export default function SearchResults({ products }: SearchResultsProps) {
  return (
    <ul className="absolute left-0 top-full mt-2 w-full rounded-md border bg-white shadow-lg">
  {products.map((product) => (
    <li
      key={product.id}
      className="cursor-pointer px-3 py-2 hover:bg-gray-100"
    >
      {product.name}
    </li>
  ))}
</ul>
  );
}