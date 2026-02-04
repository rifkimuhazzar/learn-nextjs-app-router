import type { Metadata } from "next";
import type { ReactNode } from "react";

import { logout } from "@/actions/auth-actions";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Next Auth",
  description: "Next.js Authentication",
};

type Props = { children: ReactNode };

export default function AuthRootLayout({ children }: Props) {
  return (
    <>
      <header id="auth-header">
        <p>Welcome back!</p>
        <form action={logout}>
          <button type="submit">Logout</button>
        </form>
      </header>
      {children}
    </>
  );
}
