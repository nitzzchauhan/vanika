import { Star, CheckCircle, Quote } from "lucide-react";

const reviews = [
  {
    name: "Aanya Sharma",
    location: "Bangalore",
    text: "The hanging pothos arrived so lush and healthy! The packaging was 100% plastic-free, and the moisture diagnosis card was super helpful.",
    plant: "Hanging Pothos",
    rating: 5,
  },
  {
    name: "Rohan Varma",
    location: "Mumbai",
    text: "My Anthurium is blooming nonstop for 3 months now. Vanika's care guide helped me find the perfect light corner in my apartment.",
    plant: "Anthurium Bloom",
    rating: 5,
  },
  {
    name: "Priya Nair",
    location: "Delhi",
    text: "The rubber plant is gorgeous and architectural. Huge glossy leaves and arrived with zero transit shock. Best online plant experience ever.",
    plant: "Rubber Plant",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-[#051c14] py-24 text-white border-t border-emerald-500/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#4ade80] mb-2 block">
            Customer Love
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Happy Plant Parents 💚
          </h2>
          <p className="text-emerald-100/70 text-base font-light">
            Real stories from homes transformed with green botanical energy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="relative rounded-3xl bg-[#092b20]/70 border border-emerald-500/20 p-8 flex flex-col justify-between hover:border-emerald-400/40 transition-all"
            >
              <Quote className="w-8 h-8 text-emerald-400/20 mb-4" />

              <p className="text-emerald-100/80 text-sm leading-relaxed mb-6 font-light">
                "{review.text}"
              </p>

              <div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-emerald-500/15 pt-3">
                  <div>
                    <h4 className="font-bold text-sm text-white">{review.name}</h4>
                    <p className="text-xs text-emerald-400/60">{review.location}</p>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-500/15 text-[#4ade80] font-medium">
                    {review.plant}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
