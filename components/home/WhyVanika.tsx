import { Truck, ShieldCheck, BookOpen, Leaf, Users, RefreshCw } from "lucide-react";

const perks = [
  {
    icon: Truck,
    title: "Eco Fast Delivery",
    description: "Packed with biodegradable insulators and delivered healthy within 48-72 hours.",
  },
  {
    icon: ShieldCheck,
    title: "30-Day Plant Guarantee",
    description: "If your botanical friend struggles in its first month, we replace it free of charge.",
  },
  {
    icon: BookOpen,
    title: "Botanist Care Guides",
    description: "Custom watering calendars, light diagnostics, and soil health tips for every specimen.",
  },
  {
    icon: Leaf,
    title: "Sustainably Grown",
    description: "100% peat-free organic potting mix and eco-conscious nursery cultivation.",
  },
  {
    icon: Users,
    title: "15,000+ Plant Parents",
    description: "Join our thriving community of plant lovers, apartment gardeners, and collectors.",
  },
  {
    icon: RefreshCw,
    title: "Lifetime Plant Doctor",
    description: "Direct WhatsApp & AI diagnosis support whenever your plant needs a checkup.",
  },
];

export function WhyVanika() {
  return (
    <section className="bg-[#051c14] py-24 text-white border-t border-emerald-500/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#4ade80] mb-2 block">
            The Vanika Difference
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Why Plant Lovers Choose Vanika
          </h2>
          <p className="text-emerald-100/70 text-base font-light">
            We don't just ship plants; we ensure they thrive in your sanctuary with unmatched care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk) => {
            const Icon = perk.icon;
            return (
              <div
                key={perk.title}
                className="p-7 rounded-3xl bg-[#092b20]/60 border border-emerald-500/15 hover:border-emerald-400/40 hover:bg-[#0c3629]/80 transition-all duration-300 shadow-md group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#103a2c] border border-emerald-400/30 flex items-center justify-center mb-5 text-[#4ade80] group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#4ade80] transition-colors">
                  {perk.title}
                </h3>
                <p className="text-emerald-100/60 text-sm leading-relaxed font-light">
                  {perk.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
