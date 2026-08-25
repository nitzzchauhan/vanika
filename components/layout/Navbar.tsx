"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingBag, Search, Menu, X, Leaf, User, MapPin } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const itemCount = useCartStore((s) => s.itemCount());

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/care-guides", label: "Location" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#051c14]/95 backdrop-blur-xl border-b border-emerald-500/15 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Leaf className="h-5 w-5 text-[#4ade80]" />
            </div>
            <span className="font-display text-2xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
              Vanika
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href as any}
                className="text-sm font-medium text-emerald-100/75 hover:text-[#4ade80] transition-colors relative py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions: Search, Cart, Account */}
          <div className="flex items-center gap-3">
            {/* Search Toggle */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-[#0d3326] border border-emerald-500/40 rounded-full px-3 py-1.5 shadow-inner">
                  <Search className="h-4 w-4 text-emerald-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search plants..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="bg-transparent text-xs text-white placeholder:text-emerald-300/40 focus:outline-none w-32 sm:w-48"
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="text-emerald-400/70 hover:text-white ml-1 text-xs"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search"
                  className="p-2.5 rounded-full bg-[#0a281e] hover:bg-[#0f382a] border border-emerald-500/20 text-emerald-200 hover:text-white transition-all"
                >
                  <Search className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Cart Button */}
            <Link
              href="/cart"
              aria-label="Cart"
              className="relative p-2.5 rounded-full bg-[#0a281e] hover:bg-[#0f382a] border border-emerald-500/20 text-emerald-200 hover:text-white transition-all"
            >
              <ShoppingBag className="h-4 w-4" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#4ade80] text-[#062419] text-[10px] font-bold flex items-center justify-center shadow-md animate-pulse">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* User Account */}
            <Link
              href="/login"
              aria-label="Account"
              className="p-2.5 rounded-full bg-[#0a281e] hover:bg-[#0f382a] border border-emerald-500/20 text-emerald-200 hover:text-white transition-all"
            >
              <User className="h-4 w-4" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-full bg-[#0a281e] border border-emerald-500/20 text-emerald-200"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <nav className="md:hidden py-4 border-t border-emerald-500/20 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href as any}
                className="text-sm font-medium text-emerald-100/80 hover:text-[#4ade80] py-2 px-3 rounded-lg hover:bg-emerald-950/50 transition-colors"
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
