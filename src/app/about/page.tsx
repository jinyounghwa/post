import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "14년차 IT 기획 개발자 진영화. 풀스택 웹, 모바일 앱, AI/LLM 서비스 개발.",
  openGraph: {
    type: "profile",
    url: "https://jinslife.kr/about/",
    title: "About | jinslife.kr",
    description:
      "14년차 IT 기획 개발자 진영화. 풀스택 웹, 모바일 앱, AI/LLM 서비스 개발.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "진영화 — AI 개발자" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | jinslife.kr",
    description:
      "14년차 IT 기획 개발자 진영화. 풀스택 웹, 모바일 앱, AI/LLM 서비스 개발.",
    images: ["/og-image.png"],
  },
};

const services = [
  {
    title: "풀스택 웹 개발",
    items: [
      "Next.js / React 기반 웹 애플리케이션",
      "쇼핑몰 구축 (결제 시스템 연동)",
      "CMS/관리자 시스템 개발",
      "반응형 웹 디자인",
    ],
  },
  {
    title: "모바일 앱 개발",
    items: [
      "iOS/Android 크로스 플랫폼 (React Native)",
      "네이티브 iOS (Swift)",
      "앱스토어 출시 및 운영",
      "푸시 알림 등 핵심 기능",
    ],
  },
  {
    title: "AI/LLM 서비스",
    items: [
      "AI 댓글 자동 작성 (고객 문의 대응)",
      "챗봇 개발 (로컬 AI + API 하이브리드)",
      "RAG 기반 문서 검색 시스템",
      "Ollama + Claude API 결합 솔루션",
    ],
  },
];

const projects = [
  {
    title: "AI 구매 자동화",
    desc: "안티그라피티 스킬 기반 제품 분석 → 리포트 → 자동 메일 발송 파이프라인",
    tags: ["AI Agent", "Python", "Automation"],
  },
  {
    title: "AI 공부 보조 챗봇",
    desc: "클라우드 API 없이 로컬 구동되는 실시간 학습 보조 에이전트",
    tags: ["Local LLM", "Next.js", "TypeScript"],
  },
  {
    title: "UI 제네레이터",
    desc: "자연어 요구사항 → 실제 동작하는 UI 컴포넌트 코드 실시간 생성",
    tags: ["React", "AI Code Generation", "AST Parsing"],
  },
  {
    title: "AI 에이전트 쇼핑몰",
    desc: "고객 대화 기반 성향 분석 → 맞춤 상품 제안 → 결제까지 에이전트 커머스",
    tags: ["Next.js", "AI Agent", "E-Commerce"],
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-16">
      {/* Header */}
      <section className="mb-12 md:mb-20">
        <h1 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl font-bold tracking-tight mb-6">
          About <span className="text-accent-gradient">Me</span>
        </h1>
        <div className="max-w-2xl space-y-4">
          <p className="text-foreground leading-relaxed font-mono text-sm">
            <strong className="text-accent">진영화</strong> (JinYoungHwa)
          </p>
          <p className="text-sub leading-relaxed font-mono text-sm">
            14년차 IT 기획 개발자. 기획자의 시각으로 개발하는 엔지니어.
            비즈니스 목표와 기술 구현을 동시에 고려하며, 요구사항 분석부터
            배포까지 전 과정을 책임집니다.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-12 md:mb-20 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { value: "14+", label: "Years Experience" },
          { value: "Full", label: "Stack Developer" },
          { value: "AI/LLM", label: "Integration" },
          { value: "iOS", label: "App Published" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="border border-border rounded-lg p-6 text-center"
          >
            <div className="font-[family-name:var(--font-syne)] text-2xl font-bold text-accent mb-1">
              {stat.value}
            </div>
            <div className="text-xs text-sub font-mono">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Services */}
      <section className="mb-12 md:mb-20">
        <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold mb-8">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-border rounded-lg p-6"
            >
              <h3 className="font-[family-name:var(--font-syne)] font-semibold mb-4">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-sub font-mono flex items-start gap-2"
                  >
                    <span className="text-accent mt-1">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-12 md:mb-20">
        <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold mb-8">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "NestJS",
            "Python",
            "Swift",
            "React Native",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "AWS",
            "Docker",
            "Tailwind CSS",
            "Ollama",
            "Claude API",
            "LangChain",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-card border border-border rounded text-sm font-mono text-sub hover:text-accent hover:border-accent transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-12 md:mb-20">
        <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold mb-8">
          Selected Projects
        </h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-border rounded-lg p-6 card-hover"
            >
              <h3 className="font-[family-name:var(--font-syne)] font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-sub font-mono mb-3">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 border border-border rounded text-sub font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold mb-8">
          Contact
        </h2>
        <div className="border border-border rounded-lg p-5 sm:p-8 space-y-4">
          <a
            href="mailto:timotolkie@gmail.com"
            className="flex items-center gap-3 text-sm font-mono text-sub hover:text-accent transition-colors"
          >
            <span className="text-accent">→</span>
            timotolkie@gmail.com
          </a>
          <a
            href="https://github.com/jinyounghwa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm font-mono text-sub hover:text-accent transition-colors"
          >
            <span className="text-accent">→</span>
            github.com/jinyounghwa
          </a>
          <p className="text-xs text-sub font-mono pt-4 border-t border-border">
            프로젝트 문의, 협업 제안 환영합니다. 24시간 내 답변 드리겠습니다.
          </p>
        </div>
      </section>
    </div>
  );
}
