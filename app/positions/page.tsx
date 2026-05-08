import Link from "next/link";
import PaywallBadge from "@/components/paywall-badge";
import PitchDiagram from "@/components/pitch-diagram";
import { positions } from "@/data/content";
import { positionsDiagram } from "@/data/diagrams";

export const metadata = { title: "Positions | Tactika" };

export default function PositionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-10">
      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">Positions</h1>
          <p className="text-neutral-600 dark:text-neutral-300 mb-4">
            Rotated layout for analyst whiteboards; premium roles glow in accent. Tap any role on the pitch to open its article.
          </p>
          <PitchDiagram title="Base 4-3-3 shape with role labels" players={positionsDiagram} rotate="90" />
        </div>
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 space-y-4">
          <h2 className="text-xl font-semibold">Role glossary</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Free users see defensive core and midfield spine. Premium unlocks final-third specialists and advanced variations.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-3 py-1 rounded-full bg-primary-light/10 text-primary-light border border-primary-light/30">Free</span>
            <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/30">Premium</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {positions.map((p) => (
          <div key={p.role} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-900 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold">{p.role}</div>
              <PaywallBadge access={p.access as "free" | "premium"} />
            </div>
            <p className="text-sm text-neutral-500">{p.label}</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">{p.zone}</p>
            <Link
              href={`/articles/${p.slug}`}
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold border border-neutral-300 dark:border-neutral-700 hover:border-accent hover:text-accent transition"
            >
              Open article
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
