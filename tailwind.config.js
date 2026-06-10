/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          DEFAULT: '#120a0c',
          light: '#1a1013',
          card: '#1a1013',
          accent: '#a0304e',
          burgundy: '#6b1d30',
          rose: '#d4607a',
          gold: '#c9a84c',
        },
        muted: {
          DEFAULT: '#d4b8bd',
          dim: '#a08088',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'DM Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
