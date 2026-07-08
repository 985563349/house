import { NextRequest } from 'next/server';
import {
  streamText,
  type UIMessage,
  convertToModelMessages,
  createUIMessageStreamResponse,
  toUIMessageStream,
} from 'ai';
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';

import { withRateLimit } from '@/lib/rate-limit';
import { getSystemPrompt } from '@/lib/prompt';

export const POST = withRateLimit(async (request: NextRequest) => {
  const provider = createOpenAICompatible({
    name: 'provider',
    apiKey: process.env.NEXT_OPENAI_API_KEY,
    baseURL: process.env.NEXT_OPENAI_BASE_URL!,
  });

  const { messages }: { messages: UIMessage[] } = await request.json();

  const result = streamText({
    model: provider(process.env.NEXT_OPENAI_MODEL_ID!),
    instructions: await getSystemPrompt(),
    messages: await convertToModelMessages(messages),
    abortSignal: request.signal,
    onAbort: ({ steps }) => {
      console.log('Stream aborted after', steps.length, 'steps');
    },
    providerOptions: {
      [provider.name]: {
        enable_thinking: false,
      },
    },
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream, sendReasoning: false }),
  });
});
