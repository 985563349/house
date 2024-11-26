import ThemeToggle from '@/components/theme-toggle';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="mx-auto max-w-screen-md px-5">
        <div className="flex justify-between items-center">
          <p className="space-x-1">
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0" target="_blank" className="underline">
              CC BY-NC-SA 4.0
            </a>
            <span>2023-PRESENT © Jee</span>
          </p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
