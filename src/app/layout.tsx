import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jinyounghwa.github.io/post"),
  title: "JinYoungHwa | Developer & Product Planner",
  description: "14년의 기획 경험과 최신 개발 기술로 완성도 높은 솔루션을 제공하는 1인 풀스택 개발팀",
  keywords: ["풀스택 개발", "AI 개발", "LLM", "Next.js", "NestJS", "iOS 개발", "기획자 출신 개발자"],
  authors: [{ name: "JinYoungHwa" }],
  openGraph: {
    title: "JinYoungHwa | Developer & Product Planner",
    description: "14년의 기획 경험과 최신 개발 기술로 완성도 높은 솔루션을 제공하는 1인 풀스택 개발팀",
    url: "https://jinyounghwa.github.io/post", // Example URL, replace if needed
    siteName: "JinYoungHwa Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "JinYoungHwa Developer Portfolio",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JinYoungHwa | Developer & Product Planner",
    description: "14년의 기획 경험과 최신 개발 기술로 완성도 높은 솔루션을 제공하는 1인 풀스택 개발팀",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <Navbar />
        <main>{children}</main>
        <footer className="py-12 border-t border-white/5 bg-zinc-950/50">
          <div className="max-w-7xl mx-auto px-6 text-center text-zinc-500 text-sm">
            <p>© 2025 JinYoungHwa. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
