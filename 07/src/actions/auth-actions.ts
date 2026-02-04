"use server";

import { redirect } from "next/navigation";

import { createAuthSession, destroySession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByEmail } from "@/lib/users";

async function signup(
  _prevState: { errors: Record<string, string> } | undefined,
  formData: FormData,
): Promise<{ errors: Record<string, string> }> {
  const email = formData.get("email");
  const password = formData.get("password");

  const errors: Record<string, string> = {};

  if (typeof email !== "string" || !email.trim().includes("@")) {
    errors.email = "Please enter a valid email address.";
  }
  if (typeof password !== "string" || password.trim().length < 8) {
    errors.password =
      "Please enter a valid password (at least 8 characters long).";
  }

  if (errors.email || errors.password) return { errors };

  const hashedPassword = hashUserPassword(password as string);
  try {
    const userId = createUser(email as string, hashedPassword);
    await createAuthSession(userId);
    redirect("/training");
  } catch (error: any) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return { errors: { email: "Email address already taken." } };
    }
    throw error;
  }
}

async function login(
  _prevState: { errors: Record<string, string> } | undefined,
  formData: FormData,
): Promise<{ errors: Record<string, string> }> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const existingUser = getUserByEmail(email) as any;
  const isValidPassword = verifyPassword(existingUser.password, password);

  if (!existingUser || !isValidPassword) {
    return { errors: { credentials: "Email or password is wrong." } };
  }

  await createAuthSession(existingUser.id);
  redirect("/training");
}

export async function auth(
  mode: "login" | "signup",
  prevState: { errors: Record<string, string> } | undefined,
  formData: FormData,
) {
  if (mode === "login") return login(prevState, formData);
  else if (mode === "signup") return signup(prevState, formData);
}

export async function logout() {
  await destroySession();
  redirect("/?mode=login");
}
