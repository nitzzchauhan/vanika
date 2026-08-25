export function Newsletter() {
  return (
    <section className="bg-brand-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-4xl font-bold mb-4">Get Plant Care Tips & Offers 🌿</h2>
        <p className="text-brand-200 text-lg mb-8">Subscribe and get 10% off your first order</p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-white text-brand-800 font-semibold hover:bg-brand-100 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
