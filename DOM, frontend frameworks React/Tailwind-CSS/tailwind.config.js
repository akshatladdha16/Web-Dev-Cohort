/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", //anything in src folder ending with tsx,js,jsx files should be looked byb tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

