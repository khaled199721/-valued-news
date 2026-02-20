export async function getTopNews(category?: string) {
  const apiKey = process.env.GNEWS_API_KEY;

  const url = `https://gnews.io/api/v4/top-headlines?lang=en${
    category ? `&topic=${category}` : ""
  }&max=12&apikey=${apiKey}`;

  const res = await fetch(url, { next: { revalidate: 1800 } });

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  const data = await res.json();
  return data.articles || [];
}
