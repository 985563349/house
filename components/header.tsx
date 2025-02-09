'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import NavLink from '@/components/nav-link';
import ThemeToggle from '@/components/theme-toggle';

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      <header>
        <div className="flex items-center justify-between mx-auto p-5 max-w-screen-lg">
          <Link href="/">
            <span className="font-semibold">Jee</span>
          </Link>

          <div className="flex items-center gap-4">
            <nav className="space-x-6">
              <NavLink href="/" active={/^\/$/.test(pathname)}>
                首页
              </NavLink>
              <NavLink
                href="/about"
                active={/^\/about(?:\/.*)?$/.test(pathname)}
              >
                关于
              </NavLink>
              <NavLink
                href="/posts"
                active={/^\/posts(?:\/.*)?$/.test(pathname)}
              >
                文章
              </NavLink>
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </header>

      <Image
        className="absolute top-0 -translate-y-3/4 -z-10 mx-auto max-w-screen-lg dark:hidden"
        src="/bg.png"
        alt="bg"
        fill
      />
    </>
  );
};

export default Header;
