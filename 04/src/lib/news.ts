import sql from "better-sqlite3";

import type { News } from "$/dummy-news";

const db = sql("data.db");

export async function getAllNews() {
  const news = db.prepare("SELECT * FROM news").all();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news as News;
}

export async function getNewsItem(slug: string) {
  const newsItem = db.prepare("SELECT * FROM news WHERE slug = ?").get(slug);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return newsItem as News[number] | undefined;
}

export async function getLatestNews() {
  const latestNews = db
    .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
    .all();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return latestNews as News;
}

export async function getAvailableNewsYears() {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all()
    .map((year: any) => year.year);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return years;
}

export function getAvailableNewsMonths(year: string) {
  return db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?",
    )
    .all(year)
    .map((month: any) => month.month);
}

export async function getNewsForYear(year: string) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC",
    )
    .all(year);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news as News;
}

export async function getNewsForYearAndMonth(year: string, month: string) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC",
    )
    .all(year, month);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news as News;
}
