'use client';

import { useEffect } from 'react';
import { motion, useAnimate } from 'motion/react';

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

  const [scope, animate] = useAnimate<HTMLDivElement>();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (window.scrollY >= window.innerHeight) {
        animate(scope.current, { opacity: 1 }, { duration: 0 });
        return;
      }

      animate(
        scope.current,
        { opacity: [0, 1], y: [16, 0] },
        {
          duration,
          delay: delay * order,
          ease: 'easeOut',
        },
      );
    });

    return () => cancelAnimationFrame(frame);
  }, [animate, delay, duration, order, scope]);

  return (
    <motion.div ref={scope} className={className} style={{ opacity: 0 }}>
      {children}
    </motion.div>
  );
};

export default FadeIn;
