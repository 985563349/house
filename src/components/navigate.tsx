import Link from 'next/link';

import { cn } from '@/lib/utils';

export type NavigateProps = {
  className?: string;
  href: string;
  active?: boolean;
  children?: React.ReactNode;
};

const Navigate: React.FC<NavigateProps> = ({
  className,
  href,
  children,
  active,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center font-medium text-muted-foreground transition-colors hover:text-foreground',
        active && 'text-foreground',
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default Navigate;
