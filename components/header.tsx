'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import NavLink from '@/components/nav-link';
import ThemeToggle from '@/components/theme-toggle';

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="py-5">
      <div className="mx-auto max-w-screen-md px-5">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className="font-semibold">Jee</span>
          </Link>

          <div className="flex items-center gap-4">
            <nav className="space-x-4">
              <NavLink href="/posts" active={/^\/posts(?:\/.*)?$/.test(pathname)}>文章</NavLink>
              <NavLink href="/about" active={/^\/about(?:\/.*)?$/.test(pathname)}>关于我</NavLink>
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
