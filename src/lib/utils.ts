import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function readingTime(content: string) {
  return (content.length / 700 + 1).toFixed();
}

export function range(segment: string) {
  return segment.split(',').flatMap((item) => {
    const [start, end] = item.split('-').map(Number);

    if (!isNaN(start)) {
      if (!isNaN(end) && end >= start) {
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
      }
      return [start];
    }

    return [];
  });
}
