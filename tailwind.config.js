/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
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
      backgroundImage: {
        leafs: "url('/src/assets/images/leafs.webp')",
      },
    },
  },
  plugins: [],
};
