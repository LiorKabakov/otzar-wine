---
name: thebendclub-design
description: Design system skill for thebendclub. Activate when building UI components, pages, or any visual elements. Provides exact color tokens, typography scale, spacing grid, component patterns, and craft rules. Read references/DESIGN.md before writing any CSS or JSX.
---

# thebendclub Design System

You are building UI for **thebendclub**. Light-themed, neutral palette, sans-serif typography (Lexend), compact density on a 4px grid.

## Visual Reference

**IMPORTANT**: Study ALL screenshots below before writing any UI. Match colors, typography, spacing, layout, and motion exactly as shown.

### Homepage

![thebendclub Homepage](screenshots/homepage.png)

> Read `references/DESIGN.md` for full token details.

## Design Philosophy

- **Layered depth** — use shadow tokens to create a sense of physical layering. Each elevation level has a specific shadow.
- **Solid colors only** — no gradients anywhere. Every surface is a single flat color.
- **Type pairing** — Lexend for body/UI text, writer for headings/display. Never introduce a third typeface.
- **compact density** — 4px base grid. Every dimension is a multiple of 4.
- **neutral palette** — the color temperature runs neutral, matching the sans-serif typography.
- **Restrained accent** — `#4a5565` is the only pop of color. Used exclusively for CTAs, links, focus rings, and active states.
- **Subtle motion** — transitions smooth state changes. Keep durations under 300ms, use ease-out curves.

## Color System

### Core Palette

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Background | `--background` | `#ffffff` | Page/app background |
| Surface | `--surface` | `#f4f1ea` | Cards, panels, modals |
| Text Primary | `--text-primary` | `#101f1a` | Headings, body text |
| Text Muted | `--text-muted` | `#52615c` | Captions, placeholders |
| Accent | `--accent` | `#4a5565` | CTAs, links, focus rings |

### Status Colors

| Status | Hex | Use |
|--------|-----|-----|
| Danger | `#ff6568` | Errors, destructive actions |

### Extended Palette

- `#d4d0c5`
- **color-black:** `#000000` — Deep background layer or shadow color
- **color-blue-600:** `#155dfc`
- **color-gray-200:** `#e5e7eb` — Light surface or highlight color
- **color-gray-300:** `#d1d5dc`
- **color-gray-800:** `#1e2939`

### CSS Variable Tokens

```css
--color-accent: var(--accent);
--background: #f4f1ea;
--foreground: #17231f;
--muted: #52615c;
--accent: #9b4f34;
```

## Typography

### Font Stack

- **Lexend** — Heading 1, Heading 2, Heading 3
- **writer** — Body, Caption
- **SFMono-Regular** — Code

### Font Sources

```css
@font-face {
  font-family: "writer";
  src: url("fonts/writer-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "writer";
  src: url("fonts/writer-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "Lexend";
  src: url("fonts/Lexend-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Lexend";
  src: url("fonts/Lexend-Regular.ttf") format("truetype");
  font-weight: 400;
}
```

### Type Scale

| Role | Family | Size | Weight |
|------|--------|------|--------|
| Heading 1 | Lexend | clamp(2.5rem,7vw,6.5rem) | 700 |
| Heading 2 | Lexend | clamp(2rem,4.4vw,3.75em) | 700 |
| Heading 3 | Lexend | clamp(1.75rem,3.6vw,3.25rem) | 700 |
| Body | writer | clamp(1.4rem,2.5vw,2rem) | 400 |
| Caption | writer | clamp(1.35rem,2.2vw,1.9rem) | 400 |
| Code | SFMono-Regular | 14px | 400 |

### Typography Rules

- Body/UI: **Lexend**, Headings: **writer** — these are the only display fonts
- Max 3-4 font sizes per screen
- Headings: weight 600-700, body: weight 400
- Use color and opacity for text hierarchy, not additional font sizes
- Line height: 1.5 for body, 1.2 for headings

## Spacing & Layout

### Base Grid: 4px

Every dimension (margin, padding, gap, width, height) must be a multiple of **4px**.

### Spacing Scale

`2, 4, 8, 12, 16, 20, 24, 32, 36, 40, 48, 56` px

### Spacing as Meaning

| Spacing | Use |
|---------|-----|
| 4-8px | Tight: related items (icon + label, avatar + name) |
| 12-16px | Medium: between groups within a section |
| 24-32px | Wide: between distinct sections |
| 48px+ | Vast: major page section breaks |

### Border Radius

Scale: `.25rem, .75em, 2px, 12px, 999px`
Default: `2px`

### Container

Max-width: `96rem`, centered with auto margins.

### Breakpoints

| Name | Value |
|------|-------|
| sm | 40rem |
| md | 48rem |
| lg | 64rem |
| xl | 80rem |
| 2xl | 96rem |

Mobile-first: design for small screens, layer on responsive overrides.

## Component Patterns

### Card

```css
.card {
  background: #f4f1ea;
  border-radius: 2px;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.223775 -0.0226568 0.00355878 / 0.4) 0px 0px 0px 1px, rgba(255, 255, 255, 0.18) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.6) 0px 30px 60px -30px;
}
```

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>
```

### Button

```css
/* Primary */
.btn-primary {
  background: #4a5565;
  color: #101f1a;
  border-radius: 2px;
  padding: 8px 16px;
  font-weight: 500;
  transition: opacity 150ms ease;
}
.btn-primary:hover { opacity: 0.9; }

/* Ghost */
.btn-ghost {
  background: transparent;
  border: 1px solid #cccccc;
  color: #101f1a;
  border-radius: 2px;
  padding: 8px 16px;
}
```

```html
<button class="btn-primary">Get Started</button>
<button class="btn-ghost">Learn More</button>
```

### Input

```css
.input {
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 2px;
  padding: 8px 12px;
  color: #101f1a;
  font-size: 14px;
}
.input:focus { border-color: #4a5565; outline: none; }
```

```html
<input class="input" type="text" placeholder="Search..." />
```

### Badge / Chip

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
  background: #f4f1ea;
  color: #52615c;
}
```

```html
<span class="badge">New</span>
<span class="badge">Beta</span>
```

### Modal / Dialog

```css
.modal-backdrop { background: rgba(0, 0, 0, 0.6); }
.modal {
  background: #f4f1ea;
  border-radius: 999px;
  padding: 24px;
  max-width: 480px;
  width: 90vw;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.223775 -0.0226568 0.00355878 / 0.4) 0px 0px 0px 1px, rgba(255, 255, 255, 0.18) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.6) 0px 30px 60px -30px;
}
```

```html
<div class="modal-backdrop">
  <div class="modal">
    <h2>Dialog Title</h2>
    <p>Dialog content.</p>
    <button class="btn-primary">Confirm</button>
    <button class="btn-ghost">Cancel</button>
  </div>
</div>
```

### Table

```css
.table { width: 100%; border-collapse: collapse; }
.table th {
  text-align: left;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 12px;
  color: #52615c;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #cccccc;
}
.table td {
  padding: 12px;
  border-bottom: 1px solid #cccccc;
}
```

```html
<table class="table">
  <thead><tr><th>Name</th><th>Status</th><th>Date</th></tr></thead>
  <tbody>
    <tr><td>Item One</td><td>Active</td><td>Jan 1</td></tr>
    <tr><td>Item Two</td><td>Pending</td><td>Jan 2</td></tr>
  </tbody>
</table>
```

### Navigation

```css
.nav {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
}
.nav-link {
  color: #52615c;
  padding: 8px 12px;
  border-radius: 2px;
  transition: color 150ms;
}
.nav-link:hover { color: #101f1a; }
.nav-link.active { color: #4a5565; }
```

```html
<nav class="nav">
  <a href="/" class="nav-link active">Home</a>
  <a href="/about" class="nav-link">About</a>
  <a href="/pricing" class="nav-link">Pricing</a>
  <button class="btn-primary" style="margin-left: auto">Get Started</button>
</nav>
```

### Extracted Components

These components were found in the codebase:

**Button** (`html`)

**Input** (`html`)

**Navigation** (`html`)

## Page Structure

The following page sections were detected:

- **Navigation** — Top navigation bar (3 items)
- **Hero** — Hero/banner section with headline and CTAs
- **Faq** — FAQ/accordion section

When building pages, follow this section order and structure.

## Animation & Motion

This project uses **subtle motion**. Transitions smooth state changes without calling attention.

### CSS Animations

- `spin`

### Motion Tokens

- **Duration scale:** `.3s`, `.5s`, `1.4s`, `500ms`, `550ms`, `600ms`, `900ms`, `1100ms`, `1300ms`
- **Easing functions:** `cubic-bezier(.16,1,.3,1)`, `cubic-bezier(.22,1,.36,1)`, `cubic-bezier(.65,0,.35,1)`
- **Animated properties:** `opacity`, `transform`

### Motion Guidelines

- **Duration:** Use values from the duration scale above. Short (.3s) for micro-interactions, long (1300ms) for page transitions
- **Easing:** Use `cubic-bezier(.16,1,.3,1)` as the default easing curve
- **Direction:** Elements enter from bottom/right, exit to top/left
- **Reduced motion:** Always respect `prefers-reduced-motion` — disable animations when set

## Depth & Elevation

### Shadow Tokens

- Overlay (modals, dialogs): `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.223775 -0.0226568 0.00355878 / 0.4) 0px 0px 0px 1px, rgba(255, 255, 255, 0.18) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.6) 0px 30px 60px -30px`

### Z-Index Scale

`0, 1, 10, 20, 30, 100`

Use these exact values — never invent z-index values.

## Anti-Patterns (Never Do)

- **No gradients** — solid colors only, everywhere
- **No blur effects** — no backdrop-blur, no filter: blur()
- **No zebra striping** — tables and lists use borders for separation
- **No invented colors** — every hex value must come from the palette above
- **No arbitrary spacing** — every dimension is a multiple of 4px
- **No extra fonts** — only Lexend and writer and SFMono-Regular are allowed
- **No arbitrary border-radius** — use the scale: .25rem, .75em, 2px, 12px, 999px
- **No opacity for disabled states** — use muted colors instead
- **No pill shapes** — this design doesn't use rounded-full / 9999px radius

## Workflow

1. **Read** `references/DESIGN.md` before writing any UI code
2. **Pick colors** from the Color System section — never invent new ones
3. **Set typography** — Lexend, writer, SFMono-Regular only, using the type scale
4. **Build layout** on the 4px grid — check every margin, padding, gap
5. **Match components** to patterns above before creating new ones
6. **Apply elevation** — use shadow tokens
7. **Validate** — every value traces back to a design token. No magic numbers.

## Brand Spec

- **Favicon:** `/icon.png`
- **Site URL:** `https://www.thebendclub.com/`
- **Brand color:** `#4a5565`
- **Brand typeface:** Lexend

## Quick Reference

```
Background:     #ffffff
Surface:        #f4f1ea
Text:           #101f1a / #52615c
Accent:         #4a5565
Border:         (not extracted)
Font:           Lexend
Spacing:        4px grid
Radius:         2px
Components:     5 detected
```

## When to Trigger

Activate this skill when:
- Creating new components, pages, or visual elements for thebendclub
- Writing CSS, Tailwind classes, styled-components, or inline styles
- Building page layouts, templates, or responsive designs
- Reviewing UI code for design consistency
- The user mentions "thebendclub" design, style, UI, or theme
- Generating mockups, wireframes, or visual prototypes

---

# Full Reference Files

> Every output file is embedded below. Claude has full design system context from /skills alone.

## Design System Tokens (DESIGN.md)

# thebendclub DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 13 · Fonts: 3 · Components: 5
> Icon library: not detected · State: not detected
> Primary theme: light · Dark mode toggle: no · Motion: subtle

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![thebendclub Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **light-themed** interface with a neutral, approachable feel. The light background emphasizes content clarity. Typography pairs **writer** for display/headings with **Lexend** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **4px base grid** (compact density), with scale: 2, 4, 8, 12, 16, 20, 24, 32px. The accent color **#4a5565** anchors interactive elements (buttons, links, focus rings). Motion is subtle — smooth transitions (150-300ms) ease state changes without drawing attention.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| tw-ring-offset-color | `#ffffff` | background | Page background, darkest surface |
| background | `#f4f1ea` | surface | Card and panel backgrounds |
| foreground | `#101f1a` | text-primary | Headings and body text |
| muted | `#52615c` | text-muted | Captions, placeholders, secondary info |
| color-gray-600 | `#4a5565` | accent | CTAs, links, focus rings, active states |
| accent | `#9b4f34` | accent | CTAs, links, focus rings, active states |
| color-red-400 | `#ff6568` | danger | Error states, destructive actions |
| color-blue-600 | `#155dfc` | info | Informational highlights |
| unknown | `#d4d0c5` | unknown | Palette color |
| color-black | `#000000` | unknown | Palette color |
| color-gray-200 | `#e5e7eb` | unknown | Palette color |
| color-gray-300 | `#d1d5dc` | unknown | Palette color |
| color-gray-800 | `#1e2939` | unknown | Palette color |

### CSS Variable Tokens

```css
--tw-border-style: solid;
--color-accent: var(--accent);
--background: #f4f1ea;
--foreground: #17231f;
--muted: #52615c;
--accent: #9b4f34;
```


---

## 3. Typography Rules

**Font Stack:**
- **Lexend** — Heading 1, Heading 2, Heading 3
- **writer** — Body, Caption
- **SFMono-Regular** — Code

**Font Sources:**

```css
@font-face {
  font-family: "writer";
  src: url("fonts/writer-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "writer";
  src: url("fonts/writer-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "Lexend";
  src: url("fonts/Lexend-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Lexend";
  src: url("fonts/Lexend-Regular.ttf") format("truetype");
  font-weight: 400;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Lexend | clamp(2.5rem,7vw,6.5rem) | 700 |
| Heading 2 | Lexend | clamp(2rem,4.4vw,3.75em) | 700 |
| Heading 3 | Lexend | clamp(1.75rem,3.6vw,3.25rem) | 700 |
| Body | writer | clamp(1.4rem,2.5vw,2rem) | 400 |
| Caption | writer | clamp(1.35rem,2.2vw,1.9rem) | 400 |
| Code | SFMono-Regular | 14px | 400 |

**Typographic Rules:**
- Limit to 3 font families max per screen
- Use **Lexend** for body/UI text, **writer** for display/headings
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

### Navigation (1)

**Navigation** — `html`

### Data Display (1)

**List** — `html`

### Data Input (2)

**Button** — `html`
- Animation: 

**Input** — `html`
- State: :focus, :placeholder

### Media (1)

**Image** — `html`



---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 2, 4, 8, 12, 16, 20, 24, 32, 36, 40, 48, 56
- **Border radius:** .25rem, .75em, 2px, 12px, 999px
- **Max content width:** 96rem

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Overlay — full-screen overlays, top-level dialogs

- `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.223775 -0.0226568 0.00355878 / 0.4) 0px 0px 0px 1px, rgba(255, 255, 255, 0.18) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.6) 0px 30px 60px -30px`

### Z-Index Scale

`0, 1, 10, 20, 30, 100`



---

## 7. Animation & Motion

This project uses **subtle motion**. Transitions smooth state changes without demanding attention.

### CSS Animations

- `@keyframes spin`

### Animated Components

- **Button**: 

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#4a5565` for interactive elements (buttons, links, focus rings)
- Use `#ffffff` as the primary page background
- Pair **Lexend** (body) with **writer** (display) — these are the only allowed fonts
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: .25rem, .75em, 2px, 12px, 999px
- Reuse existing components from Section 4 before creating new ones

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't introduce additional font families beyond Lexend and writer and SFMono-Regular
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't create custom box-shadow values outside the system tokens
- Don't use gradients — the design uses solid colors only
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't duplicate component patterns — check Section 4 first
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No gradient backgrounds
- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

| Name | Value | Source |
|---|---|---|
| sm | 40rem | css |
| md | 48rem | css |
| lg | 64rem | css |
| xl | 80rem | css |
| 2xl | 96rem | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #f4f1ea
Border: 1px solid var(--border)
Radius: 2px
Padding: 16px
Font: Lexend
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg #4a5565, text white
Ghost: bg transparent, border var(--border)
Padding: 8px 16px
Radius: 2px
Hover: opacity 0.9 or lighter shade
Focus: ring with #4a5565
```

### Build a Page Layout

```
Background: #ffffff
Max-width: 96rem, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #f4f1ea
Label: #52615c (muted, 12px, uppercase)
Value: #101f1a (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #ffffff
Input border: 1px solid var(--border)
Focus: border-color #4a5565
Label: #52615c 12px
Spacing: 16px between fields
Radius: 2px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Lexend, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```

## Bundled Fonts (fonts/)

The following font files are bundled in the `fonts/` directory:

- `fonts/Lexend-Black.ttf`
- `fonts/Lexend-Bold.ttf`
- `fonts/Lexend-ExtraBold.ttf`
- `fonts/Lexend-ExtraLight.ttf`
- `fonts/Lexend-Light.ttf`
- `fonts/Lexend-Medium.ttf`
- `fonts/Lexend-Regular.ttf`
- `fonts/Lexend-SemiBold.ttf`
- `fonts/Lexend-Thin.ttf`
- `fonts/writer-300.woff2`
- `fonts/writer-700.woff2`
- `fonts/writer-900.woff2`
- `fonts/writer-Regular.woff2`

Use these local font files in `@font-face` declarations instead of fetching from Google Fonts.

## Homepage Screenshots (screenshots/)

![homepage.png](screenshots/homepage.png)

