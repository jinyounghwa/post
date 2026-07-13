import { getYoutubeId, type MediaType } from "@/lib/portfolio-shared";

interface MediaEmbedProps {
  mediaType: MediaType;
  mediaUrl: string;
  title: string;
}

/** mediaType별 분기: youtube(iframe) / appstore(배지 링크) / live-demo(브라우저 프레임 목업 + 새창 링크) */
export default function MediaEmbed({ mediaType, mediaUrl, title }: MediaEmbedProps) {
  if (mediaType === "youtube") {
    const videoId = getYoutubeId(mediaUrl);
    if (!videoId) return null;
    return (
      <div className="relative w-full aspect-video border-b border-border bg-foreground/5">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  if (mediaType === "appstore") {
    return (
      <a
        href={mediaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-4 w-full aspect-video border-b border-border bg-foreground text-background group"
      >
        <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.88-.18 1.72-.87 3.03-.78 1.58.13 2.76.75 3.53 1.9-3.25 1.95-2.73 6.23.86 7.66-.6 1.57-1.38 3.12-2.5 4.39zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
        <div className="flex flex-col items-center gap-1">
          <span className="doc-cell opacity-70">DOWNLOAD ON THE</span>
          <span className="font-[family-name:var(--font-display)] text-xl font-semibold group-hover:underline underline-offset-4">
            App Store
          </span>
        </div>
      </a>
    );
  }

  // live-demo: 외부 사이트는 X-Frame-Options로 임베드가 막히므로 브라우저 프레임 목업 + 새 창 링크
  const displayUrl = mediaUrl.replace(/^https?:\/\//, "");
  return (
    <a
      href={mediaUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full aspect-video border-b border-border bg-[#E9EAE2] group"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-card">
          <span className="w-2.5 h-2.5 rounded-full bg-accent/70" aria-hidden />
          <span className="w-2.5 h-2.5 rounded-full bg-border" aria-hidden />
          <span className="w-2.5 h-2.5 rounded-full bg-border" aria-hidden />
          <span className="doc-cell text-sub ml-2 truncate">{displayUrl}</span>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-3">
          <span className="seal w-16 h-16 text-[11px] tracking-widest">LIVE</span>
          <span className="doc-cell text-foreground group-hover:text-accent transition-colors">
            라이브 데모 열기 ↗
          </span>
        </div>
      </div>
    </a>
  );
}
