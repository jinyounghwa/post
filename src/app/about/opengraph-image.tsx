import { ImageResponse } from "next/og";
import { loadSyneFont } from "@/lib/og-font";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SKILLS = ["풀스택 웹", "iOS / Android", "AI / LLM", "IT 기획"];

export default async function Image() {
  const fontData = await loadSyneFont();
  const fonts = fontData
    ? [{ name: "Syne", data: fontData, style: "normal" as const, weight: 800 as const }]
    : [];

  // 프로필 이미지를 Base64로 로드
  let profileSrc: string | null = null;
  try {
    const imgPath = path.join(process.cwd(), "public", "jin.jpg");
    const imgBuffer = fs.readFileSync(imgPath);
    profileSrc = `data:image/jpeg;base64,${imgBuffer.toString("base64")}`;
  } catch {
    profileSrc = null;
  }

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
            flex: 1,
            padding: "56px 80px",
            gap: 60,
          }}
        >
          {/* 왼쪽: 텍스트 영역 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            {/* 상단 */}
            <span style={{ fontSize: 17, color: "#F0A500", fontFamily: "monospace", letterSpacing: 3 }}>
              JINSLIFE.KR
            </span>

            {/* 중단: 이름 + 직함 */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: 68,
                  fontWeight: 800,
                  fontFamily: fontData ? "Syne" : "sans-serif",
                  letterSpacing: -2,
                  lineHeight: 1.05,
                }}
              >
                <span style={{ color: "#E8E8E8" }}>진영화</span>
                <span style={{ color: "#F0A500", fontSize: 32, fontWeight: 700, letterSpacing: -1, marginTop: 8 }}>
                  AI Developer · Planner
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
                {SKILLS.map((skill) => (
                  <div
                    key={skill}
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
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* 하단 */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 8, height: 8, backgroundColor: "#F0A500", borderRadius: "50%" }} />
              <span style={{ fontSize: 15, color: "#555", fontFamily: "monospace" }}>
                14년차 · jinslife.kr
              </span>
            </div>
          </div>

          {/* 오른쪽: 프로필 이미지 */}
          {profileSrc && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profileSrc}
                alt="진영화"
                width={320}
                height={320}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid #F0A500",
                  opacity: 0.9,
                }}
              />
            </div>
          )}
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
