// 사이트 공통 프로필 콘텐츠 — Home(3D)과 About이 함께 쓴다

export const CONTACT_EMAIL = "timotolkie@gmail.com";
export const GITHUB_URL = "https://github.com/jinyounghwa";

export const NAV = [
  { name: "Portfolio", href: "/portfolio/" },
  { name: "About", href: "/about/" },
  { name: "News", href: "/news/" },
  { name: "Stars", href: "/stars/" },
];

export const STRENGTHS = [
  {
    no: "01",
    title: "원스톱 솔루션",
    desc: "요구사항 정의 → 기획 → 개발 → 배포까지 직접 경험했습니다. 기획자와 개발자 사이의 전달 손실이 없습니다.",
  },
  {
    no: "02",
    title: "비즈니스 중심 개발",
    desc: "14년 IT 기획 경험으로 '왜 만드는가'부터 묻습니다. 기술이 아니라 비즈니스 목표에 맞춰 스코프를 설계합니다.",
  },
  {
    no: "03",
    title: "최신 기술 적용",
    desc: "AI/LLM, NestJS, Next.js 등 최신 스택을 실제 데모로 검증해 사용합니다. 트렌드를 뉴스로만 아는 게 아니라 직접 만듭니다.",
  },
];

export const CAREER = [
  { period: "시작", title: "법무행정", desc: "문서와 절차의 세계에서 출발 — 요구사항을 정확한 문장으로 만드는 훈련" },
  { period: "기획 전환", title: "VR / AR 웹기획", desc: "신기술 서비스 기획 — 기술 제약과 사용자 경험 사이의 균형 설계" },
  { period: "도메인 심화", title: "물류 / WMS", desc: "입출고·재고·검수 등 물류 현장 시스템 기획 — 가장 깊은 도메인 자산" },
  { period: "확장", title: "이커머스", desc: "주문·쿠폰·클레임 생명주기 설계 — 커머스와 물류를 잇는 시야" },
  { period: "현재", title: "AI 활용 개발", desc: "기획 경험 위에 개발 역량을 얹어, 혼자서 기획부터 배포까지 완주" },
];

export const DOMAINS = ["물류 / WMS", "이커머스", "헬스케어 커머스", "AR / VR", "공공데이터"];

export const PROCESS = [
  { step: "01", title: "요구사항 정의", desc: "목표 → 사용자 → 핵심기능 → 스코프 순서로 문서화. 만들기 전에 '왜'부터 합의합니다." },
  { step: "02", title: "기획 / 설계", desc: "화면 설계와 데이터 모델, 상태 흐름을 정의합니다. 개발자가 기획하므로 설계가 곧 구현 가능한 명세입니다." },
  { step: "03", title: "개발 / 검증", desc: "빠른 프로토타이핑으로 동작하는 버전을 먼저 보여드리고, 피드백을 반영하며 완성도를 올립니다." },
  { step: "04", title: "배포 / 운영", desc: "배포 후 끝이 아니라 운영 관점의 개선까지. 출시된 앱과 라이브 데모가 그 증거입니다." },
];

export const SERVICES = [
  {
    title: "풀스택 웹 개발",
    items: ["Next.js / React 웹 애플리케이션", "쇼핑몰 구축 (쿠폰·주문·관리자)", "CMS / 관리자 시스템", "반응형 웹"],
    link: { href: "/portfolio/", label: "사례: 쇼핑몰 데모, WMS 대시보드" },
  },
  {
    title: "모바일 앱 개발",
    items: ["네이티브 iOS (Swift)", "크로스 플랫폼 (React Native)", "앱스토어 출시 및 운영", "푸시 알림 등 핵심 기능"],
    link: { href: "/portfolio/", label: "사례: Todo Fantasy (출시작)" },
  },
  {
    title: "AI / LLM 서비스",
    items: ["로컬 AI + API 하이브리드 챗봇", "AI 에이전트/스킬 업무 자동화", "RAG 기반 문서 검색", "Ollama + Claude API 결합"],
    link: { href: "/portfolio/", label: "사례: 로컬 AI 챗봇, AI 구매분석" },
  },
];

export const STACK = [
  "TypeScript",
  "Next.js",
  "React",
  "NestJS",
  "Node.js",
  "Swift",
  "React Native",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Tailwind CSS",
  "Docker",
  "AWS",
  "Ollama",
  "Claude API",
  "LangChain",
];
