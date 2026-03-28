---
title: "Claude Code 2.0 — VS Code 네이티브 통합 + 자율 코딩 에이전트"
date: "2025-09-29"
tags: ["claude-code", "vscode", "agent", "ide", "developer-tools"]
summary: "Claude Code가 VS Code 확장 프로그램과 함께 2.0으로 진화했다. 인라인 diff, 보안 스캐너, 멀티 세션을 지원한다."
---

## Claude Code, 터미널에서 IDE로

Anthropic이 **Claude Code VS Code 확장 프로그램**(베타)을 출시하며 Claude Code를 완전한 IDE 통합 에이전트로 업그레이드했다.

### 신기능 요약

| 기능 | 설명 |
|------|------|
| 인라인 diff | 변경 사항을 에디터 내에서 바로 확인·적용 |
| 사이드바 패널 | 그래픽 인터페이스로 대화 및 태스크 관리 |
| Plan Mode 강화 | 더 정밀하고 실행력 높은 계획 수립 |
| 멀티 세션 | 로컬·리모트 세션 병렬 운용 |
| 보안 스캐너 | 제로데이 취약점 추론 기반 탐지 (2026년 2월 추가) |

### Claude Code Security

2026년 2월에 추가된 **Claude Code Security**는 추론 기반 정적 분석으로 기존 룰 기반 스캐너가 잡지 못하는 제로데이 패턴을 탐지한다. CI/CD 파이프라인에 직접 통합 가능하다.

### GitHub Copilot vs Cursor vs Claude Code

Claude Code는 2025년 한 해 **176건 이상의 업데이트**를 거쳐 베타 터미널 도구에서 프로덕션 에이전트 코딩 플랫폼으로 진화했다. GitHub Copilot Workspace, Cursor와 정면 경쟁하는 위치다.

```bash
# Claude Code 시작하기
npm install -g @anthropic-ai/claude-code
claude

# 또는 VS Code 확장 프로그램 설치
# Marketplace: "Claude Code" by Anthropic
```

### 다음 단계

- 기존 `.claude/` 설정을 팀과 공유하면 컨텍스트 동기화 가능
- `CLAUDE.md`에 프로젝트 규칙을 정의하면 에이전트가 자동 준수
