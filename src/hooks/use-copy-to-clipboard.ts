import { useState, useRef } from 'react';

export type CopyState = 'idle' | 'done' | 'error';

export type useCopyToClipboardOptions = {
  delay?: number;
};

export const useCopyToClipboard = (options?: useCopyToClipboardOptions) => {
  const { delay = 1500 } = options ?? {};

  const [status, setStatus] = useState<CopyState>('idle');
  const timer = useRef<NodeJS.Timeout>(null);

  const copy = async (text: string) => {
    return navigator.clipboard
      .writeText(text)
      .then(() => setStatus('done'))
      .catch(() => setStatus('error'))
      .finally(() => {
        timer.current = setTimeout(() => {
          setStatus('idle');
        }, delay);
      });
  };

  return { status, copy };
};
