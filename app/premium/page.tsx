"use client";

import { useState } from "react";

export default function PremiumPage() {
  const [status, setStatus] = useState<string | null>(null);

  const startCheckout = async () => {
    setStatus("Redirecting to Stripe...");
    const res = await fetch("/api/stripe/checkout", { method: "POST" });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      setStatus(data.error || "Unable to start checkout");
    }
  };

  return (
    <div className="mx-auto max-w-xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-4">Go Premium</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mb-6">
        Unlock advanced formations, full dictionary, and the AI tactical assistant for just $4.99/month.
      </p>
      <button
        onClick={startCheckout}
        className="w-full rounded-lg bg-accent text-white py-3 font-semibold shadow-glow"
      >
        Upgrade with Stripe
      </button>
      {status && <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300">{status}</p>}
    </div>
  );
}
