/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development'

// Content-Security-Policy tuned to this app:
// - fonts are self-hosted by next/font (font-src 'self')
// - images are local via next/image (img-src 'self' data: blob:)
// - 'unsafe-inline' on script/style is required: Next's hydration bootstrap and
//   the inline JSON-LD need inline scripts, and Framer Motion writes inline
//   style attributes. (A nonce-based policy would force dynamic rendering and
//   lose full static prerendering — not worth it for a static marketing site.)
// - dev adds 'unsafe-eval' + ws: so HMR keeps working.
const CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self'${isDev ? ' ws:' : ''}`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ')

const nextConfig = {
  reactStrictMode: true,
  images: {
    // TODO: add remotePatterns here once real photos are hosted externally.
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains',
          },
          { key: 'Content-Security-Policy', value: CSP },
        ],
      },
    ]
  },
}

export default nextConfig
