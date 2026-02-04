import type { ReactNode } from "react";

import Header from "@/components/header";
import "./globals.css";

export const metadata = {
  title: "Next.js Caching",
  description: "Learn how Next.js caching works",
};

type Props = { children: ReactNode };

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
