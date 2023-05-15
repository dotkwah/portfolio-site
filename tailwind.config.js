/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f2335',
        primaryAccent: '#bf2659',
        secondary: '#cce5df',
        backgroundDefault: '#f3f4f6',
        textPrimary: '#0f2335',
      },
    },
  },
  plugins: [],
}
