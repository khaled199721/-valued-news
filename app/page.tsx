export const dynamic = "force-dynamic";
export const revalidate = 0;

import { getTopNews } from "@/lib/gnews";
import Link from "next/link";

export default async function Home() {
  const articles = await getTopNews();

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">

      {/* ===== HERO SECTION ===== */}
      {articles.length > 0 && (
        <section className="mb-10">
          <Link href={`/article/${encodeURIComponent(articles[0].url)}`}>
            <div className="cursor-pointer">
              {articles[0].image && (
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              )}
              <h1 className="text-3xl md:text-4xl font-bold mt-4">
                {articles[0].title}
              </h1>
              <p className="text-gray-600 mt-2">
                {articles[0].description}
              </p>
            </div>
          </Link>
        </section>
      )}

      {/* ===== GRID SECTION ===== */}
      <section className="grid md:grid-cols-3 gap-6">
        {articles.slice(1).map((article, index) => (
          <Link
            key={index}
            href={`/article/${encodeURIComponent(article.url)}`}
          >
            <div className="cursor-pointer border rounded-lg overflow-hidden hover:shadow-lg transition">
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="font-semibold text-lg">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  {article.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* ===== EMPTY STATE ===== */}
      {articles.length === 0 && (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold">
            No news available right now.
          </h2>
          <p className="text-gray-500 mt-2">
            Please check your GNews API key or try again later.
          </p>
        </div>
      )}

    </main>
  );
}
