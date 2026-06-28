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
