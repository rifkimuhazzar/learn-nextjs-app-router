import type { ReactNode } from "react";

import { getMessages } from "@/lib/messages";

type Props = { children: ReactNode };

export default async function MessagesLayout({ children }: Props) {
  // const response = await fetch("http://localhost:8080/messages", {
  //   headers: {
  //     "X-ID": "layout",
  //   },
  // });
  // const messages = await response.json();

  const messages = await getMessages();
  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}
