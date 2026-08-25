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
    <section className="bg-[#04160f] py-14 border-t border-emerald-500/10 text-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-[#4ade80] mb-1.5">
              <Sparkles className="w-3 h-3" /> Curated Botanicals
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-white tracking-tight">
              Explore by Category
            </h2>
          </div>
          <Link
            href="/shop"
            className="mt-3 md:mt-0 inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 group"
          >
            <span>View All Collections</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.value}
              href={`/shop?category=${cat.value}` as any}
              className="group relative overflow-hidden rounded-2xl p-5 bg-gradient-to-b from-[#08261c]/80 to-[#051a13]/90 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(16,185,129,0.12)] hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-400/25 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                  {cat.emoji}
                </div>
                <span className="text-[10.5px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  {cat.count}
                </span>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-[#4ade80] transition-colors mb-1">
                {cat.label}
              </h3>
              <p className="text-emerald-100/60 text-xs leading-relaxed font-light">
                {cat.description}
              </p>

              <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
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
