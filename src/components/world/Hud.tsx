"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "@/lib/profile";

/** 상단 HUD. status: 가운데 상태 표시 (없으면 현재 경로로) */
export default function Hud({ status }: { status?: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = NAV.find((n) => pathname.startsWith(n.href.slice(0, -1)));
  const label = status ?? (current ? current.name.toUpperCase() : "NEWS");

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-[#0A0A0A]/60 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
        <Link href="/" className="font-world text-lg font-bold tracking-tight">
          jin<span className="text-[#F0A500]">slife</span>
        </Link>
        <span className="hidden font-mono text-[11px] tracking-[0.2em] text-white/45 lg:block">{label}</span>
        <div className="flex items-center gap-4 sm:gap-6">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={n === current ? "page" : undefined}
              className={`hidden font-mono text-xs transition-colors sm:inline ${
                n === current ? "text-[#F0A500]" : "text-white/60 hover:text-white"
              }`}
            >
              {n.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="bg-[#F0A500] px-4 py-2 font-mono text-xs font-medium text-[#0A0A0A] transition-colors hover:bg-white"
          >
            Contact
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="메뉴"
            className="cursor-pointer p-1 text-white/70 sm:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="M4 4l12 12M16 4L4 16" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <div className="flex flex-col gap-4 border-t border-white/10 px-4 py-4 sm:hidden">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={`font-mono text-sm ${n === current ? "text-[#F0A500]" : "text-white/70"}`}
            >
              {n.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
