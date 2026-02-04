import { DUMMY_NEWS } from "$/dummy-news";
import NewstList from "$/src/components/news-list";

export default async function NewsPage() {
  return (
    <main>
      <h1>Hello this is NewsPage</h1>
      <NewstList news={DUMMY_NEWS} />
    </main>
  );
}
