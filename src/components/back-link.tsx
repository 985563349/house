'use client';

import { usePathname } from 'next/navigation';
import { ChevronRightIcon } from 'lucide-react';

import Navigate from '@/components/navigate';

const BackLink: React.FC = () => {
  const pathname = usePathname();

  return (
    <Navigate
      href={pathname?.split('/').slice(0, -1).join('/') || '/'}
      className="-ml-1 gap-1 tracking-widest"
    >
      <ChevronRightIcon className="size-4" />
      <span>cd ..</span>
    </Navigate>
  );
};

export default BackLink;
