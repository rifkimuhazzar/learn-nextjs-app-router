import Header from "@/components/header";
import "./globals.css";

export const metadata = {
  title: "NextPosts",
  description: "Browse and share amazing posts.",
};

type Props = {
  children: React.ReactNode;
};

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
