import Link from "next/link";
import { notFound } from "next/navigation";
import type { News } from "$/dummy-news";
import NewstList from "$components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "$lib/news";

type Props = {
  params: Promise<{ filter: undefined | string[] }>;
};

export default async function FilteredNewsPage({ params }: Props) {
  const { filter } = await params;
  const year = filter?.[0];
  const month = filter?.[1];
  let links = getAvailableNewsYears();

  let news: News | undefined;
  if (
    (filter && filter.length > 2) ||
    (year && !getAvailableNewsYears().includes(+year)) ||
    (year && month && !getAvailableNewsMonths(year).includes(+month))
  ) {
    // notFound();
    throw new Error("Invalid filter.");
  } else if (year && !month) {
    news = getNewsForYear(year);
    links = getAvailableNewsMonths(year);
  } else if (year && month) {
    news = getNewsForYearAndMonth(year, month);
    links = [];
  }

  let newsContent = <p>No news found for seleted period.</p>;
  if (news && news.length > 0) {
    newsContent = <NewstList news={news} />;
  }

  return (
    <main>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = year
                ? `/archive/${year}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </main>
  );
}
