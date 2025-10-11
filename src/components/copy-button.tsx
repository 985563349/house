'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useTiks } from '@rexa-developer/tiks/react';
import { useWebHaptics } from 'web-haptics/react';
import { CopyIcon, CheckIcon, XIcon } from 'lucide-react';

import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';

import { Button } from '@/components/ui/button';

export type CopyButtonProps = {
  className?: string;
  text?: string;
};

const CopyButton: React.FC<CopyButtonProps> = (props) => {
  const { className, text = '' } = props;

  const tiks = useTiks();
  const haptics = useWebHaptics();
  const { status, copy } = useCopyToClipboard();

  const handleClick = async () => {
    try {
      await copy(text);
      tiks.success();
      haptics.trigger('success');
    } catch {
      tiks.error();
      haptics.trigger('error');
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className={className}
      onClick={handleClick}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={status}
          initial={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
          transition={{
            type: 'spring',
            duration: 0.3,
            bounce: 0,
          }}
        >
          {status === 'idle' && <CopyIcon />}
          {status === 'done' && <CheckIcon />}
          {status === 'error' && <XIcon />}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
};

export default CopyButton;
