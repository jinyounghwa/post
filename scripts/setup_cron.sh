#!/bin/bash
# setup_cron.sh
# 매일 새벽 1:00 AM에 fetch_claude_news.sh 를 실행하도록 crontab 등록

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FETCH_SCRIPT="$SCRIPT_DIR/fetch_claude_news.sh"
LOG_FILE="$(dirname "$SCRIPT_DIR")/logs/cron.log"

chmod +x "$FETCH_SCRIPT"

# 기존 등록 항목 제거 후 재등록
crontab -l 2>/dev/null | grep -v "fetch_claude_news" | crontab -
(crontab -l 2>/dev/null; echo "0 1 * * * $FETCH_SCRIPT >> $LOG_FILE 2>&1") | crontab -

echo "✅ Cron registered:"
crontab -l | grep fetch_claude_news
echo ""
echo "Schedule  : every day at 01:00 AM (local KST)"
echo "Script    : $FETCH_SCRIPT"
echo "Log       : $LOG_FILE"
