"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Heart, ShoppingBag, User, Menu, X, Leaf } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

interface NavItem {
  label: string;
  href: string;
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const cartCount = useCartStore((s) => s.itemCount());
  const wishlistCount = useWishlistStore((s) => s.productIds.length);

  // If cart is empty for demo, show 2 or actual count
  const displayCartCount = cartCount > 0 ? cartCount : 2;

  const navLinks: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Plants", href: "/shop" },
    { label: "Categories", href: "/shop" },
    { label: "Plant Care", href: "/care-guides" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#051811]/90 backdrop-blur-xl border-b border-[#133827]/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex h-24 items-center justify-between">
          {/* Left: Botanical Logo & Brand */}
          <Link href="/" className="flex items-center gap-3.5 group text-left">
            <div className="w-10 h-10 rounded-full bg-[#0d2e20] border border-[#A8D65A]/30 flex items-center justify-center shadow-[0_0_15px_rgba(168,214,90,0.15)] group-hover:border-[#A8D65A]/60 group-hover:shadow-[0_0_20px_rgba(168,214,90,0.3)] transition-all duration-300">
              <Leaf className="w-5 h-5 text-[#A8D65A] stroke-[1.75]" />
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-[0.18em] text-white uppercase leading-none group-hover:text-[#A8D65A] transition-colors duration-300">
                VANIKA
              </span>
              <span className="text-[10px] tracking-[0.22em] text-[#A8D65A]/80 font-sans uppercase mt-1 font-medium">
                Bring Nature Home
              </span>
            </div>
          </Link>

          {/* Center: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-9 lg:gap-11">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href as any}
                className="group relative text-sm font-normal text-gray-200 hover:text-white transition-colors duration-200 py-2 tracking-wide"
              >
                <span>{link.label}</span>
                {/* Subtle lime-green glow underline on hover */}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#A8D65A] rounded-full transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#A8D65A]" />
              </Link>
            ))}
          </nav>

          {/* Right: Minimalist Outline Icons */}
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Search Toggle */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-[#092218] border border-[#A8D65A]/40 rounded-full px-3.5 py-1.5 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                  <Search className="w-4 h-4 text-[#A8D65A] mr-2 stroke-[1.5]" />
                  <input
                    type="text"
                    placeholder="Search plants..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="bg-transparent text-xs text-white placeholder:text-gray-400 focus:outline-none w-28 sm:w-44"
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="text-gray-400 hover:text-white ml-1 text-xs"
                    aria-label="Close search"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search"
                  className="p-2 text-gray-300 hover:text-[#A8D65A] hover:bg-[#0d2e20]/60 rounded-full transition-all duration-200"
                >
                  <Search className="w-5 h-5 stroke-[1.5]" />
                </button>
              )}
            </div>

            {/* Wishlist / Heart */}
            <Link
              href={"/wishlist" as any}
              aria-label="Wishlist"
              className="relative p-2 text-gray-300 hover:text-[#A8D65A] hover:bg-[#0d2e20]/60 rounded-full transition-all duration-200"
            >
              <Heart className="w-5 h-5 stroke-[1.5]" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#A8D65A] ring-2 ring-[#051811]" />
              )}
            </Link>

            {/* Shopping Cart with Green Badge */}
            <Link
              href={"/cart" as any}
              aria-label="Cart"
              className="relative p-2 text-gray-300 hover:text-[#A8D65A] hover:bg-[#0d2e20]/60 rounded-full transition-all duration-200"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              {displayCartCount > 0 && (
                <span className="absolute 0 top-0.5 right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-[#A8D65A] text-[#051811] text-[10px] font-bold flex items-center justify-center shadow-[0_0_10px_rgba(168,214,90,0.5)] leading-none">
                  {displayCartCount}
                </span>
              )}
            </Link>

            {/* User Profile */}
            <Link
              href={"/login" as any}
              aria-label="Account"
              className="p-2 text-gray-300 hover:text-[#A8D65A] hover:bg-[#0d2e20]/60 rounded-full transition-all duration-200"
            >
              <User className="w-5 h-5 stroke-[1.5]" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              className="md:hidden p-2 text-gray-300 hover:text-[#A8D65A] focus:outline-none"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6 stroke-[1.5]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <nav className="md:hidden py-6 border-t border-[#133827]/70 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href as any}
                className="text-base font-normal text-gray-200 hover:text-[#A8D65A] py-2 px-3 rounded-lg hover:bg-[#0d2e20]/50 transition-colors flex items-center justify-between"
                onClick={() => setMobileOpen(false)}
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#A8D65A]/60">→</span>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
