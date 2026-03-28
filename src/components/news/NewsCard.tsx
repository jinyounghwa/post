import Link from "next/link";

interface NewsCardProps {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
}

export default function NewsCard({ slug, title, date, tags, summary }: NewsCardProps) {
  return (
    <Link href={`/${slug}/`} className="block group">
      <article className="border border-border rounded-lg p-6 card-hover bg-card/50">
        <div className="flex items-center gap-3 mb-3">
          <time className="text-xs text-sub font-mono">{date}</time>
          <div className="flex gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 border border-border rounded text-sub font-mono">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-sub leading-relaxed font-mono">
          {summary}
        </p>
      </article>
    </Link>
  );
}
