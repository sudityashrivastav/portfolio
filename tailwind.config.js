/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'md': '815px',
    },
    extend: {
      colors: {
        "primary": "#0fbf61",
        "secondary": "#f2f2f2",
      },
    },
  },
  plugins: [],
};
