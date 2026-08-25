// ─────────────────────────────────────────────
// HeroSection — Homepage hero banner
// TODO: Add full implementation with animations
// ─────────────────────────────────────────────

import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-brand-50 via-white to-earth-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-6">
            🌿 Fresh Plants, Delivered Daily
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-brand-900 leading-tight mb-6">
            Bring Nature <br />
            <span className="text-brand-500">Home</span>
          </h1>
          <p className="text-xl text-foreground/60 mb-10 leading-relaxed">
            Discover our curated collection of indoor plants, rare botanicals, and succulents.
            Each plant comes with expert care guides — so they thrive in your space.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Shop Now →
            </Link>
            <Link
              href="/care-guides"
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-brand-300 text-brand-700 font-semibold hover:bg-brand-50 transition-all"
            >
              Care Guides
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
