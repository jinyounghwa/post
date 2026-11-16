"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import type { PortfolioItem } from "@/lib/portfolio-shared";
import { bus, shotsFor } from "./bus";
import World3D from "./World3D";

/** 하위 페이지 공용 3D 배경. 레이아웃에 있어 페이지 이동 시 유지되고, 카메라만 새 시점으로 날아간다 */
export default function Backdrop({ items }: { items: PortfolioItem[] }) {
  const pathname = usePathname();

  // 스크롤 진행률(0→1) = 페이지 시점 A→B
  useEffect(() => {
    bus.active = null;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bus.chapter = max > 0 ? window.scrollY / max : 0;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  return <World3D items={items} shots={shotsFor(pathname)} dim />;
}
