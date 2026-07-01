'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Button from './ui/Button'
import { markIntroReady } from '@/lib/intro'

const STORAGE_KEY = 'otzar-age-confirmed'

type Stage = 'loading' | 'ask' | 'declined' | 'done'

/**
 * On-load legal-age confirmation overlay. Confirm dismisses and remembers;
 * decline shows a polite message. Locks body scroll while open. This dialog is
 * the one place a soft shadow is permitted.
 */
export default function AgeGate() {
  const [stage, setStage] = useState<Stage>('loading')
  const confirmRef = useRef<HTMLButtonElement>(null)

  // Decide initial stage on the client only (avoids hydration mismatch).
  useEffect(() => {
    const confirmed =
      typeof window !== 'undefined' &&
      window.localStorage.getItem(STORAGE_KEY) === 'true'
    // Gate already passed on load → let the hero/nav intro start immediately.
    if (confirmed) markIntroReady()
    setStage(confirmed ? 'done' : 'ask')
  }, [])

  const open = stage === 'ask' || stage === 'declined'

  // Lock body scroll while the overlay is open.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  // Move focus to the confirm button when the question is shown.
  useEffect(() => {
    if (stage === 'ask') confirmRef.current?.focus()
  }, [stage])

  if (stage === 'loading' || stage === 'done') return null

  function confirm() {
    try {
      window.localStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // ignore storage failures (private mode) — still dismiss for this session
    }
    // User just confirmed → kick off the hero/nav intro reveal.
    markIntroReady()
    setStage('done')
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="agegate-title"
      aria-describedby="agegate-desc"
      className="fixed inset-0 z-50 flex items-center justify-center bg-text/70 p-6"
    >
      <div className="w-full max-w-md rounded-sm border border-border bg-bg p-8 shadow-[0_12px_40px_rgba(23,35,31,0.22)]">
        <Image
          src="/logo.png"
          alt="אוצר היין"
          width={1078}
          height={830}
          priority
          className="mx-auto h-24 w-auto"
        />

        {stage === 'ask' ? (
          <>
            <h2
              id="agegate-title"
              className="mt-5 font-display text-2xl font-bold text-text"
            >
              האם מלאו לך <bdi>18</bdi>?
            </h2>
            <p
              id="agegate-desc"
              className="mt-3 font-sans text-base text-muted"
            >
              הכניסה לאתר מיועדת לבני <bdi>18</bdi> ומעלה. נא לאשר את גילך כדי
              להמשיך.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button ref={confirmRef} variant="brand" onClick={confirm}>
                כן, מלאו לי <bdi>18</bdi>
              </Button>
              <Button variant="ghost" onClick={() => setStage('declined')}>
                לא
              </Button>
            </div>
          </>
        ) : (
          <>
            <h2
              id="agegate-title"
              className="mt-5 font-display text-2xl font-bold text-text"
            >
              נשמח לראותך בעתיד
            </h2>
            <p
              id="agegate-desc"
              className="mt-3 font-sans text-base text-muted"
            >
              הכניסה לאתר מותרת לבני <bdi>18</bdi> ומעלה בלבד. נא לשתות באחריות.
            </p>
            <div className="mt-7">
              <Button variant="ghost" onClick={() => setStage('ask')}>
                חזרה
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
