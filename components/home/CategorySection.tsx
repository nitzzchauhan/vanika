import Link from "next/link";
import type { PlantCategory } from "@/types";

const categories: { label: string; emoji: string; value: PlantCategory; description: string }[] = [
  { label: "Indoor", emoji: "🪴", value: "indoor", description: "Perfect for home & office" },
  { label: "Outdoor", emoji: "🌳", value: "outdoor", description: "Garden & balcony plants" },
  { label: "Succulents", emoji: "🌵", value: "succulent", description: "Low maintenance beauties" },
  { label: "Rare Plants", emoji: "🌺", value: "rare", description: "Collector's favourites" },
  { label: "Air Purifying", emoji: "💨", value: "air-purifying", description: "Clean your air naturally" },
  { label: "Herbs", emoji: "🌿", value: "herbs", description: "Fresh for your kitchen" },
];

export function CategorySection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl font-bold mb-3">Shop by Category</h2>
        <p className="text-muted-foreground text-lg">Find the perfect plant for every corner of your home</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.value}
            href={`/shop?category=${cat.value}`}
            className="group flex flex-col items-center p-6 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <span className="text-4xl mb-3">{cat.emoji}</span>
            <span className="font-semibold text-sm text-center">{cat.label}</span>
            <span className="text-xs text-muted-foreground text-center mt-1 hidden sm:block">{cat.description}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
