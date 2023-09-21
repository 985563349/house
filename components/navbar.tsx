'use client';

import { usePathname } from 'next/navigation';
import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import { RiGithubFill } from 'react-icons/ri';

import { ThemeToggle } from './theme-toggle';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/posts' },
  { name: 'Projects', href: '/projects' },
];

const CustomNavbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <Navbar shouldHideOnScroll>
      <NavbarContent>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <NavbarItem key={link.name}>
              <Link href={link.href} underline={isActive ? 'always' : 'hover'} color="foreground">
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
