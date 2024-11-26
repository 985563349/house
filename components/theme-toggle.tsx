'use client';

import { useTheme } from 'next-themes';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

const ThemeToggle: React.FC = () => {
  const { setTheme } = useTheme();

  return (
    <div className="inline-flex flex-wrap gap-1 items-center">
      <button
        aria-label="Light theme"
        className="group flex items-center justify-center size-8 text-xl"
        onClick={() => setTheme('light')}
      >
        <RiSunLine className="group-hover:text-black group-hover:dark:text-white transition-colors duration-300 ease-in-out" />
      </button>

      <button
        aria-label="Dark theme"
        className="group flex items-center justify-center size-8 text-xl"
        onClick={() => setTheme('dark')}
      >
        <RiMoonLine className="group-hover:text-black group-hover:dark:text-white transition-colors duration-300 ease-in-out" />
      </button>
    </div>
  );
};

export default ThemeToggle;
