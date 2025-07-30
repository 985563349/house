'use client';

import { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

import { cn } from '@/lib/utils';

export type CopyButtonProps = {
  className?: string;
  style?: React.CSSProperties;
  text?: string | (() => string);
};

const CopyButton: React.FC<CopyButtonProps> = (props) => {
  const { className, style, text } = props;

  const [copied, setCopied] = useState(false);

  return (
    <button
      className={cn(
        'rounded-sm p-1 text-base hover:bg-black/5 dark:hover:bg-white/5 transition-[background-color] duration-300 ease-in-out cursor-pointer',
        className
      )}
      style={style}
      type="button"
      onClick={() => {
        if (!copied) {
          setCopied(true);
          navigator.clipboard.writeText(typeof text === 'function' ? text() : text ?? '');
          setTimeout(() => setCopied(false), 2000);
        }
      }}
    >
      {copied ? <FiCheck className="text-green-500" /> : <FiCopy />}
    </button>
  );
};

export default CopyButton;
