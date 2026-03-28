---
title: "Claude Computer Use — 에이전트가 데스크탑을 직접 제어한다"
date: "2026-03-24"
tags: ["claude", "agent", "computer-use", "automation"]
summary: "Anthropic이 macOS에서 Claude가 직접 마우스·키보드를 제어하는 Computer Use 기능을 출시했다."
---

## Claude, 이제 컴퓨터를 직접 쓴다

Anthropic이 **Claude Computer Use**를 Claude Pro·Max 구독자 대상으로 macOS에서 리서치 프리뷰 공개했다. 이제 Claude는 커서 이동, 버튼 클릭, 앱 실행, 브라우저 탐색, 스프레드시트 작성까지 자율적으로 수행할 수 있다.

### 어떻게 동작하나

```
사용자 지시 (모바일/웹)
    ↓
Claude Cowork — Dispatch 기능
    ↓
Claude가 데스크탑에서 직접 작업 수행
    ↓
결과 보고
```

Claude는 먼저 Google Calendar, Slack 등 **직접 소프트웨어 커넥터**를 우선 시도하고, 커넥터가 없을 때만 원시 마우스·키보드 제어로 폴백한다.

### 개발자 관점에서 중요한 이유

- **코드 리뷰 자동화** — PR을 열고, 코드를 읽고, 코멘트까지
- **배포 파이프라인 조작** — CI 대시보드를 직접 클릭해 재시도
- **멀티앱 태스크** — 여러 앱을 오가는 작업을 커스텀 통합 없이 처리

Anthropic은 새 앱 접근 전 항상 사용자 권한을 요청한다고 명시했다.

> "우리는 AI 에이전트가 인간의 감독 하에 실제 작업을 수행하는 세계로 이동하고 있습니다." — Anthropic
