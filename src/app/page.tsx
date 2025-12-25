"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Layers, 
  Smartphone, 
  Bot, 
  Mail, 
  Github, 
  Code2,
  ExternalLink
} from "lucide-react";
import { useRef } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
} as const;

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="flex flex-col w-full overflow-hidden">
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-20 px-6">
        <motion.div 
          style={{ y: backgroundY, opacity: 0.6 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"
        ></motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-primary/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">Available for new projects</span>
          </div>

          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.9] break-keep">
            상상을 <span className="text-gradient-primary italic pr-2">현실로,</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">한계를 넘어선 구축.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed break-keep">
            복잡한 비즈니스 문제를 <span className="text-white font-semibold">우아하고 확장 가능한 솔루션</span>으로 전환하는 <br className="hidden md:block" />
            기획자 & 개발자 입니다.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#portfolio" 
              className="px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.7)] transition-all flex items-center gap-2"
            >
              프로젝트 보기
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-8 py-4 glass-panel rounded-full text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              문의하기
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </motion.div>
      </section>

      {/* Stats / Tech Stack Marquee */}
      <section className="py-12 border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
             <div key={i} className="flex gap-12 text-4xl md:text-6xl font-bold text-white/5 uppercase tracking-tighter">
               <span>Next.js</span> <span>•</span> <span>React</span> <span>•</span> <span>TypeScript</span> <span>•</span> <span>Node.js</span> <span>•</span> <span>AI Integration</span> <span>•</span> <span>Tailwind</span> <span>•</span>
             </div>
          ))}
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="py-32 px-6 relative">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeIn} className="mb-24">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Core Services</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter break-keep">
              기술적 탁월함을 <br />
              <span className="text-gradient">제공합니다.</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Layers, 
                title: "Full-Stack Dev", 
                desc: "최신 프레임워크 기반의 엔드투엔드 웹 애플리케이션 구축. 성능 최적화, SEO, 그리고 압도적인 확장성을 보장합니다.",
                tags: ["Next.js", "Node.js", "PostgreSQL"]
              },
              { 
                icon: Bot, 
                title: "AI Engineering", 
                desc: "LLM과 AI 에이전트를 실제 비즈니스 워크플로우에 통합합니다. RAG 파이프라인 설계부터 파인튜닝, 업무 자동화까지.",
                tags: ["LangChain", "OpenAI", "Python"]
              },
              { 
                icon: Smartphone, 
                title: "Native Mobile", 
                desc: "고성능 iOS 및 Android 애플리케이션을 개발합니다. Swift 네이티브 구현부터 효율적인 크로스 플랫폼 솔루션 제안까지.",
                tags: ["SwiftUI", "React Native", "Flutter"]
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass-card p-10 rounded-2xl group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-32 bg-primary/20 blur-[80px] rounded-full group-hover:bg-secondary/20 transition-colors duration-500 opacity-0 group-hover:opacity-100"></div>
                
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  <s.icon className="w-7 h-7 text-white" />
                </div>
                
                <h4 className="text-2xl font-bold mb-4">{s.title}</h4>
                <p className="text-gray-400 leading-relaxed mb-8 break-keep">{s.desc}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {s.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-primary/80 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Works - Parallax/Sticky Style */}
      <section id="portfolio" className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeIn} className="mb-24 flex items-end justify-between flex-wrap gap-8">
            <div>
              <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">Portfolio</h2>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">
                Selected <span className="text-gradient-primary">Works.</span>
              </h3>
            </div>
            <a href="https://github.com/jinyounghwa" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              Github 방문 <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="space-y-32">
            {[
              {
                id: "srpg-todo",
                title: "SRPG TODO",
                category: "Swift iOS",
                desc: "RPG 요소를 도입하여 생산성을 게임화한 할 일 관리 앱입니다. Swift와 CoreData를 사용하여 구축되었으며, 사용자의 동기 부여를 극대화합니다.",
                image: "/images/srpg-todo.png",
                color: "from-blue-600 to-cyan-500",
                tags: ["Swift", "SwiftUI", "CoreData"]
              },
              {
                id: "enterprise-ai-agent",
                title: "Enterprise AI",
                category: "B2B SaaS / AI",
                desc: "고객 지원 티켓을 자동으로 처리하고 내부 워크플로우를 자동화하는 자율 AI 에이전트 시스템입니다. 기업의 운영 비용을 획기적으로 절감합니다.",
                image: "/images/local-ai.png",
                color: "from-purple-600 to-pink-500",
                tags: ["Python", "LangChain", "Next.js"]
              },
              {
                id: "tripath-career",
                title: "TriPath Career",
                category: "EdTech Platform",
                desc: "AI 기반 매칭 알고리즘을 통해 멘토와 멘티를 연결하는 커리어 개발 플랫폼입니다. 맞춤형 로드맵 추천 기능을 포함합니다.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
                color: "from-emerald-600 to-teal-500",
                tags: ["Next.js", "TypeScript", "WebRTC"]
              }
            ].map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8 }}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden glass-card border-0 ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 text-9xl font-black uppercase tracking-tighter mix-blend-overlay">
                    {project.title.split(' ')[0]}
                  </div>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                
                <div className="space-y-8">
                  <span className="text-secondary font-mono text-sm tracking-widest uppercase">
                    0{i+1} / {project.category}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-bold leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-md break-keep">
                    {project.desc}
                  </p>
                  <ul className="flex flex-wrap gap-4">
                    {project.tags.map(t => (
                      <li key={t} className="text-sm font-bold text-white/60 border-b border-white/20 pb-1">{t}</li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link href={`/projects/${project.id}`} className="flex items-center gap-3 text-white font-bold uppercase tracking-widest hover:gap-6 transition-all group-hover:text-primary">
                      사례 연구 보기 <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Bento Grid Style */}
      <section id="about" className="py-32 px-6 bg-black/30 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
            <motion.div 
              {...fadeIn}
              className="md:col-span-2 md:row-span-2 glass-card rounded-3xl p-12 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-4xl font-bold mb-6">About Me</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6 break-keep">
                  <strong className="text-white">비즈니스 전략</strong>과 <strong className="text-white">기술적 실행</strong>의 간극을 잇는 14년의 경험을 보유하고 있습니다.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed break-keep">
                  단순히 코드를 작성하는 것에 그치지 않고, 현실의 문제를 해결하는 솔루션을 설계합니다. 기획자로서 축적된 제품 기획력은 작성되는 모든 코드가 철저히 '사용자의 니즈'를 향하도록 보장합니다.
                </p>
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.2 }}
              className="md:col-span-1 glass-card rounded-3xl p-8 flex flex-col justify-center items-center text-center group hover:bg-white/5 transition-colors"
            >
              <div className="text-6xl font-black text-gradient mb-2 group-hover:scale-110 transition-transform">14+</div>
              <div className="text-sm font-bold uppercase tracking-widest text-gray-500">Years Exp.</div>
            </motion.div>

            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.3 }}
              className="md:col-span-1 glass-card rounded-3xl p-8 flex flex-col justify-center items-center text-center group hover:bg-white/5 transition-colors"
            >
              <div className="text-6xl font-black text-gradient-primary mb-2 group-hover:scale-110 transition-transform">다수의</div>
              <div className="text-sm font-bold uppercase tracking-widest text-gray-500">프로젝트</div>
            </motion.div>

            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.4 }}
              className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden flex items-center"
            >
              <div className="relative z-10 w-full">
                <h4 className="text-2xl font-bold mb-6">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Node.js", "Python", "Swift", "AWS", "Docker", "PostgreSQL", "MongoDB", "Redis", "GraphQL"].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-48 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-8 break-keep"
          >
            미래를 함께 <br />
            <span className="text-gradient">만들어갑시다.</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto break-keep">
            당신의 비전을 현실로 만들 준비가 되셨나요? <br className="hidden md:block" />
            현재 프로젝트 및 기술 컨설팅 의뢰를 받고 있습니다.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="mailto:timotolkie@gmail.com" className="w-full md:w-auto px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-3">
              <Mail className="w-5 h-5" />
              이메일 보내기
            </a>
            <a href="https://github.com/jinyounghwa" target="_blank" className="w-full md:w-auto px-10 py-5 glass-panel rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-3">
              <Github className="w-5 h-5" />
              Github
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
