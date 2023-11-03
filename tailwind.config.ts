import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        lightTheme: {

          "primary": "#6addb9",

          "secondary": "#f4f79e",

          "accent": "#e2bd8c",

          "neutral": "#262931",

          "base-100": "#463267",

          "info": "#7ed4e7",

          "success": "#5bd793",

          "warning": "#f9b310",

          "error": "#f23144",
          body: {
            "background-color": "#3b82f6",
          }
        },
      },
    ],
  },

}
export default config
