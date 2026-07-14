import { Phone, MessageCircle, Navigation } from 'lucide-react'

const PHONE_TEL = '+972504922311'
const WHATSAPP_URL = 'https://wa.me/972504922311'
const MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=31.7701526,34.6256714'

const actionClass =
  'flex flex-1 flex-col items-center justify-center gap-1 py-2 font-sans text-xs font-medium text-text ' +
  'transition-colors active:bg-surface'

/**
 * One-tap contact bar pinned to the bottom on mobile only (hidden ≥ lg).
 * Call · WhatsApp · Navigate — the three actions that convert store traffic.
 * Respects the iOS home-indicator safe area; a matching spacer keeps it from
 * covering the footer at the end of the page.
 */
export default function MobileActionBar() {
  return (
    <>
      {/* Spacer so the fixed bar never overlaps the footer at max scroll. */}
      <div
        aria-hidden
        className="h-[calc(3.5rem+env(safe-area-inset-bottom))] lg:hidden"
      />

      <nav
        aria-label="פעולות מהירות"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 backdrop-blur pb-[env(safe-area-inset-bottom)] lg:hidden"
      >
        <div className="mx-auto flex max-w-content divide-x divide-border">
          <a href={`tel:${PHONE_TEL}`} className={actionClass}>
            <Phone className="size-5 text-brand" aria-hidden />
            התקשרו
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={actionClass}
          >
            <MessageCircle className="size-5 text-brand" aria-hidden />
            וואטסאפ
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={actionClass}
          >
            <Navigation className="size-5 text-brand" aria-hidden />
            ניווט
          </a>
        </div>
      </nav>
    </>
  )
}
