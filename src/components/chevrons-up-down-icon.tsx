'use client';

import { motion } from 'motion/react';

export type ChevronsUpDownIconProps = React.ComponentPropsWithoutRef<'svg'> & {
  open?: boolean;
  duration?: number;
};

const ChevronsUpDownIcon: React.FC<ChevronsUpDownIconProps> = (props) => {
  const { open = false, duration = 0.3, ...otherProps } = props;

  const state = open ? 'animate' : 'normal';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...otherProps}
    >
      <motion.path
        d="M7 15L12 20L17 15"
        variants={{
          normal: {
            d: 'M7 15L12 20L17 15',
          },
          animate: {
            d: 'M7 20L12 15L17 20',
          },
        }}
        initial={false}
        animate={state}
        transition={{
          duration,
        }}
      />
      <motion.path
        d="M7 9L12 4L17 9"
        variants={{
          normal: {
            d: 'M7 9L12 4L17 9',
          },
          animate: {
            d: 'M7 4L12 9L17 4',
          },
        }}
        initial={false}
        animate={state}
        transition={{
          duration,
        }}
      />
    </svg>
  );
};

export default ChevronsUpDownIcon;
