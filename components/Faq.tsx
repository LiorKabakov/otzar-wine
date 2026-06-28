'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Plus } from 'lucide-react'
import Reveal from './ui/Reveal'
import StarMark from './ui/StarMark'

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: 'מה זה אוצר היין?',
    a: 'חנות אלכוהול ובר יין תחת קורת גג אחת, בלב אשדוד.',
  },
  {
    q: 'איפה אתם?',
    a: (
      <>
        שדרות תל חי <bdi>19</bdi>, אשדוד.
      </>
    ),
  },
  {
    q: 'מה שעות הפתיחה?',
    a: (
      <>
        ראשון–חמישי <bdi dir="ltr">11:00–23:00</bdi> · שישי{' '}
        <bdi dir="ltr">9:00–15:30</bdi> · שבת סגור
      </>
    ),
  },
]

export default function Faq() {
  const reduceMotion = useReducedMotion()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-bg" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28 lg:px-12">
        <Reveal standalone>
          <p className="flex items-center gap-2 font-sans text-sm font-medium tracking-wide text-brand">
            <StarMark className="text-base" />
            שאלות
          </p>
          <h2
            id="faq-heading"
            className="mt-3 max-w-3xl font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[1.1] text-text"
          >
            מה כדאי לדעת לפני שמגיעים.
          </h2>
        </Reveal>

        <ul className="mt-12 border-t border-border">
          {faqs.map((item, i) => {
            const isOpen = open === i
            const panelId = `faq-panel-${i}`
            const btnId = `faq-btn-${i}`
            return (
              <li key={item.q} className="border-b border-border">
                <h3>
                  <button
                    id={btnId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-4 py-6 text-start"
                  >
                    <span className="font-display text-[clamp(1.25rem,2.6vw,1.75rem)] font-semibold text-text transition-colors duration-200 group-hover:text-brand">
                      {item.q}
                    </span>
                    <Plus
                      className={`size-6 shrink-0 text-brand transition-transform duration-300 ${
                        isOpen ? 'rotate-[135deg]' : 'rotate-0'
                      }`}
                      aria-hidden
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 font-sans text-[clamp(1.05rem,2vw,1.25rem)] text-muted">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
