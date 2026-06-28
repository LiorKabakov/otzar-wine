import { forwardRef } from 'react'
import { ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/cn'

type Variant = 'brand' | 'ghost' | 'link'

type BaseProps = {
  variant?: Variant
  className?: string
  children: React.ReactNode
  /** Show a directional arrow that nudges forward (leftward in RTL) on hover. */
  arrow?: boolean
}

const base =
  'group/btn inline-flex items-center justify-center gap-2 rounded-sm font-sans font-medium ' +
  'transition-colors duration-200 ease-out select-none ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-functional ' +
  'disabled:cursor-not-allowed disabled:opacity-50'

const variants: Record<Variant, string> = {
  // Primary brand-filled CTA. Hover shifts shade, not scale.
  brand: 'bg-brand text-bg px-6 py-3 text-base hover:bg-[#854331]',
  // Lighter secondary action — hairline outline in the functional accent.
  ghost:
    'border border-border text-functional px-6 py-3 text-base hover:bg-surface',
  // Inline text action.
  link: 'text-functional underline underline-offset-4 hover:text-text px-1 py-1',
}

/* The arrow points left (RTL reading-forward) and nudges further left on hover. */
function Arrow() {
  return (
    <ArrowLeft
      className="size-4 transition-transform duration-200 ease-out group-hover/btn:-translate-x-1"
      aria-hidden
    />
  )
}

type ButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }

type AnchorProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' }

type Props = ButtonProps | AnchorProps

/** Brand / ghost / link button. Render as <a> with `as="a" href=...`. */
const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  ({ variant = 'brand', className, children, arrow = false, ...props }, ref) => {
    const classes = cn(base, variants[variant], className)
    const content = (
      <>
        {children}
        {arrow && <Arrow />}
      </>
    )

    if (props.as === 'a') {
      const { as: _as, ...anchorProps } = props
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...anchorProps}
        >
          {content}
        </a>
      )
    }

    const { as: _as, ...buttonProps } = props as ButtonProps
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...buttonProps}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
