import Link from "next/link";
import PaywallBadge from "@/components/paywall-badge";
import { articles } from "@/data/articles";

export const metadata = { title: "History | Tactika" };

const historyArticles = articles.filter((article) => article.category === "history");

export default function HistoryPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold mb-3">Tactical History</h1>
      <p className="mb-6 text-neutral-600 dark:text-neutral-300">
        Historical tactical articles from early pressing schools to modern transition control.
      </p>
      <div className="space-y-4">
        {historyArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="block rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900 hover:border-accent transition"
          >
            <div className="mb-2 flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold text-primary-dark dark:text-white">{article.title}</h2>
              <PaywallBadge access={article.type} />
            </div>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">{article.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
