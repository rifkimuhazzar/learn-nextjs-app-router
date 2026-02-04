import { redirect } from "next/navigation";

import AuthForm from "@/components/auth-form";

type Props = { searchParams: Promise<{ mode: "login" | "signup" }> };

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;

  if (params.mode !== "login" && params.mode !== "signup") {
    redirect("/?mode=login");
  } else if (params.mode === "login" && Object.keys(params).length > 1) {
    redirect("/?mode=login");
  } else if (params.mode === "signup" && Object.keys(params).length > 1) {
    redirect("/?mode=signup");
  }

  return <AuthForm mode={params.mode} />;
}
