/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FDFDF1',
        content: '#39442B',
        accent: '#FAFE86',
      },
      fontFamily: {
        haas_md: ['haas_md'],
        haas_roman: ['haas_roman'],
        editorial_ul: ['editorial_ul'],
        editorial_ul_italic: ['editorial_ul_italic'],
        fraktion_reg: ['fraktion_reg'],
      },
    },
  },
  plugins: [],
};
