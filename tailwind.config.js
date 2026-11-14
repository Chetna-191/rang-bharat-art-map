/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ethereal Lavender Palette
        lavender: {
          lightest: '#FAF7FF',
          light: '#F4EBFF',
          mist: '#ECE2FE',
          base: '#E5D6FC',
          surface: '#FFFFFF',
          card: '#FAF6FE',
          cardHover: '#F3E8FF',
          charcoal: '#2D1B44',
          muted: '#624C78',
          dim: '#8F7EAA',
          border: 'rgba(168, 85, 247, 0.22)',
          borderBright: 'rgba(168, 85, 247, 0.45)',
          borderGold: 'rgba(212, 175, 55, 0.42)',
        },
        // Royal Violet & Plum Accents
        royal: {
          deep: '#1E0D36',
          dark: '#2A114B',
          main: '#3E196B',
          plum: '#581C87',
          violet: '#7C3AED',
          glow: '#9333EA',
          soft: '#C084FC',
        },
        // Warm Radiant Golden Tint
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F3D079',
          pale: '#FEF3C7',
          tint: '#FBF5DF',
          amber: '#D97706',
          rich: '#B45309',
          muted: '#9E7F28',
          dark: '#685014',
          border: 'rgba(212, 175, 55, 0.45)',
          borderBright: 'rgba(212, 175, 55, 0.85)',
        },
        terracotta: {
          DEFAULT: '#C85A32',
          light: '#E2764E',
          dark: '#9E3C1B',
        },
        cream: {
          DEFAULT: '#FAF8F5',
          soft: '#F4EFE6',
          muted: '#D8CFBE',
        },
        // Backward-compatible tokens mapped to Royal Lavender & Gold
        night: {
          deep: '#1E0D36',
          main: '#261244',
          surface: '#FAF6FE',
          card: '#FFFFFF',
          cardHover: '#F7F0FF',
          border: 'rgba(212, 175, 55, 0.35)',
          borderBright: 'rgba(212, 175, 55, 0.75)',
        },
        forest: {
          DEFAULT: '#3E196B',
          glow: '#581C87',
          dark: '#240E40',
          deep: '#18082D',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.38)',
        'gold-glow-lg': '0 0 40px rgba(212, 175, 55, 0.58)',
        'lavender-card': '0 10px 30px -5px rgba(126, 34, 206, 0.08), 0 0 0 1px rgba(212, 175, 55, 0.32)',
        'lavender-card-hover': '0 18px 45px -8px rgba(126, 34, 206, 0.16), 0 0 0 1.5px rgba(212, 175, 55, 0.65)',
        'night-card': '0 10px 30px -5px rgba(126, 34, 206, 0.08), 0 0 0 1px rgba(212, 175, 55, 0.32)',
        'night-card-hover': '0 18px 45px -8px rgba(126, 34, 206, 0.16), 0 0 0 1.5px rgba(212, 175, 55, 0.65)',
      }
    },
  },
  plugins: [],
}
