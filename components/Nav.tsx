'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Button from './ui/Button'
import StarMark from './ui/StarMark'
import { onIntroReady } from '@/lib/intro'

const links = [
  { href: '#concept', label: 'קונספט' },
  { href: '#bar', label: 'הבר' },
  { href: '#visit', label: 'המקום' },
]

export default function Nav() {
  const reduceMotion = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [started, setStarted] = useState(false)

  // Shrink + add a hairline once past the first viewport (the hero).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Intro: links/logo slide+fade down once the age gate is resolved.
  useEffect(() => onIntroReady(() => setStarted(true)), [])

  const show = reduceMotion || started

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : -12 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.header
      initial={false}
      animate={{
        paddingTop: scrolled ? 12 : 22,
        paddingBottom: scrolled ? 12 : 22,
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-40 bg-bg transition-[border-color] duration-300 ${
        scrolled ? 'border-b border-border' : 'border-b border-transparent'
      }`}
    >
      <motion.nav
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
        initial="hidden"
        animate={show ? 'show' : 'hidden'}
        className="mx-auto flex max-w-content items-center justify-between gap-6 px-6 lg:px-12"
        aria-label="ניווט ראשי"
      >
        {/* Wordmark — placeholder for a logo <Image> (swaps with no layout shift). */}
        <motion.a
          variants={item}
          href="#top"
          className="font-display text-xl font-bold tracking-tight text-text"
        >
          אוצר היין
        </motion.a>

        {/* Links separated by the star mark. */}
        <motion.ul
          variants={item}
          className="hidden items-center gap-4 md:flex"
        >
          {links.map((link, i) => (
            <li key={link.href} className="flex items-center gap-4">
              {i > 0 && <StarMark className="text-xs" motionMode="none" />}
              <a
                href={link.href}
                className="group flex items-center font-sans text-sm font-medium text-text transition-colors duration-200 hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>

        <motion.div variants={item}>
          <Button as="a" href="#visit" variant="brand" className="px-5 py-2 text-sm">
            צרו קשר
          </Button>
        </motion.div>
      </motion.nav>
    </motion.header>
  )
}
