import NewstList from "$components/news-list";
import { getLatestNews } from "$lib/news";

export default function LatestNewsPage() {
  const latestNews = getLatestNews();
  return (
    <main>
      <h1>Latest News</h1>
      <NewstList news={latestNews} />
    </main>
  );
}
