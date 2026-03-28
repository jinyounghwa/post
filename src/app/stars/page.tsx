import { getStarCategories, getAllStarRepos } from "@/lib/mdx";
import StarList from "@/components/stars/StarList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GitHub Stars",
  description:
    "실무에 도움이 되는 GitHub 레포지토리 큐레이션. AI, 개발도구, 프레임워크 등 카테고리별 정리.",
  openGraph: {
    type: "website",
    url: "https://jinslife.kr/stars/",
    title: "GitHub Stars | jinslife.kr",
    description:
      "실무에 도움이 되는 GitHub 레포지토리 큐레이션. AI, 개발도구, 프레임워크 등 카테고리별 정리.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GitHub Stars | jinslife.kr",
    description:
      "실무에 도움이 되는 GitHub 레포지토리 큐레이션. AI, 개발도구, 프레임워크 등 카테고리별 정리.",
  },
};

export default function StarsPage() {
  const categories = getStarCategories();
  const repos = getAllStarRepos();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-16">
      <section className="mb-10 md:mb-16">
        <h1 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl font-bold tracking-tight mb-4">
          GitHub <span className="text-accent-gradient">Stars</span>
        </h1>
        <p className="text-sub font-mono text-sm max-w-xl">
          내가 직접 Star한 레포지토리 중 실무에 도움이 되는 것들을 큐레이션.
          AI, 개발도구, 프레임워크 등 카테고리별로 정리합니다.
        </p>
      </section>

      <StarList
        repos={repos}
        categories={categories.map((c) => ({
          slug: c.slug,
          category: c.category,
        }))}
      />
    </div>
  );
}
