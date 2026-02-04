"use client";

type Props = {
  error: Error;
};

export default function ErrorPage({ error }: Props) {
  return (
    <main id="error">
      <h1>{error.message}</h1>
    </main>
  );
}
