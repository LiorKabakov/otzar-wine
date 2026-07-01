'use client'

import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import Reveal, { MaskText } from './ui/Reveal'
import StarMark from './ui/StarMark'
import Photo from './ui/Photo'
import EdgeFade from './ui/EdgeFade'
import { images } from '@/lib/images'
import { cn } from '@/lib/cn'

const items = [
  { time: 'צהריים', headline: ['נכנסים,', 'בוחרים בקבוק.'], alt: 'מדפי היין בחנות בשעות הצהריים', src: images.dayNoon },
  { time: 'אחר הצהריים', headline: ['טועמים', 'כוס על הבר.'], alt: 'כוס יין על הבר אחר הצהריים', src: images.dayAfternoon },
  { time: 'ערב', headline: ['נשארים', 'לערב יין.'], alt: 'אווירת ערב בבר היין', src: images.dayEvening },
] as const

export default function DayTrio() {
  const reduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Per-item crossfade windows across the pinned scroll progress.
  const op0 = useTransform(scrollYProgress, [0, 0.3, 0.38], [1, 1, 0])
  const op1 = useTransform(scrollYProgress, [0.31, 0.4, 0.62, 0.7], [0, 1, 1, 0])
  const op2 = useTransform(scrollYProgress, [0.63, 0.72, 1], [0, 1, 1])
  const opacities = [op0, op1, op2]

  // Gentle, differing parallax drift per image.
  const y0 = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])
  const y1 = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const ys = [y0, y1, y2]

  // Progress bar grows from the start edge (right, in RTL).
  const barScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  // ── Mobile / reduced-motion: simple vertical stack ──────────────────────────
  if (reduceMotion) {
    return <Stack />
  }

  return (
    <section id="concept" aria-label="שגרת היום באוצר היין">
      {/* Desktop: pinned 300vh crossfade */}
      <div ref={sectionRef} className="relative hidden h-[300vh] lg:block">
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Stacked images */}
          {items.map((item, i) => (
            <motion.div
              key={item.time}
              style={{ opacity: opacities[i] }}
              className="absolute inset-0"
            >
              <motion.div
                style={{ y: ys[i] as MotionValue<string> }}
                className="absolute inset-0 scale-110 bg-surface"
                role={item.src ? undefined : 'img'}
                aria-label={item.src ? undefined : item.alt}
              >
                <Photo src={item.src} alt={item.alt} sizes="100vw" />
              </motion.div>
              {/* Solid scrim for legibility — no gradient (token rule). */}
              <div className="absolute inset-0 bg-text/30" />
            </motion.div>
          ))}

          {/* Stacked captions */}
          <div className="relative flex h-full items-end">
            <div className="mx-auto w-full max-w-content px-6 pb-24 lg:px-12">
              <div className="relative h-[14rem]">
                {items.map((item, i) => (
                  <motion.div
                    key={item.time}
                    style={{ opacity: opacities[i] }}
                    className="absolute inset-0"
                  >
                    <p className="flex items-center gap-2 font-sans text-sm font-medium tracking-wide text-bg/90">
                      <StarMark className="text-base" />
                      {item.time}
                    </p>
                    <h3 className="mt-3 font-display text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1.05] text-bg">
                      {item.headline.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll-progress bar (RTL: origin at the start/right edge) */}
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-bg/20">
            <motion.div
              style={{ scaleX: barScale, transformOrigin: 'right' }}
              className="h-full bg-brand"
            />
          </div>
        </div>
      </div>

      {/* Mobile: vertical stack */}
      <div className="lg:hidden">
        <Stack />
      </div>
    </section>
  )
}

/** Plain reveal stack used on mobile and under reduced motion. */
function Stack() {
  return (
    <div className="mx-auto max-w-content px-6 py-16 lg:px-12">
      <ul className="space-y-12">
        {items.map((item) => (
          <Reveal as="li" standalone key={item.time}>
            <div
              className={cn(
                'relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-surface',
                !item.src && 'border border-border',
              )}
              role={item.src ? undefined : 'img'}
              aria-label={item.src ? undefined : item.alt}
            >
              <Photo src={item.src} alt={item.alt} sizes="100vw" />
              {item.src && <EdgeFade color="var(--bg)" soft="rgba(255,255,255,0)" />}
            </div>
            <p className="mt-5 flex items-center gap-2 font-sans text-sm font-medium tracking-wide text-muted">
              <StarMark className="text-base" />
              {item.time}
            </p>
            <MaskText
              as="h3"
              lines={[...item.headline]}
              className="mt-2 font-display text-[clamp(2rem,7vw,3rem)] font-bold leading-[1.05] text-text"
            />
          </Reveal>
        ))}
      </ul>
    </div>
  )
}
