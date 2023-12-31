import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        text: {
          muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
          link: 'rgb(var(--color-text-link) / <alpha-value>)',
        },
        primary: {
          blue: 'rgb(var(--color-primary-blue) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#FFFFFF',
            foreground: '#3E3355',
          },
        },
        dark: {
          colors: {
            background: '#0F1724',
            foreground: '#CBD5E1',
          },
        },
      },
    }),
    typography,
  ],
};

export default config;
