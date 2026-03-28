interface StarCardProps {
  name: string;
  link: string;
  description: string;
  reason: string;
  categoryTitle?: string;
}

export default function StarCard({ name, link, description, reason, categoryTitle }: StarCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <article className="border border-border rounded-lg p-6 card-hover bg-card/50">
        {categoryTitle && (
          <span className="text-xs text-sub font-mono mb-2 block">
            {categoryTitle}
          </span>
        )}
        <h3 className="font-[family-name:var(--font-syne)] text-base font-semibold mb-2 group-hover:text-accent transition-colors">
          {name}
        </h3>
        <p className="text-sm text-sub mb-2 font-mono">{description}</p>
        {reason && (
          <p className="text-xs text-accent/70 font-mono italic">
            → {reason}
          </p>
        )}
      </article>
    </a>
  );
}
