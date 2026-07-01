/**
 * Soft-fades an image's edges into the surrounding background, so a framed
 * photo melts into the page instead of ending on a hard rectangle edge.
 *
 * Render as the LAST child of a `relative overflow-hidden` image wrapper (on
 * top of the <Image>). Two symmetric linear-gradients fade the top/bottom and
 * the inline edges; the clean center (~15–85%) leaves the photo sharp.
 *
 * `color` must equal the section background behind the image (e.g. the cream
 * `var(--surface)` on Features, or white `var(--bg)` on DayTrio). `soft` is the
 * SAME color at zero alpha — used for the mid stops so the fade never passes
 * through a gray (transparent-black) halo.
 *
 * Symmetric stops → direction-agnostic, so it is RTL-safe with no physical
 * left/right layout dependency. Purely static (no motion concerns).
 */
export default function EdgeFade({
  color,
  soft,
}: {
  color: string
  soft: string
}) {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${color} 0%, ${soft} 16%, ${soft} 84%, ${color} 100%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, ${color} 0%, ${soft} 12%, ${soft} 88%, ${color} 100%)`,
        }}
      />
    </>
  )
}
