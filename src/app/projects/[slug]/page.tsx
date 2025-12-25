"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Layers, Code2, Calendar } from "lucide-react";
import { motion } from "framer-motion";

// This data would typically come from a CMS or API
const projects = {
  "srpg-todo": {
    title: "SRPG TODO",
    category: "Swift iOS",
    description: `
      생산성을 높이는 것이 왜 지루해야 할까요? SRPG TODO는 할 일 관리를 모험으로 바꿉니다.
      사용자가 할 일을 완료할 때마다 경험치를 얻고 레벨업하며, 아이템을 수집하는 게이미피케이션 요소를 도입했습니다.
      단순한 체크리스트를 넘어, 성취감을 시각화하고 지속적인 동기 부여를 제공하는 것을 목표로 기획 및 개발되었습니다.
    `,
    details: [
      "CoreData를 활용한 로컬 데이터 영속성 관리",
      "MVVM 아키텍처 패턴 적용으로 유지보수성 향상",
      "Combine 프레임워크를 이용한 반응형 UI 구현",
      "복잡한 경험치 및 레벨링 시스템 로직 설계"
    ],
    stack: ["Swift", "SwiftUI", "CoreData", "Combine"],
    period: "2025 하반기",
    links: {
      github: "https://github.com/jinyounghwa/srpg-todo",
      live: "#"
    },
    image: "/images/srpg-todo.png",
    color: "from-blue-600 to-cyan-500"
  },
  "enterprise-ai-agent": {
    title: "Enterprise AI",
    category: "B2B SaaS / AI",
    description: `
      기업 고객 지원 업무의 60%를 자동화하는 대규모 언어 모델(LLM) 기반의 AI 에이전트 솔루션입니다.
      단순한 챗봇이 아닌, 회사의 내부 문서를 학습(RAG)하여 정확한 답변을 제공하고, 
      티켓 발급부터 1차 응대까지 수행하여 상담원의 업무 효율을 극대화했습니다.
    `,
    details: [
      "LangChain 기반의 RAG(Retrieval-Augmented Generation) 파이프라인 구축",
      "벡터 데이터베이스(Pinecone)를 활용한 고속 시맨틱 검색",
      "프롬프트 엔지니어링을 통한 답변 정확도 95% 달성",
      "Slack 및 Jira 연동을 통한 업무 자동화 워크플로우 구현"
    ],
    stack: ["Python", "LangChain", "OpenAI API", "Next.js", "FastAPI"],
    period: "2025 하반기",
    links: {
      github: "https://github.com/jinyounghwa",
      live: "#"
    },
    image: "/images/local-ai.png",
    color: "from-purple-600 to-pink-500"
  },
  "tripath-career": {
    title: "TriPath Career",
    category: "EdTech Platform",
    description: `
      커리어 패스에 대한 고민을 해결해주는 AI 기반 멘토링 매칭 플랫폼입니다.
      사용자의 이력과 목표를 분석하여 가장 적합한 현직자 멘토를 추천하고, 
      성장을 위한 개인화된 커리어 로드맵을 자동으로 생성해줍니다.
    `,
    details: [
      "협업 필터링 및 콘텐츠 기반 추천 시스템 하이브리드 구현",
      "Next.js의 ISR(Incremental Static Regeneration)을 활용한 SEO 최적화",
      "로컬 AI 시스템과 AI API서비스 통합구현",
      "RAG 구축"
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "WebRTC"],
    period: "2025 하반기",
    links: {
      github: "https://github.com/jinyounghwa",
      live: "#"
    },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    color: "from-emerald-600 to-teal-500"
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
        {/* Placeholder for actual image if needed, or just use the gradient/color */}
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

            {/* Buttons removed as requested */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
