import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t rule-strong py-12 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="font-[family-name:var(--font-display)] text-sm font-bold tracking-tight"
            >
              jin<span className="text-accent">slife</span>.kr
            </Link>
            <span className="doc-cell text-sub">
              기획부터 배포까지 — 1인 풀스택 개발팀
            </span>
          </div>

          <div className="flex items-center gap-6 doc-cell text-sub">
            <Link href="/portfolio/" className="hover:text-accent transition-colors">
              Portfolio
            </Link>
            <a
              href="https://github.com/jinyounghwa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:timotolkie@gmail.com"
              className="hover:text-accent transition-colors"
            >
              Email
            </a>
            <span>&copy; {new Date().getFullYear()} jinslife.kr</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
