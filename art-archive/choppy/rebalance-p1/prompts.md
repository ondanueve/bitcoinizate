# Bitcoin Country arc rebalancing: prompts

47 images (P1 = cast + lighting, fix first; P2 = cast + lighting; P3 = lighting-only/minor; P3 scenes are short drafts, expand if used). Each REPLACES the file with the same name (target file below). Before overwriting, archive the old file to hub `art-archive/choppy/` (never delete).

How to use: new chat, upload the listed reference images in the stated order, paste the prompt, ask for a landscape 2.4:1 image. Then `/workspace/arc-outcomes/postprocess.sh <downloaded-file> chance/<file>`.

Differences from the previous prompt set: (1) no Marek-containing STYLE ref (`style-citadelProblem-wide.jpg` is a sunset Choppy+Marek two-shot in black tee+shorts); night prompts use `style-night-protectIsland-c.jpg`, day prompts `style-day-nothingToHide.jpg` (both without Marek, under `btc-balance/refs/`); (2) STYLE text no longer says 'warm / coherent warm lighting'; a binding LIGHTING line is added and golden hour/sunset is in AVOID; (3) the Marek block and ref are only included when Marek is in the scene, and prompts without Marek say so (the previous briefs attached a Marek description to every battle brief, which is why a glasses-wearing man showed up in scenes that never named him); (4) Marek always smart-casual, never running/gym clothes.

Review each result at 480x200 and phone width. Reject if: Choppy's coin/headband wrong or distorted, any visible text, orange/sunset sky when LIGHTING says otherwise, a glasses man in a scene without Marek, Marek in sporty clothes, Lena anywhere.

## 1. [P1] citadelProblem - The 417-page book / checklist (hillside walk)

Target file: `chance/citadelProblem-wide.jpg`
Current: cast CM, light GH | New: cast CMNP, light OV (overcast / hazy gray)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/marek-dressed.jpg`
4. `/workspace/arc-outcomes/refs/nico.png`
5. `/workspace/arc-outcomes/refs/paco.png`

Note: Replaces the Choppy+Marek-only two-shot (Marek in black tee + shorts). This is also the current shared STYLE ref (sunset, two-shot): retire it as a style ref. Card text says 'on a run through the hills': suggest 'on a walk'.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = MAREK dressed reference (dark button shirt, black rectangular glasses): face, hair and glasses only; dress him as the scene says; image 4 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 5 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
MAREK: lean man, short messy dark hair, black rectangular glasses, face and build from the MAREK reference only. He is NEVER in running, gym or sporty clothes: dress him for the scene (smart-casual knit sweater or collared shirt, dark trousers, leather shoes).
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: A grassy hilltop path overlooking green hills and a distant sea. Four friends have stopped mid-walk. Choppy sits on a flat rock holding up a blank clipboard checklist (no writing) with a proud pose. Marek, in a dark waxed field jacket over a collared shirt, dark trousers and leather boots, points an index finger at the clipboard, half-laughing. Nico, in his olive-green hoodie with a small backpack, leans in grinning. Paco sniffs at the thick blank-cover book lying open on the rock. A relaxed hike, not a run.

LIGHTING / TIME OF DAY (binding): bright overcast late morning, soft diffuse cool-neutral daylight, thin low mist in the valley, NO visible sun disc, NO golden hour.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes. Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 2. [P1] somethingBetter - Running with Marek -> walking in the woods

Target file: `chance/somethingBetter-wide.jpg`
Current: cast CM, light GH | New: cast CMP, light MD (midday bright)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/marek-dressed.jpg`
4. `/workspace/arc-outcomes/refs/paco.png`

Note: Card text says 'running with Marek'; Marek must never be in runner clothes. Suggest 'walking'. Paco added so it is not a two-shot.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = MAREK dressed reference (dark button shirt, black rectangular glasses): face, hair and glasses only; dress him as the scene says; image 4 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
MAREK: lean man, short messy dark hair, black rectangular glasses, face and build from the MAREK reference only. He is NEVER in running, gym or sporty clothes: dress him for the scene (smart-casual knit sweater or collared shirt, dark trousers, leather shoes).
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: A forest trail along a river between low hills in full daytime. Choppy and Marek WALK (no jogging) side by side talking, Marek in a navy knit sweater over a collared shirt, dark trousers and walking shoes, hands in pockets, listening with one raised eyebrow. Paco trots ahead of them on the trail with his tongue out. Clear river on the left, mossy rocks, tall trees.

LIGHTING / TIME OF DAY (binding): dappled midday light through leaves, cool green shade, bright small sun patches on the path, NO golden hour, NO warm orange grade.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; Nico. Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 3. [P1] theQuestion - Last unchecked line: independence

Target file: `chance/theQuestion-wide.jpg`
Current: cast CM, light IW | New: cast CMNP, light IC (interior cool / neutral)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/marek-dressed.jpg`
4. `/workspace/arc-outcomes/refs/nico.png`
5. `/workspace/arc-outcomes/refs/paco.png`

Note: Replaces the Choppy+Marek two-shot. Marek is now one of four.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = MAREK dressed reference (dark button shirt, black rectangular glasses): face, hair and glasses only; dress him as the scene says; image 4 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 5 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
MAREK: lean man, short messy dark hair, black rectangular glasses, face and build from the MAREK reference only. He is NEVER in running, gym or sporty clothes: dress him for the scene (smart-casual knit sweater or collared shirt, dark trousers, leather shoes).
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: A plain planning room above the harbor, big window with a gray sea behind. Around a wide table with a hand-drawn island map and a blank checklist (no writing): Marek, in a gray collared shirt and dark trousers, leans on the table with folded arms and studies the last line; Nico, olive hoodie, holds a pen hovering over it with a mischievous grin; Choppy stands on the table edge between them holding a coffee mug, undecided; Paco asleep under the table.

LIGHTING / TIME OF DAY (binding): cool neutral overcast morning light from a big window, soft shadows, slightly blue-white, NOT warm, NOT golden hour.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes. Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 4. [P1] fourthColor - After the war: bakery reopens at noon

Target file: `chance/fourthColor-wide.jpg`
Current: cast CM, light GH | New: cast CNPm, light MD (midday bright)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/marek-dressed.jpg`
4. `/workspace/arc-outcomes/refs/nico.png`
5. `/workspace/arc-outcomes/refs/paco.png`

Note: Was Choppy+Marek walking as a pair at sunset.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = MAREK dressed reference (dark button shirt, black rectangular glasses): face, hair and glasses only; dress him as the scene says; image 4 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 5 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
MAREK: lean man, short messy dark hair, black rectangular glasses, face and build from the MAREK reference only. He is NEVER in running, gym or sporty clothes: dress him for the scene (smart-casual knit sweater or collared shirt, dark trousers, leather shoes).
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: A cobbled harbor street at noon. A baker in an apron hangs a blank wooden board over the door of a bakery. Choppy, Nico and Paco stand in front of the shop with fresh bread, Choppy holding a loaf like a trophy, Nico laughing, Paco begging. A few townspeople. In the background, Marek (smart-casual knit sweater, dark trousers) stands by a table studying a map with two residents, small and not the focus.

LIGHTING / TIME OF DAY (binding): bright clear noon sun high in a blue sky, crisp short shadows, clean neutral-white daylight, NOT golden hour.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes. Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 5. [P1] battle-lattice-1-pre - Pre-battle, coast defense (Crown Lattice)

Target file: `chance/battle-lattice-1-pre-wide.jpg`
Current: cast CM, light GH | New: cast CNP, light DW (cold pre-dawn / blue-gray dawn)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/nico.png`
4. `/workspace/arc-outcomes/refs/paco.png`

Note: Old image: Choppy + Marek-like man prone behind sandbags (brief said 'passing a radio to Marek'). Now Nico+Paco+militia.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 4 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: A pebbly island beach before the assault. Island militia (fishermen, a baker in an apron, teenagers) stack sandbag lines. Choppy kneels behind a sandbag passing a radio to Nico, who wears his olive-green hoodie and crouches beside him pointing out to sea. Paco stands tall on the sandbags barking at the horizon. Out in the mist, the silhouettes of Crown Lattice ships appear. No man with glasses. Bloc look: Crown Lattice, paint bronze-brown #5c4936, elite gilded gunboats, an ornate command yacht, a disciplined honor guard. Bloc vessels and vehicles carry only plain colored stripes in the bloc paint color, no flags, emblems or text.

LIGHTING / TIME OF DAY (binding): cold blue-gray pre-dawn, heavy sea mist, desaturated steel-blue and slate palette, only faint pale light on the horizon, NOT orange, NOT sunrise glow.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene). Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 6. [P1] battle-ledger-1-pre - Pre-battle, coast defense (Red Ledger Compact)

Target file: `chance/battle-ledger-1-pre-wide.jpg`
Current: cast CM, light GH | New: cast CNP, light DW (cold pre-dawn / blue-gray dawn)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/nico.png`
4. `/workspace/arc-outcomes/refs/paco.png`

Note: Old image: Choppy + Marek-like man prone behind sandbags (brief said 'passing a radio to Marek'). Now Nico+Paco+militia.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 4 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: A pebbly island beach before the assault. Island militia (fishermen, a baker in an apron, teenagers) stack sandbag lines. Choppy kneels behind a sandbag passing a radio to Nico, who wears his olive-green hoodie and crouches beside him pointing out to sea. Paco stands tall on the sandbags barking at the horizon. Out in the mist, the silhouettes of Red Ledger Compact ships appear. No man with glasses. Bloc look: Red Ledger Compact, paint dark red #6a3834, fast small craft, propaganda posters, loudspeaker trucks. Bloc vessels and vehicles carry only plain colored stripes in the bloc paint color, no flags, emblems or text.

LIGHTING / TIME OF DAY (binding): cold blue-gray pre-dawn, heavy sea mist, desaturated steel-blue and slate palette, only faint pale light on the horizon, NOT orange, NOT sunrise glow.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene). Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 7. [P1] battle-pact-1-pre - Pre-battle, coast defense (Meridian Stability Pact)

Target file: `chance/battle-pact-1-pre-wide.jpg`
Current: cast CM, light GH | New: cast CNP, light DW (cold pre-dawn / blue-gray dawn)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/nico.png`
4. `/workspace/arc-outcomes/refs/paco.png`

Note: Old image: Choppy + Marek-like man prone behind sandbags (brief said 'passing a radio to Marek'). Now Nico+Paco+militia.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 4 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: A pebbly island beach before the assault. Island militia (fishermen, a baker in an apron, teenagers) stack sandbag lines. Choppy kneels behind a sandbag passing a radio to Nico, who wears his olive-green hoodie and crouches beside him pointing out to sea. Paco stands tall on the sandbags barking at the horizon. Out in the mist, the silhouettes of Meridian Stability Pact ships appear. No man with glasses. Bloc look: Meridian Stability Pact, paint olive-grey #4a5340, heavy armored columns, slow grey landing barges, clerks with clipboards next to tanks. Bloc vessels and vehicles carry only plain colored stripes in the bloc paint color, no flags, emblems or text.

LIGHTING / TIME OF DAY (binding): cold blue-gray pre-dawn, heavy sea mist, desaturated steel-blue and slate palette, only faint pale light on the horizon, NOT orange, NOT sunrise glow.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene). Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 8. [P1] battle-trust-1-pre - Pre-battle, coast defense (Open Hemisphere Trust)

Target file: `chance/battle-trust-1-pre-wide.jpg`
Current: cast CM, light GH | New: cast CNP, light DW (cold pre-dawn / blue-gray dawn)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/nico.png`
4. `/workspace/arc-outcomes/refs/paco.png`

Note: Old image: Choppy + Marek-like man prone behind sandbags (brief said 'passing a radio to Marek'). Now Nico+Paco+militia.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 4 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: A pebbly island beach before the assault. Island militia (fishermen, a baker in an apron, teenagers) stack sandbag lines. Choppy kneels behind a sandbag passing a radio to Nico, who wears his olive-green hoodie and crouches beside him pointing out to sea. Paco stands tall on the sandbags barking at the horizon. Out in the mist, the silhouettes of Open Hemisphere Trust ships appear. No man with glasses. Bloc look: Open Hemisphere Trust, paint steel blue #34485e, drones, camera masts, sniper teams with long lenses, sleek corporate landing craft. Bloc vessels and vehicles carry only plain colored stripes in the bloc paint color, no flags, emblems or text.

LIGHTING / TIME OF DAY (binding): cold blue-gray pre-dawn, heavy sea mist, desaturated steel-blue and slate palette, only faint pale light on the horizon, NOT orange, NOT sunrise glow.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene). Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 9. [P1] battle-lattice-1-post - Post-battle, morning cleanup (Crown Lattice)

Target file: `chance/battle-lattice-1-post-wide.jpg`
Current: cast CM, light MD | New: cast CNPm, light OV (overcast / hazy gray)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/marek-dressed.jpg`
4. `/workspace/arc-outcomes/refs/nico.png`
5. `/workspace/arc-outcomes/refs/paco.png`

Note: Old image: Choppy + Marek (tablet) as the only named pair, midday.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = MAREK dressed reference (dark button shirt, black rectangular glasses): face, hair and glasses only; dress him as the scene says; image 4 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 5 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
MAREK: lean man, short messy dark hair, black rectangular glasses, face and build from the MAREK reference only. He is NEVER in running, gym or sporty clothes: dress him for the scene (smart-casual knit sweater or collared shirt, dark trousers, leather shoes).
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: Aftermath the morning after. Villagers sweep debris and drag a wrecked Crown Lattice craft with bronze-brown #5c4936 stripes onto the wet sand. Choppy pushes a wheelbarrow of scrap, Nico carries a plank on his shoulder laughing, Paco drags a rope with his teeth. Far in the background, Marek (dark knit sweater, dark trousers) checks a tablet with a blank screen, small, among other villagers. Bloc look: Crown Lattice, paint bronze-brown #5c4936, elite gilded gunboats, an ornate command yacht, a disciplined honor guard. Bloc vessels and vehicles carry only plain colored stripes in the bloc paint color, no flags, emblems or text.

LIGHTING / TIME OF DAY (binding): flat gray overcast late morning after rain, damp ground, cool neutral palette with a few pale blue gaps in the clouds, NOT golden hour.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes. Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 10. [P1] battle-ledger-1-post - Post-battle, morning cleanup (Red Ledger Compact)

Target file: `chance/battle-ledger-1-post-wide.jpg`
Current: cast CM, light MD | New: cast CNPm, light OV (overcast / hazy gray)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/marek-dressed.jpg`
4. `/workspace/arc-outcomes/refs/nico.png`
5. `/workspace/arc-outcomes/refs/paco.png`

Note: Old image: Choppy + Marek (tablet) as the only named pair, midday.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = MAREK dressed reference (dark button shirt, black rectangular glasses): face, hair and glasses only; dress him as the scene says; image 4 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 5 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
MAREK: lean man, short messy dark hair, black rectangular glasses, face and build from the MAREK reference only. He is NEVER in running, gym or sporty clothes: dress him for the scene (smart-casual knit sweater or collared shirt, dark trousers, leather shoes).
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: Aftermath the morning after. Villagers sweep debris and drag a wrecked Red Ledger Compact craft with dark red #6a3834 stripes onto the wet sand. Choppy pushes a wheelbarrow of scrap, Nico carries a plank on his shoulder laughing, Paco drags a rope with his teeth. Far in the background, Marek (dark knit sweater, dark trousers) checks a tablet with a blank screen, small, among other villagers. Bloc look: Red Ledger Compact, paint dark red #6a3834, fast small craft, propaganda posters, loudspeaker trucks. Bloc vessels and vehicles carry only plain colored stripes in the bloc paint color, no flags, emblems or text.

LIGHTING / TIME OF DAY (binding): flat gray overcast late morning after rain, damp ground, cool neutral palette with a few pale blue gaps in the clouds, NOT golden hour.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes. Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 11. [P1] battle-pact-1-post - Post-battle, morning cleanup (Meridian Stability Pact)

Target file: `chance/battle-pact-1-post-wide.jpg`
Current: cast CM, light MD | New: cast CNPm, light OV (overcast / hazy gray)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/marek-dressed.jpg`
4. `/workspace/arc-outcomes/refs/nico.png`
5. `/workspace/arc-outcomes/refs/paco.png`

Note: Old image: Choppy + Marek (tablet) as the only named pair, midday.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = MAREK dressed reference (dark button shirt, black rectangular glasses): face, hair and glasses only; dress him as the scene says; image 4 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 5 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
MAREK: lean man, short messy dark hair, black rectangular glasses, face and build from the MAREK reference only. He is NEVER in running, gym or sporty clothes: dress him for the scene (smart-casual knit sweater or collared shirt, dark trousers, leather shoes).
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: Aftermath the morning after. Villagers sweep debris and drag a wrecked Meridian Stability Pact craft with olive-grey #4a5340 stripes onto the wet sand. Choppy pushes a wheelbarrow of scrap, Nico carries a plank on his shoulder laughing, Paco drags a rope with his teeth. Far in the background, Marek (dark knit sweater, dark trousers) checks a tablet with a blank screen, small, among other villagers. Bloc look: Meridian Stability Pact, paint olive-grey #4a5340, heavy armored columns, slow grey landing barges, clerks with clipboards next to tanks. Bloc vessels and vehicles carry only plain colored stripes in the bloc paint color, no flags, emblems or text.

LIGHTING / TIME OF DAY (binding): flat gray overcast late morning after rain, damp ground, cool neutral palette with a few pale blue gaps in the clouds, NOT golden hour.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes. Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 12. [P1] battle-trust-1-post - Post-battle, morning cleanup (Open Hemisphere Trust)

Target file: `chance/battle-trust-1-post-wide.jpg`
Current: cast CM, light MD | New: cast CNPm, light OV (overcast / hazy gray)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/marek-dressed.jpg`
4. `/workspace/arc-outcomes/refs/nico.png`
5. `/workspace/arc-outcomes/refs/paco.png`

Note: Old image: Choppy + Marek (tablet) as the only named pair, midday.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = MAREK dressed reference (dark button shirt, black rectangular glasses): face, hair and glasses only; dress him as the scene says; image 4 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 5 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
MAREK: lean man, short messy dark hair, black rectangular glasses, face and build from the MAREK reference only. He is NEVER in running, gym or sporty clothes: dress him for the scene (smart-casual knit sweater or collared shirt, dark trousers, leather shoes).
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: Aftermath the morning after. Villagers sweep debris and drag a wrecked Open Hemisphere Trust craft with steel blue #34485e stripes onto the wet sand. Choppy pushes a wheelbarrow of scrap, Nico carries a plank on his shoulder laughing, Paco drags a rope with his teeth. Far in the background, Marek (dark knit sweater, dark trousers) checks a tablet with a blank screen, small, among other villagers. Bloc look: Open Hemisphere Trust, paint steel blue #34485e, drones, camera masts, sniper teams with long lenses, sleek corporate landing craft. Bloc vessels and vehicles carry only plain colored stripes in the bloc paint color, no flags, emblems or text.

LIGHTING / TIME OF DAY (binding): flat gray overcast late morning after rain, damp ground, cool neutral palette with a few pale blue gaps in the clouds, NOT golden hour.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes. Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 13. [P1] battle-lattice-2-pre - Pre-battle, night alarm (Crown Lattice)

Target file: `chance/battle-lattice-2-pre-wide.jpg`
Current: cast CN?, light NT | New: cast CNP, light ST (storm / rain)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-night-protectIsland-c.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/nico.png`
4. `/workspace/arc-outcomes/refs/paco.png`

Note: Old night image is fine for lighting; cast made explicit as Nico+Paco (ambiguous glasses guy before).

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, night version (rendering quality and detail only; ignore its composition and setting); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 4 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: Night alarm in the harbor in heavy rain. Searchlights sweep dark water where Crown Lattice vessels approach. Choppy runs along the wet pier pointing at the water, a lantern in his glove. Nico, olive hoodie soaked, climbs a harbor ladder holding a red flare. Paco barks at the edge of the pier. A couple of militia with raincoats behind. No man with glasses. Bloc look: Crown Lattice, paint bronze-brown #5c4936, elite gilded gunboats, an ornate command yacht, a disciplined honor guard. Bloc vessels and vehicles carry only plain colored stripes in the bloc paint color, no flags, emblems or text.

LIGHTING / TIME OF DAY (binding): night rain, deep navy and teal palette, cold white-blue searchlight beams cutting through rain, wet reflective surfaces, only a tiny red flare as warm accent, NOT sunset.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene). Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 14. [P1] battle-ledger-2-pre - Pre-battle, night alarm (Red Ledger Compact)

Target file: `chance/battle-ledger-2-pre-wide.jpg`
Current: cast CN?, light NT | New: cast CNP, light ST (storm / rain)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-night-protectIsland-c.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/nico.png`
4. `/workspace/arc-outcomes/refs/paco.png`

Note: Old night image is fine for lighting; cast made explicit as Nico+Paco (ambiguous glasses guy before).

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, night version (rendering quality and detail only; ignore its composition and setting); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 4 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: Night alarm in the harbor in heavy rain. Searchlights sweep dark water where Red Ledger Compact vessels approach. Choppy runs along the wet pier pointing at the water, a lantern in his glove. Nico, olive hoodie soaked, climbs a harbor ladder holding a red flare. Paco barks at the edge of the pier. A couple of militia with raincoats behind. No man with glasses. Bloc look: Red Ledger Compact, paint dark red #6a3834, fast small craft, propaganda posters, loudspeaker trucks. Bloc vessels and vehicles carry only plain colored stripes in the bloc paint color, no flags, emblems or text.

LIGHTING / TIME OF DAY (binding): night rain, deep navy and teal palette, cold white-blue searchlight beams cutting through rain, wet reflective surfaces, only a tiny red flare as warm accent, NOT sunset.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene). Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 15. [P1] battle-pact-2-pre - Pre-battle, night alarm (Meridian Stability Pact)

Target file: `chance/battle-pact-2-pre-wide.jpg`
Current: cast CN?, light NT | New: cast CNP, light ST (storm / rain)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-night-protectIsland-c.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/nico.png`
4. `/workspace/arc-outcomes/refs/paco.png`

Note: Old night image is fine for lighting; cast made explicit as Nico+Paco (ambiguous glasses guy before).

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, night version (rendering quality and detail only; ignore its composition and setting); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 4 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: Night alarm in the harbor in heavy rain. Searchlights sweep dark water where Meridian Stability Pact vessels approach. Choppy runs along the wet pier pointing at the water, a lantern in his glove. Nico, olive hoodie soaked, climbs a harbor ladder holding a red flare. Paco barks at the edge of the pier. A couple of militia with raincoats behind. No man with glasses. Bloc look: Meridian Stability Pact, paint olive-grey #4a5340, heavy armored columns, slow grey landing barges, clerks with clipboards next to tanks. Bloc vessels and vehicles carry only plain colored stripes in the bloc paint color, no flags, emblems or text.

LIGHTING / TIME OF DAY (binding): night rain, deep navy and teal palette, cold white-blue searchlight beams cutting through rain, wet reflective surfaces, only a tiny red flare as warm accent, NOT sunset.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene). Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 16. [P1] battle-trust-2-pre - Pre-battle, night alarm (Open Hemisphere Trust)

Target file: `chance/battle-trust-2-pre-wide.jpg`
Current: cast CN?, light NT | New: cast CNP, light ST (storm / rain)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-night-protectIsland-c.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/nico.png`
4. `/workspace/arc-outcomes/refs/paco.png`

Note: Old night image is fine for lighting; cast made explicit as Nico+Paco (ambiguous glasses guy before).

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, night version (rendering quality and detail only; ignore its composition and setting); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 4 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: Night alarm in the harbor in heavy rain. Searchlights sweep dark water where Open Hemisphere Trust vessels approach. Choppy runs along the wet pier pointing at the water, a lantern in his glove. Nico, olive hoodie soaked, climbs a harbor ladder holding a red flare. Paco barks at the edge of the pier. A couple of militia with raincoats behind. No man with glasses. Bloc look: Open Hemisphere Trust, paint steel blue #34485e, drones, camera masts, sniper teams with long lenses, sleek corporate landing craft. Bloc vessels and vehicles carry only plain colored stripes in the bloc paint color, no flags, emblems or text.

LIGHTING / TIME OF DAY (binding): night rain, deep navy and teal palette, cold white-blue searchlight beams cutting through rain, wet reflective surfaces, only a tiny red flare as warm accent, NOT sunset.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene). Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 17. [P1] battle-lattice-2-post - Post-battle, dock celebration (Crown Lattice)

Target file: `chance/battle-lattice-2-post-wide.jpg`
Current: cast CM, light GH | New: cast CNPO, light TW (blue-hour twilight (sun long gone))

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-night-protectIsland-c.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/nico.png`
4. `/workspace/arc-outcomes/refs/paco.png`
5. `/workspace/arc-outcomes/refs/ortega.jpg`

Note: Old image: Choppy + Marek-like man seated front-center, sunset.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, night version (rendering quality and detail only; ignore its composition and setting); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 4 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears); image 5 = MR ORTEGA & GAMBETTE reference (one man, dark wavy hair, navy suit, blue-white-yellow sash).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.
MR ORTEGA & GAMBETTE: ONE man (not two), about 55, dark wavy hair with gray at the temples, navy suit, blue-white-yellow ceremonial sash, same face as the ORTEGA reference.

SCENE: A small celebration on the dock. String lights, a grill, children waving at a sinking Crown Lattice hull with bronze-brown #5c4936 stripes far out. Choppy dances on a wooden crate. Nico claps and cheers beside the grill. Paco sits on the crate next to a villager playing guitar. Mr Ortega & Gambette, one man in a navy suit with his sash, raises a small glass among the villagers. No man with glasses. Bloc look: Crown Lattice, paint bronze-brown #5c4936, elite gilded gunboats, an ornate command yacht, a disciplined honor guard. Bloc vessels and vehicles carry only plain colored stripes in the bloc paint color, no flags, emblems or text.

LIGHTING / TIME OF DAY (binding): blue-hour twilight, the sun is long gone, deep indigo sky with the first stars, warm string lights and a grill as small accents against a cool blue scene, NOT sunset.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene). Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 18. [P1] battle-ledger-2-post - Post-battle, dock celebration (Red Ledger Compact)

Target file: `chance/battle-ledger-2-post-wide.jpg`
Current: cast CM, light GH | New: cast CNPO, light TW (blue-hour twilight (sun long gone))

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-night-protectIsland-c.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/nico.png`
4. `/workspace/arc-outcomes/refs/paco.png`
5. `/workspace/arc-outcomes/refs/ortega.jpg`

Note: Old image: Choppy + Marek-like man seated front-center, sunset.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, night version (rendering quality and detail only; ignore its composition and setting); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 4 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears); image 5 = MR ORTEGA & GAMBETTE reference (one man, dark wavy hair, navy suit, blue-white-yellow sash).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.
MR ORTEGA & GAMBETTE: ONE man (not two), about 55, dark wavy hair with gray at the temples, navy suit, blue-white-yellow ceremonial sash, same face as the ORTEGA reference.

SCENE: A small celebration on the dock. String lights, a grill, children waving at a sinking Red Ledger Compact hull with dark red #6a3834 stripes far out. Choppy dances on a wooden crate. Nico claps and cheers beside the grill. Paco sits on the crate next to a villager playing guitar. Mr Ortega & Gambette, one man in a navy suit with his sash, raises a small glass among the villagers. No man with glasses. Bloc look: Red Ledger Compact, paint dark red #6a3834, fast small craft, propaganda posters, loudspeaker trucks. Bloc vessels and vehicles carry only plain colored stripes in the bloc paint color, no flags, emblems or text.

LIGHTING / TIME OF DAY (binding): blue-hour twilight, the sun is long gone, deep indigo sky with the first stars, warm string lights and a grill as small accents against a cool blue scene, NOT sunset.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene). Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 19. [P1] battle-pact-2-post - Post-battle, dock celebration (Meridian Stability Pact)

Target file: `chance/battle-pact-2-post-wide.jpg`
Current: cast CM, light GH | New: cast CNPO, light TW (blue-hour twilight (sun long gone))

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-night-protectIsland-c.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/nico.png`
4. `/workspace/arc-outcomes/refs/paco.png`
5. `/workspace/arc-outcomes/refs/ortega.jpg`

Note: Old image: Choppy + Marek-like man seated front-center, sunset.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, night version (rendering quality and detail only; ignore its composition and setting); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 4 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears); image 5 = MR ORTEGA & GAMBETTE reference (one man, dark wavy hair, navy suit, blue-white-yellow sash).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.
MR ORTEGA & GAMBETTE: ONE man (not two), about 55, dark wavy hair with gray at the temples, navy suit, blue-white-yellow ceremonial sash, same face as the ORTEGA reference.

SCENE: A small celebration on the dock. String lights, a grill, children waving at a sinking Meridian Stability Pact hull with olive-grey #4a5340 stripes far out. Choppy dances on a wooden crate. Nico claps and cheers beside the grill. Paco sits on the crate next to a villager playing guitar. Mr Ortega & Gambette, one man in a navy suit with his sash, raises a small glass among the villagers. No man with glasses. Bloc look: Meridian Stability Pact, paint olive-grey #4a5340, heavy armored columns, slow grey landing barges, clerks with clipboards next to tanks. Bloc vessels and vehicles carry only plain colored stripes in the bloc paint color, no flags, emblems or text.

LIGHTING / TIME OF DAY (binding): blue-hour twilight, the sun is long gone, deep indigo sky with the first stars, warm string lights and a grill as small accents against a cool blue scene, NOT sunset.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene). Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 20. [P1] battle-trust-2-post - Post-battle, dock celebration (Open Hemisphere Trust)

Target file: `chance/battle-trust-2-post-wide.jpg`
Current: cast CM, light GH | New: cast CNPO, light TW (blue-hour twilight (sun long gone))

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-night-protectIsland-c.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/nico.png`
4. `/workspace/arc-outcomes/refs/paco.png`
5. `/workspace/arc-outcomes/refs/ortega.jpg`

Note: Old image: Choppy + Marek-like man seated front-center, sunset.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, night version (rendering quality and detail only; ignore its composition and setting); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 4 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears); image 5 = MR ORTEGA & GAMBETTE reference (one man, dark wavy hair, navy suit, blue-white-yellow sash).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.
MR ORTEGA & GAMBETTE: ONE man (not two), about 55, dark wavy hair with gray at the temples, navy suit, blue-white-yellow ceremonial sash, same face as the ORTEGA reference.

SCENE: A small celebration on the dock. String lights, a grill, children waving at a sinking Open Hemisphere Trust hull with steel blue #34485e stripes far out. Choppy dances on a wooden crate. Nico claps and cheers beside the grill. Paco sits on the crate next to a villager playing guitar. Mr Ortega & Gambette, one man in a navy suit with his sash, raises a small glass among the villagers. No man with glasses. Bloc look: Open Hemisphere Trust, paint steel blue #34485e, drones, camera masts, sniper teams with long lenses, sleek corporate landing craft. Bloc vessels and vehicles carry only plain colored stripes in the bloc paint color, no flags, emblems or text.

LIGHTING / TIME OF DAY (binding): blue-hour twilight, the sun is long gone, deep indigo sky with the first stars, warm string lights and a grill as small accents against a cool blue scene, NOT sunset.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene). Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 21. [P1] battle-lattice-win - Bloc withdraws (Crown Lattice)

Target file: `chance/battle-lattice-win-wide.jpg`
Current: cast CM?, light GH | New: cast CMNP, light BM (bright clear morning)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/marek-dressed.jpg`
4. `/workspace/arc-outcomes/refs/nico.png`
5. `/workspace/arc-outcomes/refs/paco.png`

Note: Old image: Choppy + Marek (all 4 win images had 'Marek beside him'), sunset.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = MAREK dressed reference (dark button shirt, black rectangular glasses): face, hair and glasses only; dress him as the scene says; image 4 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 5 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
MAREK: lean man, short messy dark hair, black rectangular glasses, face and build from the MAREK reference only. He is NEVER in running, gym or sporty clothes: dress him for the scene (smart-casual knit sweater or collared shirt, dark trousers, leather shoes).
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: The Crown Lattice withdraws: its whole fleet with bronze-brown #5c4936 stripes turns away on a blue-gray sea while the island waves from the cliffs. Choppy stands on a rock holding a white towel like a victory banner. Nico jumps beside him with both fists raised, Paco barks on the rock, and Marek (a khaki jacket over a collared shirt, dark trousers) stands a step behind them clapping, one of the group. Cheering villagers behind. Bloc look: Crown Lattice, paint bronze-brown #5c4936, elite gilded gunboats, an ornate command yacht, a disciplined honor guard. Bloc vessels and vehicles carry only plain colored stripes in the bloc paint color, no flags, emblems or text.

LIGHTING / TIME OF DAY (binding): bright clear mid-morning, high white sun, blue sky with a few puffy white clouds, saturated blue sea, crisp daylight, NOT golden hour.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes. Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 22. [P1] battle-ledger-win - Bloc withdraws (Red Ledger Compact)

Target file: `chance/battle-ledger-win-wide.jpg`
Current: cast CM?, light GH | New: cast CMNP, light BM (bright clear morning)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/marek-dressed.jpg`
4. `/workspace/arc-outcomes/refs/nico.png`
5. `/workspace/arc-outcomes/refs/paco.png`

Note: Old image: Choppy + Marek (all 4 win images had 'Marek beside him'), sunset.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = MAREK dressed reference (dark button shirt, black rectangular glasses): face, hair and glasses only; dress him as the scene says; image 4 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 5 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
MAREK: lean man, short messy dark hair, black rectangular glasses, face and build from the MAREK reference only. He is NEVER in running, gym or sporty clothes: dress him for the scene (smart-casual knit sweater or collared shirt, dark trousers, leather shoes).
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: The Red Ledger Compact withdraws: its whole fleet with dark red #6a3834 stripes turns away on a blue-gray sea while the island waves from the cliffs. Choppy stands on a rock holding a white towel like a victory banner. Nico jumps beside him with both fists raised, Paco barks on the rock, and Marek (a khaki jacket over a collared shirt, dark trousers) stands a step behind them clapping, one of the group. Cheering villagers behind. Bloc look: Red Ledger Compact, paint dark red #6a3834, fast small craft, propaganda posters, loudspeaker trucks. Bloc vessels and vehicles carry only plain colored stripes in the bloc paint color, no flags, emblems or text.

LIGHTING / TIME OF DAY (binding): bright clear mid-morning, high white sun, blue sky with a few puffy white clouds, saturated blue sea, crisp daylight, NOT golden hour.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes. Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 23. [P1] battle-pact-win - Bloc withdraws (Meridian Stability Pact)

Target file: `chance/battle-pact-win-wide.jpg`
Current: cast CM?, light GH | New: cast CMNP, light BM (bright clear morning)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/marek-dressed.jpg`
4. `/workspace/arc-outcomes/refs/nico.png`
5. `/workspace/arc-outcomes/refs/paco.png`

Note: Old image: Choppy + Marek (all 4 win images had 'Marek beside him'), sunset.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = MAREK dressed reference (dark button shirt, black rectangular glasses): face, hair and glasses only; dress him as the scene says; image 4 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 5 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
MAREK: lean man, short messy dark hair, black rectangular glasses, face and build from the MAREK reference only. He is NEVER in running, gym or sporty clothes: dress him for the scene (smart-casual knit sweater or collared shirt, dark trousers, leather shoes).
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: The Meridian Stability Pact withdraws: its whole fleet with olive-grey #4a5340 stripes turns away on a blue-gray sea while the island waves from the cliffs. Choppy stands on a rock holding a white towel like a victory banner. Nico jumps beside him with both fists raised, Paco barks on the rock, and Marek (a khaki jacket over a collared shirt, dark trousers) stands a step behind them clapping, one of the group. Cheering villagers behind. Bloc look: Meridian Stability Pact, paint olive-grey #4a5340, heavy armored columns, slow grey landing barges, clerks with clipboards next to tanks. Bloc vessels and vehicles carry only plain colored stripes in the bloc paint color, no flags, emblems or text.

LIGHTING / TIME OF DAY (binding): bright clear mid-morning, high white sun, blue sky with a few puffy white clouds, saturated blue sea, crisp daylight, NOT golden hour.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes. Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 24. [P1] battle-trust-win - Bloc withdraws (Open Hemisphere Trust)

Target file: `chance/battle-trust-win-wide.jpg`
Current: cast CM, light NT | New: cast CMNP, light BM (bright clear morning)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/marek-dressed.jpg`
4. `/workspace/arc-outcomes/refs/nico.png`
5. `/workspace/arc-outcomes/refs/paco.png`

Note: Old image: Choppy + Marek (all 4 win images had 'Marek beside him'), sunset.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = MAREK dressed reference (dark button shirt, black rectangular glasses): face, hair and glasses only; dress him as the scene says; image 4 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 5 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
MAREK: lean man, short messy dark hair, black rectangular glasses, face and build from the MAREK reference only. He is NEVER in running, gym or sporty clothes: dress him for the scene (smart-casual knit sweater or collared shirt, dark trousers, leather shoes).
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: The Open Hemisphere Trust withdraws: its whole fleet with steel blue #34485e stripes turns away on a blue-gray sea while the island waves from the cliffs. Choppy stands on a rock holding a white towel like a victory banner. Nico jumps beside him with both fists raised, Paco barks on the rock, and Marek (a khaki jacket over a collared shirt, dark trousers) stands a step behind them clapping, one of the group. Cheering villagers behind. Bloc look: Open Hemisphere Trust, paint steel blue #34485e, drones, camera masts, sniper teams with long lenses, sleek corporate landing craft. Bloc vessels and vehicles carry only plain colored stripes in the bloc paint color, no flags, emblems or text.

LIGHTING / TIME OF DAY (binding): bright clear mid-morning, high white sun, blue sky with a few puffy white clouds, saturated blue sea, crisp daylight, NOT golden hour.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes. Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 25. [P1] battle-gen-1-pre - Drones over the port

Target file: `chance/battle-gen-1-pre-wide.jpg`
Current: cast CM, light GH | New: cast CNP, light OV (overcast / hazy gray)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/nico.png`
4. `/workspace/arc-outcomes/refs/paco.png`

Note: Old: Choppy + Marek-like man on the roof, sunset.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 4 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: Drones over the port: a swarm of small unmarked drones over a harbor town under a pale sky, residents closing shutters. On a rooftop, Nico (olive hoodie) aims a homemade net launcher at the sky while Choppy holds a spare net ready, and Paco barks at the drones.

LIGHTING / TIME OF DAY (binding): pale overcast midday, flat white-gray sky, desaturated and tense, NOT dusk, NOT golden hour.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene). Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 26. [P1] battle-gen-1-post - Field hospital in the school gym

Target file: `chance/battle-gen-1-post-wide.jpg`
Current: cast CMP, light IW | New: cast CNP, light IC (interior cool / neutral)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/nico.png`
4. `/workspace/arc-outcomes/refs/paco.png`

Note: Old: Marek bandaging, Choppy bringing water.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 4 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: Field hospital in a school gym: volunteers bandage militia on cots. Choppy carries a crate of blank water bottles; Nico, in his olive hoodie, kneels to bandage a militiaman's arm; Paco lies by a cot beside a sleeping child. No man with glasses.

LIGHTING / TIME OF DAY (binding): cool white daytime light from high gym windows, clean neutral interior, soft blue-white shadows, NOT warm lantern light.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene). Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 27. [P1] battle-gen-2-pre - Fog on the water, watchtower

Target file: `chance/battle-gen-2-pre-wide.jpg`
Current: cast CM, light GH | New: cast CNP, light FG (fog)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/nico.png`
4. `/workspace/arc-outcomes/refs/paco.png`

Note: Old: Marek with binoculars + Choppy, sunset fog.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 4 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: Fog on the water: a watchtower on the cliff. Nico with binoculars scans the sea, Choppy holds a lantern, Paco peers over the rail. Faint silhouettes of warships in the mist. No man with glasses.

LIGHTING / TIME OF DAY (binding): dense cold pre-dawn fog, blue-gray and silver palette, lantern as only small warm spot, NOT sunrise.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene). Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 28. [P1] battle-gen-2-post - Repair yard

Target file: `chance/battle-gen-2-post-wide.jpg`
Current: cast CMP, light GH | New: cast CNP, light OV (overcast / hazy gray)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/nico.png`
4. `/workspace/arc-outcomes/refs/paco.png`

Note: Old: Marek resting with a mug, Choppy, Paco, sunset.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 4 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: Repair yard: welders fix the harbor crane, sparks, Nico on a ladder tightening a bolt; Choppy sits on an overturned bucket eating bread; Paco naps beside him. No man with glasses.

LIGHTING / TIME OF DAY (binding): bright overcast daylight, soft shadows, cool gray-blue sky, welding sparks as the only bright accent, NOT golden hour.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene). Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 29. [P1] battle-gen-3-post - Quiet night, bonfire

Target file: `chance/battle-gen-3-post-wide.jpg`
Current: cast CM, light NT | New: cast CNPm, light NT (night / blue hour)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-night-protectIsland-c.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/marek-dressed.jpg`
4. `/workspace/arc-outcomes/refs/nico.png`
5. `/workspace/arc-outcomes/refs/paco.png`

Note: Old: Choppy + Marek lying side by side (the most couple-like frame in the arc).

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, night version (rendering quality and detail only; ignore its composition and setting); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = MAREK dressed reference (dark button shirt, black rectangular glasses): face, hair and glasses only; dress him as the scene says; image 4 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 5 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
MAREK: lean man, short messy dark hair, black rectangular glasses, face and build from the MAREK reference only. He is NEVER in running, gym or sporty clothes: dress him for the scene (smart-casual knit sweater or collared shirt, dark trousers, leather shoes).
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: Quiet night after the battle: a bonfire on the beach, villagers resting, stars. Choppy and Nico lie on the sand looking up at the sky, Paco asleep between them. Marek (dark sweater, dark trousers) sits a little away with villagers, a mug in his hand.

LIGHTING / TIME OF DAY (binding): deep night, moonlight and a bonfire, stars in a clear sky, cool blue night with small orange fire accent.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes. Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 30. [P2] nobodyKnows - Madame Luck's name

Target file: `chance/nobodyKnows-wide.jpg`
Current: cast C, light GH | New: cast CMNP, light NT (night / blue hour)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-night-protectIsland-c.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/marek-dressed.jpg`
4. `/workspace/arc-outcomes/refs/nico.png`
5. `/workspace/arc-outcomes/refs/paco.png`

Note: Was Choppy alone at sunset.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, night version (rendering quality and detail only; ignore its composition and setting); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = MAREK dressed reference (dark button shirt, black rectangular glasses): face, hair and glasses only; dress him as the scene says; image 4 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 5 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
MAREK: lean man, short messy dark hair, black rectangular glasses, face and build from the MAREK reference only. He is NEVER in running, gym or sporty clothes: dress him for the scene (smart-casual knit sweater or collared shirt, dark trousers, leather shoes).
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: Night on the island dock. Choppy holds a blank folded paper under a lantern, Marek, in a navy sweater and dark trousers, reads over his shoulder, Nico points a thumb at himself saying 'I know her' with a smug smile, Paco looks at the paper. Dark sea and a pale moon behind.

LIGHTING / TIME OF DAY (binding): cold blue moonlit night on the dock, a single small lantern as the only warm light, NOT sunset.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes. Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 31. [P2] pieceWorld - The listing: a bad dock, two coves

Target file: `chance/pieceWorld-wide.jpg`
Current: cast C, light GH | New: cast CNP, light DW (cold pre-dawn / blue-gray dawn)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/nico.png`
4. `/workspace/arc-outcomes/refs/paco.png`

Note: Was Choppy alone on the dock at sunset.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 4 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: A rickety wooden dock at dawn on a misty cove, green hills behind. Choppy squints through his sunglasses at a tablet with a blank screen held by Nico, who beams; Paco has one paw through a gap in the planks.

LIGHTING / TIME OF DAY (binding): cold blue-gray dawn with low sea mist, soft gray-pink only at the very edge of the sky, NOT sunset.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene). Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 32. [P2] principality - San Arnaldo contacts the island

Target file: `chance/principality-wide.jpg`
Current: cast CMO, light GH | New: cast CNO, light MD (midday bright)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/nico.png`
4. `/workspace/arc-outcomes/refs/ortega.jpg`

Note: Was Marek at laptop + Choppy + Ortega at sunset; Nico replaces Marek.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 4 = MR ORTEGA & GAMBETTE reference (one man, dark wavy hair, navy suit, blue-white-yellow sash).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
MR ORTEGA & GAMBETTE: ONE man (not two), about 55, dark wavy hair with gray at the temples, navy suit, blue-white-yellow ceremonial sash, same face as the ORTEGA reference.

SCENE: A small harbor-town government building (a former restaurant) with a balcony. Mr Ortega & Gambette, one man in a navy suit with his sash, waves cheerfully to a crowd of townspeople. In the foreground, Nico at a laptop with a blank screen shows Choppy something, both bemused.

LIGHTING / TIME OF DAY (binding): bright noon sun, blue sky, crisp daylight, clean whites, NOT golden hour.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene). Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 33. [P2] declaration - Signing the declaration

Target file: `chance/declaration-wide.jpg`
Current: cast C, light GH | New: cast CMNP, light MD (midday bright)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/marek-dressed.jpg`
4. `/workspace/arc-outcomes/refs/nico.png`
5. `/workspace/arc-outcomes/refs/paco.png`

Note: Was Choppy alone from the back at sunset.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = MAREK dressed reference (dark button shirt, black rectangular glasses): face, hair and glasses only; dress him as the scene says; image 4 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 5 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
MAREK: lean man, short messy dark hair, black rectangular glasses, face and build from the MAREK reference only. He is NEVER in running, gym or sporty clothes: dress him for the scene (smart-casual knit sweater or collared shirt, dark trousers, leather shoes).
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: A stone balcony above the harbor. Choppy, Marek (dark jacket over a collared shirt), Nico and Paco gather around the final page on a table; Choppy holds a feather pen high. Below, townspeople gather. Nobody is in running clothes.

LIGHTING / TIME OF DAY (binding): bright midday sun, deep blue sky with big white cumulus clouds, high contrast daylight, NOT golden hour.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes. Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 34. [P2] theAnswer - The blocs refuse

Target file: `chance/theAnswer-wide.jpg`
Current: cast C, light GH | New: cast CNP, light ST (storm / rain)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-night-protectIsland-c.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/nico.png`
4. `/workspace/arc-outcomes/refs/paco.png`

Note: Was Choppy alone at sunset.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, night version (rendering quality and detail only; ignore its composition and setting); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 4 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: A cliff above the sea in wind. Choppy, Nico and Paco stand shoulder to shoulder looking at three dark fleets leaving port on the horizon, Nico's hood blowing, Paco's ears flapping.

LIGHTING / TIME OF DAY (binding): stormy overcast, heavy gray-green clouds, wind, cold dim light, NOT sunset.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene). Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 35. [P2] ortegaCalls - Ortega's 93 pages

Target file: `chance/ortegaCalls-wide.jpg`
Current: cast C, light GH | New: cast CNP, light MD (midday bright)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/nico.png`
4. `/workspace/arc-outcomes/refs/paco.png`

Note: Was Choppy alone with phone, sunset window.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 4 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: A bright office. Choppy holds a phone to his glove, listening with a pained look. Nico beside him holds a huge stack of printed pages (blank) that tips over, Paco chews a corner of the stack.

LIGHTING / TIME OF DAY (binding): bright white midday light through a big window, clean neutral palette.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene). Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 36. [P3] peopleAsking - People ask to move in

Target file: `chance/peopleAsking-wide.jpg`
Current: cast CMN, light GH | New: cast CMNP, light OV (overcast / hazy gray)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/marek-dressed.jpg`
4. `/workspace/arc-outcomes/refs/nico.png`
5. `/workspace/arc-outcomes/refs/paco.png`

Note: Cast fine; lighting was golden hour.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = MAREK dressed reference (dark button shirt, black rectangular glasses): face, hair and glasses only; dress him as the scene says; image 4 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 5 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
MAREK: lean man, short messy dark hair, black rectangular glasses, face and build from the MAREK reference only. He is NEVER in running, gym or sporty clothes: dress him for the scene (smart-casual knit sweater or collared shirt, dark trousers, leather shoes).
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: A harbor-front square with developers, miners and families in a queue. Nico at a tablet making a spreadsheet (blank), Marek (smart-casual jacket) leaning over his shoulder pointing at a model of a house, Choppy and Paco in front.

LIGHTING / TIME OF DAY (binding): soft overcast late morning, neutral daylight, NOT golden hour.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes. Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 37. [P3] paperwork - Lawyers and the purchase

Target file: `chance/paperwork-wide.jpg`
Current: cast CNP, light GH | New: cast CNP, light IC (interior cool / neutral)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/nico.png`
4. `/workspace/arc-outcomes/refs/paco.png`

Note: Cast fine; lighting was golden hour.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 4 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: A law office: Nico signs a thick document in the wrong place, Choppy points at the correct place, Paco eats a corner of the document.

LIGHTING / TIME OF DAY (binding): bright cool morning light from a window, neutral white, NOT golden hour.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene). Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 38. [P3] placeNow - Daily life fills the island

Target file: `chance/placeNow-wide.jpg`
Current: cast CN, light GH | New: cast CNP, light BM (bright clear morning)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/nico.png`
4. `/workspace/arc-outcomes/refs/paco.png`

Note: Lighting only.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 4 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: A coffee shop near the dock, a newspaper stand, a bakery. Nico laughs reading the newspaper, Choppy sips from a cup, Paco waits for a croissant.

LIGHTING / TIME OF DAY (binding): bright clear morning light, long cool shadows, NOT golden hour.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene). Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 39. [P3] ambassador - The ambassador visits

Target file: `chance/ambassador-wide.jpg`
Current: cast CMN, light GH | New: cast CMN, light OV (overcast / hazy gray)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/marek-dressed.jpg`
4. `/workspace/arc-outcomes/refs/nico.png`

Note: Lighting only.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = MAREK dressed reference (dark button shirt, black rectangular glasses): face, hair and glasses only; dress him as the scene says; image 4 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
MAREK: lean man, short messy dark hair, black rectangular glasses, face and build from the MAREK reference only. He is NEVER in running, gym or sporty clothes: dress him for the scene (smart-casual knit sweater or collared shirt, dark trousers, leather shoes).
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.

SCENE: A dock with a woman ambassador in a gray coat shaking hands with Marek while Nico and Choppy watch; dockers behind.

LIGHTING / TIME OF DAY (binding): cool overcast morning, thin sea fog, NOT golden hour.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes. Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 40. [P3] anOffer-a - Consortium contract (boardroom)

Target file: `chance/anOffer-a-wide.jpg`
Current: cast C, light GH | New: cast C, light ST (storm / rain)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-night-protectIsland-c.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`

Note: Lighting only.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, night version (rendering quality and detail only; ignore its composition and setting); image 2 = CHOPPY model sheet (design only; the pose must be different).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.

SCENE: A boardroom with rain on the windows. Choppy shakes hands uncertainly with consortium men in gray suits across a glass table, a blank contract between them.

LIGHTING / TIME OF DAY (binding): rainy gray window light, cool, NOT golden hour.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene); Nico. Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 41. [P3] anOffer-b - Consortium contract (yacht)

Target file: `chance/anOffer-b-wide.jpg`
Current: cast CNP, light GH | New: cast CNP, light MD (midday bright)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/nico.png`
4. `/workspace/arc-outcomes/refs/paco.png`

Note: Lighting only.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 4 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: A yacht deck. Nico and Paco beside Choppy, consortium men in gray suits offering a blank contract.

LIGHTING / TIME OF DAY (binding): harsh bright midday sun, blue sea, NOT golden hour.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene). Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 42. [P3] citadelQuestion-a - Citadel plans

Target file: `chance/citadelQuestion-a-wide.jpg`
Current: cast CMP, light GH | New: cast CMNP, light OV (overcast / hazy gray)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/marek-dressed.jpg`
4. `/workspace/arc-outcomes/refs/nico.png`
5. `/workspace/arc-outcomes/refs/paco.png`

Note: Cast OK; added Nico; lighting was golden hour.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = MAREK dressed reference (dark button shirt, black rectangular glasses): face, hair and glasses only; dress him as the scene says; image 4 = NICO reference (messy black hair, stubble, warm grin, olive-green hoodie); image 5 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
MAREK: lean man, short messy dark hair, black rectangular glasses, face and build from the MAREK reference only. He is NEVER in running, gym or sporty clothes: dress him for the scene (smart-casual knit sweater or collared shirt, dark trousers, leather shoes).
NICO: messy black hair, stubble, expressive grin, same face as the NICO reference; clothing as described in the scene.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: A building site on a hill. Marek (hard hat over his glasses, collared shirt) unrolls blank plans on a trestle table, Nico holds one corner, Choppy points at one place, Paco sits on the plans.

LIGHTING / TIME OF DAY (binding): bright overcast, flat even daylight, NOT golden hour.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes. Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 43. [P3] citadelQuestion-b - Choppy in the cabin

Target file: `chance/citadelQuestion-b-wide.jpg`
Current: cast C, light GH | New: cast C, light DW (cold pre-dawn / blue-gray dawn)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`

Note: Lighting only.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.

SCENE: Choppy sits alone in a cabin window in the cold dawn, looking over the town beyond.

LIGHTING / TIME OF DAY (binding): cold blue dawn, mist over the town.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene); Nico. Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 44. [P3] protectIsland - Empty mooring line

Target file: `chance/protectIsland-wide.jpg`
Current: cast , light GH | New: cast P, light DW (cold pre-dawn / blue-gray dawn)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/paco.png`

Note: Card says sunrise: use pre-dawn instead of sunset.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: An empty mooring line on a dock; Paco in a security vest asleep on a coil of rope in the foreground; a camera on a post pointing at the wrong spot.

LIGHTING / TIME OF DAY (binding): gray-blue pre-dawn, low mist.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene); Nico. Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 45. [P3] protectIsland-a - Defenders on the beach

Target file: `chance/protectIsland-a-wide.jpg`
Current: cast CMP, light GH | New: cast CMP, light DW (cold pre-dawn / blue-gray dawn)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/marek-dressed.jpg`
4. `/workspace/arc-outcomes/refs/paco.png`

Note: Lighting only.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = MAREK dressed reference (dark button shirt, black rectangular glasses): face, hair and glasses only; dress him as the scene says; image 4 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
MAREK: lean man, short messy dark hair, black rectangular glasses, face and build from the MAREK reference only. He is NEVER in running, gym or sporty clothes: dress him for the scene (smart-casual knit sweater or collared shirt, dark trousers, leather shoes).
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: Marek leading defenders on the beach with Paco charging; Choppy in the foreground pointing.

LIGHTING / TIME OF DAY (binding): gray pre-dawn, mist.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; Nico. Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 46. [P3] protectIsland-b - Security guards

Target file: `chance/protectIsland-b-wide.jpg`
Current: cast CP, light GH | New: cast CP, light MD (midday bright)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`
2. `/workspace/arc-outcomes/refs/choppy.png`
3. `/workspace/arc-outcomes/refs/paco.png`

Note: Lighting only.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour); image 2 = CHOPPY model sheet (design only; the pose must be different); image 3 = PACO reference (shaggy white-and-tan wire-haired terrier mix, dark collar, floppy ears).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.

CHOPPY (always exactly like the CHOPPY model sheet): a perfectly round, flat, bright saturated orange-gold Bitcoin coin character, never distorted or squashed; a clean intact white Bitcoin symbol centered on the front; a vivid red cloth headband around the upper coin with a tied knot and trailing tails; large black sunglasses set low on the coin; no nose and no mouth; thin orange arms and legs; white cartoon gloves with plausible fingers; brown-and-white sneakers. When seated, he sits naturally on the seat with bent orange legs and the coin body upright and undistorted. Clothing accessories are allowed but the coin and emblem stay fully visible. Use a fresh pose for this scene, not the model-sheet pose.
PACO: the shaggy white-and-tan terrier-mix dog from the PACO reference, dark collar.

SCENE: Private security guards in vests stand on the dock; Paco inspects them; Choppy gives a thumbs-up.

LIGHTING / TIME OF DAY (binding): bright midday.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene); Nico. Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```

## 47. [P3] threeColors - Three blocs

Target file: `chance/threeColors-wide.jpg`
Current: cast , light GH | New: cast , light OV (overcast / hazy gray)

Upload (in order):
1. `/workspace/arc-outcomes/btc-balance/refs/style-day-nothingToHide.jpg`

Note: Lighting only.

Prompt:

```
Reference images attached (in this upload order): image 1 = STYLE reference, neutral daylight version (rendering quality and detail only; ignore its composition and setting; cool/neutral daylight, NOT golden hour).

Wide panoramic 2.4:1 illustration, target 1920x800 (landscape, ultra-wide cinematic frame; the scene itself fills the whole canvas, no black bars, no letterboxing, no borders, no watermark). Polished cinematic stylized 3D-animation look with a painterly finish, believable materials and shallow depth of field. From the attached STYLE reference take ONLY the rendering quality and level of detail; IGNORE its lighting, time of day and color grade. The LIGHTING line below is binding: do not default to golden hour, sunset, an orange sky or a warm orange color grade unless the LIGHTING line explicitly asks for it. Absolutely NO visible text, letters, numbers, logos, signs, labels or interface text anywhere (blank or abstract surfaces only). Keep every character fully inside the frame, uncropped, with correct anatomy and hands. Keep the main characters within the central 80% of the width so nothing important is lost on narrow phone crops.


SCENE: Three bloc leaders' processions on the harbor in three colors.

LIGHTING / TIME OF DAY (binding): overcast.

AVOID: golden hour, sunset, sunrise glow, orange or pink sky, orange color grade; Lena; text, numbers or logos; Choppy distorted or squashed; anyone in sports or running clothes; any man with black rectangular glasses (Marek is not in this scene); Nico. Make it fully original in composition: do not recreate the pose or layout of any reference image. Output a single image, landscape 2.4:1.
```
