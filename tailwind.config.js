/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: {
          DEFAULT: '#1A1A2E',
          100: '#1E2A4A',
          200: '#243056',
          300: '#2A3A5C',
          400: '#3A4A6E',
          500: '#E94560',
        },
        muted: {
          DEFAULT: '#94A3B8',
          light: '#CBD5E1',
        },
        surface: '#16213E',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'DM Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
