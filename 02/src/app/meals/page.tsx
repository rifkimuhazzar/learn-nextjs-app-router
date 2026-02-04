import Link from "next/link";
import { Suspense } from "react";

import MealsGrid from "$components/meals/meals-grid";
import { getMeals } from "$lib/meals";
import styles from "./page.module.css";

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant community",
};

async function Meals() {
  console.log("xxxxxxxxxxxxxxxxxxx MEALS xxxxxxxxxxxxxxxxxxx");
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  console.log("xxxxxxxxxxxxxxxxxxx MEALS PAGE xxxxxxxxxxxxxxxxxxx");
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meal created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={<p className={styles.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
