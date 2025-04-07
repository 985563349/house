export type VideoProps = {
  type: string;
  src: string;
};

const Video: React.FC<VideoProps> = (props) => {
  return (
    <video className="w-full border-none rounded-lg" preload="metadata" autoPlay loop muted playsInline>
      <source src={props.src} type={props.type} />
    </video>
  );
};

export default Video;
