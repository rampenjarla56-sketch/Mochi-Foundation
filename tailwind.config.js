/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#6EC5E9',
        'light-blue': '#DDF4FB',
        'deep-blue': '#245D75',
        'sage-green': '#A8CFA7',
        'soft-green': '#E5F3E3',
        'forest-green': '#315C46',
        'warm-cream': '#FFFDF7',
        'dark-navy': '#15252E',
      },
    },
  },
  plugins: [],
}
