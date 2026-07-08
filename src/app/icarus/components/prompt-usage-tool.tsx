'use client';

import { useEffect } from 'react';
import { type ChatStatus } from 'ai';
import { useQuery } from '@tanstack/react-query';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import CircularProgress from '@/components/circular-progress';

type ChatLimitState = {
  limit: number;
  remaining: number;
  reset: number;
};

export type PromptUsageToolProps = {
  status?: ChatStatus;
};

const PromptUsageTool: React.FC<PromptUsageToolProps> = (props) => {
  const { status } = props;

  const { data, refetch } = useQuery<ChatLimitState>({
    queryKey: ['chat-limit'],
    queryFn: async () => {
      const response = await fetch('/api/chat/limit');

      if (!response.ok) {
        throw new Error('Failed to fetch chat limit');
      }

      return response.json();
    },
  });

  const isStreaming = status === 'streaming';

  useEffect(() => {
    if (isStreaming) {
      refetch();
    }
  }, [isStreaming, refetch]);

  const limit = data?.limit ?? 0;
  const remaining = data?.remaining ?? 0;
  const used = Math.min(limit, limit - remaining);
  const reset = data?.reset ?? 0;

  const value = limit > 0 ? Math.round((used / limit) * 100) : 0;
  const hours = Math.floor(reset / 3600);
  const minutes = Math.floor((reset % 3600) / 60);

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button variant="ghost" type="button">
            <CircularProgress
              value={value}
              showLabel
              renderLabel={(progress) => `${progress}%`}
            />
          </Button>
        }
      />

      <PopoverContent className="w-64 gap-0.5" side="bottom">
        <div className="font-semibold">当前会话</div>
        <div>
          还剩 {remaining} / {limit} 条消息
        </div>
        <div className="mt-1 text-xs text-muted-foreground">
          {hours} 小时 {minutes} 分钟后重置
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PromptUsageTool;
