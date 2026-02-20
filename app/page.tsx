export const revalidate = 3600;

async function getNews() {
  const res = await fetch(
    `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${process.env.GNEWS_API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  const data = await res.json();
  return data.articles;
}

export default async function Home() {
  const articles = await getNews();

  const featured = articles[0];
  const secondary = articles.slice(1, 5);
  const headlines = articles.slice(5, 10);

  return (
    <main className="min-h-screen bg-white text-black">

      {/* TOP BAR */}
      <div className="bg-black text-white text-center py-2 text-sm tracking-wide">
        BREAKING NEWS • Updated Hourly
      </div>

      {/* HEADER */}
      <header className="border-b py-8 text-center">
        <h1 className="text-6xl font-extrabold tracking-tight">
          VALUED NEWS
        </h1>
      </header>

      {/* MAIN SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* FEATURED ARTICLE */}
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

        {/* SIDEBAR HEADLINES */}
        <div className="space-y-6 border-l pl-6">
          {secondary.map((article: any, index: number) => (
            <div key={index} className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">
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
        <h2 className="text-2xl font-bold mb-8 border-b pb-2">
          MORE HEADLINES
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {headlines.map((article: any, index: number) => (
            <div key={index}>
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-40 object-cover mb-3"
                />
              )}

              <h4 className="font-semibold text-sm mb-2">
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

    </main>
  );
}