'use client';

import { useState } from 'react';
import Image from 'next/image';
import { LayoutGridIcon, ListIcon } from 'lucide-react';

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/marquee';
import { Button } from '@/components/ui/button';

const groups = [
  {
    name: 'Frontend',
    direction: 'left',
    items: [
      {
        name: 'TypeScript',
        icons: {
          light: 'https://thesvg.org/icons/typescript/default.svg',
          dark: 'https://thesvg.org/icons/typescript/default.svg',
        },
        label: 'TypeScript',
      },
      {
        name: 'React',
        icons: {
          light: 'https://thesvg.org/icons/react/default.svg',
          dark: 'https://thesvg.org/icons/react/default.svg',
        },
        label: 'React',
      },
      {
        name: 'Next.js',
        icons: {
          light: 'https://thesvg.org/icons/nextdotjs/default.svg',
          dark: 'https://thesvg.org/icons/nextdotjs/default.svg',
        },
        label: 'Next.JS',
      },
      {
        name: 'Redux',
        icons: {
          light: 'https://thesvg.org/icons/redux/default.svg',
          dark: 'https://thesvg.org/icons/redux/default.svg',
        },
        label: 'Redux',
      },
      {
        name: 'Vue',
        icons: {
          light: 'https://thesvg.org/icons/vue/default.svg',
          dark: 'https://thesvg.org/icons/vue/default.svg',
        },
        label: 'Vue',
      },
      {
        name: 'Nuxt.js',
        icons: {
          light: 'https://thesvg.org/icons/nuxt/default.svg',
          dark: 'https://thesvg.org/icons/nuxt/default.svg',
        },
        label: 'Nuxt.JS',
      },
      {
        name: 'Pinia',
        icons: {
          light: 'https://thesvg.org/icons/pinia/default.svg',
          dark: 'https://thesvg.org/icons/pinia/default.svg',
        },
        label: 'Pinia',
      },
      {
        name: 'Vite',
        icons: {
          light: 'https://thesvg.org/icons/vite/default.svg',
          dark: 'https://thesvg.org/icons/vite/default.svg',
        },
        label: 'Vite',
      },
      {
        name: 'Tailwind CSS',
        icons: {
          light: 'https://thesvg.org/icons/tailwind-css/default.svg',
          dark: 'https://thesvg.org/icons/tailwind-css/default.svg',
        },
        label: 'TailwindCSS',
      },
      {
        name: 'shadcn/ui',
        icons: {
          light: 'https://thesvg.org/icons/shadcn-ui/light.svg',
          dark: 'https://thesvg.org/icons/shadcn-ui/dark.svg',
        },
        label: 'shadcn/ui',
      },
      {
        name: 'TanStack',
        icons: {
          light: 'https://thesvg.org/icons/tanstack/default.svg',
          dark: 'https://thesvg.org/icons/tanstack/default.svg',
        },
        label: 'TanStack',
      },
      {
        name: 'Motion',
        icons: {
          light: 'https://thesvg.org/icons/motion/light.svg',
          dark: 'https://thesvg.org/icons/motion/dark.svg',
        },
        label: 'Motion',
      },
      {
        name: 'Three.js',
        icons: {
          light: 'https://thesvg.org/icons/threedotjs/light.svg',
          dark: 'https://thesvg.org/icons/threedotjs/dark.svg',
        },
        label: 'Three.JS',
      },
    ],
  },
  {
    name: 'Backend',
    direction: 'right',
    items: [
      {
        name: 'Nest.js',
        icons: {
          light: 'https://thesvg.org/icons/nestjs/default.svg',
          dark: 'https://thesvg.org/icons/nestjs/default.svg',
        },
        label: 'Nest.JS',
      },
      {
        name: 'Drizzle',
        icons: {
          light: 'https://thesvg.org/icons/drizzle/default.svg',
          dark: 'https://thesvg.org/icons/drizzle/default.svg',
        },
        label: 'Drizzle',
      },
      {
        name: 'Python',
        icons: {
          light: 'https://thesvg.org/icons/python/default.svg',
          dark: 'https://thesvg.org/icons/python/default.svg',
        },
        label: 'Python',
      },
      {
        name: 'FastAPI',
        icons: {
          light: 'https://thesvg.org/icons/fastapi/default.svg',
          dark: 'https://thesvg.org/icons/fastapi/default.svg',
        },
        label: 'FastAPI',
      },
      {
        name: 'LangChain',
        icons: {
          light: 'https://thesvg.org/icons/langchain-corporate/default.svg',
          dark: 'https://thesvg.org/icons/langchain-corporate/default.svg',
        },
        label: 'LangChain',
      },
      {
        name: 'PostgreSQL',
        icons: {
          light: 'https://thesvg.org/icons/postgresql/default.svg',
          dark: 'https://thesvg.org/icons/postgresql/default.svg',
        },
        label: 'PostgreSQL',
      },
      {
        name: 'Redis',
        icons: {
          light: 'https://thesvg.org/icons/redis/default.svg',
          dark: 'https://thesvg.org/icons/redis/default.svg',
        },
        label: 'Redis',
      },
      {
        name: 'Nginx',
        icons: {
          light: 'https://thesvg.org/icons/nginx/default.svg',
          dark: 'https://thesvg.org/icons/nginx/default.svg',
        },
        label: 'Nginx',
      },
    ],
  },
  {
    name: 'Tools',
    direction: 'right',
    items: [
      {
        name: 'Vim',
        icons: {
          light: 'https://thesvg.org/icons/vim/default.svg',
          dark: 'https://thesvg.org/icons/vim/default.svg',
        },
        label: 'Vim',
      },
      {
        name: 'Git',
        icons: {
          light: 'https://thesvg.org/icons/git/default.svg',
          dark: 'https://thesvg.org/icons/git/default.svg',
        },
        label: 'Git',
      },
      {
        name: 'Docker',
        icons: {
          light: 'https://thesvg.org/icons/docker/default.svg',
          dark: 'https://thesvg.org/icons/docker/default.svg',
        },
        label: 'Docker',
      },
      {
        name: 'Cursor',
        icons: {
          light: 'https://thesvg.org/icons/cursor/light.svg',
          dark: 'https://thesvg.org/icons/cursor/dark.svg',
        },
        label: 'Cursor',
      },
      {
        name: 'Claude',
        icons: {
          light: 'https://thesvg.org/icons/claude/default.svg',
          dark: 'https://thesvg.org/icons/claude/default.svg',
        },
        label: 'Claude',
      },
      {
        name: 'ChatGPT',
        icons: {
          light: 'https://thesvg.org/icons/openai/light.svg',
          dark: 'https://thesvg.org/icons/openai/dark.svg',
        },
        label: 'ChatGPT',
      },
    ],
  },
] as const;

const StackWidget: React.FC<{
  label: string;
  icons: Record<'light' | 'dark', string>;
}> = (props) => {
  const { label, icons } = props;

  return (
    <div className="flex items-center gap-1 rounded-md px-1.5 h-6.5 text-xs font-geist-mono text-foreground inset-ring-1 inset-ring-border bg-zinc-50/80 dark:bg-zinc-900/80">
      <Image
        src={icons.light}
        alt={label}
        width={16}
        height={16}
        className="dark:hidden"
      />
      <Image
        src={icons.dark}
        alt={label}
        width={16}
        height={16}
        className="hidden dark:block"
      />
      <span>{label}</span>
    </div>
  );
};

const Stack: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-3xl font-semibold tracking-tight">技能</span>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <ListIcon className="size-4 text-muted-foreground" />
          ) : (
            <LayoutGridIcon className="size-4 text-muted-foreground" />
          )}
        </Button>
      </div>

      {expanded ? (
        <div className="flex flex-col gap-6">
          {groups.map((group) => (
            <div key={group.name} className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <StackWidget
                  key={item.name}
                  label={item.label}
                  icons={item.icons}
                />
              ))}
            </div>
          ))}
        </div>
      ) : (
        groups.map((group) => (
          <Marquee key={group.name} className="min-h-6.5">
            <MarqueeFade side="left" />
            <MarqueeFade side="right" />
            <MarqueeContent direction={group.direction}>
              {group.items.map((item) => (
                <MarqueeItem key={item.name}>
                  <StackWidget label={item.label} icons={item.icons} />
                </MarqueeItem>
              ))}
            </MarqueeContent>
          </Marquee>
        ))
      )}
    </div>
  );
};

export default Stack;
