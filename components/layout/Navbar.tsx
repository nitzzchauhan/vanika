"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Heart, Search, Menu, X, Leaf } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const itemCount = useCartStore((s) => s.itemCount());
  const wishlistCount = useWishlistStore((s) => s.productIds.length);

  const navLinks = [
    { href: "/shop", label: "Shop" },
    { href: "/shop?category=indoor", label: "Indoor" },
    { href: "/shop?category=outdoor", label: "Outdoor" },
    { href: "/shop?category=succulent", label: "Succulents" },
    { href: "/shop?category=rare", label: "Rare Plants" },
    { href: "/care-guides", label: "Care Guides" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-2xl font-bold text-primary"
          >
            <Leaf className="h-6 w-6" />
            <span>Vanika</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button aria-label="Search" className="p-2 rounded-full hover:bg-muted transition-colors">
              <Search className="h-5 w-5" />
            </button>

            <Link href="/wishlist" aria-label="Wishlist" className="relative p-2 rounded-full hover:bg-muted transition-colors">
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link href="/cart" aria-label="Cart" className="relative p-2 rounded-full hover:bg-muted transition-colors">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            <Link
              href="/auth/login"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Sign In
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden py-4 border-t border-border flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors py-1"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
