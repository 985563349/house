import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';

export type PostCardProps = {
  title: string;
  href: string;
  description: string;
  date: string;
  categories: string[];
};

const PostCard: React.FC<PostCardProps> = (props) => {
  const { title, href, description, date, categories } = props;

  return (
    <div className="flex flex-col gap-3 border border-dashed border-border/80 rounded-xl p-4">
      <p>
        <span className="text-sm text-muted-foreground">{date}</span>
      </p>

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
