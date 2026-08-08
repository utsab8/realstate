/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#12161c',
          alt: '#1a2029'
        },
        surface: {
          DEFAULT: '#1e242c',
          border: '#2c333d'
        },
        accent: {
          DEFAULT: '#b8923f',
          hover: '#9a7a32'
        },
        secondary: {
          DEFAULT: '#3d5a73',
          hover: '#2c4255'
        },
        text: {
          DEFAULT: '#e8e6e1',
          muted: '#9aa1ab'
        },
        success: '#4a7a5c'
      },
      fontFamily: {
        heading: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
