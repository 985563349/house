import Link from 'next/link';
import { AlarmClockIcon, ArrowUpRightIcon } from 'lucide-react';

export type PostCardProps = {
  title: string;
  href: string;
  description: string;
  date: string;
  minutes: number;
  categories: string[];
};

const PostCard: React.FC<PostCardProps> = (props) => {
  const { title, href, description, date, minutes, categories } = props;

  return (
    <div className="flex flex-col gap-3 border border-dashed border-border/80 rounded-xl p-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{date}</span>

        <div className="flex items-center gap-1.5 text-muted-foreground">
          <AlarmClockIcon className="size-3.5" />
          <span>{minutes} 分钟</span>
        </div>
      </div>

      <Link href={href} className="group flex items-center justify-between">
        <span className="text-lg font-medium text-balance leading-snug group-hover:underline">
          {title}
        </span>
        <ArrowUpRightIcon className="size-5 text-muted-foreground transition-colors ease-out group-hover:text-foreground" />
      </Link>

      <p className="text-sm text-muted-foreground">{description}</p>

      <div className="flex flex-wrap gap-1.5">
        {categories.map((category) => (
          <span
            key={category}
            className="inline-flex items-center border border-dashed rounded-md px-1.5 py-0.5 font-geist-mono text-xs text-muted-foreground"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
