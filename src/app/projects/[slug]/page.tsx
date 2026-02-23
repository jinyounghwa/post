"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Layers, Code2, Calendar, Video } from "lucide-react";
import { motion } from "framer-motion";

const projects = {
  "ai-purchase-automation": {
    title: "AI 구매 분석 자동화",
    category: "AI Automation",
    youtubeId: "S6ANgpDp1d0",
    description: `
      안티그라피티 스킬을 활용하여 제품 구매 사이트를 AI로 분석하고, 그 결과를 바탕으로 리포트 및 자동 메일을 발송하는 워크플로우를 구축한 솔루션입니다.
      단순한 웹 엑스트랙션을 넘어, AI 에이전트가 페이지의 의도와 핵심 정보를 파악하여 수작업 없이도 매끄러운 구매 프로세스 검토가 가능하도록 구성했습니다.
    `,
    details: [
      "웹 스크래핑 및 AI 기반 데이터 분석 파이프라인 연동",
      "분석 결과에 따른 맞춤형 이메일 자동 생성 및 발송 엔진 구축",
      "안티그라피티 스킬 활용을 통한 안정적인 에이전트 워크플로우 구성"
    ],
    stack: ["AI Agent", "Python", "Automation", "Email API"],
    period: "2026 상반기",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    color: "from-blue-600 to-cyan-500"
  },
  "local-ai-chatbot": {
    title: "AI 공부 보조 챗봇",
    category: "Local AI / Education",
    youtubeId: "Ls1mGq9O4t0",
    description: `
      외부 클라우드 API에 의존하지 않고, 로컬 환경에서 구동되는 AI 모델을 활용한 학습 보조 챗봇입니다.
      사용자의 질문을 실시간으로 분석하고, 학습 가이드와 피드백을 즉각적으로 제공하여 학습 효율을 극대화합니다.
      개인정보 보호가 중요한 학습 데이터를 외부로 유출하지 않고도 강력한 AI 어시스턴트 경험을 온전히 제공하는 데 집중했습니다.
    `,
    details: [
      "로컬 LLM 연동 및 프롬프트 엔지니어링 최적화",
      "경량화된 AI 모델을 통한 실시간 대화형 인터페이스 지연 시간 최소화",
      "학습 맥락 유지를 위한 세션 기반 대화 관리 시스템 구현"
    ],
    stack: ["Local LLM", "Next.js", "TypeScript", "Tailwind CSS"],
    period: "2026 상반기",
    image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&q=80&w=800",
    color: "from-purple-600 to-pink-500"
  },
  "ui-generator": {
    title: "UI 제네레이터",
    category: "Development Tooling",
    youtubeId: "Jx2ZFYIh3rM",
    description: `
      사용자의 자연어 요구사항이나 거친 스케치 수준의 아이디어를 바탕으로, 실제 동작하는 UI/UX 코드를 즉각적으로 생성해주는 개발 도구입니다.
      기획 단계부터 프론트엔드 구현까지의 시간을 비약적으로 단축시키며, 프로젝트 톤앤매너에 맞는 UI 코드를 빠르고 정확하게 출력합니다.
    `,
    details: [
      "자연어 분석을 통한 UI 컴포넌트 매핑 및 속성 최적화 알고리즘",
      "React/Next.js 기반의 실시간 프리뷰 렌더링 시스템 적용",
      "코드 자동 생성 및 실시간 수정 사항 반영 파이프라인 구축"
    ],
    stack: ["React", "AI Code Generation", "TypeScript", "AST Parsing"],
    period: "2026 상반기",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    color: "from-emerald-600 to-teal-500"
  },
  "ai-agent-commerce": {
    title: "AI 에이전트 쇼핑몰 데모",
    category: "AI Commerce Platform",
    youtubeId: "Ta-Ye6xiX08",
    description: `
      단순한 키워드 상품 검색을 넘어, AI 에이전트가 고객의 성향을 파악하고 일대일 맞춤형 화이트글로브 서비스처럼 응대하는 차세대 쇼핑몰 플랫폼의 데모 솔루션입니다.
      고객과의 자연스러운 대화를 기반으로 최적의 상품을 제안하고, 결제와 사후 안내까지 매끄럽게 이어지는 에이전트 중심(Agent-Centric) 커머스를 경험할 수 있습니다.
    `,
    details: [
      "자연어 입력 기반의 시맨틱 상품 검색 및 실시간 큐레이션 기법",
      "고객 의도 분석을 통한 선제적 상품 제안 및 추천 로직 강화",
      "에이전트 중심의 새로운 쇼핑 UX 설계 및 결제 편의성 향상"
    ],
    stack: ["Next.js", "AI Agent", "E-Commerce", "Vector DB"],
    period: "2026 상반기",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    color: "from-orange-600 to-yellow-500"
  }
};

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center text-white">Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white">
      {/* Header Image */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`}></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
         <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover opacity-50"
        />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-background to-transparent">
          <div className="max-w-[1400px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/#portfolio" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Portfolio
              </Link>
              <span className="block text-primary font-mono text-sm tracking-widest uppercase mb-4">{project.category}</span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">{project.title}</h1>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Main Content */}
        <div className="lg:col-span-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Demo Video Section */}
            {project.youtubeId && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Video className="w-6 h-6 text-primary" />
                  솔루션 데모 영상
                </h2>
                <div className="rounded-2xl overflow-hidden glass-card border-none aspect-video relative shadow-2xl">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${project.youtubeId}`} 
                    title={`${project.title} Video`} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
            )}

            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Layers className="w-6 h-6 text-primary" />
              Project Overview
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12 whitespace-pre-line break-keep">
              {project.description}
            </p>

            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Code2 className="w-6 h-6 text-primary" />
              Key Features & Tech Logic
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {project.details.map((detail, index) => (
                <div key={index} className="glass-panel p-6 rounded-xl border border-white/5 flex items-start gap-4 hover:bg-white/5 transition-colors">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold shrink-0 mt-1">
                    {index + 1}
                  </span>
                  <p className="text-gray-300 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8 rounded-2xl sticky top-32"
          >
            <div className="mb-8">
              <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Period
              </h3>
              <p className="text-xl font-bold">{project.period}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

