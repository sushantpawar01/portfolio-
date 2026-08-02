/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0b0c10",
          card: "#12131c",
          subtle: "#181926",
          border: "#26283b"
        },
        accent: {
          purple: "#a855f7",
          purpleLight: "#c084fc",
          purpleDark: "#7e22ce",
          cyan: "#38bdf8"
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        sans: ['"Inter"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
