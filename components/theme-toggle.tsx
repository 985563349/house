'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@nextui-org/switch';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Switch
      defaultSelected={theme === 'dark'}
      size="sm"
      color="default"
      classNames={{
        wrapper: 'w-12 bg-black group-data-[selected=true]:bg-white',
        thumb:
          'bg-yellow-500 group-data-[selected=true]:ml-6 group-data-[selected=true]:bg-blue-500',
      }}
      startContent={
        <i>
          <SunIcon className="w-4 h-4 text-black" />
        </i>
      }
      endContent={
        <i>
          <MoonIcon className="w-4 h-4 text-white" />
        </i>
      }
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    />
  );
};

export { ThemeToggle };
