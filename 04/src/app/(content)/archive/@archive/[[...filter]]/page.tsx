import Link from "next/link";
import { Suspense } from "react";

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

type FilteredHeaderProps = FilteredNewsProps & { filter: string[] | undefined };

type FilteredNewsProps = {
  year: string | undefined;
  month: string | undefined;
};

async function FilteredHeader({ year, month, filter }: FilteredHeaderProps) {
  let links = await getAvailableNewsYears();

  if (
    (filter && filter.length > 2) ||
    (year && !(await getAvailableNewsYears()).includes(year)) ||
    (year && month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error("Invalid filter.");
  } else if (year && !month) {
    links = getAvailableNewsMonths(year);
  } else if (year && month) {
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function FilteredNews({ year, month }: FilteredNewsProps) {
  let news: News | undefined;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for seleted period.</p>;
  if (news && news.length > 0) {
    newsContent = <NewstList news={news} />;
  }

  return newsContent;
}

export default async function FilteredNewsPage({ params }: Props) {
  const { filter } = await params;
  const year = filter?.[0];
  const month = filter?.[1];

  return (
    <main>
      <Suspense fallback={<p>Loading news 2...</p>}>
        <FilteredHeader year={year} month={month} filter={filter} />
      </Suspense>

      <Suspense fallback={<p>Loading news 3...</p>}>
        <FilteredNews year={year} month={month} />
      </Suspense>
    </main>
  );
}
