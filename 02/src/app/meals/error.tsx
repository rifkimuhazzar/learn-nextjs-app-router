"use client";

export default function MealsError({ error }: any) {
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>Failed to fetch meal data. Please try again later.</p>
      <p>{JSON.stringify(error)}</p>
    </main>
  );
}
