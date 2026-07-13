import type { Metadata } from "next";
import { getSortedNews, getAllTags } from "@/lib/mdx";
import NewsList from "@/components/news/NewsList";

export const metadata: Metadata = {
  title: "News — Claude & AI 뉴스",
  description:
    "Claude, MCP, AI 에이전트 생태계의 핵심 소식을 직접 선별하고 요약한 개발자 관점의 뉴스 피드.",
  openGraph: {
    type: "website",
    url: "https://jinslife.kr/news/",
    title: "News — Claude & AI 뉴스 | jinslife.kr",
    description:
      "Claude, MCP, AI 에이전트 생태계의 핵심 소식을 직접 선별하고 요약한 개발자 관점의 뉴스 피드.",
  },
};

export default function NewsPage() {
  const news = getSortedNews();
  const allTags = getAllTags();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-16">
      <section className="mb-10 md:mb-16">
        <p className="spec-label mb-3">APPENDIX A — NEWS</p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Claude & AI <span className="text-accent">News</span>
        </h1>
        <p className="text-sub text-sm max-w-xl leading-relaxed">
          Claude, MCP, AI 에이전트 생태계의 핵심 소식을 큐레이션합니다.
          직접 선별하고 요약한 개발자 관점의 뉴스 피드.
        </p>
      </section>

      <NewsList news={news} allTags={allTags} />
    </div>
  );
}
