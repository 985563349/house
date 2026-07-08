import 'server-only';

import { NextRequest, NextResponse } from 'next/server';

import { getRateLimitStatus } from '@/lib/rate-limit';

export async function GET(request: NextRequest) {
  const status = await getRateLimitStatus(request);

  return NextResponse.json(status);
}
