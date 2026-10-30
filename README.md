# Bitcoinizate

The hub at **https://bitcoinizate.com/**: a single static page that lists every project.

## Projects

The list lives in [`projects.js`](projects.js). To add a project, append one object (name, status, links, EN/ES description); the page renders it. `status` is `live`, `code` (public repo only) or `soon` (shown without links, e.g. for private repos).

## What gets published

`.github/workflows/pages.yml` builds one GitHub Pages artifact:

- `/` — this repo (`index.html`, `privacy.html`, `404.html`, `style.css`, `hub.js`, `projects.js`, icons, `robots.txt`, `sitemap.xml`, `CNAME`)
- `/choppy-bitcoin/` — the public [`ondanueve/choppy-bitcoin`](https://github.com/ondanueve/choppy-bitcoin) repo, checked out at build time
- `/build.json` — which commit of each repo is live

It runs on every push to `main`, by hand, and every 3 hours (the scheduled run only deploys if the hub or Choppy Bitcoin changed). To publish a Choppy Bitcoin or RB change right away:

```sh
gh workflow run pages.yml -R ondanueve/bitcoinizate
```

Note: GitHub pauses scheduled workflows in public repos after 60 days without activity in the repo. Re-enable it from the Actions tab if that happens.

### Optional: redeploy the hub on every Choppy push

Not set up by default because it needs a token. In `choppy-bitcoin`, add a fine-grained personal access token limited to the `bitcoinizate` repo with **Actions: read and write** as the secret `HUB_DISPATCH_TOKEN`, and this workflow:

```yaml
# choppy-bitcoin/.github/workflows/notify-hub.yml
name: notify-hub
on: { push: { branches: [main] } }
jobs:
  dispatch:
    runs-on: ubuntu-latest
    steps:
      - run: gh workflow run pages.yml -R ondanueve/bitcoinizate
        env: { GH_TOKEN: "${{ secrets.HUB_DISPATCH_TOKEN }}" }
```

## Language and SEO

Spanish (es-AR) is the primary language: static HTML is in Spanish with `lang="es"`, and `hub.js` defaults to Spanish unless the visitor chose English (saved in `localStorage`, shared with Choppy Bitcoin) or the URL has `?lang=en`. Keep `sitemap.xml` `lastmod` dates current when pages change.

## Old URLs

`404.html` keeps old links alive: `/alias`, `/@alias`, `/u/alias` and `/u.html?u=alias` go to the player profile at `/choppy-bitcoin/u/?u=alias`; `/dashboard/profile/` goes to `/choppy-bitcoin/profile/`; `/privacy` goes to `/privacy.html`; `/choppy-bitcoin/chart` goes to `/choppy-bitcoin/chart.html`.

## Local preview

```sh
git clone https://github.com/ondanueve/choppy-bitcoin ../choppy-bitcoin
scripts/assemble.sh ../choppy-bitcoin _site
python3 scripts/check-links.py _site
python3 -m http.server 8080 -d _site
```

## License

MIT, see [LICENSE](LICENSE).
