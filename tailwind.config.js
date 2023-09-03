/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        resultSearch: 'minmax(60%, 70%) 1fr',
      },
    },
  },
  plugins: [],
};
