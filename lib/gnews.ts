const API_KEY = process.env.GNEWS_API_KEY;

export async function getTopNews() {
  if (!API_KEY) {
    console.error("Missing GNEWS_API_KEY");
    return [];
  }

  try {
    const res = await fetch(
      `https://gnews.io/api/v4/top-headlines?lang=en&max=10&token=${API_KEY}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.error("GNews error:", await res.text());
      return [];
    }

    const data = await res.json();
    return data.articles || [];
  } catch (error) {
    console.error("Fetch failed:", error);
    return [];
  }
}
