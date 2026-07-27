import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        saffron: '#FF6B00',
        brandgreen: '#0F8A3B',
        navy: '#0B1F3A',
        gold: '#E4B15D',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(11, 31, 58, 0.1)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top right, rgba(255,107,0,0.18), transparent 32%), radial-gradient(circle at bottom left, rgba(15,138,59,0.12), transparent 24%)',
      },
      borderRadius: {
        xl: '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
