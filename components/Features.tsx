'use client'

import Reveal, { RevealGroup } from './ui/Reveal'
import StarMark from './ui/StarMark'
import Photo from './ui/Photo'
import EdgeFade from './ui/EdgeFade'
import { images } from '@/lib/images'

type Feature = {
  label: string
  headline: readonly string[]
  image?: string | null
  alt?: string
}

const features: Feature[] = [
  {
    label: 'הבקבוקים',
    headline: ['מאות תוויות.', 'מהארץ ומהעולם.'],
    image: images.featBottles,
    alt: 'קיר היין עם מאות תוויות בחנות אוצר היין',
  },
  { label: 'הבר', headline: ['כוס פתוחה.', 'כל ערב.'] },
  {
    label: 'לא רק יין',
    headline: ['וויסקי, ערק,', 'ספיריטים ועוד.'],
    image: images.featSpirits,
    alt: 'מדף הוויסקי והספיריטים בחנות אוצר היין',
  },
]

export default function Features() {
  return (
    <section id="bar" className="bg-surface" aria-labelledby="features-heading">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28 lg:px-12">
        <Reveal standalone>
          <h2
            id="features-heading"
            className="flex items-center gap-3 font-display text-[clamp(2rem,5vw,4.5rem)] font-bold text-text"
          >
            אוצר היין.
            <StarMark className="text-[0.5em]" />
          </h2>
        </Reveal>

        <RevealGroup as="ul" className="mt-14 divide-y divide-border border-y border-border">
          {features.map((f) => (
            <Reveal as="li" key={f.label}>
              <div className="grid grid-cols-1 gap-3 py-10 md:grid-cols-12 md:items-baseline md:gap-8">
                <p className="flex items-center gap-2 font-sans text-sm font-medium tracking-wide text-brand md:col-span-3">
                  <StarMark className="text-base" motionMode="none" />
                  {f.label}
                </p>
                <h3 className="font-display text-[clamp(1.75rem,4vw,3.25rem)] font-semibold leading-[1.1] text-text md:col-span-9">
                  {f.headline.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
              </div>
              {f.image && (
                <div className="pb-10">
                  <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[2/1]">
                    <Photo
                      src={f.image}
                      alt={f.alt ?? f.label}
                      sizes="(min-width: 96rem) 90rem, 100vw"
                      className="object-top"
                    />
                    <EdgeFade color="var(--surface)" soft="rgba(244,241,234,0)" />
                  </div>
                </div>
              )}
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
