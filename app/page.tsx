export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* Navigation */}
      <nav className="w-full border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="text-2xl font-extrabold tracking-[0.2em]">
            VALUED
          </div>

          <div className="space-x-12 text-sm font-medium tracking-widest uppercase">
            <a className="hover:opacity-60 transition">News</a>
            <a className="hover:opacity-60 transition">Releases</a>
            <a className="hover:opacity-60 transition">Culture</a>
            <a className="hover:opacity-60 transition">About</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="max-w-4xl">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-6">
            Independent Sneaker Authority
          </p>

          <h1 className="text-8xl font-black leading-[0.95] tracking-tight mb-8">
            VALUED NEWS
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            A premium digital publication covering sneaker culture,
            streetwear innovation, and the evolving intersection of fashion and identity.
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-20 items-center">
          
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
              Featured Story
            </p>

            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Nike Unveils the Future of Air Jordan Design
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              A new era of performance engineering meets heritage storytelling.
              This launch sets a new benchmark for sneaker innovation in 2026.
            </p>
          </div>

          <div className="h-[400px] bg-gray-100 rounded-3xl"></div>

        </div>
      </section>

      {/* Article Grid */}
      <section className="max-w-7xl mx-auto px-8 py-28">
        <div className="grid md:grid-cols-3 gap-16">

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Adidas Reinvents Sustainability
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A deeper commitment to eco-forward materials reshaping performance footwear.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              The Rise of Independent Street Labels
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Underground brands capturing global attention through authenticity.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Inside the Sneaker Resale Economy
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Data, scarcity, and digital marketplaces redefining sneaker value.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}