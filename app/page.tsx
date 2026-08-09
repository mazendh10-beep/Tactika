import Link from "next/link";
import PaywallBadge from "@/components/paywall-badge";
import { formations, positions } from "@/data/content";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <section className="mb-12 max-w-3xl">
        <div>
          <p className="uppercase tracking-wide text-sm text-accent font-semibold mb-3">Think fast. Play smart.</p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Welcome to Tactika - master football tactics with bite-sized lessons and visual drills.
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
            Built for analysts, coaches, and curious fans. Start free, unlock premium breakdowns, and ask the AI coach for
            tailored match plans.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="rounded-full bg-accent text-white px-6 py-3 font-semibold shadow-glow"
            >
              Start Free
            </Link>
            <Link
              href="/formations"
              className="rounded-full border border-neutral-300 dark:border-neutral-700 px-6 py-3 font-semibold"
            >
              Browse Formations
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Formations</h2>
          <Link href="/formations" className="text-sm">See all</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {formations.map((f) => (
            <div key={f.name} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{f.name}</h3>
                <PaywallBadge access={f.access} />
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">{f.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Positions</h2>
          <Link href="/positions" className="text-sm">See all</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {positions.map((p) => (
            <div key={p.role} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900">
              <div className="flex items-center justify-between mb-2">
                <div className="text-lg font-semibold">{p.role}</div>
                <PaywallBadge access={p.access} />
              </div>
              <p className="text-sm text-neutral-500">{p.label}</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">{p.zone}</p>
              <Link href={`/articles/${p.slug}`} className="text-sm font-semibold text-accent hover:underline">
                Open article
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-gradient-to-r from-primary-light/10 to-accent/10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">AI Tactical Assistant</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Premium members can query match-ups, suggest in-possession shapes, or get pressing plans with data inputs (xG, xA, xT).
            </p>
          </div>
          <Link
            href="/premium"
            className="rounded-full bg-accent text-white px-6 py-3 font-semibold shadow-glow text-center"
          >
            Upgrade for $4.99/mo
          </Link>
        </div>
      </section>
    </div>
  );
}
