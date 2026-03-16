#!/usr/bin/env bash
# Paperwise 每日自动任务 wrapper
# 顺序：Claude digest → 发邮件 → git push
set -euo pipefail

PAPERS_DIR="/home/ctx/papers"
LOG="$PAPERS_DIR/digest.log"
DATE=$(date '+%Y-%m-%d %H:%M:%S')

echo "=== $DATE ===" >> "$LOG"

# 1. Claude paper digest
echo "[1/3] Running paper digest..." | tee -a "$LOG"
claude --print "/paper digest" >> "$LOG" 2>&1 || echo "WARN: digest exited non-zero" >> "$LOG"

# 2. Send email
echo "[2/3] Sending digest email..." | tee -a "$LOG"
python3 "$PAPERS_DIR/send_digest_email.py" >> "$LOG" 2>&1 || echo "WARN: email exited non-zero" >> "$LOG"

# 3. Git push (only if remote is configured)
echo "[3/3] Git sync..." | tee -a "$LOG"
cd "$PAPERS_DIR"
if git remote get-url origin > /dev/null 2>&1; then
    git add papers_data.js 2>/dev/null || true
    git diff --cached --quiet || git commit -m "data: daily update $(date '+%Y-%m-%d')" >> "$LOG" 2>&1
    git push >> "$LOG" 2>&1 || echo "WARN: git push failed" >> "$LOG"
    echo "Git push done." | tee -a "$LOG"
else
    echo "No git remote configured, skipping push." | tee -a "$LOG"
fi

echo "=== done ===" >> "$LOG"
