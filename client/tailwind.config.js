/** @type {import('tailwindcss').Config} */
/*eslint-env node*/


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        text: "var(--color-text)",
        accent: "var(--color-accent)",
        contrast: "var(--color-contrast)",
        inputBackground: "var(--color-input-background)",
        formBackground: "var(--color-form-background)",
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}