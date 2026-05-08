import Link from "next/link";
import { notFound } from "next/navigation";
import PaywallBadge from "@/components/paywall-badge";
import { articles } from "@/data/articles";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);
  return { title: article ? `${article.title} | Tactika` : "Article | Tactika" };
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();

  const paragraphs = article.content.split("\n").filter(Boolean);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 space-y-6">
      <Link href="/articles" className="text-sm text-accent hover:underline">
        ← Back to articles
      </Link>

      <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-3 text-sm text-neutral-500">
          <PaywallBadge access={article.type} />
          <span className="uppercase tracking-wide">{article.category}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight">{article.title}</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300">{article.summary}</p>
        <div className="space-y-3 text-neutral-700 dark:text-neutral-200 leading-relaxed">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
