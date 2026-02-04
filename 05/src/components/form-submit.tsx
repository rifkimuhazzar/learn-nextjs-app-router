"use client";

import { useFormStatus } from "react-dom";

export default function FormStatus() {
  const status = useFormStatus();

  if (status.pending) return <p>Creating post...</p>;

  return (
    <>
      <button type="reset">Reset</button>
      <button type="submit">Create Post</button>
    </>
  );
}
