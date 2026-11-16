"use client";

import dynamic from "next/dynamic";
import { Component, type ReactNode } from "react";
import type { PortfolioItem } from "@/lib/portfolio-shared";
import type { Shot } from "./bus";

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

/** 고정 3D 도시 배경 + 가독성 오버레이. dim: 콘텐츠가 전폭인 하위 페이지용 */
export default function World3D({
  items,
  shots,
  labelChapter,
  dim = false,
}: {
  items: PortfolioItem[];
  shots: Shot[];
  labelChapter?: number;
  dim?: boolean;
}) {
  return (
    <>
      <div className="fixed inset-0 z-0" aria-hidden>
        <WebGLBoundary>
          <CityScene items={items} shots={shots} labelChapter={labelChapter} />
        </WebGLBoundary>
      </div>
      <div
        className={`pointer-events-none fixed inset-0 z-[1] ${
          dim
            ? "bg-[#0A0A0A]/72"
            : "bg-[#0A0A0A]/65 md:bg-transparent md:bg-linear-to-r md:from-[#0A0A0A]/95 md:via-[#0A0A0A]/55 md:to-transparent"
        }`}
        aria-hidden
      />
    </>
  );
}
