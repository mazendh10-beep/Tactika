"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutButton() {
  const router = useRouter();
  const [status, setStatus] = useState<string | null>(null);

  const logout = async () => {
    setStatus("Signing out...");
    const res = await fetch("/api/auth/logout", { method: "POST" });

    if (res.ok) {
      router.push("/");
      router.refresh();
      return;
    }

    setStatus("Unable to sign out");
  };

  return (
    <div>
      <button
        type="button"
        onClick={logout}
        className="rounded-lg border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm font-semibold"
      >
        Logout
      </button>
      {status && <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{status}</p>}
    </div>
  );
}
