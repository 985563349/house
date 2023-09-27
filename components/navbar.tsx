'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@nextui-org/react';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
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
      height="5.5rem"
      shouldHideOnScroll
      disableAnimation
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex">
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

      <NavbarContent className="gap-2" justify="end">
        <NavbarItem>
          <Link href="https://github.com/985563349" target="_blank" className="block">
            <Button variant="light" isIconOnly>
              <RiGithubFill className="w-6 h-6 text-foreground" />
            </Button>
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
                href={item.href}
                className={cn('animated-link', 'text-lg', { active: isActive })}
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
