/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-vocal',
    {
      pattern: /bg-.*$/,
    },
  ],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        '18': '4.5rem',
      },
      colors: {
        vocal: '#fe4b9d',
        dance: '#38bbff',
        visual: '#feb100',
        'vocal-acc': '#cb015c',
        'dance-acc': '#0088d1',
        'visual-acc': '#b37d00',
        stamina: '#99db66',
        'stamina-acc': '#49ba43',
        'skill-success-rate-up': '#38bdf8',
        default: 'blue',
      },
      fontFamily: {
        sans: [
          ...defaultTheme.fontFamily.sans,
        ]
      },
      brightness: {
        85: ".85",
        80: ".8",
        70: ".7",
        65: ".65",
        60: ".6",
        55: ".55",
      },
      transitionDuration: {
        0: "0ms",
        default: "200ms",
      },
      keyframes: {
        'pulse-strong': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .3 },
        }
      },
      animation: {
        'pulse-quick': 'pulse-strong 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;'
      }
    },
  },
  plugins: [
  ],
}