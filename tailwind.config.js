/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./pages/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-0': '#FFFFFF',
        'gray-1': '#F8F9FA', 
        'gray-2': '#E9ECEF',
        'gray-3': '#DEE2E6',
        'gray-4': '#CED4DA',
        'gray-5': '#ADB5BD',
        'gray-6': '#6C757D',
        'gray-7': '#495057',
        'gray-8': '#343A40',
        'gray-9': '#212529',
        'gray-10': '#000000',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'bruno': ['Bruno Ace SC', 'cursive'],
      },
    },
  },
  plugins: [],
};

export default config;
