/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      // Paleta extraída do protótipo (globals.css do v0.dev)
      colors: {
        background: '#F5F4FF',
        foreground: '#1E1B4B',
        primary: {
          DEFAULT: '#6C63FF',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#EDE9FE',
          foreground: '#4C1D95',
        },
        accent: {
          DEFAULT: '#34D399',
          foreground: '#064E3B',
        },
        muted: {
          DEFAULT: '#F3F4F6',
          foreground: '#6B7280',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1E1B4B',
        },
        border: '#E5E7EB',
        input: '#F9FAFB',
        positive: '#34D399',
        warning: '#F59E0B',
        danger: '#EF4444',
      },
    },
  },
  plugins: [],
};
