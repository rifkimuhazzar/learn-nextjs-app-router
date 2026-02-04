import type { ReactNode } from "react";

import MainHeader from "$components/main-header";
import "$app/globals.css";

type Props = {
  children: ReactNode;
};

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function ContentLayout({ children }: Props) {
  return (
    <div id="page">
      <MainHeader />
      {children}
    </div>
  );
}
