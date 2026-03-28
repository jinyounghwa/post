import type { Metadata } from "next";
import { Syne, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jinslife.kr"),
  title: {
    default: "jinslife.kr — AI Developer Curation Hub",
    template: "%s | jinslife.kr",
  },
  description:
    "AI 개발자 큐레이션 허브. Claude/AI 뉴스, GitHub Stars 큐레이션, 그리고 개발자 진영화의 이야기.",
  openGraph: {
    type: "website",
    url: "https://jinslife.kr",
    siteName: "jinslife.kr",
    title: "jinslife.kr — AI Developer Curation Hub",
    description:
      "AI 개발자 큐레이션 허브. Claude/AI 뉴스, GitHub Stars 큐레이션, 그리고 개발자 진영화의 이야기.",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "jinslife.kr — AI Developer Curation Hub",
    description:
      "AI 개발자 큐레이션 허브. Claude/AI 뉴스, GitHub Stars 큐레이션, 그리고 개발자 진영화의 이야기.",
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
      className={`${syne.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
