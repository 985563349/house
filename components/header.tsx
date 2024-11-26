import Link from '@/components/link';

const Header: React.FC = () => {
  return (
    <header>
      <div className="mx-auto max-w-screen-md px-5">
        <div className="flex flex-wrap gap-y-2 justify-between">
          <Link href="/">
            <span className="font-semibold">Jee</span>
          </Link>
          <nav className="flex gap-1">
            <Link href="/posts" underline>
              文章
            </Link>
            <span>/</span>
            <Link href="/about" underline>
              关于我
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
