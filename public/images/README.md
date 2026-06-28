# Imagery — אוצר היין

Generate each photo, drop the file in this folder using the **filename** below,
then set the matching slot in [`lib/images.ts`](../../lib/images.ts) to its path
(e.g. `hero: '/images/hero.jpg'`). Until a slot is set, the component shows a
warm `bg-surface` placeholder — so the page works with or without photos, and
the swap never shifts layout.

## Shared rules (every prompt)

No text, no logos, no watermarks, no readable bottle labels, no recognizable
faces. Editorial / lifestyle photography, warm natural light, clean & modern,
shallow depth of field. Leave calm negative space where Hebrew text overlays
(RTL → keep the **right** side quieter).

**Style suffix — append to every prompt:**

```
warm editorial interior photography, natural light, cream and terracotta and muted slate palette, deep wine-red accents, clean modern, shallow depth of field, soft film grain, high detail, no text, no logos, no readable labels, no faces
```

## Slots

| File | Slot (`lib/images.ts`) | Aspect | Component |
|---|---|---|---|
| `hero.jpg` | `hero` | 16:9 | Hero background |
| `day-noon.jpg` | `dayNoon` | 4:5 | DayTrio · צהריים |
| `day-afternoon.jpg` | `dayAfternoon` | 4:5 | DayTrio · אחר הצהריים |
| `day-evening.jpg` | `dayEvening` | 4:5 | DayTrio · ערב |

### `hero.jpg` (16:9 — subject LEFT, quiet RIGHT for the headline)

```
A warm atmospheric wine bar and bottle shop interior at golden hour, floor-to-ceiling wooden shelves of wine bottles on the left, a long stone-topped bar with a few empty stools, soft golden pendant lights, cream plaster walls with terracotta accents, a large window with evening light, quiet empty wall space on the right, no people, [STYLE SUFFIX]
```

### `day-noon.jpg` (4:5)

```
Bright midday in a modern wine shop, a hand reaching toward a bottle on a wooden wine shelf, warm daylight from a side window, cream walls and terracotta tile floor, minimal and calm, focus on the shelf, [STYLE SUFFIX]
```

### `day-afternoon.jpg` (4:5)

```
Afternoon close-up of red wine being poured into a glass at a stone bar counter, blurred shelves of bottles behind, warm side light, a person's hands only, cozy modern wine bar, clay and cream tones, [STYLE SUFFIX]
```

### `day-evening.jpg` (4:5)

```
Evening wine bar glowing with warm candlelight, two glasses of wine on a stone bar, soft bokeh of bottles and lights, intimate inviting mood, amber and deep wine-red against cream walls, [STYLE SUFFIX]
```

## Optional / not yet wired

- **Features** (`הבקבוקים` / `הבר` / `לא רק יין`) is currently a text-only
  editorial list — no image slots. Add them later if desired.
- **Open Graph** share image: generate `og.jpg` (1200×630), drop it here, then
  uncomment `openGraph.images` in [`app/layout.tsx`](../../app/layout.tsx).

```
Wide hero shot of a warm modern wine bar and bottle shop, shelves of wine and a glowing bar, balanced composition with central calm area, golden evening light, [STYLE SUFFIX]
```
