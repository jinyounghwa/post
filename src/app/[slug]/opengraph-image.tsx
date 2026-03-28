import { ImageResponse } from "next/og";
import { getNewsPost, getAllNewsSlugs } from "@/lib/mdx";
import { loadSyneFont } from "@/lib/og-font";

export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllNewsSlugs().map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fontData = await loadSyneFont();
  const fonts = fontData
    ? [{ name: "Syne", data: fontData, style: "normal" as const, weight: 800 as const }]
    : [];

  let title = "jinslife.kr — AI Developer Curation Hub";
  let summary = "";
  let date = "";
  let tags: string[] = [];

  try {
    const post = await getNewsPost(slug);
    title = post.title;
    summary = post.summary ?? "";
    date = post.date;
    tags = post.tags ?? [];
  } catch {
    // slug not found → 기본값 사용
  }

  // 타이틀이 너무 길면 자르기 (satori 2줄 clamp)
  const titleTrimmed = title.length > 60 ? title.slice(0, 58) + "…" : title;
  const summaryTrimmed = summary.length > 80 ? summary.slice(0, 78) + "…" : summary;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "#0A0A0A",
        }}
      >
        {/* 상단 앰버 바 */}
        <div style={{ width: "100%", height: "6px", backgroundColor: "#F0A500" }} />

        {/* 메인 컨텐츠 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "50px 80px",
            justifyContent: "space-between",
          }}
        >
          {/* 상단: 사이트명 + 날짜 */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 17, color: "#F0A500", fontFamily: "monospace", letterSpacing: 3 }}>
              JINSLIFE.KR
            </span>
            {date && (
              <span style={{ fontSize: 15, color: "#444", fontFamily: "monospace" }}>
                {date}
              </span>
            )}
          </div>

          {/* 중단: 타이틀 + 요약 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                display: "flex",
                fontSize: 52,
                fontWeight: 800,
                color: "#E8E8E8",
                lineHeight: 1.2,
                fontFamily: fontData ? "Syne" : "sans-serif",
                letterSpacing: -1,
                maxWidth: "960px",
                WebkitLineClamp: 2,
                overflow: "hidden",
              }}
            >
              {titleTrimmed}
            </div>
            {summaryTrimmed && (
              <div
                style={{
                  display: "flex",
                  fontSize: 22,
                  color: "#777",
                  fontFamily: "monospace",
                  maxWidth: "900px",
                  lineHeight: 1.4,
                  overflow: "hidden",
                  WebkitLineClamp: 1,
                }}
              >
                {summaryTrimmed}
              </div>
            )}
          </div>

          {/* 하단: 태그 + 허브 레이블 */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", gap: 8 }}>
              {tags.slice(0, 4).map((tag) => (
                <div
                  key={tag}
                  style={{
                    display: "flex",
                    fontSize: 14,
                    color: "#F0A500",
                    border: "1px solid #2a1a00",
                    padding: "4px 14px",
                    borderRadius: 4,
                    fontFamily: "monospace",
                    backgroundColor: "#1a0f00",
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
            <span style={{ fontSize: 14, color: "#444", fontFamily: "monospace" }}>
              AI Developer Curation Hub
            </span>
          </div>
        </div>

        {/* 우측 하단 장식 — 앰버 수직 선 */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 6,
            bottom: 0,
            width: "3px",
            backgroundColor: "#1a1000",
          }}
        />
      </div>
    ),
    { ...size, fonts }
  );
}
