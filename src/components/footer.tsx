const Footer: React.FC = () => {
  return (
    <footer>
      <div className="flex items-center justify-center mx-auto max-w-3xl text-sm h-32">
        <p className="space-x-1 text-sm">
          <a
            className="underline"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0"
            target="_blank"
            rel="noopener"
          >
            CC BY-NC-SA 4.0
          </a>
          <span>2023-PRESENT © Jason</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
