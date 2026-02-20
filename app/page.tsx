Error occurred prerendering page "/". Read more: https://nextjs.org/docs/messages/prerender-error
Error: Failed to fetch news
    at c (.next/server/chunks/ssr/[root-of-the-server]__5f0b8324._.js:1:514)
    at async d (.next/server/chunks/ssr/[root-of-the-server]__5f0b8324._.js:1:601) {
  digest: '3699910793'
}
Export encountered an error on /page: /, exiting the build.
⨯ Next.js build worker exited with code: 1 and signal: null
Error: Command "npm run build" exited with 1
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
