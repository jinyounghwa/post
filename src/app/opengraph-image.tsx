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
          backgroundColor: "#F3F3EE",
        }}
      >
        {/* 상단 인주색 바 */}
        <div style={{ width: "100%", height: "6px", backgroundColor: "#C2402C" }} />

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
                color: "#C2402C",
                fontFamily: "monospace",
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              JINSLIFE.KR
            </span>
            <span style={{ fontSize: 15, color: "#676D66", fontFamily: "monospace", letterSpacing: 2 }}>
              PLANNER × FULL-STACK DEVELOPER
            </span>
          </div>

          {/* 중단: 큰 타이틀 + 설명 */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: 76,
                  fontWeight: 800,
                  color: "#1B2129",
                  lineHeight: 1.05,
                  fontFamily: fontData ? "Syne" : "sans-serif",
                  letterSpacing: -2,
                }}
              >
                <span>기획부터 배포까지,</span>
                <span style={{ color: "#C2402C" }}>1인 풀스택 개발팀</span>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                {["데모 8종", "IT 기획 14년", "WMS · 커머스 · AI"].map((label) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      fontSize: 16,
                      color: "#676D66",
                      border: "1px solid #C9CBC2",
                      backgroundColor: "#FCFCF9",
                      padding: "6px 18px",
                      fontFamily: "monospace",
                    }}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* 도장 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 130,
                height: 130,
                border: "4px solid #C2402C",
                borderRadius: "50%",
                color: "#C2402C",
                fontSize: 34,
                fontWeight: 800,
                transform: "rotate(-8deg)",
              }}
            >
              진영화
            </div>
          </div>

          {/* 하단: 브랜딩 */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 8, height: 8, backgroundColor: "#C2402C", borderRadius: "50%" }} />
            <span style={{ fontSize: 15, color: "#676D66", fontFamily: "monospace" }}>
              jinslife.kr — 진영화
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
