/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: '#1F1A24',        /* نص غامق أنيق */
          light: '#FFF7FB',      /* خلفية وردية فاتحة جدًا */
          blush: '#FAD8E7',      /* وردي خدود */
          pink: '#E91E63',       /* وردي أساسي */
          rose: '#F06292',       /* وردي متوسط */
          purple: '#9C27B0'      /* بنفسجي راقي */
        },
      },
      boxShadow: {
        card: '0 10px 24px rgba(233, 30, 99, 0.12)',
        glow: '0 0 0 2px rgba(240, 98, 146, 0.35)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem'
      }
    },
  },
  plugins: [],
}
