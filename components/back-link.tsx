'use client';

import { usePathname } from 'next/navigation';
import { RiArrowRightSLine } from 'react-icons/ri';

import NavLink from '@/components/nav-link';

const BackLink: React.FC = () => {
  const pathname = usePathname();

  return (
    <NavLink
      href={pathname.split('/').slice(0, -1).join('/') || '/'}
      className="-ml-1 gap-1 tracking-widest"
    >
      <RiArrowRightSLine className="size-5" />
      <span>cd ..</span>
    </NavLink>
  );
};

export default BackLink;
