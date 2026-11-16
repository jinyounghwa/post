import Link from "next/link";
import type { Metadata } from "next";
import { CAREER, DOMAINS, PROCESS, SERVICES, STACK } from "@/lib/profile";

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
      <section className="mb-12 md:mb-20 grid grid-cols-2 md:grid-cols-4 border border-rule divide-x divide-border bg-card">
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
        <div className="border-l-2 border-rule pl-6 space-y-8">
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

      {/* Contact */}
      <section id="contact">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-8">
          Contact
        </h2>
        <div className="border border-rule bg-card p-5 sm:p-8 space-y-4">
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
