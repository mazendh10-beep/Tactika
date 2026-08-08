<<<<<<< HEAD
import Link from "next/link";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
=======
>>>>>>> 7f640e5e32e87e1656cfec0dce3a590c8f24bb31
import PaywallBadge from "@/components/paywall-badge";
import { getSessionFromCookies } from "@/lib/auth";
import { articles } from "@/data/articles";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return { title: article ? `${article.title} | Tactika` : "Article | Tactika" };
}

function getPreview(content: string) {
  const sentences = content.match(/[^.!?]+[.!?]+/g);
  if (!sentences) return content;
  return sentences.slice(0, 2).join(" ").trim();
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return notFound();

<<<<<<< HEAD
  const cookieStore = await cookies();
  const session = await getSessionFromCookies(cookieStore);
  const isLocked = article.type === "premium" && !session?.isPremium;
  const paragraphs = article.content.split("\n").filter(Boolean);

=======
>>>>>>> 7f640e5e32e87e1656cfec0dce3a590c8f24bb31
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 space-y-6">
      <Link href="/articles" className="text-sm text-accent hover:underline">
        Back to articles
      </Link>

      <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm space-y-4 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex items-center gap-3 text-sm text-neutral-500">
          <PaywallBadge access={article.type} />
          <span className="uppercase tracking-wide">{article.category}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight">{article.title}</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300">{article.summary}</p>

        {isLocked ? (
          <div className="space-y-4">
            <p className="text-neutral-700 dark:text-neutral-200 leading-relaxed">{getPreview(article.content)}</p>
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <div className="max-h-36 space-y-3 p-5 text-neutral-700 blur-sm dark:text-neutral-200" aria-hidden="true">
                {paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-white/80 p-5 text-center backdrop-blur-sm dark:bg-neutral-950/80">
                <div>
                  <p className="text-xl font-semibold">Upgrade to Premium</p>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                    Unlock this deep-dive plus the AI tactical coach.
                  </p>
                  <Link
                    href="/premium"
                    className="mt-4 inline-flex rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-glow"
                  >
                    Upgrade now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
<<<<<<< HEAD
          <div className="space-y-3 text-neutral-700 dark:text-neutral-200 leading-relaxed">
            {paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
=======
          <div className="space-y-4 text-neutral-700 dark:text-neutral-200 leading-relaxed [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-primary-dark [&_h3]:dark:text-white [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_pre]:rounded-xl [&_pre]:bg-neutral-100 [&_pre]:dark:bg-neutral-800 [&_pre]:p-4 [&_pre]:text-sm [&_pre]:font-mono [&_pre]:overflow-x-auto [&_strong]:font-semibold [&_p]:leading-relaxed">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>
>>>>>>> 7f640e5e32e87e1656cfec0dce3a590c8f24bb31
          </div>
        )}
      </article>
    </div>
  );
}
