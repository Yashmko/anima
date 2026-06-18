import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/features/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // Theme tokens (colors, fonts, Essence themes) will be added in Phase 2.
    },
  },
  plugins: [],
};

export default config;
