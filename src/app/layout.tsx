import type { Metadata } from "next";
import { Hahmlet, IBM_Plex_Sans_KR, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const hahmlet = Hahmlet({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hahmlet",
});

const plexSansKr = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-kr",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jinslife.kr"),
  title: {
    default: "진영화 — 기획하는 풀스택 개발자 | jinslife.kr",
    template: "%s | jinslife.kr",
  },
  description:
    "14년 IT 기획 경험 기반 1인 풀스택 개발. 요구사항 정의부터 배포까지, 실제 동작하는 데모 8종으로 증명하는 포트폴리오.",
  openGraph: {
    type: "website",
    url: "https://jinslife.kr",
    siteName: "jinslife.kr",
    title: "진영화 — 기획하는 풀스택 개발자 | jinslife.kr",
    description:
      "14년 IT 기획 경험 기반 1인 풀스택 개발. 요구사항 정의부터 배포까지, 실제 동작하는 데모 8종으로 증명하는 포트폴리오.",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "진영화 — 기획하는 풀스택 개발자 | jinslife.kr",
    description:
      "14년 IT 기획 경험 기반 1인 풀스택 개발. 요구사항 정의부터 배포까지, 실제 동작하는 데모 8종으로 증명하는 포트폴리오.",
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
      className={`${hahmlet.variable} ${plexSansKr.variable} ${plexMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
