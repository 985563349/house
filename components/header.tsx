import Link from 'next/link';

import ThemeToggle from '@/components/theme-toggle';

const Header: React.FC = () => {
  return (
    <header className="py-5">
      <div className="mx-auto max-w-screen-md px-5">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className="font-semibold">Jee</span>
          </Link>

          <div className="flex items-center gap-4">
            <nav className="space-x-4">
              <Link href="/posts" className="link">
                文章
              </Link>
              <Link href="/about" className="link">
                关于我
              </Link>
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
