const emblem = `
  ██╗ ██████╗ █████╗ ██████╗ ██╗   ██╗███████╗
  ██║██╔════╝██╔══██╗██╔══██╗██║   ██║██╔════╝
  ██║██║     ███████║██████╔╝██║   ██║███████╗
  ██║██║     ██╔══██║██╔══██╗██║   ██║╚════██║
  ██║╚██████╗██║  ██║██║  ██║╚██████╔╝███████║
  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝
`;

const Intro: React.FC = () => {
  return (
    <div className="space-y-4">
      <pre className="select-none text-[8px] leading-none text-muted-foreground sm:text-xs">
        {emblem}
      </pre>

      <p className="mb-4 text-center text-sm text-muted-foreground">
        我不咬人，除非你问一些无聊的问题
      </p>
    </div>
  );
};

export default Intro;
