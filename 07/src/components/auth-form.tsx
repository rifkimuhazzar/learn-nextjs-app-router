"use client";

import Link from "next/link";
import { useActionState } from "react";

import { auth } from "@/actions/auth-actions";

type Props = { mode: "login" | "signup" };

export default function AuthForm({ mode }: Props) {
  const [state, action] = useActionState(auth.bind(null, mode), { errors: {} });

  return (
    <form id="auth-form" action={action}>
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>

      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>

      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>

      {state?.errors && (
        <ul id="form-errors">
          {Object.keys(state.errors).map((error) => (
            <li key={error}>{state.errors[error]}</li>
          ))}
        </ul>
      )}

      <p>
        {mode === "login" && <button type="submit">Log in</button>}
        {mode === "signup" && <button type="submit">Create Account</button>}
      </p>

      <p>
        {mode === "login" && (
          <Link href="/?mode=signup">Create an account.</Link>
        )}
        {mode === "signup" && (
          <Link href="/?mode=login">Login with existing account.</Link>
        )}
      </p>
    </form>
  );
}
