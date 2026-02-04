import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function NewsDetailLayout({ children, modal }: Props) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
