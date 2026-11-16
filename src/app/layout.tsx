import type { Metadata } from "next";
import { IBM_Plex_Sans_KR, IBM_Plex_Mono, Syne } from "next/font/google";
import "./globals.css";
import { getSortedPortfolio } from "@/lib/portfolio";

const plexSansKr = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-kr",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-syne",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-plex-mono",
});

const DESCRIPTION = `14년 IT 기획 경험 기반 1인 풀스택 개발. 요구사항 정의부터 배포까지, 실제 동작하는 데모 ${getSortedPortfolio().length}종으로 증명하는 포트폴리오.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://jinslife.kr"),
  title: {
    default: "진영화 — 개발하는 기획자 | jinslife.kr",
    template: "%s | jinslife.kr",
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: "https://jinslife.kr",
    siteName: "jinslife.kr",
    title: "진영화 — 개발하는 기획자 | jinslife.kr",
    description: DESCRIPTION,
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "진영화 — 개발하는 기획자 | jinslife.kr",
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${plexSansKr.variable} ${plexMono.variable} ${syne.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
