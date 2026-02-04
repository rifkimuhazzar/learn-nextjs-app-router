import NewstList from "$components/news-list";
import { getLatestNews } from "$lib/news";

export default async function LatestNewsPage() {
  const latestNews = await getLatestNews();
  return (
    <main>
      <h1>Latest News</h1>
      <NewstList news={latestNews} />
    </main>
  );
}
