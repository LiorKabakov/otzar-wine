import type { Metadata, Viewport } from 'next'
import { Rubik, Heebo } from 'next/font/google'
import './globals.css'
import AgeGate from '@/components/AgeGate'
import SmoothScroll from '@/components/SmoothScroll'

const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  weight: ['500', '600', '700'],
  variable: '--font-rubik',
  display: 'swap',
})

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-heebo',
  display: 'swap',
})

const SITE_URL = 'https://otzar-hayain.co.il' // TODO: replace with real domain

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'אוצר היין | חנות אלכוהול ובר יין באשדוד',
  description:
    'אוצר היין — חנות אלכוהול ובר יין בשדרות תל חי 19, אשדוד. יין, וויסקי, ערק וספיריטים לצד בר יין פתוח: לבחור בקבוק, לטעום כוס, או פשוט להישאר.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    siteName: 'אוצר היין',
    title: 'אוצר היין | חנות אלכוהול ובר יין באשדוד',
    description:
      'חנות אלכוהול ובר יין בלב אשדוד — יין, וויסקי, ספיריטים ובר יין פתוח.',
    url: '/',
    images: ['/images/og.jpeg'],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

// LocalBusiness structured data — alcohol shop + wine bar.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LiquorStore', 'BarOrPub'],
  name: 'אוצר היין',
  url: SITE_URL,
  telephone: '+972504922311',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'שדרות תל חי 19',
    addressLocality: 'אשדוד',
    postalCode: '7751013',
    addressCountry: 'IL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.7701526,
    longitude: 34.6256714,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '11:00',
      closes: '23:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '09:00',
      closes: '15:30',
    },
    // Saturday: closed (omitted).
  ],
  sameAs: [
    'https://www.instagram.com/otzar_wine/',
    'https://www.facebook.com/profile.php?id=61585669423608',
  ],
  // priceRange: TODO — not yet set.
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className={`${rubik.variable} ${heebo.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AgeGate />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
