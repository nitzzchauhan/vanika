import Link from "next/link";
import { Leaf, Instagram, Twitter, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#030e0a] text-emerald-100/70 border-t border-emerald-500/15">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                <Leaf className="h-4 w-4 text-[#4ade80]" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                Vanika
              </span>
            </Link>
            <p className="text-emerald-100/60 text-sm leading-relaxed max-w-sm font-light">
              Where nature meets your doorstep. Curated indoor plants, handmade artisan planters, and expert botanical care guides to cultivate thriving green spaces.
            </p>
            <div className="flex gap-3 pt-2">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#0a281e] border border-emerald-500/20 hover:border-emerald-400/50 hover:bg-[#0f3a2c] text-emerald-300 hover:text-white flex items-center justify-center transition-all"
                  aria-label="Social Link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Shop Collections
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Indoor Greenery", href: "/shop?category=indoor" },
                { label: "Hanging Vines", href: "/shop?category=hanging" },
                { label: "Succulents & Cacti", href: "/shop?category=succulent" },
                { label: "Rare Collector", href: "/shop?category=rare" },
                { label: "Air Purifiers", href: "/shop?category=air-purifying" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href as any}
                    className="hover:text-[#4ade80] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Plant Care & Info */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Plant Hospital
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Water & Light Guide", href: "/care-guides" },
                { label: "Pest Diagnostics", href: "/care-guides" },
                { label: "Repotting 101", href: "/care-guides" },
                { label: "Plant FAQ", href: "/care-guides" },
                { label: "Track Your Order", href: "/cart" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href as any}
                    className="hover:text-[#4ade80] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Greenhouse
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#4ade80] shrink-0 mt-0.5" />
                <span>Indiranagar 100ft Rd, Bangalore, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#4ade80] shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#4ade80] shrink-0" />
                <span>hello@vanika.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-500/10 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400/50">
          <p>© {new Date().getFullYear()} Vanika Botanicals. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-emerald-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-emerald-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-emerald-300 transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
