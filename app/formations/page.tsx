import PaywallBadge from "@/components/paywall-badge";
import PitchDiagram from "@/components/pitch-diagram";
import { formations } from "@/data/content";
import { formationDiagrams } from "@/data/diagrams";

export const metadata = { title: "Formations | Tactika" };

export default function FormationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">Formations</h1>
          <p className="text-neutral-600 dark:text-neutral-300">
            Visual diagrams for every shape: press triggers, width, and rest-defense spine.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {formations.map((f) => (
          <div key={f.name} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-900 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold">{f.name}</div>
              <PaywallBadge access={f.access as "free" | "premium"} />
            </div>
            <PitchDiagram
              players={formationDiagrams[f.name] || []}
              subtle
              title={`${f.name} shape`}
              rotate="90"
              nodeSize={26}
            />
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{f.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
