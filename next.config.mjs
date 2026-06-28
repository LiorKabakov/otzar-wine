/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // TODO: add remotePatterns here once real photos are hosted externally.
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
