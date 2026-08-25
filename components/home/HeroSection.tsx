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
      images: [{ id: "1", url: "/images/plants/hero_exact_pothos.jpg", alt: "Hanging Pothos", isPrimary: true }],
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
    <section className="relative min-h-screen w-full bg-[#031811] text-white overflow-hidden flex flex-col justify-between pt-16 pb-6">
      {/* Background Soft Glows */}
      <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-[#22c55e]/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[5%] w-[400px] h-[400px] bg-[#16a34a]/[0.05] rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-6xl relative z-10 flex-1 flex flex-col justify-between my-auto">
        {/* Main Hero Content Grid — Harmonious Left & Right Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 pt-6 lg:pt-8 pb-4">
          {/* Left Column: Raised & Balanced with the Hero Plant */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5 lg:space-y-6 z-20 -mt-6 lg:-mt-10">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#08281d] border border-[#1e5843] text-[#7ee787] text-xs font-semibold uppercase tracking-wider shadow-sm self-start"
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
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-normal text-[#f4f8f5] tracking-tight leading-[1.06]">
                Bring Nature
              </h1>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-normal text-[#6ee787] tracking-tight leading-[1.06]">
                Into Your Home
              </h2>
            </motion.div>

            {/* Subparagraph */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55 }}
              className="text-[#a6c7b9] text-sm sm:text-[15px] leading-relaxed font-light max-w-lg"
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
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#7ee787] hover:bg-[#68dc72] text-[#041d13] font-semibold text-xs sm:text-sm transition-all duration-300 shadow-[0_0_24px_rgba(126,231,135,0.35)] hover:shadow-[0_0_34px_rgba(126,231,135,0.55)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Shop Plants</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <Link
                href={"/shop" as any}
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-transparent hover:bg-[#09291f] border border-[#215945] text-white hover:text-[#7ee787] font-medium text-xs sm:text-sm transition-all duration-300"
              >
                <span>Explore Categories</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Plant Hanging Directly from the Top Navbar / Ceiling */}
          <div className="lg:col-span-6 flex justify-center items-center relative min-h-[440px] lg:min-h-[540px]">
            {/* Concentric Green Geometric Circles Centered Directly Behind the Planter Pot */}
            <div className="absolute top-[37%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] lg:w-[480px] lg:h-[480px] pointer-events-none flex items-center justify-center">
              {/* Outer Orbit Circle with 3 Satellite Icon Badges */}
              <div className="w-full h-full rounded-full border border-[#1f5a45]/50 relative animate-[spin_180s_linear_infinite]">
                {/* Satellite Node 1 (Top Left): Seedling Icon */}
                <div className="absolute top-[16%] left-[6%] w-8 h-8 rounded-full bg-[#052217] border border-[#2b6d55] flex items-center justify-center text-[#7ee787] shadow-[0_0_15px_rgba(126,231,135,0.25)]">
                  <Sprout className="w-4 h-4 text-[#7ee787]" />
                </div>

                {/* Satellite Node 2 (Top Right): Potted Plant Icon */}
                <div className="absolute top-[14%] right-[8%] w-8 h-8 rounded-full bg-[#052217] border border-[#2b6d55] flex items-center justify-center text-[#7ee787] shadow-[0_0_15px_rgba(126,231,135,0.25)]">
                  <Sprout className="w-4 h-4 text-[#7ee787]" />
                </div>

                {/* Satellite Node 3 (Bottom Left): Botanical Leaf Twig Icon */}
                <div className="absolute bottom-[10%] left-[28%] w-8 h-8 rounded-full bg-[#052217] border border-[#2b6d55] flex items-center justify-center text-[#7ee787] shadow-[0_0_15px_rgba(126,231,135,0.25)]">
                  <Leaf className="w-4 h-4 text-[#7ee787]" />
                </div>
              </div>

              {/* Middle Concentric Circle */}
              <div className="absolute w-[78%] h-[78%] rounded-full border border-[#1f5a45]/35" />

              {/* Inner Concentric Circle */}
              <div className="absolute w-[56%] h-[56%] rounded-full border border-[#1f5a45]/25" />
            </div>

            {/* Seamless Free-Hanging Botanical Visual — Suspended Directly from Top Navbar */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 w-[300px] h-[480px] sm:w-[380px] sm:h-[580px] lg:w-[420px] lg:h-[640px] -mt-10 lg:-mt-16 flex items-center justify-center overflow-visible pointer-events-auto"
            >
              {/* Plant Image as Pure Transparent PNG with Soft Drop Shadow */}
              <div className="relative w-full h-full">
                <Image
                  src="/images/plants/hero_hanging_plant.png"
                  alt="Golden Pothos Hanging from Ceiling"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-top drop-shadow-[0_20px_45px_rgba(0,0,0,0.7)] transform hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Feature Bar: 4 Pillars in a Unified Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="mt-3 sm:mt-4 rounded-2xl bg-[#06241a]/95 border border-[#1d5743] p-3.5 sm:p-4 backdrop-blur-xl shadow-xl z-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#1d5743]/50">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`flex items-center gap-3 ${
                    idx > 0 ? "pt-2 md:pt-0 md:pl-4" : ""
                  }`}
                >
                  <div className="w-8 h-8 rounded-xl bg-[#0a2f22] border border-[#2b6d55]/60 flex items-center justify-center text-[#7ee787] shrink-0 shadow-sm">
                    <Icon className="w-4 h-4 text-[#7ee787]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-[13px] font-semibold text-white tracking-tight">
                      {feature.title}
                    </h4>
                    <p className="text-[10px] text-[#8bb5a2] font-light mt-0.5 leading-tight">
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
