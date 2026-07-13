import type { PortfolioItem } from "@/lib/portfolio-shared";
import MediaEmbed from "./MediaEmbed";
import CategoryBadge from "./CategoryBadge";

const MEDIA_LABEL: Record<string, string> = {
  youtube: "VIDEO",
  appstore: "APP STORE",
  "live-demo": "LIVE",
};

const CTA_LABEL: Record<string, string> = {
  youtube: "YouTube에서 보기",
  appstore: "App Store에서 보기",
  "live-demo": "라이브 데모 보기",
};

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="flex flex-col border border-border bg-card card-hover">
      {/* 스펙 시트 헤더 행 */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        <span className="doc-cell text-sub">
          PROJECT&nbsp;{String(item.order).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-2">
          <CategoryBadge label={item.categoryLabel} />
          <span className="doc-cell text-sub">{MEDIA_LABEL[item.mediaType]}</span>
        </div>
      </div>

      <MediaEmbed mediaType={item.mediaType} mediaUrl={item.mediaUrl} title={item.title} />

      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold leading-snug">
          {item.title}
        </h3>
        <p className="text-sm text-[#3B4149] leading-relaxed">{item.summary}</p>
        <p className="text-sm leading-relaxed border-l-2 border-accent pl-3 text-sub">
          {item.highlight}
        </p>

        <div className="mt-auto pt-3 flex flex-col gap-3">
          <div className="flex flex-wrap gap-1.5">
            {item.stack.map((tech) => (
              <span key={tech} className="doc-cell px-2 py-0.5 border border-border text-sub">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <span className="doc-cell text-sub">{item.role}</span>
            <a
              href={item.mediaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="doc-cell text-blue hover:text-accent transition-colors shrink-0"
            >
              {CTA_LABEL[item.mediaType]} ↗
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
