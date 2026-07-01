import StarMark from './ui/StarMark'

const NAV_URL =
  'https://www.google.com/maps/dir/?api=1&destination=31.7701526,34.6256714'
const WHATSAPP_URL = 'https://wa.me/972504922311'
const INSTAGRAM_URL = 'https://www.instagram.com/otzar_wine/'
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61585669423608'

const linkClass =
  'text-functional underline underline-offset-4 transition-colors hover:text-text'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-content px-6 py-14 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="flex items-center gap-2 font-display text-xl font-bold text-text">
              אוצר היין
              <StarMark className="text-sm" />
            </p>
            <p className="mt-2 max-w-xs font-sans text-sm text-muted">
              חנות אלכוהול ובר יין באשדוד.
            </p>
          </div>

          {/* Address + hours */}
          <div>
            <p className="font-sans text-sm font-medium text-text">המקום</p>
            <address className="mt-3 space-y-1 font-sans text-sm not-italic text-muted">
              <p>
                שדרות תל חי <bdi>19</bdi>, אשדוד, <bdi>7751013</bdi>
              </p>
              <p>
                ראשון–חמישי <bdi dir="ltr">11:00–23:00</bdi>
              </p>
              <p>
                שישי <bdi dir="ltr">9:00–15:30</bdi>
              </p>
              <p>שבת סגור</p>
            </address>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-sm font-medium text-text">יצירת קשר</p>
            <ul className="mt-3 space-y-2 font-sans text-sm text-muted">
              <li>
                <a href="tel:+972504922311" className={linkClass}>
                  <bdi dir="ltr">050-492-2311</bdi>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  וואטסאפ
                </a>
              </li>
              <li>
                <a
                  href={NAV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  ניווט
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-sans text-sm font-medium text-text">עקבו אחרינו</p>
            <ul className="mt-3 space-y-2 font-sans text-sm text-muted">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  אינסטגרם
                </a>
              </li>
              <li>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  פייסבוק
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6">
          <nav
            aria-label="עמודים משפטיים"
            className="flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-xs text-muted"
          >
            <a href="/privacy" className="transition-colors hover:text-text">
              מדיניות פרטיות
            </a>
            <span aria-hidden>·</span>
            <a href="/terms" className="transition-colors hover:text-text">
              תנאי שימוש
            </a>
            <span aria-hidden>·</span>
            <a href="/accessibility" className="transition-colors hover:text-text">
              הצהרת נגישות
            </a>
          </nav>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2 font-sans text-sm text-muted">
              <StarMark className="text-sm" />© <bdi>2026</bdi> אוצר היין
            </p>
            <p className="font-sans text-sm text-muted">
              מיועד לבני <bdi>18</bdi> ומעלה. נא לשתות באחריות.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
