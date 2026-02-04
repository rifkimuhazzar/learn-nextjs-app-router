import type { ReactNode } from "react";

type Props = {
  archive: ReactNode;
  latest: ReactNode;
};

export default function ArhiveLayout({ archive, latest }: Props) {
  return (
    <main>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </main>
  );
}
