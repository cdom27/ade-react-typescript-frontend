/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#fffcf2',
        'bg-secondary': '#ccc5b9',
        'content-primary': '#1e1d1b',
        'content-secondary': '#403d39',
        'brand-accent': '#eb5e28',
      },
    },
  },
  plugins: [],
};
