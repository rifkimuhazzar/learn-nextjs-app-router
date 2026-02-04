"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
};

export default function NavLink({ children, href }: Props) {
  const path = usePathname();
  return (
    <Link href={href} className={path.startsWith(href) ? "active" : undefined}>
      {children}
    </Link>
  );
}
