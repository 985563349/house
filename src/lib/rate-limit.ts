import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import { getClientIp } from 'next-request-ip';
import { RateLimiterMemory, type RateLimiterRes } from 'rate-limiter-flexible';

const rateLimiter = new RateLimiterMemory({
  points: Number(process.env.NEXT_API_RATE_LIMIT ?? 8),
  duration: Number(process.env.NEXT_API_RATE_LIMIT_DURATION ?? 24 * 60 * 60),
  blockDuration: 0,
});

export function withRateLimit(
  handler: (request: NextRequest) => Response | Promise<Response>,
) {
  return async (request: NextRequest) => {
    const ip = getClientIp(request.headers) ?? 'anonymous';

    try {
      const status = await rateLimiter.consume(ip);
      const result = await handler(request);

      result.headers.set('X-RateLimit-Limit', rateLimiter.points.toString());
      result.headers.set(
        'X-RateLimit-Remaining',
        status.remainingPoints.toString(),
      );
      result.headers.set(
        'X-RateLimit-Reset',
        Math.ceil(status.msBeforeNext / 1000).toString(),
      );

      return result;
    } catch (error) {
      const status = error as RateLimiterRes;

      if (typeof status?.msBeforeNext === 'number') {
        return new NextResponse(
          "You've reached your daily message limit. Come back tomorrow to chat with Icarus again.",
          {
            status: 429,
            headers: {
              'X-RateLimit-Limit': rateLimiter.points.toString(),
              'X-RateLimit-Remaining': status.remainingPoints.toString(),
              'X-RateLimit-Reset': Math.ceil(
                status.msBeforeNext / 1000,
              ).toString(),
            },
          },
        );
      }

      throw error;
    }
  };
}

export async function getRateLimitStatus(request: NextRequest) {
  const ip = getClientIp(request.headers) ?? 'anonymous';

  const defaultStatus = {
    limit: rateLimiter.points,
    remaining: rateLimiter.points,
    reset: rateLimiter.duration,
  };

  try {
    const status = await rateLimiter.get(ip);

    return {
      ...defaultStatus,
      remaining: status?.remainingPoints ?? rateLimiter.points,
      reset: status
        ? Math.ceil(status.msBeforeNext / 1000)
        : rateLimiter.duration,
    };
  } catch {
    return defaultStatus;
  }
}
