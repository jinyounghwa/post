import { getNewsPost, getAllNewsSlugs } from "@/lib/mdx";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const slugs = getAllNewsSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;

  let post;
  try {
    post = await getNewsPost(slug);
  } catch {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-sub hover:text-accent font-mono mb-8 transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        뉴스 목록으로
      </Link>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <time className="text-xs text-sub font-mono">{post.date}</time>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 border border-border rounded text-sub font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h1 className="font-[family-name:var(--font-syne)] text-3xl md:text-4xl font-bold tracking-tight">
            {post.title}
          </h1>
        </header>

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </div>
  );
}
