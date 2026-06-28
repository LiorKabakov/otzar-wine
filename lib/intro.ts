/**
 * Tiny decoupled signal that the hero intro sequence may start.
 *
 * The AgeGate (in layout) and the Hero (in page) are siblings with no shared
 * React tree state, so we bridge them with a window flag + event:
 *   - AgeGate calls markIntroReady() when the gate is already passed on load,
 *     or the moment the user confirms their age.
 *   - Hero subscribes via onIntroReady() to kick off its line-mask reveal.
 *
 * If the signal already fired, onIntroReady() invokes the callback immediately,
 * so ordering between the two components never matters.
 */

const EVENT = 'otzar:intro-ready'

type W = typeof window & { __otzarIntroReady?: boolean }

export function markIntroReady() {
  if (typeof window === 'undefined') return
  const w = window as W
  if (w.__otzarIntroReady) return
  w.__otzarIntroReady = true
  window.dispatchEvent(new Event(EVENT))
}

export function onIntroReady(cb: () => void): () => void {
  if (typeof window === 'undefined') return () => {}
  const w = window as W
  if (w.__otzarIntroReady) {
    cb()
    return () => {}
  }
  const handler = () => cb()
  window.addEventListener(EVENT, handler, { once: true })
  return () => window.removeEventListener(EVENT, handler)
}
