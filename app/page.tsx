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

      {/* Footer */}
      <footer className="bg-black text-white py-12 text-center">
        <p>
          Powered by <span className="font-semibold">Valued News</span>
        </p>
        <p className="mt-2 text-sm text-gray-400">
          © 2026 Valued News. All rights reserved.
        </p>
      </footer>

    </main>
  );
}
