import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { cn } from '@/lib/utils';

import Providers from './providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s - Jee',
    default: 'Jee 的数字花园',
  },
  description: "Jee's digital garden",
  authors: [{ name: 'Jee' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="size-full">
      <body
        className={cn(
          'flex flex-col antialiased size-full text-gray-950 dark:text-gray-100 bg-white dark:bg-gray-950',
          inter.className
        )}
      >
        <Providers>
          <Header />
          <main className="flex-1 py-10">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
