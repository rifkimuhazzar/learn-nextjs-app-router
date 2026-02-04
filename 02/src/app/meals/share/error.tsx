"use client";

export default function MealsError({ error }: any) {
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>Failed to create meal.</p>
    </main>
  );
}
