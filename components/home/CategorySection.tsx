import Link from "next/link";
import { Sparkles, ArrowUpRight } from "lucide-react";

const categories = [
  {
    label: "Indoor Plants",
    emoji: "🪴",
    value: "indoor",
    count: "42 Varieties",
    description: "Air-purifying foliage for living rooms & desks",
  },
  {
    label: "Hanging Plants",
    emoji: "🌿",
    value: "hanging",
    count: "18 Varieties",
    description: "Cascading vines for hooks & high shelves",
  },
  {
    label: "Succulents & Cacti",
    emoji: "🌵",
    value: "succulent",
    count: "35 Varieties",
    description: "Low-maintenance architectural shapes",
  },
  {
    label: "Rare & Exotic",
    emoji: "🌺",
    value: "rare",
    count: "12 Varieties",
    description: "Variegated & collector botanical treasures",
  },
  {
    label: "Flowering Beauties",
    emoji: "🌸",
    value: "flowering",
    count: "24 Varieties",
    description: "Vibrant tropical blooms and sweet scents",
  },
  {
    label: "Herb Garden",
    emoji: "🍃",
    value: "herbs",
    count: "16 Varieties",
    description: "Fresh aromatic greens for home cooking",
  },
];

export function CategorySection() {
  return (
    <section className="bg-[#04160f] py-20 border-t border-emerald-500/10 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#4ade80] mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Curated Botanicals
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Explore by Category
            </h2>
          </div>
          <Link
            href="/shop"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 group"
          >
            <span>View All Collections</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.value}
              href={`/shop?category=${cat.value}` as any}
              className="group relative overflow-hidden rounded-3xl p-7 bg-gradient-to-b from-[#092b20]/80 to-[#061d15]/90 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)] hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-400/25 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  {cat.emoji}
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  {cat.count}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-[#4ade80] transition-colors mb-2">
                {cat.label}
              </h3>
              <p className="text-emerald-100/60 text-sm leading-relaxed font-light">
                {cat.description}
              </p>

              <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                <span>Browse Category</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
