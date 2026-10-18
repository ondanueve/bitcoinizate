#!/usr/bin/env bash
# Build the full bitcoinizate.com site into one folder:
#   hub files at /, the choppy-bitcoin repo under /choppy-bitcoin/.
# Usage: scripts/assemble.sh <choppy-bitcoin checkout> <output dir>
# Used by .github/workflows/pages.yml and for local previews.
set -euo pipefail
HUB="$(cd "$(dirname "$0")/.." && pwd)"
CHOPPY="$(cd "${1:?path to choppy-bitcoin checkout}" && pwd)"
OUT="${2:?output dir}"

rm -rf "$OUT"
mkdir -p "$OUT/choppy-bitcoin"

# Hub: everything except repo plumbing.
tar -C "$HUB" -cf - \
  --exclude=./.git --exclude=./.github --exclude=./scripts --exclude=./_site --exclude=./_choppy \
  --exclude=./README.md --exclude=./LICENSE --exclude=./.gitignore --exclude=./.nojekyll . \
  | tar -C "$OUT" -xf -

# Choppy Bitcoin: everything except repo plumbing, SQL and notes.
tar -C "$CHOPPY" -cf - \
  --exclude=./.git --exclude=./.github --exclude=./supabase --exclude=./docs \
  --exclude=./README.md --exclude=./LICENSE --exclude=./.gitignore . \
  | tar -C "$OUT/choppy-bitcoin" -xf -

sha() { git -C "$1" rev-parse HEAD 2>/dev/null || echo unknown; }
printf '{"hub":"%s","choppy":"%s","built_at":"%s"}\n' \
  "$(sha "$HUB")" "$(sha "$CHOPPY")" "$(date -u +%Y-%m-%dT%H:%M:%SZ)" > "$OUT/build.json"

echo "assembled $(find "$OUT" -type f | wc -l) files, $(du -sh "$OUT" | cut -f1) into $OUT"
