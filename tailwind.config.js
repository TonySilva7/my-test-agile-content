/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // resultSearch: 'repeat(auto-fill, minmax(200px, 1fr))',
        resultSearch: 'minmax(60%, 70%) 1fr',
      },
    },
  },
  plugins: [],
};
