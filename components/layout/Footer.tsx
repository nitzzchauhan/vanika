import Link from "next/link";
import { Leaf, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100 mt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-display text-2xl font-bold text-brand-300 mb-4">
              <Leaf className="h-6 w-6" />
              <span>Vanika</span>
            </Link>
            <p className="text-brand-400 text-sm leading-relaxed">
              Where nature meets your doorstep. We deliver the finest plants with expert care guides, fresh and healthy, right to your home.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-brand-800 hover:bg-brand-600 transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-brand-200 mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-brand-400">
              {["Indoor Plants", "Outdoor Plants", "Succulents", "Rare Plants", "Hanging Plants", "Herb Garden"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-brand-200 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold text-brand-200 mb-4">Help</h3>
            <ul className="space-y-2 text-sm text-brand-400">
              {["Care Guides", "FAQs", "Shipping Policy", "Returns & Refunds", "Track Order", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-brand-200 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-brand-200 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-brand-400">
              <li>📧 hello@vanika.in</li>
              <li>📞 +91 98765 43210</li>
              <li>🕐 Mon–Sat, 9am–6pm IST</li>
              <li>📍 Bangalore, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-500">
          <p>© {new Date().getFullYear()} Vanika. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-brand-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
