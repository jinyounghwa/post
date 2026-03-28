import { getSortedNews, getAllTags } from "@/lib/mdx";
import NewsList from "@/components/news/NewsList";

export default function HomePage() {
  const news = getSortedNews();
  const allTags = getAllTags();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-16">
      <section className="mb-10 md:mb-16">
        <h1 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Claude & AI <span className="text-accent-gradient">News</span>
        </h1>
        <p className="text-sub font-mono text-sm max-w-xl">
          Claude, MCP, AI 에이전트 생태계의 핵심 소식을 큐레이션합니다.
          직접 선별하고 요약한 개발자 관점의 뉴스 피드.
        </p>
      </section>

      <NewsList news={news} allTags={allTags} />
    </div>
  );
}
