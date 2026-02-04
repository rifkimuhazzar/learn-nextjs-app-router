"use client";

import { useRouter } from "next/navigation";

export default function Backdrop() {
  const router = useRouter();
  return (
    <button type="button" className="modal-backdrop" onClick={router.back} />
  );
}
