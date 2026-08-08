import PaywallBadge from "@/components/paywall-badge";
import { articles } from "@/data/articles";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  return { title: article ? `${article.title} | Tactika` : "Article | Tactika" };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return notFound();

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
        {article.type === "premium" ? (
          <div className="rounded-xl border border-accent/40 bg-accent/10 p-5 text-neutral-700 dark:text-neutral-200">
            <p className="font-semibold text-accent">Premium article coming soon</p>
            <p className="mt-2 text-sm">
              Upgrade access is paused while Tactika launches its frontend-only preview.
            </p>
            <Link href="/premium" className="mt-4 inline-flex text-sm font-semibold text-accent hover:underline">
              View premium status
            </Link>
          </div>
        ) : (
          <div className="space-y-4 text-neutral-700 dark:text-neutral-200 leading-relaxed [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-primary-dark [&_h3]:dark:text-white [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_pre]:rounded-xl [&_pre]:bg-neutral-100 [&_pre]:dark:bg-neutral-800 [&_pre]:p-4 [&_pre]:text-sm [&_pre]:font-mono [&_pre]:overflow-x-auto [&_strong]:font-semibold [&_p]:leading-relaxed">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
