'use client';

import { usePathname } from 'next/navigation';

import Navigate from '@/components/navigate';

const SiteNav: React.FC = () => {
  const pathname = usePathname() ?? '';

  return (
    <nav className="space-x-4 text-sm">
      <Navigate href="/posts" active={/^\/posts(?:\/.*)?$/.test(pathname)}>
        文章
      </Navigate>
    </nav>
  );
};

export default SiteNav;
