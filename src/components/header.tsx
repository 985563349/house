import Link from 'next/link';

import GithubStars from '@/components/github-stars';
import SiteNav from '@/components/site-nav';
import ThemeToggle from '@/components/theme-toggle';
import { Separator } from '@/components/ui/separator';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-20">
      <div className="border-b border-dashed border-border/80 bg-background/65 backdrop-blur overflow-hidden">
        <div className="flex items-center justify-between mx-auto px-4 sm:px-6 max-w-3xl h-12">
          <Link href="/">
            <span className="font-semibold">Jason</span>
          </Link>

          <div className="flex items-center gap-2">
            <SiteNav />
            <div className="flex items-center">
              <GithubStars />
              <Separator
                className="mx-2 data-vertical:h-4 data-vertical:self-center"
                orientation="vertical"
              />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
