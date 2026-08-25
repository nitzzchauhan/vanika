import Link from "next/link";

export function CareGuidesBanner() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-gradient-to-r from-earth-100 to-brand-100 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="font-display text-3xl font-bold mb-3">New to Plants? 🌱</h2>
          <p className="text-muted-foreground text-lg">
            Our expert care guides help you keep every plant happy and healthy.
          </p>
        </div>
        <Link
          href="/care-guides"
          className="shrink-0 px-8 py-4 rounded-full bg-brand-700 text-white font-semibold hover:bg-brand-800 transition-colors shadow-lg"
        >
          Explore Care Guides →
        </Link>
      </div>
    </section>
  );
}
