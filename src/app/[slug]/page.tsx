import { getNewsPost, getAllNewsSlugs } from "@/lib/mdx";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const slugs = getAllNewsSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getNewsPost(slug);
    return {
      title: post.title,
      description: post.summary,
      openGraph: {
        type: "article",
        url: `https://jinslife.kr/${slug}/`,
        title: post.title,
        description: post.summary,
        publishedTime: post.date,
        tags: post.tags,
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.summary,
      },
    };
  } catch {
    return { title: "Not Found" };
  }
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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-16">
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
        <header className="mb-8 md:mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <time className="text-xs text-sub font-mono">{post.date}</time>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 border border-border rounded text-sub font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
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
