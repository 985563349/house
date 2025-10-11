const GradualBlur: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-10">
      <div className="h-24 bg-linear-to-b from-transparent to-background mask-linear-[to_top,black_25%,transparent] backdrop-blur-[1px]" />
      <div className="bg-background pb-[env(safe-area-inset-bottom,0)]" />
    </div>
  );
};

export default GradualBlur;
