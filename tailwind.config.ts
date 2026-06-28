import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    // Override breakpoints with the rem-based scale from the build spec.
    screens: {
      sm: '40rem',
      md: '48rem',
      lg: '64rem',
      xl: '80rem',
      '2xl': '96rem',
    },
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        brand: 'var(--brand)',
        functional: 'var(--functional)',
        border: 'var(--border)',
        danger: 'var(--danger)',
      },
      fontFamily: {
        display: ['var(--font-rubik)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-heebo)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '96rem',
      },
      borderRadius: {
        sm: '2px',
        pill: '999px',
      },
    },
  },
  plugins: [],
}

export default config
