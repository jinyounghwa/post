import Link from "next/link";
import { getSortedPortfolio } from "@/lib/portfolio";
import PortfolioCard from "@/components/portfolio/PortfolioCard";

const STRENGTHS = [
  {
    no: "01",
    title: "원스톱 솔루션",
    desc: "요구사항 정의 → 기획 → 개발 → 배포까지 한 사람이 책임집니다. 기획자와 개발자 사이의 전달 손실이 없습니다.",
  },
  {
    no: "02",
    title: "비즈니스 중심 개발",
    desc: "14년 IT 기획 경험으로 '왜 만드는가'부터 묻습니다. 기술이 아니라 비즈니스 목표에 맞춰 스코프를 설계합니다.",
  },
  {
    no: "03",
    title: "최신 기술 적용",
    desc: "AI/LLM, NestJS, Next.js 등 최신 스택을 실제 데모로 검증해 사용합니다. 트렌드를 뉴스로만 아는 게 아니라 직접 만듭니다.",
  },
];

const STACK = [
  "TypeScript",
  "Next.js",
  "React",
  "NestJS",
  "Swift (iOS)",
  "PostgreSQL",
  "Tailwind CSS",
  "Ollama / Local LLM",
  "Claude API",
  "AI Agent / Skills",
];

// 도메인 다양성 우선: 쇼핑몰, WMS, Todo Fantasy, 공공데이터
const HIGHLIGHT_SLUGS = ["shopping-mall-demo", "wms-dashboard", "todo-fantasy", "public-data-chart"];

export default function HomePage() {
  const portfolio = getSortedPortfolio();
  const highlights = HIGHLIGHT_SLUGS.map((slug) =>
    portfolio.find((item) => item.slug === slug)
  ).filter((item) => item !== undefined);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      {/* ===== Hero: 기획서 표지 ===== */}
      <section className="py-12 md:py-20">
        {/* 문서 메타 헤더 */}
        <div className="fade-up grid grid-cols-2 sm:grid-cols-4 border border-foreground divide-x divide-border bg-card mb-10 md:mb-14">
          {[
            ["문서구분", "이력 및 소개서"],
            ["작성자", "진영화"],
            ["경력", "IT 기획 14년"],
            ["상태", "수주 가능"],
          ].map(([label, value], i) => (
            <div key={label} className={`px-4 py-3 ${i >= 2 ? "border-t sm:border-t-0 border-border" : ""}`}>
              <div className="doc-cell text-sub mb-1">{label}</div>
              <div className={`text-sm font-medium ${value === "수주 가능" ? "text-accent" : ""}`}>
                {value}
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <p className="spec-label mb-4 fade-up">01 — 제안 개요</p>
          <h1 className="fade-up fade-up-delay-1 font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.15] mb-6 max-w-3xl">
            기획서만 쓰지 않습니다.
            <br />
            직접 만들어서 증명하는,
            <br />
            <span className="text-accent">개발을 좀 하는 기획자</span>
          </h1>
          <p className="fade-up fade-up-delay-2 text-sub text-sm sm:text-base max-w-xl leading-relaxed mb-10">
            14년의 IT 기획 경험에 개발 역량을 얹어, 비즈니스 아이디어를 요구사항 정의부터
            배포까지 직접 완성합니다. 경력 소개 대신, 실제로 동작하는 데모 8종을 먼저 보여드립니다.
          </p>

          {/* 시그니처: 도장 */}
          <span
            className="seal seal-animate absolute right-0 top-0 sm:top-4 w-20 h-20 sm:w-24 sm:h-24 text-lg sm:text-xl"
            aria-hidden
          >
            진영화
          </span>

          <div className="fade-up fade-up-delay-3 flex flex-wrap gap-3">
            <Link
              href="/portfolio/"
              className="doc-cell px-6 py-3.5 bg-foreground text-background hover:bg-accent transition-colors"
            >
              데모 8종 보기 →
            </Link>
            <a
              href="mailto:timotolkie@gmail.com"
              className="doc-cell px-6 py-3.5 border border-foreground hover:border-accent hover:text-accent transition-colors"
            >
              프로젝트 문의
            </a>
          </div>
        </div>
      </section>

      {/* ===== 강점 3카드 ===== */}
      <section className="py-12 md:py-16 border-t rule-strong">
        <p className="spec-label mb-3">02 — 핵심 강점</p>
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold mb-10">
          왜 1인 팀에게 맡기는가
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STRENGTHS.map((strength) => (
            <div key={strength.no} className="border border-border bg-card p-6">
              <div className="doc-cell text-blue mb-4">강점 {strength.no}</div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-3">
                {strength.title}
              </h3>
              <p className="text-sm text-sub leading-relaxed">{strength.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Portfolio 하이라이트 ===== */}
      <section className="py-12 md:py-16 border-t rule-strong">
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <p className="spec-label mb-3">03 — 증빙 자료</p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold">
              동작하는 데모가 곧 이력서
            </h2>
          </div>
          <Link href="/portfolio/" className="doc-cell text-blue hover:text-accent transition-colors shrink-0 pb-1">
            전체 8개 보기 →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item) => (
            <PortfolioCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      {/* ===== 기술 스택 ===== */}
      <section className="py-12 md:py-16 border-t rule-strong">
        <p className="spec-label mb-3">04 — 기술 명세</p>
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold mb-8">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {STACK.map((tech) => (
            <span
              key={tech}
              className="doc-cell px-3 py-1.5 bg-card border border-border text-sub hover:text-blue hover:border-blue transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ===== Contact CTA ===== */}
      <section className="py-12 md:py-20 border-t rule-strong mb-4">
        <div className="border border-foreground bg-card p-8 md:p-12 relative overflow-hidden">
          <p className="spec-label mb-4">05 — 계약 문의</p>
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold mb-4 max-w-xl leading-snug">
            아이디어만 있어도 됩니다.
            <br />
            요구사항 정의부터 함께 시작합니다.
          </h2>
          <p className="text-sub text-sm mb-8 max-w-lg leading-relaxed">
            MVP 외주, 서비스 리뉴얼, WMS/커머스 도메인 프로젝트 — 무엇이든 먼저 목표와 스코프를
            정리해 드립니다. 24시간 내 답변.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:timotolkie@gmail.com"
              className="doc-cell px-6 py-3.5 bg-accent text-card hover:bg-foreground transition-colors"
            >
              timotolkie@gmail.com →
            </a>
            <a
              href="https://github.com/jinyounghwa"
              target="_blank"
              rel="noopener noreferrer"
              className="doc-cell px-6 py-3.5 border border-foreground hover:border-accent hover:text-accent transition-colors"
            >
              GitHub ↗
            </a>
          </div>
          <span className="seal absolute -right-4 -bottom-4 w-28 h-28 text-sm opacity-15" aria-hidden>
            검토완료
          </span>
        </div>
      </section>
    </div>
  );
}
