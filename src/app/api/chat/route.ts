import { NextRequest } from 'next/server';
import {
  streamText,
  type TextStreamPart,
  type ToolSet,
  type UIMessage,
  convertToModelMessages,
  createUIMessageStreamResponse,
  isStepCount,
  toUIMessageStream,
  tool,
} from 'ai';
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { z } from 'zod';

import { withRateLimit } from '@/lib/rate-limit';
import { getSystemPrompt } from '@/lib/prompt';

function withoutToolParts<T extends ToolSet>(
  stream: ReadableStream<TextStreamPart<T>>,
) {
  return stream.pipeThrough(
    new TransformStream<TextStreamPart<T>, TextStreamPart<T>>({
      transform(part, controller) {
        if (!part.type.startsWith('tool-')) {
          controller.enqueue(part);
        }
      },
    }),
  );
}

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
    stopWhen: isStepCount(3),
    tools: {
      now: tool({
        description: 'Get the current time.',
        inputSchema: z.object(),
        execute: () => ({
          time: new Date().toISOString(),
        }),
      }),
    },
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
    stream: toUIMessageStream({
      stream: withoutToolParts(result.stream),
      sendReasoning: false,
    }),
  });
});
