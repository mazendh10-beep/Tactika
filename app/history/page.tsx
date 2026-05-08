export const metadata = { title: "History | Tactika" };

const events = [
  {
    title: "Total Football (1970s)",
    summary: "Ajax and Netherlands fluid positional play set the blueprint for modern rotations."
  },
  {
    title: "Pressing Revolution (2000s)",
    summary: "Rangnick and Klopp popularized counter-pressing as an attacking phase."
  },
  {
    title: "Positional Play 2.0 (2010s)",
    summary: "Guardiola evolved the WM (2-3-5) rest defense to control transitions."
  }
];

export default function HistoryPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Tactical History</h1>
      <div className="space-y-4">
        {events.map((e) => (
          <article key={e.title} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900">
            <h2 className="text-xl font-semibold">{e.title}</h2>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">{e.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
