'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  cn,
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      maxWidth="full"
      height="5.5rem"
      disableAnimation
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="outline-none"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="center">
        {menuItems.map((item) => {
          const isActive =
            item.href === '/' ? pathname === item.href : pathname?.startsWith(item.href);

          return (
            <NavbarItem key={item.name}>
              <Link
                className={cn('animated-link hover:opacity-100 active:opacity-100', {
                  active: isActive,
                })}
                href={item.href}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link className="block" href="https://github.com/985563349" isExternal>
            <RiGithubFill className="w-6 h-6 text-foreground" />
          </Link>
        </NavbarItem>

        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => {
          const isActive =
            item.href === '/' ? pathname === item.href : pathname?.startsWith(item.href);

          return (
            <NavbarMenuItem key={item.name}>
              <Link
                className={cn('animated-link hover:opacity-100 active:opacity-100', {
                  active: isActive,
                })}
                href={item.href}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export { CustomNavbar as Navbar };
