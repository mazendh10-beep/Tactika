"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        email: form.get("email"),
        password: form.get("password")
      }),
      headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    setStatus(data.message || data.error);
    if (res.ok) router.push("/");
  };

  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <h1 className="text-3xl font-semibold mb-4">Create your account</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 px-4 py-3 bg-white dark:bg-neutral-900"
        />
        <input
          name="password"
          type="password"
          required
          minLength={6}
          placeholder="Password (min 6 chars)"
          className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 px-4 py-3 bg-white dark:bg-neutral-900"
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-accent text-white py-3 font-semibold shadow-glow"
        >
          Sign up
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300">{status}</p>}
    </div>
  );
}
