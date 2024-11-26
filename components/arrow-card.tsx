export type ArrowCardProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
};

const ArrowCard: React.FC<ArrowCardProps> = ({ title, description }) => {
  return (
    <div className="relative group flex flex-nowrap py-3 px-4 pr-10 rounded-lg border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out">
      <div className="flex flex-col flex-1 truncate">
        <p className="font-semibold">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="absolute top-1/2 right-2 -translate-y-1/2 size-5 stroke-2 fill-none stroke-current"
      >
        <line
          x1="5"
          y1="12"
          x2="19"
          y2="12"
          className="translate-x-3 group-hover:translate-x-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
        />
        <polyline
          points="12 5 19 12 12 19"
          className="-translate-x-1 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
        />
      </svg>
    </div>
  );
};

export default ArrowCard;
