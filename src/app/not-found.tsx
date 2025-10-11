import type { Metadata } from 'next';

import BackLink from '@/components/back-link';

export const metadata: Metadata = {
  title: '404',
};

export default function NotFound() {
  return (
    <div>
      <h1 className="mb-10 text-3xl font-semibold">404</h1>

      <div className="space-y-10">
        <p>Page not found</p>
        <p>
          <BackLink />
        </p>
      </div>
    </div>
  );
}
