/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        phantom: {
          purple: '#8B5CF6',
          'purple-dark': '#6D28D9',
          'purple-light': '#A78BFA',
          'purple-bg': '#F3F0FF',
          'gray-text': '#6B7280',
          'dark-text': '#1F2937',
        },
        gradient: {
          'phantom-card': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          'phantom-hero': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-phantom': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-card-purple': 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
        'gradient-card-yellow': 'linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)',
        'gradient-card-white': 'linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)',
      }
    },
  },
  plugins: [],
}