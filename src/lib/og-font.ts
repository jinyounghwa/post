import fs from "fs";
import path from "path";

/**
 * Syne ExtraBold 폰트를 로드합니다.
 * 1순위: 로컬 파일 (public/fonts/Syne-ExtraBold.woff)
 * 2순위: Google Fonts 원격 fetch
 */
export async function loadSyneFont(): Promise<ArrayBuffer> {
  // 로컬 파일 우선
  try {
    const localPath = path.join(process.cwd(), "public", "fonts", "Syne-ExtraBold.woff");
    const buffer = fs.readFileSync(localPath);
    return buffer.buffer.slice(
      buffer.byteOffset,
      buffer.byteOffset + buffer.byteLength
    ) as ArrayBuffer;
  } catch {
    // 로컬 파일 없으면 Google Fonts에서 fetch
  }

  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap",
    { headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" } }
  ).then((r) => r.text());

  const fontUrl = css.match(/src:\s*url\(([^)]+)\)\s*format\('woff2'\)/)?.[1]
    ?? css.match(/url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/)?.[1];

  if (!fontUrl) throw new Error("Syne font URL not found");

  return fetch(fontUrl).then((r) => r.arrayBuffer());
}
