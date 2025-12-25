"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Zap, 
  Lightbulb, 
  Rocket, 
  Globe, 
  Smartphone, 
  Bot, 
  Mail, 
  Github, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-grid">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Hero Background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              기획부터 배포까지, <br />
              <span className="text-gradient">완성도 높은 솔루션</span>을 제공합니다
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              14년의 IT 기획 경험과 최신 개발 기술로 <br className="md:hidden" />
              비즈니스 아이디어를 현실로 만듭니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#portfolio" className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/25">
                포트폴리오 보기
              </a>
              <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-colors backdrop-blur-sm">
                협업 문의하기
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "원스톱 솔루션", desc: "기획부터 디자인, 개발, 배포까지 일관된 품질 관리", color: "text-yellow-400" },
              { icon: Lightbulb, title: "비즈니스 중심 개발", desc: "14년 기획 경력으로 사용자와 비즈니스 목표를 이해하는 개발", color: "text-blue-400" },
              { icon: Rocket, title: "최신 기술 적용", desc: "AI/LLM, NestJS 등 트렌디한 기술 스택 활용", color: "text-purple-400" },
            ].map((strength, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-3xl hover:border-primary/50 transition-colors group"
              >
                <strength.icon className={`w-12 h-12 ${strength.color} mb-6 group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-bold mb-4">{strength.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{strength.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <Image
                src="/jin.jpg"
                alt="JinYoungHwa"
                fill
                className="rounded-3xl object-cover border-2 border-white/10 relative z-10"
              />
            </div>
          </motion.div>
          
          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">"기획자의 시각으로 개발하는 엔지니어"</h2>
            <div className="space-y-6 text-zinc-400">
              <p className="text-lg">
                저는 14년 IT 경력을 가진 <span className="text-white font-semibold">진영화</span>입니다. 
                웹 기획부터 VR/AR, 그리고 현재 풀스택 개발까지 비즈니스의 모든 단계를 경험했습니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {[
                  "비즈니스 목표와 기술 구현 동시 고려",
                  "사용자 경험(UX) 최우선 개발",
                  "요구사항 분석부터 배포까지 책임",
                  "원활한 커뮤니케이션"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">서비스 영역</h2>
            <p className="text-zinc-400">아이디어를 현실로 바꾸는 최적의 솔루션을 제공합니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Globe, 
                title: "웹 서비스 개발", 
                items: ["쇼핑몰 구축 (결제 연동)", "기업 홈페이지 제작", "CMS/관리자 시스템", "반응형 웹 디자인"] 
              },
              { 
                icon: Smartphone, 
                title: "모바일 앱 개발", 
                items: ["iOS/Android 크로스 플랫폼", "네이티브 iOS 개발 (Swift)", "앱스토어 출시 및 운영", "푸시 알림 구현"] 
              },
              { 
                icon: Bot, 
                title: "AI 활용 서비스", 
                items: ["AI 댓글 자동 작성", "LLM 챗봇 개발 (RAG)", "Ollama + API 하이브리드", "문서 요약 및 분석"] 
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-3xl"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-400">
                      <ChevronRight className="w-5 h-5 text-zinc-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">포트폴리오</h2>
            <p className="text-zinc-400">성공적으로 완료된 주요 프로젝트들입니다.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "SRPG TODO",
                tag: "iOS / Productivity",
                image: "/images/srpg-todo.png",
                desc: "일본 SRPG 미학과 생산성의 결합. 캐릭터 육성형 할 일 관리 앱.",
                tech: ["React Native", "NestJS", "PostgreSQL"],
                link: "#"
              },
              {
                title: "하이브리드 AI 챗봇",
                tag: "AI / LLM",
                image: "/images/local-ai.png",
                desc: "Ollama 로컬 AI와 Claude API를 결합한 고효율 챗봇 시스템.",
                tech: ["Ollama", "Claude API", "LangChain", "Next.js"],
                link: "#"
              },
              {
                title: "AI 댓글 자동 작성",
                tag: "AI / Automation",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
                desc: "소셜 미디어 고객 문의 대응 자동화. 브랜드 톤앤매너 학습 및 자동 답변.",
                tech: ["Claude API", "NLP", "Automation"],
                link: "#"
              },
              {
                title: "TriPath (개발 중)",
                tag: "Career / AI",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
                desc: "Donald Lee의 7:2:1 프레임워크 기반 AI 시대 커리어 전환 가이드.",
                tech: ["Next.js 16", "NestJS", "PostgreSQL"],
                link: "#"
              },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                className="group relative overflow-hidden rounded-3xl glass"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                </div>
                <div className="p-8">
                  <div className="text-primary text-sm font-bold mb-2 uppercase tracking-wider">{project.tag}</div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="w-5 h-5 text-zinc-500" />
                  </h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-zinc-300 border border-white/10 uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">진행 프로세스</h2>
            <p className="text-zinc-400">명확한 단계별 진행으로 신뢰할 수 있는 결과를 만듭니다.</p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 md:-translate-x-1/2"></div>
            
            <div className="space-y-16">
              {[
                { step: "01", title: "상담 및 요구사항 분석", desc: "비즈니스 목표 확인 및 기능 범위 정의" },
                { step: "02", title: "기획 및 설계", desc: "화면 설계서 작성, DB 스키마 및 API 명세 설계" },
                { step: "03", title: "개발", desc: "애자일 방식 진행, 주간 진행상황 공유 및 테스트" },
                { step: "04", title: "배포 및 운영", desc: "서버 배포, 앱스토어 출시 지원 및 매뉴얼 제공" },
                { step: "05", title: "유지보수", desc: "버그 수정, 기능 추가 및 성능 모니터링" },
              ].map((process, idx) => (
                <motion.div
                  key={idx}
                  {...fadeIn}
                  className={`flex items-start md:items-center gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                >
                  <div className={`flex-1 hidden md:block ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="glass p-6 rounded-2xl inline-block max-w-sm">
                      <h4 className="text-xl font-bold mb-2">{process.title}</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">{process.desc}</p>
                    </div>
                  </div>

                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-white relative z-10 shrink-0 shadow-lg shadow-primary/40 ring-4 ring-background">
                    {process.step}
                  </div>

                  <div className="flex-1 text-left">
                    <div className="md:hidden">
                      <h4 className="text-xl font-bold mb-1">{process.title}</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">{process.desc}</p>
                    </div>
                    <div className={`hidden md:block ${idx % 2 === 1 ? 'text-left' : 'text-right'}`}>
                      <div className="glass p-6 rounded-2xl inline-block max-w-sm">
                        <h4 className="text-xl font-bold mb-2">{process.title}</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">{process.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="max-w-3xl mx-auto glass p-12 md:p-20 rounded-[4rem] text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">내일의 비즈니스를 <br /><span className="text-gradient">함께 고민합니다</span></h2>
          <p className="text-zinc-400 mb-12 text-lg">
            프로젝트 문의, 협업 제안 등 어떤 이야기든 환영합니다. <br />
            24시간 내에 성심껏 답변해 드리겠습니다.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="mailto:timotolkie@gmail.com" className="flex items-center gap-3 px-8 py-4 bg-primary rounded-full font-bold hover:scale-105 transition-all w-full md:w-auto justify-center">
              <Mail className="w-5 h-5" />
              Email Contact
            </a>
            <a href="https://github.com/jinyounghwa" target="_blank" className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all w-full md:w-auto justify-center">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
