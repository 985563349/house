import { revalidatePath } from 'next/cache';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  const path = request.nextUrl.searchParams.get('path');

  if (secret !== process.env.NEXT_SECRET_TOKEN) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  if (!path) {
    return NextResponse.json({ message: 'Missing path param' }, { status: 400 });
  }

  revalidatePath(path);

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
