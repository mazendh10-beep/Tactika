import Link from "next/link";
import { formations, positions } from "@/data/content";
import PaywallBadge from "@/components/paywall-badge";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <section className="grid gap-10 md:grid-cols-2 items-center mb-12">
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
        <div className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-primary-light/10 via-accent/10 to-transparent p-6">
          <div className="aspect-video rounded-xl bg-pitch pitch-grid pitch-outline flex items-center justify-center text-center text-white text-3xl font-semibold">
            Interactive Pitch
          </div>
          <p className="mt-4 text-sm text-neutral-500">
            Visualize build-up lanes, rest-defense cover, and pressing traps in light or dark mode.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Minimalist Tactical Board</h2>
          <span className="text-sm text-neutral-500">Blue vs. Magenta</span>
        </div>
        <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-[0_18px_36px_rgba(15,23,42,0.08)] p-6">
          <svg
            viewBox="0 0 105 68"
            role="img"
            aria-label="Top-down football pitch with two teams"
            className="w-full h-auto"
          >
            <defs>
              <style>{`
                .pitch-line { fill: none; stroke: #d6d9df; stroke-width: 1.2; stroke-linecap: round; stroke-linejoin: round; }
                .spot { fill: #cbd0d8; }
                .player { stroke: #ffffff; stroke-width: 0.35; filter: drop-shadow(0 2px 3px rgba(15,23,42,0.08)); }
                .team-a { fill: #2563eb; }
                .team-b { fill: #e11d48; }
                .keeper { stroke-width: 0.6; }
              `}</style>
            </defs>

            {/* Pitch outline */}
            <rect x="0.7" y="0.7" width="103.6" height="66.6" className="pitch-line" rx="1.8" ry="1.8" />
            <line x1="52.5" y1="0.7" x2="52.5" y2="67.3" className="pitch-line" />
            <circle cx="52.5" cy="34" r="9.15" className="pitch-line" />
            <circle cx="52.5" cy="34" r="0.6" className="spot" />

            {/* Left penalty area */}
            <rect x="0.7" y="13.85" width="16.5" height="40.3" className="pitch-line" />
            <rect x="0.7" y="24.85" width="5.5" height="18.3" className="pitch-line" />
            <circle cx="11" cy="34" r="0.6" className="spot" />
            <path d="M20.15 24.85 A9.15 9.15 0 0 0 20.15 43.15" className="pitch-line" />

            {/* Right penalty area */}
            <rect x="87.8" y="13.85" width="16.5" height="40.3" className="pitch-line" />
            <rect x="98.8" y="24.85" width="5.5" height="18.3" className="pitch-line" />
            <circle cx="94" cy="34" r="0.6" className="spot" />
            <path d="M84.85 24.85 A9.15 9.15 0 0 1 84.85 43.15" className="pitch-line" />

            {/* Corner arcs */}
            <path d="M0.7 6.7 A6 6 0 0 0 6.7 0.7" className="pitch-line" />
            <path d="M98.3 0.7 A6 6 0 0 0 104.3 6.7" className="pitch-line" />
            <path d="M0.7 61.3 A6 6 0 0 1 6.7 67.3" className="pitch-line" />
            <path d="M98.3 67.3 A6 6 0 0 1 104.3 61.3" className="pitch-line" />

            {/* Team A (blue) */}
            <g className="team-a">
              <circle cx="10" cy="12" r="1.6" className="player" />
              <circle cx="10" cy="56" r="1.6" className="player" />
              <circle cx="20" cy="22" r="1.6" className="player" />
              <circle cx="20" cy="46" r="1.6" className="player" />
              <circle cx="33" cy="34" r="1.7" className="player" />
              <circle cx="36" cy="18" r="1.6" className="player" />
              <circle cx="36" cy="50" r="1.6" className="player" />
              <circle cx="48" cy="26" r="1.6" className="player" />
              <circle cx="48" cy="42" r="1.6" className="player" />
              <circle cx="58" cy="34" r="1.8" className="player keeper" />
            </g>

            {/* Team B (magenta) */}
            <g className="team-b">
              <circle cx="95" cy="12" r="1.6" className="player" />
              <circle cx="95" cy="56" r="1.6" className="player" />
              <circle cx="85" cy="22" r="1.6" className="player" />
              <circle cx="85" cy="46" r="1.6" className="player" />
              <circle cx="72" cy="34" r="1.7" className="player" />
              <circle cx="69" cy="18" r="1.6" className="player" />
              <circle cx="69" cy="50" r="1.6" className="player" />
              <circle cx="57" cy="26" r="1.6" className="player" />
              <circle cx="57" cy="42" r="1.6" className="player" />
              <circle cx="47" cy="34" r="1.8" className="player keeper" />
            </g>
          </svg>
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
