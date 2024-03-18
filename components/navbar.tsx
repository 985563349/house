'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  cn,
  Button,
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

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => {
          const isActive =
            item.href === '/' ? pathname === item.href : pathname?.startsWith(item.href);

          return (
            <NavbarItem key={item.name}>
              <Link className={cn('animated-link text-lg', { active: isActive })} href={item.href}>
                {item.name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            href="https://github.com/985563349"
            target="_blank"
            as={Link}
            variant="light"
            isIconOnly
          >
            <RiGithubFill className="w-6 h-6 text-foreground" />
          </Button>
        </NavbarItem>

        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="overflow-y-hidden">
        {menuItems.map((item) => {
          const isActive =
            item.href === '/' ? pathname === item.href : pathname?.startsWith(item.href);

          return (
            <NavbarMenuItem key={item.name} onClick={() => setIsMenuOpen(false)}>
              <Link className={cn('animated-link text-lg', { active: isActive })} href={item.href}>
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
