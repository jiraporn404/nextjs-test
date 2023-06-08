/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx,html,js}',
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'blue': '#00A0A9',
        'darkblue': '#006E96',
        'lightblue': '#E3F0FF',
        'red': '#EB5757',
      },
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#00A0A9",
          "secondary": "#006E96",
          "accent": "#ffffff",
          "neutral": "#ffffff",
          "base-100": "#fff",
        },
      },
    ],
  },
  plugins: [
    "tw-elements/dist/plugin.cjs",
    require("daisyui")
  ],
  //darkMode: "class"
}
