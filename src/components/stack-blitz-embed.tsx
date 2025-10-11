export type StackBlitzEmbedProps = {
  url: string;
};

const StackBlitzEmbed: React.FC<StackBlitzEmbedProps> = (props) => {
  return (
    <iframe
      className="w-full h-140 border-none rounded-lg"
      src={props.url}
      title="StackBlitz Embed"
    />
  );
};

export default StackBlitzEmbed;
