'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/cn'

type StarMarkProps = {
  className?: string
  /** 'spin' = slow continuous rotation; 'hover' = rotate when its group is hovered; 'none' = static. */
  motionMode?: 'spin' | 'hover' | 'none'
  'aria-hidden'?: boolean
}

/**
 * The recurring six-point star/asterisk accent in --brand. Reused as eyebrow
 * bullet, nav separator and section divider — the one detail that ties the page
 * to the reference site. Keep it small.
 */
export default function StarMark({
  className,
  motionMode = 'spin',
  'aria-hidden': ariaHidden = true,
}: StarMarkProps) {
  const reduceMotion = useReducedMotion()
  const animate =
    motionMode === 'spin' && !reduceMotion ? { rotate: 360 } : undefined

  return (
    <motion.span
      aria-hidden={ariaHidden}
      className={cn(
        'inline-block shrink-0 text-brand',
        // 'hover' mode: the nearest .group (e.g. a nav link) rotates the star.
        motionMode === 'hover' &&
          !reduceMotion &&
          'transition-transform duration-300 ease-out group-hover:rotate-90',
        className
      )}
      animate={animate}
      transition={
        animate ? { duration: 9, ease: 'linear', repeat: Infinity } : undefined
      }
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-[1em]"
        role="presentation"
      >
        {/* Four-point sparkle star, concave edges, centered in the viewBox. */}
        <path d="M12 0c.5 6.5 5.5 11.5 12 12-6.5.5-11.5 5.5-12 12-.5-6.5-5.5-11.5-12-12 6.5-.5 11.5-5.5 12-12Z" />
      </svg>
    </motion.span>
  )
}
