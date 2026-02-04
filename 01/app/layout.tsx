import type { ReactNode } from "react";
import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
