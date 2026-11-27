# ChatGPT replacements, game version mp254 (2026-11-27)

Generated in ChatGPT (free plan, account Tomas Roncoroni) on 2026-11-27, from one refsheet per job. Published 2026-11-27.

- 033 casino (main; `raw/033-casino-gpt1.png`, prompt `prompts/033-casino-prompt-r2.txt`: the retry after the mp233 rejection). The glowing sign in the top-right corner showed pseudo-letters, so a local Gaussian blur (PIL, radius 25, feathered mask over about x 1740-1942, y 100-200 of the 1942x809 original) was applied before postprocessing: `raw/033-casino-gpt1-signblur.png` is the image that was published.
- 037 cousin (main; `raw/037-cousin-gpt1.png`, prompt `prompts/037-cousin-prompt-r2.txt`: the retry after the mp236 rejection)

`replaced/` holds the previous live JPGs (from choppy-bitcoin 7c82121), `raw/` the ChatGPT PNGs, `final/` the published 1920x800 JPGs (all <=380,000 bytes: casino 373,352; cousin 364,827), `prompts/` the job prompts and refsheets. The earlier rejected attempts are archived in `../chatgpt-mp233/rejected/` (casino) and `../chatgpt-mp236/rejected/` (cousin).
Game PR: ondanueve/choppy-bitcoin#70.
