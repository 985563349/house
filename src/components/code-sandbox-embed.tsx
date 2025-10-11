export type CodeSandboxEmbedProps = {
  url: string;
};

const CodeSandboxEmbed: React.FC<CodeSandboxEmbedProps> = (props) => {
  return (
    <iframe
      className="w-full h-140 border-none rounded-lg"
      src={props.url}
      title="CodeSandbox Embed"
    />
  );
};

export default CodeSandboxEmbed;
