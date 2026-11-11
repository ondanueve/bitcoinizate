#!/usr/bin/env python3
"""Fail if the Choppy counts sentence is missing from privacy.html / hub.js,
or if hub.js Spanish strings use voseo."""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
html = (ROOT / "privacy.html").read_text(encoding="utf-8")
js = (ROOT / "hub.js").read_text(encoding="utf-8")
errors = []

if 'data-i18n="privacyB2a"' not in html:
    errors.append("privacy.html is missing data-i18n=\"privacyB2a\"")
if "conteos agregados anónimos" not in html:
    errors.append("privacy.html is missing the Spanish counts sentence")

en = 'Choppy Bitcoin records anonymous aggregate counts of games started, finished, and shared, with no personal data, plus daily-candle scores if the player submits them.'
es = 'Choppy Bitcoin registra conteos agregados anónimos de partidas iniciadas, terminadas y compartidas, sin datos personales, y también los puntajes de la vela del día si el jugador los envía.'
if f'privacyB2a: "{en}"' not in js:
    errors.append("hub.js is missing the English privacyB2a string")
if f'privacyB2a: "{es}"' not in js:
    errors.append("hub.js is missing the Spanish privacyB2a string")

# Neutral Spanish: tuteo is fine; voseo is not.
voseo = re.compile(
    r"\b(podés|tenés|querés|hacés|decís|venís|sos|tenés|podés)\b",
    re.I,
)
# Only scan the es: { ... } block
m = re.search(r"\bes:\s*\{", js)
if not m:
    errors.append("hub.js has no es dictionary")
else:
    start = m.start()
    # naive end: next top-level closing of dict at indent 4
    end = js.find("\n    }", start)
    block = js[start:end if end != -1 else None]
    found = voseo.findall(block)
    if found:
        errors.append("hub.js Spanish strings use voseo: " + ", ".join(sorted(set(found))))

if errors:
    print("privacy i18n check failed:")
    for e in errors:
        print(" -", e)
    sys.exit(1)
print("privacy i18n check ok")
