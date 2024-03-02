/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ffe8e',
        'gray-store': '#F5F5F7'
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },

  plugins: [
    import('flowbite/plugin'),
  ],
}

