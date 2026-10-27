# art-archive

Raw and replaced Choppy Bitcoin art, kept on purpose: flawed or replaced images are never deleted.
This folder is excluded from the published site (see `scripts/assemble.sh`).

- `illus/gen-battle/`: raw battle PNGs (pre/post/win). `battle-lattice-win.png` and `battle-trust-win.png` are the
  first versions, replaced in the game by the `-v2` files.
- `illus/gen-post/`: raw post-decision PNGs. `theQuestion-a.png` was rejected (Lena-like woman in the independence
  arc); the game uses `theQuestion-a-v2.png`. `citadelQuestion-a`, `islandInspection-a` and `protectIsland-a` were
  rejected for the same reason; the game uses their `-a-v2` files (Marek dressed for each scene).
  `_superseded/` holds discarded intermediate versions (e.g. a citadelQuestion v2 made without the clothing directive).

Older archive (before the repo split): private repo `ondanueve/bitcoinizate-old`, folder `art-archive/`.
- `history/`: game art replaced in `ondanueve/choppy-bitcoin`. `unclemike-wide-replaced-2026-10-18.jpg` is the previous
  Uncle Mike card, replaced by a new Uncle Mike design, distinct from Héctor, that fixes the deformed legs.
- `history/unclemike-square-replaced-2026-10-18.jpg`: the previous square Uncle Mike fallback art, replaced by a square cut of the new design.
- `illus/gen-fixes2/`: raw redraw PNGs (`unclemike-v3.png` = the new Uncle Mike design).
- `choppy/replaced-mp188/`: the 12 post-decision images (`<id>-<choice>-wide.jpg`) live in Choppy Bitcoin until mp187,
  replaced in mp188 because Paco was drawn as a beagle instead of his terrier design.
- `choppy/paco-fix-mp188/raw/`: the AI Studio PNGs (1584x672) for those replacements; `_rejected/` holds discarded tries.
