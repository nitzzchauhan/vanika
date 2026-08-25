"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ArrowRight, Droplets, Sun, Sparkles, Check, Heart, Leaf } from "lucide-react";
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
    toast.success(`🌿 Added ${plant.name} to your cart!`, {
      style: {
        background: "#09281e",
        color: "#4ade80",
        border: "1px solid #166534",
      },
    });
  };

  return (
    <section className="relative min-h-[92vh] w-full bg-gradient-to-b from-[#051c14] via-[#09281e] to-[#041710] text-white overflow-hidden flex flex-col justify-between pt-6 pb-12">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] right-[10%] w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 flex-1 flex flex-col justify-center">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 pb-8">
          {/* Left Column: Headline & Info */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 0.95, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d3326]/90 border border-emerald-500/30 text-[#86efac] text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-sm"
            >
              <Leaf className="w-3.5 h-3.5 text-[#4ade80]" />
              <span>INDOOR PLANTS</span>
            </motion.div>

            <motion.div
              key={activePlant.id + "-heading"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-1"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-white tracking-tight leading-tight">
                Bring Nature <br />
                <span className="font-sans font-bold text-[#86efac]">Plant Shop</span>
              </h2>
            </motion.div>

            <motion.p
              key={activePlant.id + "-desc"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-emerald-100/70 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-light"
            >
              {activePlant.description}
            </motion.p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => handleAddToCart(activePlant)}
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#4ade80] hover:bg-[#34d399] text-[#062419] font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_0_25px_rgba(74,222,128,0.35)] hover:shadow-[0_0_35px_rgba(74,222,128,0.55)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <ShoppingBag className="w-4 h-4 transition-transform group-hover:rotate-[-8deg]" />
                <span>Add to Cart</span>
              </button>

              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#123a2d]/60 hover:bg-[#184838] border border-emerald-500/25 text-emerald-100 hover:text-white font-medium text-sm sm:text-base backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </Link>
            </div>
          </div>

          {/* Right Column: Hanging Plant Visual with Orbit Rings */}
          <div className="lg:col-span-6 flex justify-center items-center relative min-h-[420px] lg:min-h-[500px]">
            {/* Orbital Rings Graphics */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Outer Ring */}
              <div className="w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] rounded-full border border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.08)] relative animate-[spin_60s_linear_infinite]">
                {/* Orbital Node 1 */}
                <div className="absolute top-[8%] left-[12%] w-7 h-7 rounded-full bg-[#0a2f23] border border-emerald-400/40 flex items-center justify-center shadow-lg">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                {/* Orbital Node 2 */}
                <div className="absolute top-[12%] right-[10%] w-7 h-7 rounded-full bg-[#0a2f23] border border-emerald-400/40 flex items-center justify-center shadow-lg">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
                </div>
                {/* Orbital Node 3 */}
                <div className="absolute bottom-[18%] right-[15%] w-6 h-6 rounded-full bg-[#0a2f23] border border-emerald-400/30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-400/80" />
                </div>
              </div>

              {/* Inner Ring */}
              <div className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-emerald-500/15" />
            </div>

            {/* Main Featured Hanging Plant */}
            <motion.div
              key={activePlant.id}
              initial={{ scale: 0.9, opacity: 0, y: -10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative z-10 w-[300px] h-[360px] sm:w-[380px] sm:h-[460px] flex items-center justify-center group"
            >
              {/* Subtle Hanging Cord / Hook at top */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-4 h-14 border-l-2 border-r-2 border-emerald-100/40 rounded-b-md z-0 pointer-events-none opacity-80" />

              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.45)] border border-emerald-500/20 bg-gradient-to-b from-[#0e3b2e]/60 to-[#07241a]/90 backdrop-blur-sm group-hover:border-emerald-400/40 transition-all duration-500">
                <Image
                  src={activePlant.image}
                  alt={activePlant.name}
                  fill
                  priority
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Price Tag */}
                <div className="absolute top-4 right-4 bg-[#0a2b20]/90 backdrop-blur-md border border-emerald-500/30 rounded-2xl px-3.5 py-1.5 shadow-lg flex items-center gap-1.5">
                  <span className="text-[#4ade80] font-bold text-sm">
                    ${activePlant.price.toFixed(2)}
                  </span>
                  <span className="text-emerald-300/50 line-through text-xs">
                    ${activePlant.originalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar: Diagnostic Widget (Left) + Plant Selector Cards (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pt-4 border-t border-emerald-500/10">
          {/* Bottom Left: Initial Diagnosis Card */}
          <div className="lg:col-span-4">
            <div className="bg-[#0b2d22]/85 backdrop-blur-xl border border-emerald-500/25 rounded-2xl p-4 shadow-xl flex items-center gap-4 hover:border-emerald-400/40 transition-all">
              {/* Plant Thumbnail */}
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-emerald-500/20 bg-[#072118]">
                <Image
                  src="/images/plants/peace_lily.jpg"
                  alt="Diagnosis Plant"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Metrics & Action */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-xs font-semibold text-emerald-100 tracking-wide">
                    Initial Diagnosis
                  </h4>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                    Optimal
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs mb-2">
                  <div className="flex items-center gap-1 text-emerald-200">
                    <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="font-bold">{activePlant.waterMetric}%</span>
                    <span className="text-emerald-400/60 text-[10px]">Water</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-200">
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span className="font-bold">{activePlant.lightMetric}%</span>
                    <span className="text-emerald-400/60 text-[10px]">Light</span>
                  </div>
                </div>

                <button
                  onClick={() => setShowDiagnosisModal(true)}
                  className="w-full text-center py-1 px-3 rounded-full bg-[#4ade80] hover:bg-[#34d399] text-[#062419] text-xs font-bold transition-all shadow-sm active:scale-95"
                >
                  Click Here
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Right: Mini Plant Selector Cards Carousel */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {plantCollection.slice(1, 4).map((plant) => {
                const isSelected = activePlant.id === plant.id;
                return (
                  <motion.div
                    key={plant.id}
                    whileHover={{ y: -3 }}
                    onClick={() => setActivePlant(plant)}
                    className={`cursor-pointer rounded-2xl p-3.5 transition-all duration-300 backdrop-blur-xl flex items-center gap-3 border ${
                      isSelected
                        ? "bg-[#133e30] border-[#4ade80] shadow-[0_0_20px_rgba(74,222,128,0.2)]"
                        : "bg-[#0a281e]/80 border-emerald-500/20 hover:border-emerald-500/40 hover:bg-[#0f3427]"
                    }`}
                  >
                    {/* Plant Thumbnail */}
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-emerald-500/20 bg-[#061d15]">
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
                        <h4 className="text-sm font-semibold text-white truncate">
                          {plant.name}
                        </h4>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-ping" />
                        )}
                      </div>
                      <p className="text-[11px] text-emerald-200/60 line-clamp-1 mt-0.5 font-light">
                        {plant.description}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-bold text-[#4ade80]">
                          ${plant.price.toFixed(2)}
                        </span>
                        <span className="text-[10px] text-emerald-400/50 line-through">
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
              className="relative w-full max-w-md bg-[#092b20] border border-emerald-500/40 rounded-3xl p-6 text-white shadow-2xl space-y-5"
            >
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#4ade80]" />
                  <h3 className="text-lg font-bold">Botanical Health Report</h3>
                </div>
                <button
                  onClick={() => setShowDiagnosisModal(false)}
                  className="w-8 h-8 rounded-full bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-500/30 flex items-center justify-center text-sm"
                >
                  ✕
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-emerald-500/30">
                  <Image
                    src={activePlant.image}
                    alt={activePlant.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-base text-emerald-100">{activePlant.name}</h4>
                  <p className="text-xs text-emerald-300/70">{activePlant.category}</p>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 mt-1.5 rounded bg-emerald-500/20 text-[#4ade80] text-xs">
                    <Check className="w-3 h-3" /> Excellent Condition
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-[#051c14] border border-emerald-500/20 rounded-2xl p-3">
                  <div className="flex items-center gap-1.5 text-xs text-cyan-400 mb-1">
                    <Droplets className="w-3.5 h-3.5" /> Moisture Level
                  </div>
                  <div className="text-xl font-bold">{activePlant.waterMetric}%</div>
                  <div className="text-[10px] text-emerald-400/60">Water every 7 days</div>
                </div>

                <div className="bg-[#051c14] border border-emerald-500/20 rounded-2xl p-3">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 mb-1">
                    <Sun className="w-3.5 h-3.5" /> Sunlight Index
                  </div>
                  <div className="text-xl font-bold">{activePlant.lightMetric}%</div>
                  <div className="text-[10px] text-emerald-400/60">Bright indirect light</div>
                </div>

                <div className="bg-[#051c14] border border-emerald-500/20 rounded-2xl p-3">
                  <div className="text-xs text-emerald-300 mb-1">Humidity</div>
                  <div className="text-xl font-bold">{activePlant.humidity}</div>
                  <div className="text-[10px] text-emerald-400/60">Mist 2x weekly</div>
                </div>

                <div className="bg-[#051c14] border border-emerald-500/20 rounded-2xl p-3">
                  <div className="text-xs text-emerald-300 mb-1">Ideal Temp</div>
                  <div className="text-xl font-bold">{activePlant.temp}</div>
                  <div className="text-[10px] text-emerald-400/60">Room temperature</div>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowDiagnosisModal(false);
                  handleAddToCart(activePlant);
                }}
                className="w-full py-3 rounded-full bg-[#4ade80] hover:bg-[#34d399] text-[#062419] font-bold text-sm transition-all shadow-lg"
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
