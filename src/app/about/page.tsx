import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — 기획하는 개발자",
  description:
    "진영화 — Web Planner & Developer. 14년 IT 기획 경험, 물류/WMS·이커머스·공공데이터 도메인, 요구사항 정의부터 배포까지.",
  openGraph: {
    type: "profile",
    url: "https://jinslife.kr/about/",
    title: "About | jinslife.kr",
    description:
      "진영화 — Web Planner & Developer. 14년 IT 기획 경험, 요구사항 정의부터 배포까지.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | jinslife.kr",
    description:
      "진영화 — Web Planner & Developer. 14년 IT 기획 경험, 요구사항 정의부터 배포까지.",
  },
};

const CAREER = [
  { period: "시작", title: "법무행정", desc: "문서와 절차의 세계에서 출발 — 요구사항을 정확한 문장으로 만드는 훈련" },
  { period: "기획 전환", title: "VR / AR 웹기획", desc: "신기술 서비스 기획 — 기술 제약과 사용자 경험 사이의 균형 설계" },
  { period: "도메인 심화", title: "물류 / WMS", desc: "입출고·재고·검수 등 물류 현장 시스템 기획 — 가장 깊은 도메인 자산" },
  { period: "확장", title: "이커머스", desc: "주문·쿠폰·클레임 생명주기 설계 — 커머스와 물류를 잇는 시야" },
  { period: "현재", title: "AI 활용 개발", desc: "기획 경험 위에 개발 역량을 얹어, 혼자서 기획부터 배포까지 완주" },
];

const DOMAINS = ["물류 / WMS", "이커머스", "헬스케어 커머스", "AR / VR", "공공데이터"];

const PROCESS = [
  { step: "01", title: "요구사항 정의", desc: "목표 → 사용자 → 핵심기능 → 스코프 순서로 문서화. 만들기 전에 '왜'부터 합의합니다." },
  { step: "02", title: "기획 / 설계", desc: "화면 설계와 데이터 모델, 상태 흐름을 정의합니다. 개발자가 기획하므로 설계가 곧 구현 가능한 명세입니다." },
  { step: "03", title: "개발 / 검증", desc: "빠른 프로토타이핑으로 동작하는 버전을 먼저 보여드리고, 피드백을 반영하며 완성도를 올립니다." },
  { step: "04", title: "배포 / 운영", desc: "배포 후 끝이 아니라 운영 관점의 개선까지. 출시된 앱과 라이브 데모가 그 증거입니다." },
];

const SERVICES = [
  {
    title: "풀스택 웹 개발",
    items: ["Next.js / React 웹 애플리케이션", "쇼핑몰 구축 (쿠폰·주문·관리자)", "CMS / 관리자 시스템", "반응형 웹"],
    link: { href: "/portfolio/", label: "사례: 쇼핑몰 데모, WMS 대시보드" },
  },
  {
    title: "모바일 앱 개발",
    items: ["네이티브 iOS (Swift)", "크로스 플랫폼 (React Native)", "앱스토어 출시 및 운영", "푸시 알림 등 핵심 기능"],
    link: { href: "/portfolio/", label: "사례: Todo Fantasy (출시작)" },
  },
  {
    title: "AI / LLM 서비스",
    items: ["로컬 AI + API 하이브리드 챗봇", "AI 에이전트/스킬 업무 자동화", "RAG 기반 문서 검색", "Ollama + Claude API 결합"],
    link: { href: "/portfolio/", label: "사례: 로컬 AI 챗봇, AI 구매분석" },
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-16">
      {/* Header */}
      <section className="mb-12 md:mb-20 relative">
        <p className="spec-label mb-3">03 — 담당자 소개</p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight mb-6">
          진영화 <span className="text-accent">JinYoungHwa</span>
        </h1>
        <div className="max-w-2xl space-y-4">
          <p className="text-foreground font-medium text-sm">
            Web Planner &amp; Developer
          </p>
          <p className="text-sub leading-relaxed text-sm">
            기획자의 시각으로 개발하는 엔지니어. 비즈니스 목표와 기술 구현을 동시에 고려하며,
            요구사항 정의(목표 → 사용자 → 핵심기능 → 스코프)부터 배포까지 전 과정을 책임집니다.
          </p>
        </div>
        <span className="seal absolute right-0 top-8 w-16 h-16 sm:w-20 sm:h-20 text-sm sm:text-base" aria-hidden>
          진영화
        </span>
      </section>

      {/* Stats */}
      <section className="mb-12 md:mb-20 grid grid-cols-2 md:grid-cols-4 border border-foreground divide-x divide-border bg-card">
        {[
          { value: "14+", label: "Years in IT" },
          { value: "8", label: "Live Demos" },
          { value: "1", label: "App Store 출시" },
          { value: "5", label: "도메인 경험" },
        ].map((stat, i) => (
          <div key={stat.label} className={`p-6 text-center ${i >= 2 ? "border-t md:border-t-0 border-border" : ""}`}>
            <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-accent mb-1">
              {stat.value}
            </div>
            <div className="doc-cell text-sub">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Career Timeline */}
      <section className="mb-12 md:mb-20">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-8">
          경력 — 기획에서 개발로
        </h2>
        <div className="border-l-2 border-foreground pl-6 space-y-8">
          {CAREER.map((item) => (
            <div key={item.title} className="relative">
              <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 bg-accent rounded-full" aria-hidden />
              <div className="doc-cell text-blue mb-1">{item.period}</div>
              <h3 className="font-[family-name:var(--font-display)] font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-sub leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Domains */}
      <section className="mb-12 md:mb-20">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-4">
          도메인 포트폴리오
        </h2>
        <p className="text-sm text-sub mb-6 max-w-xl leading-relaxed">
          기술 스택은 배우면 되지만, 도메인 지식은 현장에서만 쌓입니다.
          특히 물류/WMS는 실무 경력이 그대로 데모에 녹아 있는 가장 깊은 영역입니다.
        </p>
        <div className="flex flex-wrap gap-2">
          {DOMAINS.map((domain, i) => (
            <span
              key={domain}
              className={`doc-cell px-3 py-1.5 border ${
                i === 0 ? "border-accent text-accent bg-accent/5" : "border-border bg-card text-sub"
              }`}
            >
              {domain}
            </span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mb-12 md:mb-20">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-8">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div key={service.title} className="border border-border bg-card p-6 flex flex-col">
              <h3 className="font-[family-name:var(--font-display)] font-semibold mb-4">
                {service.title}
              </h3>
              <ul className="space-y-2 mb-5">
                {service.items.map((item) => (
                  <li key={item} className="text-sm text-sub flex items-start gap-2 leading-relaxed">
                    <span className="text-accent mt-0.5">›</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={service.link.href}
                className="doc-cell text-blue hover:text-accent transition-colors mt-auto"
              >
                {service.link.label} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mb-12 md:mb-20">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-8">
          프로젝트 진행 프로세스
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border border border-border">
          {PROCESS.map((process) => (
            <div key={process.step} className="bg-card p-6">
              <div className="doc-cell text-blue mb-3">STEP {process.step}</div>
              <h3 className="font-[family-name:var(--font-display)] font-semibold mb-2">
                {process.title}
              </h3>
              <p className="text-sm text-sub leading-relaxed">{process.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-12 md:mb-20">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-8">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            "TypeScript",
            "Next.js",
            "React",
            "NestJS",
            "Node.js",
            "Swift",
            "React Native",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "Tailwind CSS",
            "Docker",
            "AWS",
            "Ollama",
            "Claude API",
            "LangChain",
          ].map((tech) => (
            <span
              key={tech}
              className="doc-cell px-3 py-1.5 bg-card border border-border text-sub hover:text-blue hover:border-blue transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-8">
          Contact
        </h2>
        <div className="border border-foreground bg-card p-5 sm:p-8 space-y-4">
          <a
            href="mailto:timotolkie@gmail.com"
            className="flex items-center gap-3 text-sm text-sub hover:text-accent transition-colors"
          >
            <span className="text-accent">→</span>
            timotolkie@gmail.com
          </a>
          <a
            href="https://github.com/jinyounghwa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-sub hover:text-accent transition-colors"
          >
            <span className="text-accent">→</span>
            github.com/jinyounghwa
          </a>
          <p className="text-xs text-sub pt-4 border-t border-border leading-relaxed">
            프로젝트 문의, 협업 제안 환영합니다. 24시간 내 답변 드리겠습니다.
          </p>
        </div>
      </section>
    </div>
  );
}
