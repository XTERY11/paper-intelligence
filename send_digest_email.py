#!/usr/bin/env python3
"""
Paperwise 每日摘要邮件
用法:
  python3 send_digest_email.py           # 发送今日摘要
  python3 send_digest_email.py --test    # 生成预览，不发送
  python3 send_digest_email.py --date 2026-03-15  # 指定日期
"""
import argparse, json, re, smtplib, random, sys
from datetime import date
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from pathlib import Path

PAPERS_DIR = Path("/home/ctx/papers")

GREETINGS = [
    "今日也是求知若渴的一天，",
    "论文海里捞出几颗明珠，",
    "每读一篇，思维边界又拓宽一寸。",
    "Keep pushing the frontier —",
    "Science never sleeps, and neither does curiosity.",
]

TOPIC_NAMES = {
    "T1": "LLM Reasoning",
    "T2": "Interpretability",
    "T3": "Control × LLM",
    "T4": "Hallucination & ICL",
    "T5": "Autonomous Driving",
    "T6": "Safety & Alignment",
    "T7": "Other",
}


def get_today_papers(target_date: str) -> list:
    js_file = PAPERS_DIR / "papers_data.js"
    if not js_file.exists():
        return []
    text = js_file.read_text(encoding="utf-8")
    # Extract the JS array
    m = re.search(r'const papers\s*=\s*(\[[\s\S]*?\]);', text)
    if not m:
        return []
    try:
        papers = json.loads(m.group(1))
    except json.JSONDecodeError:
        return []
    return [p for p in papers if p.get("added", "") == target_date]


def topic_color(t: str) -> str:
    colors = {
        "T1": "#818cf8", "T2": "#b57bee", "T3": "#38c9f0",
        "T4": "#fb923c", "T5": "#34d399", "T6": "#f87171", "T7": "#fbbf24",
    }
    return colors.get(t, "#888")


def build_html_email(papers: list, target_date: str, dashboard_url: str) -> str:
    greeting = random.choice(GREETINGS)

    # Topic stats
    topic_counts: dict[str, int] = {}
    for p in papers:
        for t in p.get("topics", []):
            topic_counts[t] = topic_counts.get(t, 0) + 1

    topic_pills = "".join(
        f'<span style="display:inline-block;margin:2px 4px;padding:2px 10px;'
        f'border-radius:12px;background:{topic_color(t)};color:#fff;font-size:12px">'
        f'{TOPIC_NAMES.get(t, t)} ({c})</span>'
        for t, c in sorted(topic_counts.items())
    )

    # Paper cards
    def card(p: dict) -> str:
        topics_html = "".join(
            f'<span style="font-size:11px;padding:1px 7px;border-radius:10px;'
            f'background:{topic_color(t)}22;color:{topic_color(t)};margin-right:4px">'
            f'{TOPIC_NAMES.get(t, t)}</span>'
            for t in p.get("topics", [])
        )
        innovations = p.get("innovations", [])
        innov_html = "".join(
            f'<li style="margin:4px 0;font-size:14px;color:#444">{i}</li>'
            for i in innovations[:3]
        ) if innovations else ""

        good_sentences = p.get("good_sentences", [])
        sent_html = ""
        if good_sentences:
            gs = good_sentences[0]
            orig = gs.get("original", "")
            sent_html = (
                f'<blockquote style="margin:10px 0;padding:8px 14px;'
                f'border-left:3px solid #c9a96e;font-style:italic;'
                f'color:#666;font-size:14px">{orig}</blockquote>'
            )

        url = p.get("url", "#")
        return f"""
        <div style="background:#fff;border:1px solid #e5e0d4;border-radius:10px;
                    padding:20px;margin-bottom:16px">
          <div style="margin-bottom:8px">{topics_html}</div>
          <h3 style="margin:0 0 6px;font-size:16px;color:#1a1814;line-height:1.4">
            <a href="{url}" style="color:#1a1814;text-decoration:none">{p.get('title','')}</a>
          </h3>
          <div style="font-size:12px;color:#7a756a;margin-bottom:10px">
            {p.get('authors','')} · {p.get('year','')} · {p.get('venue','arXiv')}
          </div>
          {'<ul style="margin:8px 0;padding-left:18px">' + innov_html + '</ul>' if innov_html else ''}
          {sent_html}
        </div>"""

    cards_html = "".join(card(p) for p in papers)

    return f"""<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f4ef;font-family:'Source Sans 3',Arial,sans-serif">
<div style="max-width:640px;margin:30px auto;padding:0 16px">

  <!-- Header -->
  <div style="background:#1a1814;border-radius:12px;padding:24px 28px;margin-bottom:20px;color:#fff">
    <div style="font-size:20px;font-weight:600">Paper Intelligence <span style="opacity:.5;font-size:14px">学术情报</span></div>
    <div style="font-size:13px;opacity:.6;margin-top:4px">{target_date} · 每日摘要</div>
  </div>

  <!-- Greeting -->
  <div style="background:#fff;border-radius:10px;padding:18px 22px;margin-bottom:16px;
              border-left:4px solid #c9a96e;font-size:15px;color:#444">
    {greeting} 今日新增 <strong style="color:#8b5e2a">{len(papers)}</strong> 篇论文。
  </div>

  <!-- Topic summary -->
  {('<div style="margin-bottom:16px">' + topic_pills + '</div>') if topic_pills else ''}

  <!-- Paper cards -->
  {cards_html if papers else '<div style="text-align:center;padding:40px;color:#888">今日暂无新论文</div>'}

  <!-- Footer -->
  <div style="text-align:center;padding:20px 0;font-size:12px;color:#aaa">
    <a href="{dashboard_url}" style="color:#8b5e2a;text-decoration:none">打开看板 →</a>
    &nbsp;·&nbsp; Paperwise · 自动生成
  </div>

</div>
</body>
</html>"""


def send_email(html: str, target_date: str):
    try:
        import email_config as cfg
    except ImportError:
        print("错误：找不到 email_config.py，请先创建并填写 SMTP 配置。")
        sys.exit(1)

    if not cfg.SMTP_USER or not cfg.SMTP_PASS:
        print("错误：email_config.py 中 SMTP_USER 或 SMTP_PASS 为空，请填写后重试。")
        sys.exit(1)

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"[Paperwise] {target_date} 学术日报"
    msg["From"] = cfg.SMTP_USER
    msg["To"] = cfg.RECIPIENT
    msg.attach(MIMEText(html, "html", "utf-8"))

    try:
        with smtplib.SMTP(cfg.SMTP_HOST, cfg.SMTP_PORT) as server:
            server.ehlo()
            server.starttls()
            server.login(cfg.SMTP_USER, cfg.SMTP_PASS)
            server.sendmail(cfg.SMTP_USER, cfg.RECIPIENT, msg.as_string())
        print(f"✓ 邮件已发送至 {cfg.RECIPIENT}")
    except smtplib.SMTPAuthenticationError:
        print("错误：SMTP 认证失败，请检查用户名和密码（Gmail 需使用应用专用密码）。")
        sys.exit(1)
    except Exception as e:
        print(f"错误：发送失败 — {e}")
        sys.exit(1)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--test", action="store_true", help="生成预览但不发送")
    parser.add_argument("--date", default=str(date.today()), help="目标日期 YYYY-MM-DD")
    args = parser.parse_args()

    target_date = args.date
    papers = get_today_papers(target_date)
    print(f"找到 {len(papers)} 篇 {target_date} 的论文")

    try:
        import email_config as cfg
        dashboard_url = cfg.DASHBOARD_URL
    except ImportError:
        dashboard_url = "http://localhost:8899"

    html = build_html_email(papers, target_date, dashboard_url)

    preview_path = PAPERS_DIR / "email_preview.html"
    preview_path.write_text(html, encoding="utf-8")
    print(f"预览已保存: {preview_path}")

    if args.test:
        print("--test 模式：跳过发送")
    else:
        send_email(html, target_date)


if __name__ == "__main__":
    main()
