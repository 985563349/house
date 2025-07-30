export type CodeSandboxEmbedProps = {
  url: string;
};

const CodeSandboxEmbed: React.FC<CodeSandboxEmbedProps> = (props) => {
  return (
    <iframe
      className="w-full h-[35rem] border-none rounded-lg"
      src={props.url}
      title="CodeSandbox Embed"
    />
  );
};

export default CodeSandboxEmbed;
