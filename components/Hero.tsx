'use client'

import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { Phone, MapPin, CalendarDays, ArrowDown } from 'lucide-react'
import Button from './ui/Button'
import StarMark from './ui/StarMark'
import Photo from './ui/Photo'
import { MaskText } from './ui/Reveal'
import { onIntroReady } from '@/lib/intro'
import { images } from '@/lib/images'

const PHONE = '+972504922311'
const EASE_OUT = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const [started, setStarted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => onIntroReady(() => setStarted(true)), [])

  // Parallax: the hero image drifts as the hero scrolls away.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  const state = reduceMotion || started ? 'show' : 'hidden'

  // Soft fade-up for eyebrow / paragraph / CTAs, sequenced after the headline.
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 18 },
    animate:
      state === 'show'
        ? { opacity: 1, y: 0 }
        : { opacity: 0, y: reduceMotion ? 0 : 18 },
    transition: { duration: 0.6, ease: EASE_OUT, delay: reduceMotion ? 0 : delay },
  })

  return (
    <section ref={sectionRef} id="top" className="relative bg-bg">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-6 pb-16 pt-24 lg:grid-cols-12 lg:gap-14 lg:px-12 lg:pb-24">
        {/* Copy */}
        <div className="order-2 lg:order-1 lg:col-span-6">
          <motion.p
            {...fadeUp(0)}
            className="flex items-center gap-2 font-sans text-sm font-medium tracking-wide text-muted"
          >
            <StarMark className="text-base" />
            חנות בוטיק ליין ואלכוהול · בר יין
          </motion.p>

          <MaskText
            as="h1"
            lines={['כאן היין', 'פוגש את הערב']}
            animateState={state}
            delay={reduceMotion ? 0 : 0.15}
            className="mt-6 font-display text-[clamp(3rem,9vw,8rem)] font-bold leading-[1.05] text-text"
          />

          <motion.p
            {...fadeUp(0.6)}
            className="mt-6 max-w-xl font-sans text-[clamp(1.05rem,2vw,1.25rem)] text-muted"
          >
            מבחר בקבוקים נבחר וכוס יין פתוחה תחת קורת גג אחת. כנסו לבחור בקבוק
            הביתה, או הישארו לערב יין אצלנו.
          </motion.p>

          <motion.div
            {...fadeUp(0.72)}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button as="a" href="#visit" variant="brand" arrow>
              בואו לבקר
            </Button>
            <Button as="a" href="#visit" variant="ghost">
              <CalendarDays className="size-4" aria-hidden />
              הזמינו שולחן
            </Button>
            <Button as="a" href={`tel:${PHONE}`} variant="ghost">
              <Phone className="size-4" aria-hidden />
              התקשרו
            </Button>
            <Button as="a" href="#visit" variant="ghost">
              <MapPin className="size-4" aria-hidden />
              הוראות הגעה
            </Button>
          </motion.div>
        </div>

        {/* Image — parallax, scale-in on intro. */}
        <div className="order-1 overflow-hidden rounded-sm border border-border lg:order-2 lg:col-span-6">
          <motion.div
            initial={{ scale: reduceMotion ? 1 : 1.08 }}
            animate={{ scale: state === 'show' ? 1 : reduceMotion ? 1 : 1.08 }}
            transition={{ duration: 1.2, ease: EASE_OUT }}
            style={{ y: imageY }}
            className="relative aspect-[4/5] w-full bg-surface"
            role={images.hero ? undefined : 'img'}
            aria-label={images.hero ? undefined : 'חזית החנות ובר היין של אוצר היין'}
          >
            {/* Set images.hero in lib/images.ts to swap the surface block for a photo. */}
            <Photo
              src={images.hero}
              alt="חזית החנות ובר היין של אוצר היין"
              sizes="(min-width: 64rem) 50vw, 100vw"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        {...fadeUp(0.9)}
        className="pointer-events-none flex justify-center pb-10"
        aria-hidden
      >
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 1.8, ease: 'easeInOut', repeat: Infinity }
          }
          className="flex flex-col items-center gap-2 font-sans text-xs text-muted"
        >
          גללו
          <ArrowDown className="size-4 text-brand" />
        </motion.span>
      </motion.div>
    </section>
  )
}
