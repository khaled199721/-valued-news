import { getTopNews } from "@/lib/gnews";
import Link from "next/link";

export default async function Home() {
  const articles = await getTopNews("general");

  const hero = articles[0];
  const rest = articles.slice(1);

  return (
    <main className="container">
      {/* HERO SECTION */}
      {hero && (
        <Link
          href={`/article/${encodeURIComponent(hero.title)}`}
          className="hero"
        >
          {hero.image && <img src={hero.image} alt={hero.title} />}
          <div className="hero-text">
            <h1>{hero.title}</h1>
            <p>{hero.description}</p>
          </div>
        </Link>
      )}

      {/* AD */}
      <div className="ad-banner">Advertisement</div>

      {/* GRID */}
      <div className="grid">
        {rest.map((article: any, index: number) => (
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
