import { cn } from '@/lib/utils';

export type BadgeProps = {
  className?: string;
  children?: React.ReactNode;
};

const Badge: React.FC<BadgeProps> = (props) => {
  const { className, children } = props;

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center border border-muted-foreground/15 rounded-lg ring-1 ring-offset-1 ring-border/80 ring-offset-background size-6 bg-muted',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
