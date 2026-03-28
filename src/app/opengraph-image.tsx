import { ImageResponse } from "next/og";
import { loadSyneFont } from "@/lib/og-font";

export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fontData = await loadSyneFont();
  const fonts = fontData
    ? [{ name: "Syne", data: fontData, style: "normal" as const, weight: 800 as const }]
    : [];

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
            padding: "56px 80px",
            justifyContent: "space-between",
          }}
        >
          {/* 상단: 사이트명 + 레이블 */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span
              style={{
                fontSize: 18,
                color: "#F0A500",
                fontFamily: "monospace",
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              JINSLIFE.KR
            </span>
            <span style={{ fontSize: 15, color: "#444", fontFamily: "monospace", letterSpacing: 2 }}>
              AI DEVELOPER CURATION HUB
            </span>
          </div>

          {/* 중단: 큰 타이틀 + 설명 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 82,
                fontWeight: 800,
                color: "#E8E8E8",
                lineHeight: 1.0,
                fontFamily: fontData ? "Syne" : "sans-serif",
                letterSpacing: -2,
              }}
            >
              <span>AI Developer</span>
              <span style={{ color: "#F0A500" }}>Curation Hub</span>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {["Claude 뉴스", "GitHub Stars", "About"].map((label) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    fontSize: 16,
                    color: "#888",
                    border: "1px solid #2a2a2a",
                    padding: "6px 18px",
                    borderRadius: 4,
                    fontFamily: "monospace",
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* 하단: 브랜딩 */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 8,
                height: 8,
                backgroundColor: "#F0A500",
                borderRadius: "50%",
              }}
            />
            <span style={{ fontSize: 15, color: "#555", fontFamily: "monospace" }}>
              jinslife.kr
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
