'use client';

import { useTheme } from 'next-themes';
import { Switch } from '@nextui-org/switch';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Switch
      defaultSelected
      color="secondary"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    />
  );
};

export { ThemeToggle };
