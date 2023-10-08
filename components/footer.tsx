const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center">
      <div className="flex items-center px-6 w-full h-20 max-w-[1024px]">
        <p className="text-sm opacity-50">
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            className="mr-1 underline"
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
