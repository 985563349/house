'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="size-10">
      {mounted ? (
        <>
          {theme === 'light' ? (
            <button
              aria-label="Light theme"
              className="flex items-center justify-center rounded-full size-full text-xl hover:bg-black/5 transition-colors duration-300 ease-in-out"
              onClick={() => setTheme('dark')}
            >
              <RiSunLine />
            </button>
          ) : (
            <button
              aria-label="Dark theme"
              className="flex items-center justify-center rounded-full size-full text-xl hover:bg-white/10 transition-colors duration-300 ease-in-out"
              onClick={() => setTheme('light')}
            >
              <RiMoonLine />
            </button>
          )}
        </>
      ) : null}
    </div>
  );
};

export default ThemeToggle;
