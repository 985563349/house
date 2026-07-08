'use client';

import { useState } from 'react';
import { type ChatStatus } from 'ai';

import {
  PromptInput,
  type PromptInputMessage,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from '@/components/ai-elements/prompt-input';

export type PromptComposerProps = {
  status?: ChatStatus;
  tools?: React.ReactNode[];
  onSubmit?: (message: PromptInputMessage) => void | Promise<void>;
  onStop?: () => void;
};

const PromptComposer: React.FC<PromptComposerProps> = (props) => {
  const { status, tools, onSubmit, onStop } = props;

  const [input, setInput] = useState('');

  const handleSubmit = async (message: PromptInputMessage) => {
    if (!message.text.trim()) {
      return;
    }
    await onSubmit?.(message);
    setInput('');
  };

  const isStreaming = status === 'streaming';
  const isSubmitted = status === 'submitted';

  return (
    <PromptInput onSubmit={handleSubmit}>
      <PromptInputTextarea
        value={input}
        placeholder="说点什么..."
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <PromptInputFooter>
        <PromptInputTools>{tools}</PromptInputTools>
        <PromptInputSubmit
          status={status}
          onStop={onStop}
          disabled={isSubmitted || (!input && !isStreaming)}
        />
      </PromptInputFooter>
    </PromptInput>
  );
};

export default PromptComposer;
