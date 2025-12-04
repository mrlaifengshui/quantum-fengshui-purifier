/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'oklch(0.45 0.25 265)',
          foreground: 'oklch(0.98 0.02 80)',
        },
        secondary: {
          DEFAULT: 'oklch(0.55 0.22 280)',
          foreground: 'oklch(0.98 0.02 280)',
        },
        accent: {
          DEFAULT: 'oklch(0.75 0.20 75)',
          foreground: 'oklch(0.15 0.02 265)',
        },
        background: 'oklch(0.10 0.05 265)',
        foreground: 'oklch(0.95 0.02 75)',
        border: 'oklch(0.25 0.08 270)',
        'section-light': 'oklch(0.18 0.08 270)',
        'section-dark': 'oklch(0.08 0.06 260)',
        muted: {
          DEFAULT: 'oklch(0.20 0.06 270)',
          foreground: 'oklch(0.70 0.04 270)',
        },
        success: 'oklch(0.62 0.22 142)',
        warning: 'oklch(0.78 0.20 70)',
        error: 'oklch(0.58 0.22 25)',
        info: 'oklch(0.60 0.22 250)',
      },
      fontFamily: {
        sans: ['Noto Sans TC', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Microsoft JhengHei', 'sans-serif'],
        serif: ['Noto Serif TC', 'Times New Roman', 'serif'],
        display: ['Noto Serif TC', 'Georgia', 'serif'],
      },
      fontSize: {
        'xs': ['0.8125rem', { lineHeight: '1.5' }],
        'sm': ['0.9375rem', { lineHeight: '1.6' }],
        'base': ['1.0625rem', { lineHeight: '1.75' }],
        'lg': ['1.1875rem', { lineHeight: '1.75' }],
        'xl': ['1.375rem', { lineHeight: '1.6' }],
        '2xl': ['1.75rem', { lineHeight: '1.5' }],
        '3xl': ['2.25rem', { lineHeight: '1.4' }],
        '4xl': ['3rem', { lineHeight: '1.3' }],
        '5xl': ['4rem', { lineHeight: '1.2' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'cosmic-pulse': 'cosmicPulse 20s ease-in-out infinite alternate',
        'ripple': 'ripple 2s ease-out infinite',
      },
      boxShadow: {
        'cosmic': '0 20px 40px oklch(0.08 0.06 265 / 0.6), 0 0 30px oklch(0.55 0.22 280 / 0.3)',
        'cosmic-lg': '0 30px 60px oklch(0.08 0.06 265 / 0.8), 0 0 50px oklch(0.55 0.22 280 / 0.4)',
        'glow': '0 0 30px oklch(0.75 0.20 75 / 0.5)',
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, oklch(0.08 0.06 260) 0%, oklch(0.12 0.08 270) 50%, oklch(0.10 0.06 265) 100%)',
        'quantum-wave': 'radial-gradient(circle at 50% 50%, oklch(0.45 0.25 265 / 0.2) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
