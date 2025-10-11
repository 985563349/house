'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  order?: number;
};

const FadeIn: React.FC<FadeInProps> = (props) => {
  const {
    className,
    children,
    duration = 0.68,
    delay = 0.08,
    order = 1,
  } = props;

  const [mounted, setMounted] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setMounted(true);
      setShouldAnimate(window.scrollY < window.innerHeight);
    });
  }, []);

  if (!shouldAnimate) {
    return (
      <div className={cn({ 'opacity-0': !mounted }, className)}>{children}</div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay: delay * order,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
