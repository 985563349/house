import { Link } from 'next-view-transitions';

import { cn } from '@/lib/utils';

export interface NavLinkProps {
  className?: string;
  href: string;
  active?: boolean;
  children?: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({
  className,
  href,
  children,
  active,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-100 transition-colors',
        active && 'text-gray-950 dark:text-gray-100',
        className
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
