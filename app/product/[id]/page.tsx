import { products } from "@/data/products";
import { ProductDetail } from "@/components/product-detail";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" }
  ];
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(
    (p) => p.id === Number(params.id)
  );

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}