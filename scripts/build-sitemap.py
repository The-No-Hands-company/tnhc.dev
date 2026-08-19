#!/usr/bin/env python3
"""Generate public/sitemap.xml from the site's own route and post data.

Hand-maintaining a sitemap is the same mistake as hand-maintaining the app
directory: it is correct on the day it is written and wrong the next time
anything is added. This derives it, so the 400-odd generated blog posts are
discoverable without anyone remembering to list them.
"""
import re, pathlib, datetime

SITE = pathlib.Path(__file__).resolve().parent.parent
DATA = SITE / "frontend/src/data"
OUT = SITE / "frontend/public/sitemap.xml"
BASE = "https://tnhc.dev"

STATIC = ["/", "/apps", "/blog", "/changelog"]


def slugs_from(path):
    if not path.exists():
        return []
    return re.findall(r'"slug":\s*"([^"]+)"', path.read_text())


def main():
    posts = slugs_from(DATA / "posts.js") + slugs_from(DATA / "commitPosts.js")
    # Same slug can appear in both hand-written and generated posts; one URL each.
    seen, urls = set(), []
    for p in STATIC:
        urls.append(p)
    for s in posts:
        u = f"/blog/{s}"
        if u not in seen:
            seen.add(u)
            urls.append(u)

    today = datetime.date.today().isoformat()
    lines = ['<?xml version="1.0" encoding="UTF-8"?>',
             '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for u in urls:
        # The four static pages are the entry points; posts are leaves.
        prio = "1.0" if u == "/" else ("0.8" if u in STATIC else "0.5")
        lines += ["  <url>",
                  f"    <loc>{BASE}{u}</loc>",
                  f"    <lastmod>{today}</lastmod>",
                  f"    <priority>{prio}</priority>",
                  "  </url>"]
    lines.append("</urlset>")
    OUT.write_text("\n".join(lines) + "\n")
    print(f"wrote {OUT.relative_to(SITE)}: {len(urls)} urls "
          f"({len(STATIC)} pages, {len(urls) - len(STATIC)} posts)")


if __name__ == "__main__":
    main()
