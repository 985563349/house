'use client';

import { useTheme } from 'next-themes';
import { useTiks } from '@rexa-developer/tiks/react';
import { useWebHaptics } from 'web-haptics/react';
import { MoonIcon, SunIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Kbd } from '@/components/ui/kbd';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import ShortcutTrigger from '@/components/shortcut-trigger';

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
          <ShortcutTrigger shortcut="d">
            <Button variant="ghost" size="icon" onClick={handleClick}>
              <SunIcon className="dark:hidden size-4" />
              <MoonIcon className="hidden dark:inline-block size-4" />
            </Button>
          </ShortcutTrigger>
        }
      />
      <TooltipContent>
        切换主题
        <Kbd>D</Kbd>
      </TooltipContent>
    </Tooltip>
  );
};

export default ThemeToggle;
