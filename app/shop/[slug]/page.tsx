import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductImages } from "@/components/shop/ProductImages";
import { ProductInfo } from "@/components/shop/ProductInfo";
import { ProductTabs } from "@/components/shop/ProductTabs";
import { RelatedProducts } from "@/components/shop/RelatedProducts";

interface ProductPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  // TODO: Fetch product by slug and return SEO metadata
  return {
    title: `Plant Details`,
    description: "Learn more about this plant and add it to your cart.",
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  // TODO: const product = await getProductBySlug(params.slug);
  // if (!product) notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ProductImages images={[]} />
        <ProductInfo slug={params.slug} />
      </div>
      <ProductTabs slug={params.slug} />
      <RelatedProducts />
    </div>
  );
}
