import { getTopNews } from "@/lib/gnews";
import Link from "next/link";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const articles = await getTopNews(slug);

  return (
    <main className="container">
      <h1 className="page-title">{slug.toUpperCase()} News</h1>

      <div className="grid">
        {articles?.map((article: any, index: number) => (
          <Link
            key={index}
            href={`/article/${encodeURIComponent(article.title)}`}
            className="card"
          >
            {article.image && (
              <img src={article.image} alt={article.title} />
            )}
            <h2>{article.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
