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
          DEFAULT: 'oklch(0.54 0.28 262)',
          foreground: 'oklch(0.92 0.01 65)',
        },
        secondary: {
          DEFAULT: 'oklch(0.62 0.22 142)',
          foreground: 'oklch(0.08 0.01 262)',
        },
        accent: {
          DEFAULT: 'oklch(0.78 0.32 65)',
          foreground: 'oklch(0.08 0.01 262)',
        },
        background: 'oklch(0.08 0.01 262)',
        foreground: 'oklch(0.92 0.01 65)',
        border: 'oklch(0.2 0.02 262)',
        muted: {
          DEFAULT: 'oklch(0.15 0.02 262)',
          foreground: 'oklch(0.6 0.01 262)',
        },
        success: 'oklch(0.62 0.22 142)',
        warning: 'oklch(0.68 0.18 65)',
        error: 'oklch(0.58 0.22 25)',
        info: 'oklch(0.58 0.22 262)',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Noto Sans TC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
