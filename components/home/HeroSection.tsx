"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Truck, ShieldCheck, Headphones, Sprout } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import toast from "react-hot-toast";

const features = [
  {
    icon: Leaf,
    title: "Healthy Plants",
    description: "Handpicked with care",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Safe & on-time delivery",
  },
  {
    icon: ShieldCheck,
    title: "Secure Packaging",
    description: "Plants packed with love",
  },
  {
    icon: Headphones,
    title: "Plant Support",
    description: "We are here to help you",
  },
];

export function HeroSection() {
  const addItem = useCartStore((s) => s.addItem);

  const handleShopPlants = () => {
    addItem({
      id: "hanging-pothos-hero",
      slug: "golden-pothos-hanging",
      name: "Golden Pothos in Macrame Planter",
      description: "A vibrant trailing indoor plant suspended in artisan braided macrame.",
      shortDescription: "Indoor Trailing Botanical",
      price: 38.0,
      comparePrice: 48.0,
      currency: "USD",
      stock: 20,
      sku: "VAN-POTHOS-MACRAME",
      category: "hanging",
      tags: ["indoor", "hanging", "bestseller"],
      images: [{ id: "1", url: "/images/plants/hero_macrame_pothos.jpg", alt: "Hanging Pothos", isPrimary: true }],
      lightRequirement: "medium",
      careLevel: "easy",
      waterFrequency: "weekly",
      petFriendly: true,
      airPurifying: true,
      rating: 5.0,
      reviewCount: 248,
      isFeatured: true,
      isNew: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    toast.success("🌿 Golden Pothos added to your cart!", {
      style: {
        background: "#06241a",
        color: "#7ee787",
        border: "1px solid #1d5743",
      },
    });
  };

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-[#02140d] via-[#041d14] to-[#02120b] text-white overflow-hidden flex flex-col justify-between pt-20 pb-10">
      {/* Soft Ambient Radial Glow Behind the Hanging Plant */}
      <div className="absolute top-[5%] right-[10%] w-[550px] h-[550px] bg-[#22c55e]/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[5%] w-[420px] h-[420px] bg-[#16a34a]/[0.06] rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-6xl relative z-10 flex-1 flex flex-col justify-center my-auto">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-4">
          {/* Left Column: Headline, Subtitle, CTAs */}
          <div className="lg:col-span-6 space-y-6">
            {/* Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08281d]/90 border border-[#1e5843] text-[#7ee787] text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-sm"
            >
              <Leaf className="w-3.5 h-3.5 text-[#7ee787]" />
              <span>INDOOR PLANTS</span>
            </motion.div>

            {/* Serif Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-1"
            >
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[64px] font-normal text-[#f4f8f5] tracking-tight leading-[1.08]">
                Bring Nature
              </h1>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-[64px] font-normal text-[#6ee787] tracking-tight leading-[1.08]">
                Into Your Home
              </h2>
            </motion.div>

            {/* Subparagraph */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55 }}
              className="text-[#a6c7b9] text-sm sm:text-base leading-relaxed font-light max-w-lg"
            >
              Discover a wide variety of indoor plants, handpicked for your space and delivered fresh to your doorstep.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <button
                onClick={handleShopPlants}
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#7ee787] hover:bg-[#68dc72] text-[#041d13] font-semibold text-sm sm:text-base transition-all duration-300 shadow-[0_0_24px_rgba(126,231,135,0.32)] hover:shadow-[0_0_34px_rgba(126,231,135,0.5)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Shop Plants</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <Link
                href={"/shop" as any}
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-transparent hover:bg-[#09291f] border border-[#215945] text-white hover:text-[#7ee787] font-medium text-sm sm:text-base transition-all duration-300"
              >
                <span>Explore Categories</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Macrame Hanging Pothos with Orbit Rings & Satellite Icons */}
          <div className="lg:col-span-6 flex justify-center items-center relative min-h-[380px] lg:min-h-[460px]">
            {/* Concentric Green Orbital Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Outer Ring */}
              <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-[#1f5a45]/40 relative">
                {/* Orbital Node 1 (Top Left): Plant Pot Icon */}
                <div className="absolute top-[14%] left-[6%] w-8 h-8 rounded-full bg-[#06241a] border border-[#2b6d55] flex items-center justify-center text-[#7ee787] shadow-lg">
                  <Sprout className="w-4 h-4 text-[#7ee787]" />
                </div>

                {/* Orbital Node 2 (Top Right): Plant Pot Icon */}
                <div className="absolute top-[18%] right-[4%] w-8 h-8 rounded-full bg-[#06241a] border border-[#2b6d55] flex items-center justify-center text-[#7ee787] shadow-lg">
                  <Sprout className="w-4 h-4 text-[#7ee787]" />
                </div>

                {/* Orbital Node 3 (Bottom Right): Leaf Twig Icon */}
                <div className="absolute bottom-[20%] right-[12%] w-8 h-8 rounded-full bg-[#06241a] border border-[#2b6d55] flex items-center justify-center text-[#7ee787] shadow-lg">
                  <Leaf className="w-4 h-4 text-[#7ee787]" />
                </div>
              </div>

              {/* Inner Concentric Ring */}
              <div className="w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full border border-[#1f5a45]/25" />
            </div>

            {/* Main Featured Macrame Hanging Plant */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: -10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative z-10 w-[270px] h-[340px] sm:w-[340px] sm:h-[420px] flex items-center justify-center group"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#1f5a45]/40 bg-gradient-to-b from-[#092b1f]/60 to-[#041a12]/90 backdrop-blur-sm group-hover:border-[#7ee787]/40 transition-all duration-500">
                <Image
                  src="/images/plants/hero_macrame_pothos.jpg"
                  alt="Hanging Pothos in Macrame"
                  fill
                  priority
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Feature Bar: 4 Pillars in a Unified Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mt-6 sm:mt-8 rounded-2xl bg-[#06241a]/90 border border-[#1d5743] p-4 sm:p-5 backdrop-blur-xl shadow-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-[#1d5743]/50">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`flex items-center gap-3.5 ${
                    idx > 0 ? "pt-3 md:pt-0 md:pl-6" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0a2f22] border border-[#2b6d55]/60 flex items-center justify-center text-[#7ee787] shrink-0 shadow-sm">
                    <Icon className="w-5 h-5 text-[#7ee787]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white tracking-tight">
                      {feature.title}
                    </h4>
                    <p className="text-[11px] text-[#8bb5a2] font-light mt-0.5 leading-tight">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
