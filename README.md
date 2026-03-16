# Paperwise Dashboard

Personal academic paper intelligence dashboard — browse, annotate, and receive daily digests of research papers.

## Features

- Paper card library with topic filtering and full-text search
- Modal detail view with background, innovations, insights, and good sentences
- Text selection → save as good sentence (just highlight text in modal)
- Analysis queue with real-time status indicator
- Daily email digest via SMTP
- Light / dark / cool themes

## Setup

1. Run the server: `python3 /home/ctx/papers/server.py`
   - Or via systemd: `systemctl --user start paperwise`
2. Open `http://localhost:8899` in your browser
3. Configure email: edit `email_config.py` and run `python3 send_digest_email.py --test`

## GitHub Pages

After pushing to GitHub:
1. Go to repository Settings → Pages
2. Set Source = main branch
3. Your dashboard will be available at `https://{username}.github.io/{repo}/`

> Add your repository URL here after setup.
