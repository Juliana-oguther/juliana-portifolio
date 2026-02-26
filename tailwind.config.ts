import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-playfair)', '"Playfair Display"', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'Inter', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      colors: {
        paper: {
          50: '#fcf8ef',
          100: '#f4ecdc',
          200: '#e7d9ba',
          300: '#d6bd8e',
          400: '#bd9863',
          500: '#9a7444',
        },
        ink: {
          800: '#2b2319',
          900: '#18120c',
        },
        accent: {
          terracotta: '#bc6c4c',
          teal: '#2f706d',
          sage: '#708b75',
        },
      },
      boxShadow: {
        sheet: '0 20px 60px rgba(57, 41, 24, 0.2)',
        'glow-sm': '0 0 15px rgba(188, 108, 76, 0.15)',
        'glow-md': '0 0 30px rgba(188, 108, 76, 0.2)',
        'glow-lg': '0 0 60px rgba(188, 108, 76, 0.25)',
      },
      backgroundImage: {
        fibers:
          'radial-gradient(circle at 1px 1px, rgba(76, 54, 31, 0.08) 1px, transparent 0)',
        'parchment-gradient':
          'linear-gradient(180deg, #fcf8ef 0%, #f4ecdc 30%, #e7d9ba 70%, #f4ecdc 100%)',
        'dark-parchment-gradient':
          'linear-gradient(180deg, #18120c 0%, #2b2319 30%, #1f1912 70%, #2b2319 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
        'slide-right': 'slide-right 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
