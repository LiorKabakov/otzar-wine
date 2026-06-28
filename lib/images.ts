/**
 * Central registry for site imagery.
 *
 * Each slot is `null` by default → the component renders its warm `bg-surface`
 * placeholder block (correct aspect ratio, with an `alt`/`aria-label`).
 *
 * To use a real photo: generate it (see `public/images/README.md` for the
 * prompts + target filenames), drop the file into `public/images/`, then set
 * the matching slot below to its path. The swap is layout-shift-free.
 *
 *   hero: '/images/hero.jpg',
 *
 * Paths are under `/public`, so they start with `/images/...`.
 */
export const images = {
  /** Hero full-bleed background — 16:9 (subject left, quiet right). */
  hero: null as string | null,
  /** DayTrio · צהריים — 4:5 portrait. */
  dayNoon: null as string | null,
  /** DayTrio · אחר הצהריים — 4:5 portrait. */
  dayAfternoon: null as string | null,
  /** DayTrio · ערב — 4:5 portrait. */
  dayEvening: null as string | null,
}
