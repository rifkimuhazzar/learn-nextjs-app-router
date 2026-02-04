import type { ReactNode } from "react";

import "$app/globals.css";

type Props = {
  children: ReactNode;
};

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function MarketingLayout({ children }: Props) {
  return <main>{children}</main>;
}
