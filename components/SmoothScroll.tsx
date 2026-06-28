'use client'

import { useEffect, useRef } from 'react'
import { ReactLenis, type LenisRef } from 'lenis/react'
import { frame, cancelFrame, useReducedMotion } from 'framer-motion'
import 'lenis/dist/lenis.css'

/**
 * Lenis smooth scroll, mounted once at the root. Its RAF is driven by Framer
 * Motion's frame loop so `useScroll`/`useTransform` stay perfectly in sync with
 * the smoothed scroll position (the canonical Lenis × Framer Motion bridge).
 *
 * Under prefers-reduced-motion we skip Lenis entirely — native scroll, no
 * smoothing — so scroll-linked effects fall back to plain, instant behavior.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode
}) {
  const lenisRef = useRef<LenisRef>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return
    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp)
    }
    frame.update(update, true)
    return () => cancelFrame(update)
  }, [reduceMotion])

  if (reduceMotion) return <>{children}</>

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{ autoRaf: false, lerp: 0.1, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  )
}
