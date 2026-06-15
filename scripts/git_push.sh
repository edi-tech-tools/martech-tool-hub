#!/bin/bash
cd /home/edi/martech-tool-hub

# Get GITHUB_TOKEN
GITHUB_TOKEN=$(python3 -c "
with open('/home/edi/.hermes/api_keys.env', 'rb') as f:
    data = f.read()
idx = data.find(b'GITHUB_TOKEN=')
if idx >= 0:
    start = idx + len(b'GITHUB_TOKEN=')
    end = data.find(b'\n', start)
    print(data[start:end].decode())
")

# Set remote with embedded token
git remote set-url origin "https://token:${GITHUB_TOKEN}@github.com/longfeixiang7650-dotcom/martech-tool-hub.git"

git add -A
git commit -m "daily update 2026-06-16: refine ahrefs/hubspot/brandfolder tools + new blog cdp comparison"

GIT_HTTP_POSTBUFFER=524288000 https_proxy=http://127.0.0.1:7890 git push

# Reset remote URL to avoid token exposure
git remote set-url origin "https://github.com/longfeixiang7650-dotcom/martech-tool-hub.git"
