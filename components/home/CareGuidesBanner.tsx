import Link from "next/link";
import { Sparkles, ArrowRight, ShieldAlert, HeartPulse } from "lucide-react";

export function CareGuidesBanner() {
  return (
    <section className="bg-[#04160f] py-16 text-white border-t border-emerald-500/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0c3628] via-[#092b20] to-[#061d15] border border-emerald-500/30 p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* Background decoration */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-[#4ade80] text-xs font-semibold">
              <HeartPulse className="w-3.5 h-3.5" />
              <span>Plant Hospital & Care System</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              New to Plant Parenthood? <br />
              <span className="text-[#4ade80]">We've Got Your Back.</span>
            </h2>

            <p className="text-emerald-100/70 text-base sm:text-lg font-light leading-relaxed">
              Explore 100+ botanist-written guides covering light requirements, watering schedules, pest prevention, and repotting tutorials.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/care-guides"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#4ade80] hover:bg-[#34d399] text-[#062419] font-bold text-sm sm:text-base transition-all shadow-lg hover:scale-105"
              >
                <span>Browse Free Care Guides</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
