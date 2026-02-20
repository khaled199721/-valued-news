export const revalidate = 3600;

async function getNews(category: string) {
  const res = await fetch(
    `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=12&apikey=${process.env.GNEWS_API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  const data = await res.json();
  return data.articles;
}

export default async function Home({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const category = searchParams?.category || "general";
  const articles = await getNews(category);

  const featured = articles[0];
  const sideNews = articles.slice(1, 5);
  const gridNews = articles.slice(5, 12);

  return (
    <main className="bg-white text-black min-h-screen">

      {/* TOP BAR */}
      <div className="bg-black text-white text-center py-2 text-sm tracking-wide">
        BREAKING NEWS • Updated Hourly
      </div>

      {/* HEADER */}
      <header className="border-b py-8 text-center">
        <h1 className="text-6xl font-extrabold tracking-tight">
          VALUED NEWS
        </h1>
        <p className="text-gray-500 mt-3">
          Global Headlines • Trusted Coverage
        </p>
      </header>

      {/* CATEGORY NAV */}
      <nav className="flex justify-center gap-6 py-6 border-b flex-wrap text-sm">
        {["general","business","technology","sports","health","entertainment"].map((cat) => (
          <a
            key={cat}
            href={`/?category=${cat}`}
            className={`capitalize px-4 py-2 rounded transition ${
              category === cat
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {cat}
          </a>
        ))}
      </nav>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* FEATURED */}
        <div className="md:col-span-2">
          {featured?.image && (
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-[450px] object-cover mb-6"
            />
          )}

          <h2 className="text-4xl font-bold mb-4 leading-tight">
            {featured.title}
          </h2>

          <p className="text-gray-600 mb-6">
            {featured.description}
          </p>

          <a
            href={featured.url}
            target="_blank"
            className="text-red-600 font-semibold"
          >
            Read Full Story →
          </a>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-8 border-l pl-8">
          {sideNews.map((article: any, index: number) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-2 leading-snug">
                {article.title}
              </h3>
              <a
                href={article.url}
                target="_blank"
                className="text-sm text-red-600"
              >
                Read →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* MORE NEWS GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-8 border-b pb-3">
          More Headlines
        </h2>

        <div className="grid md:grid-cols-4 gap-10">
          {gridNews.map((article: any, index: number) => (
            <div key={index}>
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-40 object-cover mb-3"
                />
              )}

              <h4 className="font-semibold text-sm mb-2 leading-snug">
                {article.title}
              </h4>

              <a
                href={article.url}
                target="_blank"
                className="text-xs text-red-600"
              >
                Read →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* PROFESSIONAL FOOTER */}
      <footer className="bg-neutral-950 text-gray-300 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid md:grid-cols-4 gap-12">

            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                VALUED NEWS
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Independent digital newsroom delivering global headlines
                updated hourly.
              </p>
            </div>

            {/* Sections */}
            <div>
              <h4 className="text-white font-semibold mb-4">Sections</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/?category=general" className="hover:text-white">General</a></li>
                <li><a href="/?category=business" className="hover:text-white">Business</a></li>
                <li><a href="/?category=technology" className="hover:text-white">Technology</a></li>
                <li><a href="/?category=sports" className="hover:text-white">Sports</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal Notice</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Content aggregated from third-party news providers.
              </p>
            </div>

          </div>

          <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-sm text-gray-500">
            <p>
              Powered by <span className="text-white font-semibold">Valued News</span>
            </p>
            <p className="mt-2">
              © 2026 Valued News. All rights reserved.
            </p>
          </div>

        </div>
      </footer>

    </main>
  );
}
