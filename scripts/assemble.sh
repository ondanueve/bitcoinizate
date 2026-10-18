#!/usr/bin/env bash
# Build the full bitcoinizate.com site into one folder:
#   hub files at /, the choppy-bitcoin repo under /choppy-bitcoin/,
#   and the static build of borgesdebioyizador under /borgesdebioyizador/.
# Usage: scripts/assemble.sh <choppy-bitcoin checkout> <output dir> [borgesdebioyizador checkout]
#   The borgesdebioyizador checkout must already be built (npm ci && npm run build -> out/).
# Used by .github/workflows/pages.yml and for local previews.
set -euo pipefail
HUB="$(cd "$(dirname "$0")/.." && pwd)"
CHOPPY="$(cd "${1:?path to choppy-bitcoin checkout}" && pwd)"
OUT="${2:?output dir}"
BORGES="${3:-}"

rm -rf "$OUT"
mkdir -p "$OUT/choppy-bitcoin"

# Hub: everything except repo plumbing.
tar -C "$HUB" -cf - \
  --exclude=./.git --exclude=./.github --exclude=./scripts --exclude=./_site --exclude=./_choppy --exclude=./_borges \
  --exclude=./README.md --exclude=./LICENSE --exclude=./.gitignore --exclude=./.nojekyll --exclude=./art-archive . \
  | tar -C "$OUT" -xf -

# Choppy Bitcoin: everything except repo plumbing, SQL and notes.
tar -C "$CHOPPY" -cf - \
  --exclude=./.git --exclude=./.github --exclude=./supabase --exclude=./docs \
  --exclude=./README.md --exclude=./LICENSE --exclude=./.gitignore . \
  | tar -C "$OUT/choppy-bitcoin" -xf -

# rayo borgesdebioyizador: the static export (Next.js output: "export", basePath /borgesdebioyizador).
# Its backend lives on Supabase Edge Functions; nothing secret is in the build.
if [ -n "$BORGES" ]; then
  BORGES="$(cd "$BORGES" && pwd)"
  if [ ! -f "$BORGES/out/index.html" ]; then
    echo "borgesdebioyizador is not built: run 'npm ci && npm run build' in $BORGES" >&2
    exit 1
  fi
  mkdir -p "$OUT/borgesdebioyizador"
  # Only the hub's 404.html is used by Pages; drop the app's copies to avoid confusion.
  tar -C "$BORGES/out" -cf - --exclude=./404.html --exclude=./404 . | tar -C "$OUT/borgesdebioyizador" -xf -
fi

sha() { if [ -n "$1" ]; then git -C "$1" rev-parse HEAD 2>/dev/null || echo unknown; else echo none; fi; }
printf '{"hub":"%s","choppy":"%s","borges":"%s","built_at":"%s"}\n' \
  "$(sha "$HUB")" "$(sha "$CHOPPY")" "$(sha "$BORGES")" "$(date -u +%Y-%m-%dT%H:%M:%SZ)" > "$OUT/build.json"

echo "assembled $(find "$OUT" -type f | wc -l) files, $(du -sh "$OUT" | cut -f1) into $OUT"
