"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ArrowRight, Droplets, Sun, Sparkles, Check, Leaf } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import toast from "react-hot-toast";

interface PlantItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  waterMetric: number;
  lightMetric: number;
  humidity: string;
  temp: string;
}

const plantCollection: PlantItem[] = [
  {
    id: "pothos-hanging",
    name: "Hanging Pothos",
    category: "Ornamentplant",
    tagline: "Various Indoor",
    description:
      "Our shop offers various indoor plants, stylish pots, expert care tips, and fresh greenery for beautiful modern homes everywhere today.",
    price: 36.0,
    originalPrice: 48.0,
    image: "/images/plants/hanging_pothos.jpg",
    waterMetric: 28,
    lightMetric: 94,
    humidity: "65%",
    temp: "18-26°C",
  },
  {
    id: "desk-plant-calathea",
    name: "Desk Plant",
    category: "Desk Greenery",
    tagline: "Calm & Focus",
    description:
      "A desk plant brings freshness, focus, and calm energy. Ideal for work desks, bedside tables, and minimalist rooms.",
    price: 36.0,
    originalPrice: 44.0,
    image: "/images/plants/desk_plant.jpg",
    waterMetric: 35,
    lightMetric: 82,
    humidity: "70%",
    temp: "20-28°C",
  },
  {
    id: "anthurium-bloom",
    name: "Anthurium",
    category: "Flowering Botanical",
    tagline: "Tropical Elegance",
    description:
      "Anthurium adds vibrant color and elegant tropical charm with stunning heart-shaped blooms that last for months.",
    price: 26.0,
    originalPrice: 34.0,
    image: "/images/plants/anthurium.jpg",
    waterMetric: 40,
    lightMetric: 75,
    humidity: "60%",
    temp: "19-27°C",
  },
  {
    id: "rubber-plant-ficus",
    name: "Rubber Plant",
    category: "Air Purifier",
    tagline: "Bold & Sculptural",
    description:
      "Rubber plant thrives with ease, decorates, and purifies indoor air with bold, glossy, dark green statement leaves.",
    price: 28.0,
    originalPrice: 38.0,
    image: "/images/plants/rubber_plant.jpg",
    waterMetric: 22,
    lightMetric: 88,
    humidity: "55%",
    temp: "16-25°C",
  },
];

export function HeroSection() {
  const [activePlant, setActivePlant] = useState<PlantItem>(plantCollection[0]);
  const [showDiagnosisModal, setShowDiagnosisModal] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const handleAddToCart = (plant: PlantItem) => {
    addItem({
      id: plant.id,
      slug: plant.id,
      name: plant.name,
      description: plant.description,
      shortDescription: plant.tagline,
      price: plant.price,
      comparePrice: plant.originalPrice,
      currency: "USD",
      stock: 15,
      sku: `VAN-${plant.id.toUpperCase()}`,
      category: "indoor",
      tags: ["indoor", "featured"],
      images: [{ id: "1", url: plant.image, alt: plant.name, isPrimary: true }],
      lightRequirement: "medium",
      careLevel: "easy",
      waterFrequency: "weekly",
      petFriendly: true,
      airPurifying: true,
      rating: 4.9,
      reviewCount: 128,
      isFeatured: true,
      isNew: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    toast.success(`🌿 Added ${plant.name} to cart!`, {
      style: {
        background: "#09281e",
        color: "#4ade80",
        border: "1px solid #166534",
      },
    });
  };

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-[#041911] via-[#08261c] to-[#04160f] text-white overflow-hidden flex flex-col justify-between pt-16 pb-8">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-5%] right-[12%] w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[380px] h-[380px] bg-emerald-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-6xl relative z-10 flex-1 flex flex-col justify-center my-auto">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pt-2 pb-4">
          {/* Left Column: Headline & Info */}
          <div className="lg:col-span-6 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.95, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0d3326]/90 border border-emerald-500/30 text-[#86efac] text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md shadow-sm"
            >
              <Leaf className="w-3 h-3 text-[#4ade80]" />
              <span>INDOOR PLANTS</span>
            </motion.div>

            <motion.div
              key={activePlant.id + "-heading"}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="space-y-0.5"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-serif font-normal text-white tracking-tight leading-[1.15]">
                Bring Nature
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-sans font-bold text-[#86efac] tracking-tight leading-[1.1]">
                Plant Shop
              </h1>
            </motion.div>

            <motion.p
              key={activePlant.id + "-desc"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-emerald-100/70 text-xs sm:text-sm md:text-[15px] max-w-md leading-relaxed font-light"
            >
              {activePlant.description}
            </motion.p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => handleAddToCart(activePlant)}
                className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#4ade80] hover:bg-[#34d399] text-[#062419] font-bold text-xs sm:text-sm transition-all duration-300 shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:shadow-[0_0_30px_rgba(74,222,128,0.45)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <ShoppingBag className="w-3.5 h-3.5 transition-transform group-hover:rotate-[-8deg]" />
                <span>Add to Cart</span>
              </button>

              <Link
                href="/shop"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#103528]/60 hover:bg-[#154233] border border-emerald-500/25 text-emerald-100 hover:text-white font-medium text-xs sm:text-sm backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
              </Link>
            </div>
          </div>

          {/* Right Column: Hanging Plant Visual with Orbit Rings */}
          <div className="lg:col-span-6 flex justify-center items-center relative min-h-[340px] lg:min-h-[400px]">
            {/* Orbital Rings Graphics */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Outer Ring */}
              <div className="w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.06)] relative animate-[spin_60s_linear_infinite]">
                {/* Orbital Node 1 */}
                <div className="absolute top-[8%] left-[12%] w-6 h-6 rounded-full bg-[#0a2f23] border border-emerald-400/40 flex items-center justify-center shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                {/* Orbital Node 2 */}
                <div className="absolute top-[12%] right-[10%] w-6 h-6 rounded-full bg-[#0a2f23] border border-emerald-400/40 flex items-center justify-center shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-emerald-300" />
                </div>
                {/* Orbital Node 3 */}
                <div className="absolute bottom-[18%] right-[15%] w-5 h-5 rounded-full bg-[#0a2f23] border border-emerald-400/30 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                </div>
              </div>

              {/* Inner Ring */}
              <div className="w-[230px] h-[230px] sm:w-[290px] sm:h-[290px] rounded-full border border-emerald-500/15" />
            </div>

            {/* Main Featured Hanging Plant */}
            <motion.div
              key={activePlant.id}
              initial={{ scale: 0.92, opacity: 0, y: -8 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative z-10 w-[240px] h-[290px] sm:w-[300px] sm:h-[360px] flex items-center justify-center group"
            >
              {/* Subtle Hanging Cord / Hook at top */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-3.5 h-10 border-l-2 border-r-2 border-emerald-100/40 rounded-b-sm z-0 pointer-events-none opacity-80" />

              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.4)] border border-emerald-500/20 bg-gradient-to-b from-[#0d362a]/60 to-[#061f16]/90 backdrop-blur-sm group-hover:border-emerald-400/40 transition-all duration-500">
                <Image
                  src={activePlant.image}
                  alt={activePlant.name}
                  fill
                  priority
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Price Tag */}
                <div className="absolute top-3 right-3 bg-[#0a2b20]/90 backdrop-blur-md border border-emerald-500/30 rounded-xl px-2.5 py-1 shadow-lg flex items-center gap-1.5">
                  <span className="text-[#4ade80] font-bold text-xs">
                    ${activePlant.price.toFixed(2)}
                  </span>
                  <span className="text-emerald-300/50 line-through text-[10px]">
                    ${activePlant.originalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar: Diagnostic Widget (Left) + Plant Selector Cards (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end pt-3 border-t border-emerald-500/10">
          {/* Bottom Left: Initial Diagnosis Card */}
          <div className="lg:col-span-4">
            <div className="bg-[#0a291f]/85 backdrop-blur-xl border border-emerald-500/25 rounded-xl p-3 shadow-xl flex items-center gap-3 hover:border-emerald-400/40 transition-all">
              {/* Plant Thumbnail */}
              <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-emerald-500/20 bg-[#061d15]">
                <Image
                  src="/images/plants/peace_lily.jpg"
                  alt="Diagnosis Plant"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Metrics & Action */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-[11px] font-semibold text-emerald-100 tracking-wide">
                    Initial Diagnosis
                  </h4>
                  <span className="text-[9px] px-1 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                    Optimal
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[11px] mb-1.5">
                  <div className="flex items-center gap-1 text-emerald-200">
                    <Droplets className="w-3 h-3 text-cyan-400" />
                    <span className="font-bold">{activePlant.waterMetric}%</span>
                    <span className="text-emerald-400/60 text-[9px]">Water</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-200">
                    <Sun className="w-3 h-3 text-amber-400" />
                    <span className="font-bold">{activePlant.lightMetric}%</span>
                    <span className="text-emerald-400/60 text-[9px]">Light</span>
                  </div>
                </div>

                <button
                  onClick={() => setShowDiagnosisModal(true)}
                  className="w-full text-center py-1 px-2.5 rounded-full bg-[#4ade80] hover:bg-[#34d399] text-[#062419] text-[10.5px] font-bold transition-all shadow-sm active:scale-95"
                >
                  Click Here
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Right: Mini Plant Selector Cards Carousel */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {plantCollection.slice(1, 4).map((plant) => {
                const isSelected = activePlant.id === plant.id;
                return (
                  <motion.div
                    key={plant.id}
                    whileHover={{ y: -2 }}
                    onClick={() => setActivePlant(plant)}
                    className={`cursor-pointer rounded-xl p-2.5 transition-all duration-300 backdrop-blur-xl flex items-center gap-2.5 border ${
                      isSelected
                        ? "bg-[#11382b] border-[#4ade80] shadow-[0_0_15px_rgba(74,222,128,0.18)]"
                        : "bg-[#09251c]/80 border-emerald-500/20 hover:border-emerald-500/40 hover:bg-[#0d2f23]"
                    }`}
                  >
                    {/* Plant Thumbnail */}
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-emerald-500/20 bg-[#051a13]">
                      <Image
                        src={plant.image}
                        alt={plant.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-semibold text-white truncate">
                          {plant.name}
                        </h4>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-ping" />
                        )}
                      </div>
                      <p className="text-[10px] text-emerald-200/60 line-clamp-1 mt-0.5 font-light">
                        {plant.description}
                      </p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[11px] font-bold text-[#4ade80]">
                          ${plant.price.toFixed(2)}
                        </span>
                        <span className="text-[9px] text-emerald-400/50 line-through">
                          ${plant.originalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Diagnosis Modal */}
      <AnimatePresence>
        {showDiagnosisModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-sm bg-[#08261c] border border-emerald-500/40 rounded-2xl p-5 text-white shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#4ade80]" />
                  <h3 className="text-base font-bold">Botanical Health Report</h3>
                </div>
                <button
                  onClick={() => setShowDiagnosisModal(false)}
                  className="w-7 h-7 rounded-full bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-500/30 flex items-center justify-center text-xs"
                >
                  ✕
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-emerald-500/30">
                  <Image
                    src={activePlant.image}
                    alt={activePlant.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-emerald-100">{activePlant.name}</h4>
                  <p className="text-[11px] text-emerald-300/70">{activePlant.category}</p>
                  <div className="inline-flex items-center gap-1 px-1.5 py-0.5 mt-1 rounded bg-emerald-500/20 text-[#4ade80] text-[10px]">
                    <Check className="w-2.5 h-2.5" /> Excellent Condition
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="bg-[#051a13] border border-emerald-500/20 rounded-xl p-2.5">
                  <div className="flex items-center gap-1 text-[10px] text-cyan-400 mb-0.5">
                    <Droplets className="w-3 h-3" /> Moisture Level
                  </div>
                  <div className="text-base font-bold">{activePlant.waterMetric}%</div>
                  <div className="text-[9px] text-emerald-400/60">Water every 7 days</div>
                </div>

                <div className="bg-[#051a13] border border-emerald-500/20 rounded-xl p-2.5">
                  <div className="flex items-center gap-1 text-[10px] text-amber-400 mb-0.5">
                    <Sun className="w-3 h-3" /> Sunlight Index
                  </div>
                  <div className="text-base font-bold">{activePlant.lightMetric}%</div>
                  <div className="text-[9px] text-emerald-400/60">Bright indirect light</div>
                </div>

                <div className="bg-[#051a13] border border-emerald-500/20 rounded-xl p-2.5">
                  <div className="text-[10px] text-emerald-300 mb-0.5">Humidity</div>
                  <div className="text-base font-bold">{activePlant.humidity}</div>
                  <div className="text-[9px] text-emerald-400/60">Mist 2x weekly</div>
                </div>

                <div className="bg-[#051a13] border border-emerald-500/20 rounded-xl p-2.5">
                  <div className="text-[10px] text-emerald-300 mb-0.5">Ideal Temp</div>
                  <div className="text-base font-bold">{activePlant.temp}</div>
                  <div className="text-[9px] text-emerald-400/60">Room temperature</div>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowDiagnosisModal(false);
                  handleAddToCart(activePlant);
                }}
                className="w-full py-2.5 rounded-full bg-[#4ade80] hover:bg-[#34d399] text-[#062419] font-bold text-xs transition-all shadow-md"
              >
                Order This Plant Now (${activePlant.price.toFixed(2)})
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
