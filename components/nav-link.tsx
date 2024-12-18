import Link from 'next/link';

import { cn } from '@/lib/utils'; 

export interface NavLinkProps {
  href: string;
  active?: boolean;
  children?: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, active }) => {
  return (
    <Link
      href={href}
      className={cn(
        'text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-100 transition-colors',
        active && 'text-gray-950 dark:text-gray-100'
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
