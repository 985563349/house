'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@nextui-org/react';
import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import Link from 'next/link';
import { RiGithubFill } from 'react-icons/ri';

import { ThemeToggle } from './theme-toggle';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/posts' },
  { name: 'Notes', href: '/notes' },
  { name: 'Projects', href: '/projects' },
];

const CustomNavbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <Navbar height="5.5rem" shouldHideOnScroll>
      <NavbarContent>
        {menuItems.map((item) => {
          const isActive =
            item.href === '/' ? pathname === item.href : pathname?.startsWith(item.href);

          return (
            <NavbarItem key={item.name}>
              <Link
                href={item.href}
                className={cn('animated-link', 'text-lg', { active: isActive })}
              >
                {item.name}
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
