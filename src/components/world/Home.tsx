"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import type { MediaType, PortfolioItem } from "@/lib/portfolio-shared";
import {
  CAREER,
  CONTACT_EMAIL,
  DOMAINS,
  GITHUB_URL,
  PROCESS,
  SERVICES,
  STACK,
  STRENGTHS,
} from "@/lib/profile";

/** Home(DOM) → 3D 씬으로 매 프레임 넘기는 값. 리렌더 없이 ref로 공유 */
export interface SceneBus {
  chapter: number; // 0..CHAPTERS-1 사이 실수 (스크롤 위치)
  active: string | null; // 호버 중인 데모 slug
}

// three.js 번들은 클라이언트에서만 지연 로드
const CityScene = dynamic(() => import("./CityScene"), { ssr: false });

// WebGL 실패 시 3D만 빠지고 콘텐츠는 그대로
class WebGLBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

const CHAPTERS = ["INTRO", "STRENGTHS", "DEMOS", "PROFILE", "PROCESS", "STACK", "CONTACT"];
const NAV = [
  { name: "Portfolio", href: "/portfolio/" },
  { name: "About", href: "/about/" },
  { name: "News", href: "/news/" },
  { name: "Stars", href: "/stars/" },
];
const MEDIA_LABEL: Record<MediaType, string> = {
  youtube: "영상 보기",
  appstore: "App Store",
  "live-demo": "라이브 데모",
};
const pad = (n: number) => String(n).padStart(2, "0");

function Kicker({ index }: { index: number }) {
  return (
    <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-[#F0A500]">
      {pad(index)} / {CHAPTERS[index]}
    </p>
  );
}

export default function Home({ items }: { items: PortfolioItem[] }) {
  const bus = useRef<SceneBus>({ chapter: 0, active: null });
  const sections = useRef<(HTMLElement | null)[]>([]);
  const [chapter, setChapter] = useState(0);

  // 스크롤 → 챕터 실수값: 뷰포트 중앙이 섹션 중심 사이 어디쯤인지 보간
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const mid = window.scrollY + window.innerHeight / 2;
      const centers = sections.current.map((el) => (el ? el.offsetTop + el.offsetHeight / 2 : 0));
      let t = 0;
      if (mid >= centers[centers.length - 1]) t = centers.length - 1;
      else
        for (let i = 0; i < centers.length - 1; i++) {
          if (mid < centers[i + 1]) {
            t = i + Math.max(0, (mid - centers[i]) / (centers[i + 1] - centers[i]));
            break;
          }
        }
      bus.current.chapter = t;
      setChapter(Math.round(t));
    };
    const onScroll = () => {
      raf ||= requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const reg = (i: number) => (el: HTMLElement | null) => {
    sections.current[i] = el;
  };
  const goTo = (i: number) => sections.current[i]?.scrollIntoView({ behavior: "smooth" });

  // 섹션은 클릭이 3D(타워)로 통과하도록 pointer-events-none, 실제 콘텐츠만 auto
  const section = "relative pointer-events-none min-h-screen flex items-center py-28";
  const panel = "pointer-events-auto w-full max-w-xl";

  return (
    <div className="relative min-h-screen w-full bg-[#0A0A0A] text-[#EDEAE2] selection:bg-[#F0A500] selection:text-[#0A0A0A]">
      {/* 3D 월드 */}
      <div className="fixed inset-0 z-0" aria-hidden>
        <WebGLBoundary>
          <CityScene items={items} bus={bus} />
        </WebGLBoundary>
      </div>
      {/* 가독성 그라디언트: 좌측 텍스트 컬럼만 어둡게 */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] bg-[#0A0A0A]/65 md:bg-transparent md:bg-linear-to-r md:from-[#0A0A0A]/95 md:via-[#0A0A0A]/55 md:to-transparent"
        aria-hidden
      />

      {/* HUD */}
      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-[#0A0A0A]/60 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
          <Link href="/" className="font-world text-lg font-bold tracking-tight">
            jin<span className="text-[#F0A500]">slife</span>
          </Link>
          <span className="hidden font-mono text-[11px] tracking-[0.2em] text-white/45 lg:block">
            {pad(chapter)} / {pad(CHAPTERS.length - 1)} — {CHAPTERS[chapter]}
          </span>
          <div className="flex items-center gap-4 sm:gap-6">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="hidden font-mono text-xs text-white/60 transition-colors hover:text-white sm:inline"
              >
                {n.name}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => goTo(CHAPTERS.length - 1)}
              className="cursor-pointer bg-[#F0A500] px-4 py-2 font-mono text-xs font-medium text-[#0A0A0A] transition-colors hover:bg-white"
            >
              Contact
            </button>
          </div>
        </nav>
      </header>

      {/* 챕터 레일 */}
      <aside className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        {CHAPTERS.map((name, i) => (
          <button
            key={name}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`${name} 섹션으로 이동`}
            aria-current={chapter === i ? "step" : undefined}
            className="group flex cursor-pointer items-center justify-end gap-3"
          >
            <span
              className={`font-mono text-[10px] tracking-[0.2em] transition-opacity ${
                chapter === i ? "text-[#F0A500] opacity-100" : "text-white/50 opacity-0 group-hover:opacity-100"
              }`}
            >
              {name}
            </span>
            <span
              className={`block h-px transition-all ${chapter === i ? "w-8 bg-[#F0A500]" : "w-4 bg-white/30 group-hover:bg-white/70"}`}
            />
          </button>
        ))}
      </aside>

      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        {/* 00 INTRO */}
        <section ref={reg(0)} className={section}>
          <div className={panel}>
            <p className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] tracking-[0.2em] text-white/55">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#F0A500]" />
              진영화 — WEB PLANNER &amp; DEVELOPER
              <span className="text-white/25">|</span>
              <span className="text-[#F0A500]">IT 기획 14년 · 수주 가능</span>
            </p>
            <h1 className="font-world mb-6 text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-6xl">
              기획서만 쓰지 않습니다.
              <br />
              데모를 만들어 보여주는,
              <br />
              <span className="text-[#F0A500]">개발을 하는 기획자</span>
            </h1>
            <p className="mb-10 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
              14년의 IT 기획 경험에 개발 역량을 얹어, 비즈니스 아이디어를 요구사항 정의부터 직접
              보여드립니다. 경력 소개 대신, 실제로 동작하는 데모 {items.length}종을 먼저 보여드립니다.
              빛나는 타워 하나하나가 실제 프로젝트입니다.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => goTo(2)}
                className="cursor-pointer bg-[#F0A500] px-6 py-3.5 font-mono text-xs font-medium text-[#0A0A0A] transition-colors hover:bg-white"
              >
                데모 {items.length}종 둘러보기 ↓
              </button>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="border border-white/30 px-6 py-3.5 font-mono text-xs transition-colors hover:border-[#F0A500] hover:text-[#F0A500]"
              >
                프로젝트 문의
              </a>
            </div>
          </div>
        </section>

        {/* 01 STRENGTHS */}
        <section ref={reg(1)} className={section}>
          <div className={panel}>
            <Kicker index={1} />
            <h2 className="font-world mb-10 text-3xl font-bold sm:text-4xl">왜 진영화에게 맡기는가</h2>
            <ol className="space-y-8">
              {STRENGTHS.map((s) => (
                <li key={s.no} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-white/10 pt-6">
                  <span className="font-world text-2xl font-bold text-[#F0A500]">{s.no}</span>
                  <div>
                    <h3 className="font-world mb-2 text-lg font-bold">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-white/65">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 02 DEMOS */}
        <section ref={reg(2)} id="demos" className={section}>
          <div className={panel}>
            <Kicker index={2} />
            <h2 className="font-world mb-3 text-3xl font-bold sm:text-4xl">동작하는 데모가 곧 이력서</h2>
            <p className="mb-10 text-sm text-white/55">
              카드에 마우스를 올리면 도시의 해당 타워가 켜지고, 타워를 누르면 카드로 이동합니다.
            </p>
            <ul className="space-y-4">
              {items.map((item, i) => (
                <li
                  key={item.slug}
                  id={`demo-${item.slug}`}
                  onMouseEnter={() => (bus.current.active = item.slug)}
                  onMouseLeave={() => (bus.current.active = null)}
                  onFocus={() => (bus.current.active = item.slug)}
                  onBlur={() => (bus.current.active = null)}
                  className="scroll-mt-28 border border-white/10 bg-[#0A0A0A]/75 p-5 backdrop-blur-sm transition-colors hover:border-[#F0A500] focus-within:border-[#F0A500]"
                >
                  <div className="mb-2 flex items-center justify-between font-mono text-[11px]">
                    <span className="text-[#F0A500]">{pad(i + 1)}</span>
                    <span className="text-white/45">{item.categoryLabel}</span>
                  </div>
                  <h3 className="font-world mb-2 text-lg font-bold leading-snug">{item.title}</h3>
                  <p className="mb-2 text-sm leading-relaxed text-white/70">{item.summary}</p>
                  <p className="mb-4 text-xs leading-relaxed text-white/45">{item.highlight}</p>
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {item.stack.map((t) => (
                      <span key={t} className="border border-white/15 px-2 py-0.5 font-mono text-[10px] text-white/55">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-3">
                    <span className="font-mono text-[11px] text-white/45">{item.role}</span>
                    <a
                      href={item.mediaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 font-mono text-xs text-[#F0A500] hover:text-white"
                    >
                      {MEDIA_LABEL[item.mediaType]} ↗
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="/portfolio/"
              className="mt-8 inline-block font-mono text-xs text-white/60 transition-colors hover:text-[#F0A500]"
            >
              영상·라이브 데모 임베드로 자세히 보기 →
            </Link>
          </div>
        </section>

        {/* 03 PROFILE */}
        <section ref={reg(3)} className={section}>
          <div className={panel}>
            <Kicker index={3} />
            <h2 className="font-world mb-2 text-3xl font-bold sm:text-4xl">
              진영화 <span className="text-[#F0A500]">JinYoungHwa</span>
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-white/65">
              기획자의 시각으로 개발하는 엔지니어. 요구사항 정의(목표 → 사용자 → 핵심기능 → 스코프)부터
              배포까지 전 과정을 책임집니다.
            </p>
            <dl className="mb-10 grid grid-cols-4 border-y border-white/10 py-5 text-center">
              {[
                ["14+", "Years"],
                [String(items.length), "Demos"],
                ["1", "App Store"],
                [String(DOMAINS.length), "Domains"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd className="font-world text-2xl font-bold text-[#F0A500]">{v}</dd>
                  <dd className="font-mono text-[10px] text-white/45">{l}</dd>
                </div>
              ))}
            </dl>
            <ol className="mb-10 space-y-5 border-l border-[#F0A500]/50 pl-6">
              {CAREER.map((c) => (
                <li key={c.title} className="relative">
                  <span className="absolute -left-[28.5px] top-1.5 h-2 w-2 rounded-full bg-[#F0A500]" aria-hidden />
                  <p className="font-mono text-[11px] text-white/45">{c.period}</p>
                  <h3 className="font-world font-bold">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{c.desc}</p>
                </li>
              ))}
            </ol>
            <h3 className="mb-3 font-mono text-[11px] tracking-[0.2em] text-white/45">DOMAINS</h3>
            <div className="flex flex-wrap gap-2">
              {DOMAINS.map((d, i) => (
                <span
                  key={d}
                  className={`border px-3 py-1.5 font-mono text-xs ${
                    i === 0 ? "border-[#F0A500] text-[#F0A500]" : "border-white/15 text-white/65"
                  }`}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 04 PROCESS + SERVICES */}
        <section ref={reg(4)} className={section}>
          <div className={panel}>
            <Kicker index={4} />
            <h2 className="font-world mb-10 text-3xl font-bold sm:text-4xl">기획부터 배포까지, 한 사람이</h2>
            <ol className="mb-12 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2">
              {PROCESS.map((p) => (
                <li key={p.step} className="bg-[#0A0A0A]/85 p-5">
                  <p className="mb-2 font-mono text-[11px] text-[#F0A500]">STEP {p.step}</p>
                  <h3 className="font-world mb-2 font-bold">{p.title}</h3>
                  <p className="text-xs leading-relaxed text-white/60">{p.desc}</p>
                </li>
              ))}
            </ol>
            <h3 className="mb-4 font-mono text-[11px] tracking-[0.2em] text-white/45">SERVICES</h3>
            <div className="space-y-6">
              {SERVICES.map((s) => (
                <div key={s.title} className="border-t border-white/10 pt-4">
                  <h4 className="font-world mb-2 font-bold">{s.title}</h4>
                  <p className="mb-2 text-sm leading-relaxed text-white/60">{s.items.join(" · ")}</p>
                  <Link href={s.link.href} className="font-mono text-[11px] text-[#F0A500] hover:text-white">
                    {s.link.label} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 STACK */}
        <section ref={reg(5)} className={section}>
          <div className={panel}>
            <Kicker index={5} />
            <h2 className="font-world mb-4 text-3xl font-bold sm:text-4xl">Tech Stack</h2>
            <p className="mb-8 text-sm leading-relaxed text-white/60">
              네이티브 iOS부터 NestJS 백엔드, 로컬 LLM까지 — 바이브 코딩 기반의 빠른 프로토타이핑으로
              검증한 스택입니다.
            </p>
            <div className="flex flex-wrap gap-2">
              {STACK.map((t) => (
                <span
                  key={t}
                  className="border border-white/15 bg-[#0A0A0A]/60 px-3 py-1.5 font-mono text-xs text-white/75 transition-colors hover:border-[#F0A500] hover:text-[#F0A500]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 06 CONTACT */}
        <section ref={reg(6)} className={`${section} flex-col !items-start justify-center`}>
          <div className={panel}>
            <Kicker index={6} />
            <h2 className="font-world mb-6 text-3xl font-extrabold leading-tight sm:text-5xl">
              아이디어만 있어도 됩니다.
              <br />
              <span className="text-[#F0A500]">요구사항 정의부터</span> 함께 시작합니다.
            </h2>
            <p className="mb-10 text-sm leading-relaxed text-white/65">
              MVP 외주, 서비스 리뉴얼, WMS/커머스 도메인 프로젝트 — 무엇이든 먼저 목표와 스코프를 정리해
              드립니다. 24시간 내 답변.
            </p>
            <div className="mb-14 flex flex-wrap gap-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="bg-[#F0A500] px-6 py-3.5 font-mono text-xs font-medium text-[#0A0A0A] transition-colors hover:bg-white"
              >
                {CONTACT_EMAIL} →
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 px-6 py-3.5 font-mono text-xs transition-colors hover:border-[#F0A500] hover:text-[#F0A500]"
              >
                GitHub ↗
              </a>
            </div>
            <p className="border-t border-white/10 pt-5 text-xs leading-relaxed text-white/45">
              최신 AI 트렌드도 계속 추적합니다 —{" "}
              <Link href="/news/" className="text-white/70 underline-offset-4 hover:text-[#F0A500] hover:underline">
                AI 뉴스
              </Link>
              {" · "}
              <Link href="/stars/" className="text-white/70 underline-offset-4 hover:text-[#F0A500] hover:underline">
                GitHub Stars 큐레이션
              </Link>
            </p>
          </div>
          <nav className="pointer-events-auto mt-16 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-white/55">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="transition-colors hover:text-[#F0A500]">
                {n.name}
              </Link>
            ))}
          </nav>
          <p className="pointer-events-auto mt-4 font-mono text-[11px] text-white/30">
            © {new Date().getFullYear()} jinslife.kr — 기획부터 배포까지, 1인 풀스택 개발
          </p>
        </section>
      </main>
    </div>
  );
}
