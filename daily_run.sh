#!/usr/bin/env bash
# Paperwise 每日任务：抓取论文 + 发送邮件 + 同步 GitHub
set -e
LOG="/home/ctx/papers/digest.log"

echo "" >> "$LOG"
echo "════════════════════════════════" >> "$LOG"
echo "$(date '+%Y-%m-%d %H:%M:%S') 开始每日抓取" >> "$LOG"

# 加载项目级 API Key（走 platform.anthropic.com Credits）
if [ -f /home/ctx/papers/.env ]; then
    export $(cat /home/ctx/papers/.env | xargs)
    echo "$(date '+%Y-%m-%d %H:%M:%S') API Key 已加载" >> "$LOG"
fi

cd /home/ctx/papers

# Step 1: 运行 digest
echo "[1/3] Running paper digest..." | tee -a "$LOG"
claude --print "/paper digest" >> "$LOG" 2>&1
EXIT_CODE=$?
echo "$(date '+%Y-%m-%d %H:%M:%S') digest 完成 (exit: $EXIT_CODE)" >> "$LOG"

# Step 2: 发送邮件
echo "[2/3] Sending digest email..." | tee -a "$LOG"
python3 /home/ctx/papers/send_digest_email.py >> "$LOG" 2>&1

# Step 3: Git 同步
echo "[3/3] Git sync..." | tee -a "$LOG"
if git -C /home/ctx/papers remote | grep -q origin 2>/dev/null; then
    git -C /home/ctx/papers add papers_data.js 2>/dev/null && \
    git -C /home/ctx/papers commit -m "auto: daily digest $(date +%Y-%m-%d)" 2>/dev/null && \
    git -C /home/ctx/papers push origin main >> "$LOG" 2>&1 && \
    echo "Git push done." | tee -a "$LOG" || true
fi

echo "=== done ===" >> "$LOG"
