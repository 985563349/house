const Footer: React.FC = () => {
  return (
    <footer className="flex w-full h-auto items-center justify-center">
      <div className="flex items-center gap-2 px-6 w-full h-[5.5rem]">
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
          <a href="https://beian.miit.gov.cn" target="_blank" className="mr-1 underline hover:text-black">
            鄂ICP备2024041293号-1
          </a>
        </p>
      </div>
    </footer>
  );
};

export { Footer };
