import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

import { Navbar } from '@/components/navbar';
import { Providers } from './providers';

import './globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s - Jee',
    default: 'Jee',
  },
  description: "Jee's portfolio",
  authors: [{ name: 'Jee' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} text-lg`}>
        <Providers>
          <Navbar />
          <main className="mx-auto max-w-5xl px-6">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
