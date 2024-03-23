export type StackBlitzEmbedProps = {
  url: string;
};

const StackBlitzEmbed: React.FC<StackBlitzEmbedProps> = (props) => {
  return <iframe className="w-full h-[35rem] border-none rounded-lg" src={props.url} />;
};

export { StackBlitzEmbed };
