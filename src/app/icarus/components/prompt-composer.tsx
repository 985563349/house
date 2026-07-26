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

const MAX_INPUT_LENGTH = 500;

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
        maxLength={MAX_INPUT_LENGTH}
        placeholder="说点什么..."
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <PromptInputFooter>
        <PromptInputTools>{tools}</PromptInputTools>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-xs tabular-nums text-muted-foreground">
            {input.length}/{MAX_INPUT_LENGTH}
          </span>
          <PromptInputSubmit
            status={status}
            onStop={onStop}
            disabled={isSubmitted || (!input && !isStreaming)}
          />
        </div>
      </PromptInputFooter>
    </PromptInput>
  );
};

export default PromptComposer;
