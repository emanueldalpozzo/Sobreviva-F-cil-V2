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
      // Níveis de texto usados nas telas (tamanho, altura de linha e peso)
      fontSize: {
        title: ['24px', { lineHeight: '32px', fontWeight: '700' }],
        subtitle: ['18px', { lineHeight: '26px', fontWeight: '600' }],
        body: ['14px', { lineHeight: '20px', fontWeight: '400' }],
        caption: ['12px', { lineHeight: '16px', fontWeight: '400' }],
      },
      // Raios do protótipo; espaçamentos seguem a escala padrão do Tailwind (múltiplos de 4px)
      borderRadius: {
        item: '14px',
        card: '16px',
        chip: '20px',
        sheet: '24px',
      },
    },
  },
  plugins: [],
};
