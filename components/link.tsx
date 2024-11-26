import NextLink from 'next/link';

import { cn } from '@/lib/utils';

export type LinkProps = React.ComponentProps<typeof NextLink> & {
  underline?: boolean;
};

const Link: React.FC<LinkProps> = ({ className, underline, children, ...props }) => {
  return (
    <NextLink
      {...props}
      className={cn(
        'inline-block decoration-black/15 dark:decoration-white/30 hover:decoration-black/25 hover:dark:decoration-white/50 text-current hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out',
        className,
        underline && 'underline underline-offset-2'
      )}
    >
      {children}
    </NextLink>
  );
};

export default Link;
