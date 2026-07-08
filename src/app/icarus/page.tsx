'use client';

import { useEffect, useState } from 'react';
import { type UIMessage } from 'ai';
import { useChat } from '@ai-sdk/react';
import { toast } from 'sonner';
import { useLocalStorage } from 'usehooks-ts';

import { Spinner } from '@/components/ui/spinner';
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { type PromptInputMessage } from '@/components/ai-elements/prompt-input';
import FadeIn from '@/components/fade-in';

import Intro from './components/intro';
import Questions from './components/questions';
import PromptComposer from './components/prompt-composer';
import PromptUsageTool from './components/prompt-usage-tool';
import PromptClearTool from './components/prompt-clear-tool';
import AssistantMessage from './components/assistant-message';
import HumanMessage from './components/human-message';
import MessageParts from './components/message-parts';

export default function Icarus() {
  const [hydrated, setHydrated] = useState(false);

  const [storageMessages, setStorageMessages, removeStorageMessages] =
    useLocalStorage<UIMessage[]>('icarus:messages', []);

  const { messages, setMessages, sendMessage, status, stop } = useChat({
    messages: storageMessages,
    onError: (error) => {
      try {
        const message = JSON.parse(error.message) as { error?: string };
        toast.error(message.error);
      } catch {
        toast.error(error.message);
      }
    },
  });

  useEffect(() => setHydrated(true), []);

  useEffect(() => {
    // sync messages when the chat is stable enough to persist, but skip streaming updates.
    if (status === 'ready' || status === 'submitted') {
      setStorageMessages(messages);
    }
  }, [messages, status, setStorageMessages]);

  const handlePromptClick = (content: string) => {
    sendMessage({ text: content });
  };

  const handleSubmit = (message: PromptInputMessage) => {
    sendMessage({ text: message.text });
  };

  const handleClear = () => {
    setMessages([]);
    removeStorageMessages();
  };

  const isSubmitted = status === 'submitted';
  const isEmpty = messages.length === 0;

  return (
    <div className="flex flex-col h-full">
      <FadeIn order={1}>
        <div className="space-y-4 py-2">
          <h3 className="text-3xl font-semibold tracking-tight text-balance">
            Icarus
          </h3>

          <p className="text-sm/none font-medium tracking-wider text-muted-foreground">
            她比任何人都了解 Jason……好奇吗？问问她就知道了
          </p>
        </div>
      </FadeIn>

      <div className="flex-1 relative">
        {hydrated && (
          <div className="absolute inset-0 flex flex-col">
            <FadeIn order={2} className="flex-1 min-h-0">
              <Conversation className="h-full py-4 overflow-hidden">
                <ConversationContent className="min-h-full p-0">
                  {isEmpty ? (
                    <div className="flex-1 flex flex-col items-center justify-center gap-4">
                      <Intro />
                      <Questions onClick={handlePromptClick} />
                    </div>
                  ) : (
                    messages.map((message) => {
                      const Comp =
                        message.role === 'assistant'
                          ? AssistantMessage
                          : HumanMessage;
                      return (
                        <Comp key={message.id}>
                          <MessageParts message={message} />
                        </Comp>
                      );
                    })
                  )}

                  {isSubmitted && (
                    <AssistantMessage>
                      <Spinner />
                    </AssistantMessage>
                  )}
                </ConversationContent>
                <ConversationScrollButton />
              </Conversation>
            </FadeIn>

            <FadeIn order={3}>
              <PromptComposer
                status={status}
                tools={[
                  <PromptUsageTool key="usage" status={status} />,
                  !isEmpty && (
                    <PromptClearTool
                      key="clear"
                      status={status}
                      onClear={handleClear}
                    />
                  ),
                ]}
                onSubmit={handleSubmit}
                onStop={stop}
              />
            </FadeIn>
          </div>
        )}
      </div>
    </div>
  );
}
