import PaywallBadge from "@/components/paywall-badge";
import { articles } from "@/data/articles";
import Link from "next/link";

export const metadata = { title: "Articles | Tactika" };

export default function ArticlesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">Articles</h1>
          <p className="text-neutral-600 dark:text-neutral-300">
            Tifo-style breakdowns across formations, positions, and tactical history.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <PaywallBadge access="free" /> <span>Free reads</span>
          <PaywallBadge access="premium" /> <span>Premium deep-dives</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={`/articles/${a.slug}`}
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-900 space-y-2 hover:border-accent transition"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-wide text-neutral-500">{a.category}</p>
              <PaywallBadge access={a.type} />
            </div>
            <h2 className="text-xl font-semibold text-primary-dark dark:text-white">{a.title}</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{a.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
