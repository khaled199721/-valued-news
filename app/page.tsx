export const revalidate = 3600;

const categories = [
  "general",
  "business",
  "technology",
  "sports",
  "health",
  "entertainment",
  "science",
];

async function getNews(category: string) {
  try {
    const res = await fetch(
      `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=12&apikey=${process.env.GNEWS_API_KEY}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return [];

    const data = await res.json();
    return data.articles || [];
  } catch {
    return [];
  }
}

export default async function Home({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const selectedCategory =
    categories.includes(searchParams?.category || "")
      ? searchParams?.category!
      : "general";

  const articles = await getNews(selectedCategory);

  return (
    <main className="min-h-screen bg-white text-black">

      {/* Header */}
      <header className="border-b py-8 text-center">
        <h1 className="text-5xl font-bold">VALUED NEWS</h1>
        <p className="text-gray-500 mt-2">
          Breaking Headlines • Updated Hourly
        </p>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center gap-4 py-6 border-b flex-wrap">
        {categories.map((cat) => (
          <a
            key={cat}
            href={`/?category=${cat}`}
            className={`capitalize px-4 py-2 rounded transition ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "hover:bg-gray-200"
            }`}
          >
            {cat}
          </a>
        ))}
      </nav>

      {/* Articles */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        {articles.length === 0 ? (
          <div className="col-span-3 text-center">
            <h2 className="text-xl">No articles available.</h2>
          </div>
        ) : (
          articles.map((article: any, index: number) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="font-semibold mb-3">
                  {article.title}
                </h3>
                <a
                  href={article.url}
                  target="_blank"
                  className="text-red-600 text-sm"
                >
                  Read Full Story →
                </a>
              </div>
            </div>
          ))
        )}
      </section>

      <footer className="bg-neutral-950 text-gray-300 mt-24">
  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid md:grid-cols-4 gap-12">

      {/* Brand */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">
          Valuted Kicks
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          Professional Meeting Cost Calculator helping businesses
          estimate the real financial impact of meetings instantly.
        </p>
      </div>

      {/* Product */}
      <div>
        <h4 className="text-white font-semibold mb-4">Product</h4>
        <ul className="space-y-3 text-sm">
          <li>
            <a href="/" className="hover:text-white transition">
              Meeting Calculator
            </a>
          </li>
          <li>
            <a href="/#how-it-works" className="hover:text-white transition">
              How It Works
            </a>
          </li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="text-white font-semibold mb-4">Company</h4>
        <ul className="space-y-3 text-sm">
          <li>
            <a href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="hover:text-white transition">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Legal */}
      <div>
        <h4 className="text-white font-semibold mb-4">Legal</h4>
        <p className="text-sm text-gray-400 leading-relaxed">
          This tool provides cost estimations for informational
          purposes only. Results may vary depending on real-world
          conditions and compensation structures.
        </p>
      </div>

    </div>

    <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-sm text-gray-500">
      <p>
        Powered by <span className="text-white font-semibold">Valuted Kicks</span>
      </p>
      <p className="mt-2">
        © 2026 Valuted Kicks. All rights reserved.
      </p>
    </div>

  </div>
</footer>
    </main>
  );
}
