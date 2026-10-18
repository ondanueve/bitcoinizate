#!/usr/bin/env python3
"""Check that every local href/src in the assembled site points at a real file.

Usage: scripts/check-links.py <site dir>
Looks at .html files (href, src, content of og:image when on bitcoinizate.com)
and .webmanifest icon/start_url paths. External links, mailto:, bitcoin:,
lightning:, data: and javascript: are skipped. Exits 1 on any broken link.
"""
import json, os, re, sys
from urllib.parse import urlsplit, unquote

ROOT = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else "_site")
SITE = "bitcoinizate.com"
ATTR = re.compile(r'''(?:href|src)\s*=\s*["']([^"'<>]+)["']''', re.I)
META = re.compile(r'''<meta[^>]+content\s*=\s*["'](https?://[^"']+)["']''', re.I)
SKIP = ("mailto:", "bitcoin:", "lightning:", "data:", "javascript:", "tel:", "#")

def resolve(page_rel, url):
    parts = urlsplit(url)
    if parts.scheme in ("http", "https"):
        if parts.hostname != SITE:
            return None
        path = parts.path
    elif parts.scheme:
        return None
    else:
        path = parts.path
        if not path:
            return None
        if not path.startswith("/"):
            path = os.path.join("/" + os.path.dirname(page_rel), path)
    path = unquote(os.path.normpath(path)) if path != "/" else "/"
    fs = os.path.join(ROOT, path.lstrip("/"))
    if url.rstrip().endswith("/") or os.path.isdir(fs):
        fs = os.path.join(fs, "index.html")
    return path, fs

broken, checked = [], 0
for dirpath, _, files in os.walk(ROOT):
    for name in files:
        full = os.path.join(dirpath, name)
        rel = os.path.relpath(full, ROOT)
        if name.endswith(".html"):
            text = open(full, encoding="utf-8", errors="replace").read()
            urls = ATTR.findall(text) + META.findall(text)
        elif name.endswith(".webmanifest"):
            d = json.load(open(full, encoding="utf-8"))
            urls = [i.get("src", "") for i in d.get("icons", [])] + [d.get("start_url", "")]
        else:
            continue
        for u in urls:
            u = u.strip()
            if not u or u.startswith(SKIP) or any(c in u for c in "{}\\") or " + " in u:
                continue
            r = resolve(rel, u)
            if r is None:
                continue
            checked += 1
            if not os.path.isfile(r[1]):
                broken.append(f"{rel}: {u}")

print(f"checked {checked} local references in {ROOT}")
for b in sorted(set(broken)):
    print("BROKEN", b)
sys.exit(1 if broken else 0)
