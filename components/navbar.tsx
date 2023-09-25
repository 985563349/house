'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@nextui-org/react';
import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import Link from 'next/link';
import { RiGithubFill } from 'react-icons/ri';

import { ThemeToggle } from './theme-toggle';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/posts' },
  { name: 'Projects', href: '/projects' },
];

const CustomNavbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <Navbar height="5.5rem" shouldHideOnScroll>
      <NavbarContent>
        {links.map((link) => {
          const isActive =
            link.href === '/' ? pathname === link.href : pathname?.startsWith(link.href);

          return (
            <NavbarItem key={link.name}>
              <Link
                href={link.href}
                className={cn('animated-link', 'text-lg', { active: isActive })}
              >
                {link.name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="#" className="block">
            <RiGithubFill className="w-6 h-6 text-foreground" />
          </Link>
        </NavbarItem>

        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export { CustomNavbar as Navbar };
