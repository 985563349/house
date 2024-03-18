'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@nextui-org/switch';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      isSelected={theme === 'dark'}
      size="sm"
      color="default"
      classNames={{
        wrapper: 'w-12 bg-black group-data-[selected=true]:bg-white',
        thumb:
          'bg-yellow-400 group-data-[selected=true]:ml-6 group-data-[selected=true]:bg-blue-500',
      }}
      startContent={
        <i>
          <RiSunFill className="w-4 h-4 text-black" />
        </i>
      }
      endContent={
        <i>
          <RiMoonFill className="w-4 h-4 text-white" />
        </i>
      }
      onValueChange={(isSelected) => setTheme(isSelected ? 'dark' : 'light')}
    />
  );
};

export { ThemeToggle };
