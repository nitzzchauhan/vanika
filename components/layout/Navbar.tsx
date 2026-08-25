"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Heart, ShoppingCart, User, Menu, X, Leaf } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const itemCount = useCartStore((s) => s.itemCount());
  const wishlistCount = useWishlistStore((s) => s.productIds.length);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Plants" },
    { href: "/shop", label: "Categories" },
    { href: "/care-guides", label: "Plant Care" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#051c14]/95 backdrop-blur-md border-b border-emerald-900/30 text-white">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo & Tagline */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Custom Styled Leaf Icon */}
            <div className="text-[#86efac] group-hover:scale-105 transition-transform duration-300">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_0_8px_rgba(134,239,172,0.3)]"
              >
                <path
                  d="M17 3C17 3 29 5 30 18C31 28 21 31 17 31C13 31 3 28 4 18C5 5 17 3 17 3Z"
                  fill="#4ade80"
                  fillOpacity="0.15"
                  stroke="#4ade80"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 3V31"
                  stroke="#4ade80"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M17 11L24 7"
                  stroke="#4ade80"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M17 17L26 13"
                  stroke="#4ade80"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M17 23L24 20"
                  stroke="#4ade80"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M17 11L10 7"
                  stroke="#4ade80"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M17 17L8 13"
                  stroke="#4ade80"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M17 23L10 20"
                  stroke="#4ade80"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-2xl font-normal tracking-[0.18em] text-white leading-none uppercase">
                VANIKA
              </span>
              <span className="text-[11px] font-sans text-emerald-100/70 tracking-wide mt-1 font-light">
                Bring Nature Home
              </span>
            </div>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href as any}
                className="text-sm font-normal text-emerald-100/85 hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#4ade80] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Icons: Search, Wishlist, Cart, Profile */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Search */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-[#0a2f22] border border-emerald-500/40 rounded-full px-3 py-1.5 shadow-lg">
                  <Search className="w-4 h-4 text-emerald-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search plants..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="bg-transparent text-xs text-white placeholder:text-emerald-300/40 focus:outline-none w-32 sm:w-44"
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="text-emerald-400 hover:text-white text-xs ml-1"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search"
                  className="text-emerald-100/90 hover:text-white hover:scale-110 transition-all p-1"
                >
                  <Search className="w-[19px] h-[19px]" strokeWidth={1.75} />
                </button>
              )}
            </div>

            {/* Wishlist / Heart */}
            <Link
              href={"/wishlist" as any}
              aria-label="Wishlist"
              className="relative text-emerald-100/90 hover:text-white hover:scale-110 transition-all p-1"
            >
              <Heart className="w-[19px] h-[19px]" strokeWidth={1.75} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 h-4 min-w-[16px] px-1 rounded-full bg-[#4ade80] text-[#062419] text-[10px] font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart with count badge */}
            <Link
              href={"/cart" as any}
              aria-label="Shopping Cart"
              className="relative text-emerald-100/90 hover:text-white hover:scale-110 transition-all p-1"
            >
              <ShoppingCart className="w-[19px] h-[19px]" strokeWidth={1.75} />
              <span className="absolute -top-1.5 -right-1.5 h-4 min-w-[16px] px-1 rounded-full bg-[#a3e635] text-[#062419] text-[10px] font-bold flex items-center justify-center shadow-sm">
                {itemCount > 0 ? itemCount : 2}
              </span>
            </Link>

            {/* User Account */}
            <Link
              href={"/login" as any}
              aria-label="Account"
              className="text-emerald-100/90 hover:text-white hover:scale-110 transition-all p-1"
            >
              <User className="w-[19px] h-[19px]" strokeWidth={1.75} />
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-emerald-100 p-1"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <nav className="md:hidden py-4 border-t border-emerald-900/40 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href as any}
                className="text-sm font-medium text-emerald-100/90 hover:text-[#4ade80] py-2 px-3 rounded-lg hover:bg-emerald-950/40 transition-colors"
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
