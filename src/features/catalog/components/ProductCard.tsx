import { Product } from "../types/product.types";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="block">
      <div className="rounded-md border p-4">
        <div className="relative aspect-square w-full overflow-hidden rounded-md">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <h2 className="mt-4 text-lg font-bold">{product.name}</h2>

        <p className="mt-2 text-xl font-semibold">
          ${product.price.toFixed(2)}
        </p>

        <p className="mt-2 text-sm text-gray-600">{product.description}</p>
      </div>
    </Link>
  );
}
