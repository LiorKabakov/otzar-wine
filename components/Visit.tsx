'use client'

import { useState } from 'react'
import { MapPin, Phone, Clock, Navigation } from 'lucide-react'
import Button from './ui/Button'
import Reveal, { RevealGroup } from './ui/Reveal'
import StarMark from './ui/StarMark'

const PHONE_DISPLAY = '050-492-2311'
const PHONE_TEL = '+972504922311'
const MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=31.7701526,34.6256714'

export default function Visit() {
  const [sent, setSent] = useState(false)

  // No backend yet — acknowledge locally. TODO: wire to a real endpoint.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="visit" className="bg-surface" aria-labelledby="visit-heading">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Details */}
          <RevealGroup>
            <Reveal>
              <p className="flex items-center gap-2 font-sans text-sm font-medium tracking-wide text-brand">
                <StarMark className="text-base" />
                ביקור
              </p>
            </Reveal>
            <Reveal>
              <h2
                id="visit-heading"
                className="mt-3 font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[1.05] text-text"
              >
                בקבוק טוב.
                <br />
                ערב ארוך.
              </h2>
            </Reveal>

            <Reveal>
              <dl className="mt-10 space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 size-5 shrink-0 text-brand" aria-hidden />
                  <div>
                    <dt className="font-sans text-sm font-medium text-muted">כתובת</dt>
                    <dd className="font-sans text-lg text-text">
                      שדרות תל חי <bdi>19</bdi>, אשדוד, <bdi>7751013</bdi>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-1 size-5 shrink-0 text-brand" aria-hidden />
                  <div>
                    <dt className="font-sans text-sm font-medium text-muted">טלפון</dt>
                    <dd className="font-sans text-lg text-text">
                      <a
                        href={`tel:${PHONE_TEL}`}
                        className="text-functional underline underline-offset-4 hover:text-text"
                      >
                        <bdi dir="ltr">{PHONE_DISPLAY}</bdi>
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-1 size-5 shrink-0 text-brand" aria-hidden />
                  <div>
                    <dt className="font-sans text-sm font-medium text-muted">שעות פתיחה</dt>
                    <dd className="font-sans text-lg text-text">
                      <span className="block">
                        ראשון–חמישי <bdi dir="ltr">11:00–23:00</bdi>
                      </span>
                      <span className="block">
                        שישי <bdi dir="ltr">9:00–15:30</bdi>
                      </span>
                      <span className="block">שבת סגור</span>
                    </dd>
                  </div>
                </div>
              </dl>
            </Reveal>

            <Reveal>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button as="a" href="#top" variant="brand" arrow>
                  בואו לבקר
                </Button>
                <Button
                  as="a"
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                >
                  <Navigation className="size-4" aria-hidden />
                  ניווט
                </Button>
              </div>
            </Reveal>
          </RevealGroup>

          {/* Inquiry form (mirrors the reference site) */}
          <Reveal standalone>
            <div className="rounded-sm border border-border bg-bg p-8">
              {sent ? (
                <div className="flex h-full min-h-[18rem] flex-col items-start justify-center">
                  <StarMark className="text-2xl" />
                  <p className="mt-4 font-display text-2xl font-bold text-text">
                    קיבלנו, תודה!
                  </p>
                  <p className="mt-2 font-sans text-muted">נחזור אליכם בהקדם.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <Field id="name" label="שם" type="text" autoComplete="name" />
                  <Field
                    id="phone"
                    label="טלפון"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                  />
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-sans text-sm font-medium text-muted"
                    >
                      הודעה
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-2 w-full rounded-sm border border-border bg-bg px-4 py-3 font-sans text-text outline-none transition-colors placeholder:text-muted/60 focus-visible:border-functional"
                    />
                  </div>
                  <Button type="submit" variant="brand" arrow className="w-full">
                    שליחה
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  ...props
}: {
  id: string
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="block font-sans text-sm font-medium text-muted">
        {label}
      </label>
      <input
        id={id}
        name={id}
        className="mt-2 w-full rounded-sm border border-border bg-bg px-4 py-3 font-sans text-text outline-none transition-colors placeholder:text-muted/60 focus-visible:border-functional"
        {...props}
      />
    </div>
  )
}
