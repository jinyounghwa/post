#!/bin/bash
# fetch_claude_news.sh
# 매일 새벽 1시 Claude/Anthropic 최신 뉴스를 수집해 MD 파일로 저장하고 push

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
LOG_FILE="$PROJECT_DIR/logs/news_crawl.log"
CLAUDE_BIN="/opt/homebrew/bin/claude"
TODAY="$(date '+%Y-%m-%d')"

mkdir -p "$PROJECT_DIR/logs"
echo "" >> "$LOG_FILE"
echo "========================================" >> "$LOG_FILE"
echo "[$TODAY $(date '+%H:%M:%S')] Starting Claude news fetch..." >> "$LOG_FILE"

cd "$PROJECT_DIR" || exit 1

# 오늘 날짜 파일이 이미 있으면 스킵
EXISTING=$(ls content/claude-news/${TODAY}-*.md 2>/dev/null | wc -l | tr -d ' ')
if [ "$EXISTING" -gt 0 ]; then
  echo "[$TODAY] Already has $EXISTING file(s) for today. Skipping." >> "$LOG_FILE"
  exit 0
fi

PROMPT="Today's date is ${TODAY}.

Your task: research the latest Anthropic / Claude AI news from the last 24–48 hours and write a Korean-language news article as a Markdown file.

## Step 1 — Research
Use WebSearch to find recent news. Try these searches:
- \"Anthropic Claude news ${TODAY}\"
- \"site:x.com AnthropicAI\"
- \"Anthropic announcement 2026\"
- \"Claude AI update March 2026\"

Pick the single most significant story from today or yesterday.

## Step 2 — Check for duplicates
List the files in content/claude-news/ and read their titles. If the story is already covered, stop here and output only: SKIP

## Step 3 — Write the file
Create ONE file at:
  content/claude-news/${TODAY}-[short-english-slug].md

Use this exact format:
---
title: \"제목 (Korean)\"
date: \"${TODAY}\"
tags: [\"tag1\", \"tag2\"]
summary: \"한 줄 요약 (Korean)\"
---

본문은 한국어로 작성. 섹션, 불릿, 코드블록 자유롭게 사용.
최소 200자 이상. 개발자 관점에서 왜 중요한지 포함.

## Step 4 — Commit & push
After writing the file, run exactly:
  git add content/claude-news/
  git commit -m \"content: auto-add Claude news ${TODAY}\"
  git push origin main

If no significant news found, output: NO_NEWS_TODAY"

"$CLAUDE_BIN" \
  --print \
  --allowedTools "WebSearch,WebFetch,Bash,Read,Write,Edit,Glob,Grep" \
  "$PROMPT" >> "$LOG_FILE" 2>&1

EXIT_CODE=$?
echo "[$TODAY $(date '+%H:%M:%S')] Finished (exit: $EXIT_CODE)." >> "$LOG_FILE"
