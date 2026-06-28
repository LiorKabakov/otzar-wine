import Image from 'next/image'
import { cn } from '@/lib/cn'

/**
 * Optional fill-image layer for a placeholder slot.
 *
 * Render it inside a `relative` container that already holds the `bg-surface`
 * fallback block. When `src` is null it renders nothing (the surface block
 * shows through); when set, it covers the block with an optimized next/image.
 * Keeping the surface block underneath means the swap never shifts layout.
 */
export default function Photo({
  src,
  alt,
  sizes,
  priority = false,
  className,
}: {
  src: string | null
  alt: string
  sizes: string
  priority?: boolean
  className?: string
}) {
  if (!src) return null
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn('object-cover', className)}
    />
  )
}
