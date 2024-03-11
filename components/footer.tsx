const Footer: React.FC = () => {
  return (
    <footer className="flex w-full h-auto items-center justify-center">
      <div className="flex items-center px-6 w-full h-[5.5rem]">
        <p className="text-sm opacity-50">
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            className="mr-1 underline hover:text-black"
          >
            CC BY-NC-SA 4.0
          </a>
          2023-PRESENT © Jee
        </p>
      </div>
    </footer>
  );
};

export { Footer };
