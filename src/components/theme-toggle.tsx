'use client';

import { useTheme } from 'next-themes';
import { useTiks } from '@rexa-developer/tiks/react';
import { useWebHaptics } from 'web-haptics/react';
import { MoonIcon, SunIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const tiks = useTiks();
  const haptics = useWebHaptics();

  const handleClick = () => {
    tiks.toggle(true);
    haptics.trigger('success');
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button variant="ghost" size="icon" onClick={handleClick}>
            <SunIcon className="dark:hidden size-4" />
            <MoonIcon className="hidden dark:inline-block size-4" />
          </Button>
        }
      />
      <TooltipContent>切换主题</TooltipContent>
    </Tooltip>
  );
};

export default ThemeToggle;
