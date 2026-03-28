import { ImageResponse } from "next/og";
import { loadSyneFont } from "@/lib/og-font";

export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CATEGORIES = [
  "Claude Code", "AI Agents", "MCP", "Local AI",
  "React", "Rust", "Swift", "Backend",
];

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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "56px 80px",
            justifyContent: "space-between",
          }}
        >
          {/* 상단: 사이트명 */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 17, color: "#F0A500", fontFamily: "monospace", letterSpacing: 3 }}>
              JINSLIFE.KR
            </span>
            <span style={{ fontSize: 15, color: "#444", fontFamily: "monospace" }}>
              GITHUB STARS CURATION
            </span>
          </div>

          {/* 중단: 타이틀 + 설명 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 82,
                fontWeight: 800,
                fontFamily: fontData ? "Syne" : "sans-serif",
                letterSpacing: -2,
                lineHeight: 1.0,
              }}
            >
              <span style={{ color: "#E8E8E8" }}>GitHub</span>
              <span style={{ color: "#F0A500" }}>Stars →</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, maxWidth: "900px" }}>
              {CATEGORIES.map((cat) => (
                <div
                  key={cat}
                  style={{
                    display: "flex",
                    fontSize: 15,
                    color: "#888",
                    border: "1px solid #2a2a2a",
                    padding: "5px 16px",
                    borderRadius: 4,
                    fontFamily: "monospace",
                  }}
                >
                  {cat}
                </div>
              ))}
              <div
                style={{
                  display: "flex",
                  fontSize: 15,
                  color: "#555",
                  padding: "5px 8px",
                  fontFamily: "monospace",
                }}
              >
                + more
              </div>
            </div>
          </div>

          {/* 하단 */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 8, height: 8, backgroundColor: "#F0A500", borderRadius: "50%" }} />
              <span style={{ fontSize: 15, color: "#555", fontFamily: "monospace" }}>jinslife.kr</span>
            </div>
            <span style={{ fontSize: 14, color: "#444", fontFamily: "monospace" }}>
              직접 Star한 레포 큐레이션
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
