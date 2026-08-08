"use client";

import { useState } from "react";

type MatchContext = {
  opponent: string;
  league: string;
  gameState: string;
};

export default function ChatClient() {
  const [question, setQuestion] = useState("");
  const [match, setMatch] = useState<MatchContext>({ opponent: "", league: "", gameState: "" });
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const updateMatch = (field: keyof MatchContext, value: string) => {
    setMatch((current) => ({ ...current, [field]: value }));
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setAnswer(null);
    setError(null);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question,
        match: {
          opponent: match.opponent || undefined,
          league: match.league || undefined,
          gameState: match.gameState || undefined
        }
      })
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error || "Coach request failed");
      return;
    }

    setAnswer(data.answer);
  };

  return (
    <form onSubmit={submit} className="space-y-5">
      <div>
        <label htmlFor="question" className="mb-2 block text-sm font-semibold">
          Tactical question
        </label>
        <textarea
          id="question"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          required
          rows={5}
          placeholder="How should we press a 3-2 build-up?"
          className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 dark:border-neutral-700 dark:bg-neutral-900"
        />
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <input
          value={match.opponent}
          onChange={(event) => updateMatch("opponent", event.target.value)}
          placeholder="Opponent"
          className="rounded-lg border border-neutral-300 bg-white px-4 py-3 dark:border-neutral-700 dark:bg-neutral-900"
        />
        <input
          value={match.league}
          onChange={(event) => updateMatch("league", event.target.value)}
          placeholder="League"
          className="rounded-lg border border-neutral-300 bg-white px-4 py-3 dark:border-neutral-700 dark:bg-neutral-900"
        />
        <input
          value={match.gameState}
          onChange={(event) => updateMatch("gameState", event.target.value)}
          placeholder="Game state"
          className="rounded-lg border border-neutral-300 bg-white px-4 py-3 dark:border-neutral-700 dark:bg-neutral-900"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-primary-light px-4 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Thinking..." : "Ask Tactika Coach"}
      </button>

      {error && (
        <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200">
          {error}
        </div>
      )}

      {answer && (
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h2 className="mb-3 text-lg font-semibold">Coach response</h2>
          <p className="whitespace-pre-line text-neutral-700 dark:text-neutral-200">{answer}</p>
        </div>
      )}
    </form>
  );
}
