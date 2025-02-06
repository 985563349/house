'use client';

import { useTheme } from 'next-themes';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="inline-flex items-center justify-center rounded-full size-8 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 ease-in-out"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <RiSunLine className="dark:hidden" />
      <RiMoonLine className="hidden dark:inline-block" />
    </button>
  );
};

export default ThemeToggle;
