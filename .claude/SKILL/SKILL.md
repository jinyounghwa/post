# SKILL.md — jinslife.kr 포트폴리오 전면개편 상세 스펙

CLAUDE.md의 구현 세부사항. 실제 코딩 시 이 문서를 기준으로 작업한다.

---

## 1. 정보구조 / 라우팅

```
/               Home (재작성 — Hero + 강점 3카드 + 데모 하이라이트 + 스택 + CTA)
/portfolio      전체 데모 8종 그리드 (신규)
/portfolio/[slug]   데모 상세 (선택: 처음엔 카드 확장 or 앵커 이동으로 충분, 상세페이지는 2단계)
/about          자기소개 (기존 파일 있음, 콘텐츠만 교체)
/news           기존 뉴스 피드 (현재 page.tsx 내용을 이 경로로 이동)
/stars          기존 Stars 큐레이션 (유지)
```

기존 `src/app/page.tsx`(뉴스 리스트)를 `src/app/news/page.tsx`로 이동하고,
`src/app/page.tsx`는 신규 Home으로 교체한다.

### Nav 구조 (`src/components/layout/Nav.tsx` 수정)
```
로고(jinslife.kr) | Portfolio | About | News | Stars | Contact(버튼 강조)
```
Portfolio를 뉴스보다 먼저 노출 — 영업 사이트로서의 우선순위 반영.

---

## 2. 콘텐츠 데이터 모델

`content/portfolio/*.md` (front-matter + gray-matter, 기존 `content/claude-news` 패턴 재사용)

```md
---
slug: "shopping-mall-demo"
title: "쇼핑몰 데모 (쿠폰 로직 & 관리자)"
category: "e-commerce"        # e-commerce | analytics | ai-commerce | data-viz | ai-llm | mobile | frontend-ux | wms
mediaType: "youtube"           # youtube | appstore | live-demo
mediaUrl: "https://www.youtube.com/watch?v=80PQF9oJHbM"
stack: ["NestJS", "TypeScript", "PostgreSQL"]
role: "기획, 백엔드 설계, 프론트엔드 개발"
summary: "쿠폰 엔진과 주문 상태머신을 포함한 이커머스 관리자 시스템 데모"
highlight: "WMS 실무 경험을 반영한 재고/양품화 로직까지 포함"
order: 1
---
상세 설명 본문 (선택, Portfolio 상세용)
```

`src/lib/portfolio.ts` 신규 파일: `getSortedPortfolio()`, `getPortfolioBySlug()`
— 기존 `src/lib/mdx.ts`의 `getSortedNews()` 구현 패턴을 그대로 복제해서 작성 (동일한 gray-matter 파싱 로직 재사용).

---

## 3. 데모 8종 — 콘텐츠 초안

각 카드에 들어갈 요약/강조 카피 초안. 실제 등록 시 아래를 다듬어서 front-matter로 옮긴다.

### 1) 쇼핑몰 데모 (쿠폰 로직 & 관리자) — `e-commerce`
- mediaUrl: youtube.com/watch?v=80PQF9oJHbM
- summary: 주문 전체 생명주기와 쿠폰/포인트 엔진을 갖춘 이커머스 관리자 데모
- highlight: 주문·배송·클레임 상태머신, SKU 단위 재고, 회원 등급, 반품 검수(양품화) 분기까지 — WMS 도메인 지식을 이커머스에 접목한 사례
- stack: NestJS, TypeScript, PostgreSQL

### 2) OpenTracker — `analytics`
- mediaUrl: youtube.com/watch?v=Fh4psNhkdHo
- summary: 웹 방문 페이지 사용자 행동을 분석하는 자체 트래킹 도구 데모
- highlight: 방문자 분석 로직을 서비스에 직접 내장할 수 있는 역량 증명
- stack: TypeScript (구체 스택은 실제 구현 확인 후 보완)

### 3) Antigravity Skills 활용 AI 구매분석 — `ai-commerce`
- mediaUrl: youtube.com/watch?v=S6ANgpDp1d0
- summary: AI 스킬을 활용해 제품 구매 사이트를 자동 분석
- highlight: 최신 AI 에이전트/스킬 생태계를 실제 커머스 분석에 응용
- stack: AI Skills, (구체 도구명 보완 필요)

### 4) 공공데이터 연동 차트 (NestJS) — `data-viz`
- mediaUrl: youtube.com/watch?v=5o_cUjJv_ro
- summary: NestJS 백엔드로 공공데이터를 연동하고 차트로 시각화
- highlight: 정부/공공기관 데이터 연동 경험 — 공공 프로젝트 대응 가능성 어필
- stack: NestJS, TypeScript

### 5) 로컬 AI 개발공부 보조 챗봇 — `ai-llm`
- mediaUrl: youtube.com/watch?v=Ls1mGq9O4t0
- summary: 로컬 LLM으로 구동되는 개발 학습 보조 챗봇
- highlight: Ollama 기반 로컬 AI + 클라우드 AI 하이브리드 아키텍처 역량
- stack: Ollama, LangChain 등

### 6) Todo Fantasy — `mobile`
- mediaUrl: apps.apple.com/kr/app/to-do-fantasy/id6754512227
- summary: 일본 SRPG 미학과 생산성 앱을 결합한 게이미피케이션 TODO, 앱스토어 정식 출시작
- highlight: 기획→디자인→풀스택 개발→출시까지 전 과정 단독 수행
- stack: Swift / React Native(실제 구현 확인 후 확정), NestJS

### 7) SoundScape — `frontend-ux`
- mediaUrl: soundscapejin.netlify.app
- summary: ASMR 감상을 위한 인터랙티브 웹 서비스
- highlight: 감성적 UX/인터랙션 구현 역량 — 기능성 데모 외의 프론트엔드 감각 증명
- stack: React/Next.js, framer-motion

### 8) WMS 서비스 대시보드 — `wms`
- mediaUrl: superb-conkies-7a4112.netlify.app/dashboard
- summary: 물류관리 실무 경험을 반영한 WMS 대시보드 데모
- highlight: 타 개발자 대비 명확한 차별점 — 실제 물류 도메인(FULGO 등) 경력이 녹아든 유일한 데모
- stack: React/Next.js, 데이터 시각화 라이브러리

> 참고: 스택/구체 기능은 실제 리포지토리 확인 후 정확히 채울 것. 위 표는 카피 초안이며 사실관계는 각 데모 원본 기준으로 최종 확인.

---

## 4. 컴포넌트 설계

```
src/components/portfolio/
  PortfolioGrid.tsx      # 카드 목록 렌더, 카테고리 필터(선택)
  PortfolioCard.tsx      # 썸네일/임베드 + 요약 + 태그 + 외부링크 버튼
  MediaEmbed.tsx         # mediaType별 분기: youtube(iframe) / appstore(뱃지+링크) / live-demo(썸네일+새창링크)
  CategoryBadge.tsx
```

`MediaEmbed` 분기 로직:
- `youtube`: `https://www.youtube.com/embed/{videoId}` iframe, lazy-load (loading="lazy"), 16:9 반응형 wrapper
- `appstore`: 공식 "App Store에서 다운로드" 배지 이미지 + 외부링크 (새 탭)
- `live-demo`: 정적 썸네일(직접 스크린샷 촬영 필요) + "라이브 데모 보기" 버튼, 새 탭 오픈 (외부 사이트 iframe 임베드는 X-Frame-Options로 막힐 수 있으므로 링크 방식 권장)

## 5. Home 페이지 섹션 순서 (신규 `src/app/page.tsx`)

1. Hero (자기소개 카피 + CTA "포트폴리오 보기" / "문의하기")
2. 강점 3카드
3. Portfolio 하이라이트 (상위 4개: 쇼핑몰 데모, WMS 대시보드, Todo Fantasy, 공공데이터 차트 — 도메인 다양성 우선 노출) + "전체 8개 데모 보기" 링크
4. 기술 스택 배지
5. Contact CTA 배너

## 6. About 페이지 콘텐츠 교체 포인트

기존 `src/app/about/page.tsx` 구조(프로필 이미지 + 이름 + 직함 + 스킬 배지)는 유지하고 본문 텍스트만 교체:
- 직함: "Web Planner & Full-Stack Developer" (기존 "AI Developer · Planner"에서 조정 — 기획자 정체성 우선)
- 경력 하이라이트, 개발 철학("기획자의 시각으로 개발하는 엔지니어"), 도메인 포트폴리오 목록은 CLAUDE.md 3.3 참조
- OG 이미지(`src/app/about/opengraph-image.tsx`)의 `SKILLS` 배열도 함께 갱신 (예: `["웹 기획", "풀스택 개발", "iOS(Swift)", "AI/LLM"]`)

## 7. SEO / 메타데이터

`src/app/layout.tsx`의 site-wide metadata 갱신:
- title: `"진영화 — 기획하는 풀스택 개발자 | jinslife.kr"`
- description: 뉴스 큐레이션 문구에서 "14년 IT 기획 경험 기반 풀스택 개발 포트폴리오" 중심으로 교체
- OG/Twitter 카드도 동일하게 갱신

## 8. 작업 순서 (Sprint Gate)

1. `content/portfolio/*.md` 8개 파일 생성 + `src/lib/portfolio.ts` 작성
2. `MediaEmbed`, `PortfolioCard`, `PortfolioGrid` 컴포넌트 구현
3. `/portfolio` 페이지 신규 작성 → 로컬 확인
4. 기존 `/` (news) → `/news`로 이동, 신규 Home(`/`) 작성
5. `/about` 콘텐츠 교체 + OG 이미지 갱신
6. Nav/Footer 메뉴 구조 반영
7. 전체 메타데이터 갱신
8. 빌드 확인(`npm run build`) 후 Netlify 배포