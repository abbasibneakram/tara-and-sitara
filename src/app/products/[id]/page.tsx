import { products } from "@/features/catalog/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const productId = Number(id);
  const product = products.find((product) => product.id === productId);
  if (!product) {
    notFound();
  }

  return (
    <main className="grid gap-8 md:grid-cols-2">
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>

        <p className="mt-4 text-2xl font-semibold">
          ${product.price.toFixed(2)}
        </p>

        <p className="mt-4 text-gray-600">{product.description}</p>
      </div>
    </main>
  );
}
