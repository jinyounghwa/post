"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Portfolio", href: "/portfolio/" },
  { name: "About", href: "/about/" },
  { name: "News", href: "/news/" },
  { name: "Stars", href: "/stars/" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = (href: string) => {
    const isActive = pathname.startsWith(href);
    return `text-sm font-mono transition-colors ${
      isActive ? "text-accent" : "text-sub hover:text-foreground"
    }`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-foreground bg-background/95 backdrop-blur-md">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight"
        >
          jin<span className="text-accent">slife</span>
          <span className="doc-cell text-sub ml-2 hidden sm:inline">— 기획하는 개발자</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={linkClass(link.href)}>
              {link.name}
            </Link>
          ))}
          <a
            href="mailto:timotolkie@gmail.com"
            className="doc-cell px-4 py-2 bg-accent text-card hover:bg-foreground transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-sub hover:text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={linkClass(link.href)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="mailto:timotolkie@gmail.com"
              onClick={() => setMobileOpen(false)}
              className="doc-cell inline-flex w-fit px-4 py-2 bg-accent text-card"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
