import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>;

const badgeVariants = cva('inline-flex items-center rounded-md px-2 py-1 text-xs font-medium', {
  variants: {
    variant: {
      default: 'text-gray-700 dark:text-gray-400 bg-gray-50 dark:bg-gray-400/10',
      primary: 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-400/30',
      secondary: 'text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-400/30',
      success: 'text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-400/30',
      warning: 'text-yellow-700 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-400/30',
      danger: 'text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-400/30',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const Badge: React.FC<BadgeProps> = ({ className, variant, ...props }: BadgeProps) => {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
};

export default Badge;
