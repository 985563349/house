'use client';

import { useState } from 'react';
import { ArrowUpIcon } from 'lucide-react';
import { useMotionValueEvent, useScroll } from 'motion/react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ScrollToTop = () => {
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  useMotionValueEvent(scrollY, 'change', (value) => {
    setVisible(value >= 400);

    const prev = scrollY.getPrevious() ?? 0;
    const diff = value - prev;

    setScrollDirection(diff > 0 ? 'down' : 'up');
  });

  return (
    <Button
      data-visible={visible}
      data-scroll-direction={scrollDirection}
      className={cn(
        '[--bottom:0.5rem] sm:[--bottom:1rem] lg:[--bottom:2rem]',
        'fixed right-4 bottom-[calc(var(--bottom,0.5rem)+env(safe-area-inset-bottom,0))] z-20 lg:right-8',
        'transition-all duration-300 data-[scroll-direction=down]:opacity-30 data-[scroll-direction=up]:opacity-100 data-[visible=false]:opacity-0',
        'data-[scroll-direction=down]:hover:opacity-100',
        'fixed bottom-20 right-4',
      )}
      variant="secondary"
      size="icon"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <ArrowUpIcon />
    </Button>
  );
};

export default ScrollToTop;
