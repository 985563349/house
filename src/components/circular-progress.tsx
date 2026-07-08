import { cn } from '@/lib/utils';

export interface CircularProgressProps {
  value: number;
  renderLabel?: (progress: number) => number | string;
  size?: number;
  strokeWidth?: number;
  className?: string;
  progressClassName?: string;
  labelClassName?: string;
  showLabel?: boolean;
}

const CircularProgress = ({
  value,
  renderLabel,
  className,
  progressClassName,
  labelClassName,
  showLabel,
  size = 20,
  strokeWidth = 2,
}: CircularProgressProps) => {
  const radius = size / 2 - strokeWidth;
  const circumference = Math.ceil(Math.PI * radius * 2);
  const percentage = Math.ceil(circumference * ((100 - value) / 100));

  return (
    <div className="flex items-center gap-1">
      <svg
        className="shrink-0"
        style={{ color: 'currentcolor' }}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className={className}
          cx={size / 2}
          cy={size / 2}
          fill="none"
          opacity="0.25"
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
        />
        <circle
          className={progressClassName}
          cx={size / 2}
          cy={size / 2}
          fill="none"
          opacity="0.7"
          r={radius}
          stroke="currentColor"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={percentage}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
        />
      </svg>
      {showLabel && (
        <span className={cn('text-xs', labelClassName)}>
          {renderLabel ? renderLabel(value) : value}
        </span>
      )}
    </div>
  );
};

export default CircularProgress;
