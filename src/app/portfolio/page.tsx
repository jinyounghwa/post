import type { Metadata } from "next";
import { getSortedPortfolio } from "@/lib/portfolio";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio — 데모 8종",
  description:
    "실제 동작하는 데모 8종. 이커머스, WMS, AI/LLM, 공공데이터, iOS 앱까지 — 기획부터 배포까지 직접 만든 결과물.",
  openGraph: {
    type: "website",
    url: "https://jinslife.kr/portfolio/",
    title: "Portfolio — 데모 8종 | jinslife.kr",
    description:
      "실제 동작하는 데모 8종. 이커머스, WMS, AI/LLM, 공공데이터, iOS 앱까지 — 기획부터 배포까지 직접 만든 결과물.",
  },
};

export default function PortfolioPage() {
  const items = getSortedPortfolio();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-16">
      <section className="mb-10 md:mb-14">
        <p className="spec-label mb-3">02 — PORTFOLIO</p>
        <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold tracking-tight mb-4">
          말 대신, <span className="text-accent">동작하는 데모 8종</span>
        </h1>
        <p className="text-sub text-sm max-w-xl leading-relaxed">
          경력 기술서가 아니라 실제로 돌아가는 결과물로 증명합니다.
          영상 데모는 재생 버튼으로, 라이브 데모는 새 창에서 직접 만져볼 수 있습니다.
        </p>
      </section>

      <PortfolioGrid items={items} />

      <section className="mt-14 border border-foreground bg-card p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-1">
            비슷한 걸 만들어야 하나요?
          </h2>
          <p className="text-sm text-sub">
            요구사항 정리부터 함께 시작할 수 있습니다. 24시간 내 답변 드립니다.
          </p>
        </div>
        <a
          href="mailto:timotolkie@gmail.com"
          className="doc-cell shrink-0 px-5 py-3 bg-accent text-card hover:bg-foreground transition-colors"
        >
          프로젝트 문의하기 →
        </a>
      </section>
    </div>
  );
}
