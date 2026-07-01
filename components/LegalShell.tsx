import Image from 'next/image'
import Footer from './Footer'

/**
 * Shared chrome for the standalone legal pages (privacy / terms / accessibility):
 * a slim header with the logo linking home + a back link, a readable-width
 * <main>, and the shared site Footer (which carries the legal cross-links).
 */
export default function LegalShell({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className="border-b border-border bg-bg">
        <div className="mx-auto flex max-w-content items-center justify-between gap-6 px-6 py-5 lg:px-12">
          <a
            href="/"
            aria-label="אוצר היין — לעמוד הבית"
            className="inline-flex items-center"
          >
            <Image
              src="/logo.png"
              alt="אוצר היין"
              width={1078}
              height={830}
              priority
              className="h-11 w-auto"
            />
          </a>
          <a
            href="/"
            className="font-sans text-sm font-medium text-functional underline underline-offset-4 transition-colors hover:text-text"
          >
            חזרה לאתר
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-[70ch] px-6 py-16 lg:py-24">{children}</main>

      <Footer />
    </>
  )
}
