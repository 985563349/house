import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import { addDynamicIconSelectors } from '@iconify/tailwind';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  plugins: [typography, addDynamicIconSelectors()],
};

export default config;
