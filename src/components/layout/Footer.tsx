import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="font-[family-name:var(--font-syne)] text-sm font-bold tracking-tight"
            >
              jin<span className="text-accent">slife</span>.kr
            </Link>
            <span className="text-xs text-sub font-mono">
              AI Developer Curation Hub
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-sub font-mono">
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
