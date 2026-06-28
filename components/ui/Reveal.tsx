'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { cn } from '@/lib/cn'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

/* ── Container: staggers its Reveal children ───────────────────────────────── */

export function RevealGroup({
  children,
  className,
  stagger = 0.12,
  as = 'div',
}: {
  children: React.ReactNode
  className?: string
  stagger?: number
  as?: 'div' | 'section' | 'ul' | 'header'
}) {
  const reduceMotion = useReducedMotion()
  const Tag = motion[as]

  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : stagger } },
  }

  return (
    <Tag
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-12%' }}
    >
      {children}
    </Tag>
  )
}

/* ── Item: fade + rise. Use inside RevealGroup or standalone. ───────────────── */

export default function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
  standalone = false,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'p' | 'span'
  /** When true, triggers on its own viewport instead of inheriting a group. */
  standalone?: boolean
}) {
  const reduceMotion = useReducedMotion()
  const Tag = motion[as]

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE_OUT, delay },
    },
  }

  const trigger = standalone
    ? {
        initial: 'hidden' as const,
        whileInView: 'show' as const,
        viewport: { once: true, margin: '-12%' },
      }
    : { variants }

  return (
    <Tag
      className={cn(className)}
      variants={variants}
      {...(standalone ? trigger : {})}
    >
      {children}
    </Tag>
  )
}

/* ── MaskText: line-by-line clip reveal for big headlines ───────────────────── */

export function MaskText({
  lines,
  className,
  lineClassName,
  as = 'h2',
  stagger = 0.12,
  delay = 0,
  /** When set, drives the animation imperatively instead of on scroll. */
  animateState,
}: {
  lines: string[]
  className?: string
  lineClassName?: string
  as?: 'h1' | 'h2' | 'h3' | 'p'
  stagger?: number
  delay?: number
  animateState?: 'hidden' | 'show'
}) {
  const reduceMotion = useReducedMotion()
  const Tag = motion[as]

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: delay,
        staggerChildren: reduceMotion ? 0 : stagger,
      },
    },
  }

  const line: Variants = {
    hidden: { y: reduceMotion ? '0%' : '110%' },
    show: {
      y: '0%',
      transition: { duration: 0.7, ease: EASE_OUT },
    },
  }

  const trigger =
    animateState != null
      ? { animate: animateState }
      : {
          whileInView: 'show' as const,
          viewport: { once: true, margin: '-12%' },
        }

  return (
    <Tag
      className={cn(className)}
      variants={container}
      initial="hidden"
      {...trigger}
    >
      {lines.map((text, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            variants={line}
            className={cn('block will-change-transform', lineClassName)}
          >
            {text}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
