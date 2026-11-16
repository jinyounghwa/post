import Link from "next/link";
import { getSortedPortfolio } from "@/lib/portfolio";
import { CONTACT_EMAIL, GITHUB_URL, NAV } from "@/lib/profile";
import Backdrop from "@/components/world/Backdrop";
import Hud from "@/components/world/Hud";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#0A0A0A]">
      <Backdrop items={getSortedPortfolio()} />
      <Hud />
      <main className="relative z-10 flex-1 pt-16">{children}</main>
      <footer className="relative z-10 border-t border-white/10 bg-[#0A0A0A]/70 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="font-mono text-[11px] text-white/35">
            © {new Date().getFullYear()} jinslife.kr — 기획부터 배포까지, 1인 풀스택 개발
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-white/55">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="transition-colors hover:text-[#F0A500]">
                {n.name}
              </Link>
            ))}
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#F0A500]">
              GitHub
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-[#F0A500]">
              Email
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
