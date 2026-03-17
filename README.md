# Paperwise — 个人学术情报系统

每日自动抓取 arXiv 最新论文，按研究方向过滤，生成中文批注，发送邮件摘要，并在本地 Web 看板中展示。

---

## 功能概览

| 功能 | 说明 |
|------|------|
| **每日 Digest** | 每天 08:00 自动抓取 arXiv，精选 5 篇，生成 9 区块中文批注 |
| **邮件推送** | 自动将当日论文摘要发送到指定邮箱 |
| **Web 看板** | 本地浏览器查看所有论文，支持按话题/时间筛选 |
| **论文搜索** | 按关键词检索 OpenAlex，生成带批注的结果页 |
| **精读模式** | 读入本地 PDF，输出完整双栏批注 HTML |
| **GitHub 同步** | 每次运行后自动 commit + push，历史留档 |

**覆盖方向（T1–T7）**

| Tag | 方向 |
|-----|------|
| T1 | LLM Reasoning — 推理、CoT、inference-time scaling |
| T2 | Interpretability — 机制可解释性、probing、feature attribution |
| T3 | Control × LLM — CBF、Lyapunov、safe RL、formal verification |
| T4 | Hallucination & ICL — 幻觉、factuality、RAG、few-shot |
| T5 | Autonomous Driving — 端到端驾驶、BEV、world model |
| T6 | Robotics Navigation — UAV、SLAM、视觉导航 |
| T7 | Manipulation — 抓取、灵巧手、接触丰富策略 |

---

## 目录结构

```
papers/
├── index.html           ← Web 看板（本地打开）
├── papers_data.js       ← 论文数据库（自动追加）
├── daily_run.sh         ← 每日自动任务脚本
├── send_digest_email.py ← 邮件发送脚本
├── email_config.py      ← 邮件 SMTP 配置（不入 Git）
├── digests/             ← 每日 Digest HTML
├── annotations/         ← 精读批注 HTML（/paper read 输出）
└── FindResults/         ← 搜索结果 HTML（/paper find 输出）
```

---

## 本机使用说明

### 前置依赖

```bash
# 确认 Claude Code CLI 已安装
claude --version

# 确认 Python 依赖
pip install requests

# 确认 claude 路径（cron 需要绝对路径）
which claude   # 应输出 /home/ctx/.local/bin/claude 或类似路径
```

### 1. 查看 Web 看板

```bash
# 方式 A：直接打开文件（部分浏览器会有跨域限制）
xdg-open /home/ctx/papers/index.html

# 方式 B：启动本地 HTTP 服务（推荐）
python3 -m http.server 8899 --directory /home/ctx/papers/
# 然后访问 http://localhost:8899
```

### 2. 手动触发今日 Digest

```bash
# 完整流程：digest + 邮件 + git push
bash /home/ctx/papers/daily_run.sh

# 只运行 digest（不发邮件，不推送）
claude --dangerously-skip-permissions --print "/paper digest"

# 只补发邮件（digest HTML 已存在时）
python3 /home/ctx/papers/send_digest_email.py
```

### 3. 搜索指定论文

```bash
# 按关键词搜索，默认返回 5 篇
claude --dangerously-skip-permissions --print '/paper find "chain-of-thought reasoning"'

# 返回 10 篇
claude --dangerously-skip-permissions --print '/paper find "robotic manipulation" --top 10'

# 只搜 arXiv（不查引用量数据库）
claude --dangerously-skip-permissions --print '/paper find "safe reinforcement learning" --source arxiv'
```

### 4. 精读本地 PDF

```bash
# 精读单篇 PDF
claude --dangerously-skip-permissions --print '/paper read /path/to/paper.pdf'

# 问题驱动模式（重点回答指定问题）
claude --dangerously-skip-permissions --print '/paper read /path/to/paper.pdf --questions "Q1: 核心方法是什么？ Q2: 与 baseline 的差距？"'

# 批量处理某文件夹下所有 PDF
claude --dangerously-skip-permissions --print '/paper read --local /path/to/folder/'
```

### 5. 查看运行日志

```bash
# 查看最近 50 行日志
tail -50 /home/ctx/papers/digest.log

# 实时监控
tail -f /home/ctx/papers/digest.log
```

### 6. 强制重新生成今日 Digest

```bash
# 删除今日缓存后重跑
rm /home/ctx/papers/digests/$(date +%Y-%m-%d)-digest.html
claude --dangerously-skip-permissions --print "/paper digest"
```

---

## 自动化配置

### Cron 定时任务

系统已配置每天 08:00 自动运行：

```bash
# 查看当前 cron 配置
crontab -l
# 输出：0 8 * * * /home/ctx/papers/daily_run.sh

# 修改触发时间（例如改为 07:30）
crontab -e
# 将 "0 8 * * *" 改为 "30 7 * * *"
```

### 邮件配置

编辑 `email_config.py`（不入 Git）：

```python
# Gmail 示例（需开启两步验证 + 应用专用密码）
SMTP_HOST = "smtp.gmail.com"
SMTP_PORT = 587
SMTP_USER = "your.email@gmail.com"
SMTP_PASS = "xxxx xxxx xxxx xxxx"   # 应用专用密码
TO_EMAIL  = "your.email@gmail.com"

# NUS Office 365 示例
SMTP_HOST = "smtp.office365.com"
SMTP_PORT = 587
SMTP_USER = "eXXXXXXX@u.nus.edu"
SMTP_PASS = "your-password"
TO_EMAIL  = "eXXXXXXX@u.nus.edu"
```

测试邮件（只生成预览，不实际发送）：

```bash
python3 /home/ctx/papers/send_digest_email.py --test
xdg-open /home/ctx/papers/email_preview.html   # 查看预览
```

### 批注语言 / 输出目录

在 `CLAUDE.md` 中覆盖默认配置：

```yaml
paper_output_dir: /home/ctx/papers
paper_annotation_lang: zh   # zh = 中文批注 | en = 英文批注
```

---

## 常见问题

**Cron 没有触发 / 日志显示 `claude: 未找到命令`**

```bash
# 确认 daily_run.sh 顶部有 PATH 设置
head -8 /home/ctx/papers/daily_run.sh
# 应包含：export PATH="/home/ctx/.local/bin:$PATH"

# 如果没有，手动添加（将 /home/ctx/.local/bin 替换为 which claude 的输出目录）
```

**邮件发送失败**

```bash
tail -30 /home/ctx/papers/digest.log   # 查看错误信息
python3 /home/ctx/papers/send_digest_email.py --test   # 测试连通性
```

**今日 digest 显示"已存在"但文件不在**

```bash
rm -f /home/ctx/papers/digests/$(date +%Y-%m-%d)-digest.html
claude --dangerously-skip-permissions --print "/paper digest"
```

**Web 看板数据不更新**

```bash
tail -5 /home/ctx/papers/papers_data.js   # 确认数据已写入
# 浏览器按 Ctrl+Shift+R 强制刷新
```

**查看历史某天的 digest**

```bash
ls /home/ctx/papers/digests/                            # 列出所有历史
xdg-open /home/ctx/papers/digests/2026-03-16-digest.html
```

---

## GitHub 同步

```bash
# 手动推送（通常由 daily_run.sh 自动完成）
git -C /home/ctx/papers add papers_data.js digests/ annotations/
git -C /home/ctx/papers commit -m "manual: update $(date +%Y-%m-%d)"
git -C /home/ctx/papers push origin main

# 查看提交历史
git -C /home/ctx/papers log --oneline -10
```
