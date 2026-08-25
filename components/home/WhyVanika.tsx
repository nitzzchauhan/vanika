const perks = [
  { icon: "🚚", title: "Free Delivery", description: "On all orders above ₹499. Fresh plants delivered to your door." },
  { icon: "🌱", title: "Healthy Guarantee", description: "All plants are inspected and guaranteed to arrive healthy." },
  { icon: "📖", title: "Expert Care Guides", description: "Every plant comes with a detailed care guide by our botanists." },
  { icon: "♻️", title: "Eco Packaging", description: "We use 100% biodegradable and eco-friendly packaging." },
  { icon: "⭐", title: "Trusted by 10,000+", description: "Join thousands of happy plant parents across India." },
  { icon: "🔄", title: "Easy Returns", description: "Not happy? Return within 7 days for a full refund." },
];

export function WhyVanika() {
  return (
    <section className="bg-brand-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold mb-3">Why Choose Vanika?</h2>
          <p className="text-muted-foreground text-lg">We do things differently — and plants love us for it</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {perks.map((perk) => (
            <div key={perk.title} className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl shrink-0">{perk.icon}</span>
              <div>
                <h3 className="font-semibold text-lg mb-1">{perk.title}</h3>
                <p className="text-muted-foreground text-sm">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
