const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-center w-full h-auto">
      <div className="flex items-center px-6 w-full h-[5.5rem]">
        <div className="flex items-center flex-wrap gap-2">
          <p className="text-sm opacity-50">
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0"
              target="_blank"
              className="mr-1 underline hover:text-black"
            >
              CC BY-NC-SA 4.0
            </a>
            2023-PRESENT © Jee
          </p>

          <p className="text-sm opacity-50">
            <a
              href="https://beian.miit.gov.cn"
              target="_blank"
              className="mr-1 underline hover:text-black"
            >
              鄂ICP备2024041293号-1
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
