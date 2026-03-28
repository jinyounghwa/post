#!/bin/bash
# setup_launchd.sh
# launchd + pmset 방식으로 매일 00:20 AM 잠자기 해제 후 뉴스 수집 등록

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PLIST_SRC="$SCRIPT_DIR/kr.jinslife.claude-news.plist"
PLIST_DEST="$HOME/Library/LaunchAgents/kr.jinslife.claude-news.plist"
LABEL="kr.jinslife.claude-news"

echo "=== Claude News Launchd Setup ==="
echo ""

# 1. 기존 crontab 항목 제거
echo "[1/4] Removing old crontab entry..."
crontab -l 2>/dev/null | grep -v "fetch_claude_news" | crontab -
echo "      Done."

# 2. 기존 launchd 항목 언로드 (있으면)
echo "[2/4] Unloading existing launchd job (if any)..."
launchctl unload "$PLIST_DEST" 2>/dev/null
echo "      Done."

# 3. plist 복사 및 로드
echo "[3/4] Installing plist to ~/Library/LaunchAgents/..."
cp "$PLIST_SRC" "$PLIST_DEST"
launchctl load "$PLIST_DEST"
echo "      Done."

# 4. pmset으로 매일 00:15에 잠자기 해제 예약 (00:20 실행 5분 전)
echo "[4/4] Setting pmset wake schedule (00:15 daily)..."
echo "      This requires sudo password."
sudo pmset repeat wake MTWRFSU 00:15:00
echo "      Done."

echo ""
echo "✅ Setup complete!"
echo ""
echo "  Schedule  : 매일 00:20 AM"
echo "  Wake time : 매일 00:15 AM (pmset, 5분 전 슬립 해제)"
echo "  Plist     : $PLIST_DEST"
echo "  Log       : $(dirname "$SCRIPT_DIR")/logs/launchd_stdout.log"
echo ""
echo "  상태 확인  : launchctl list | grep jinslife"
echo "  수동 실행  : launchctl start $LABEL"
echo "  제거       : launchctl unload $PLIST_DEST && sudo pmset repeat cancel"
