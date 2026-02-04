// "use client";

// import { useEffect, useState } from "react";

import NewstList from "$/src/components/news-list";
import { getAllNews } from "$lib/news";

// Client-side component
// export default function NewsPage() {
//   const [error, setError] = useState<string>();
//   const [news, setNews] = useState<News>();
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     async function fetchNews() {
//       const result = await fetch("http://localhost:8080/news");
//       if (!result.ok) {
//         setError("Failed to fetch news.");
//         setIsLoading(false);
//         return;
//       }

//       const newsResult: News = await result.json();
//       setNews(newsResult);
//       setIsLoading(false);
//     }

//     fetchNews();
//   }, []);

//   return (
//     <main>
//       <h1>News Page</h1>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       {news && <NewstList news={news} />}
//     </main>
//   );
// }

// Server-side with external backend
// export default async function NewsPage() {
//   const response = await fetch("http://localhost:8080/news");
//   if (!response.ok) throw new Error("Failed to fetch news.");
//   const news: News = await response.json();

//   return (
//     <main>
//       <h1>News Page</h1>
//       <NewstList news={news} />
//     </main>
//   );
// }

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <main>
      <h1>News Page</h1>
      <NewstList news={news} />
    </main>
  );
}
