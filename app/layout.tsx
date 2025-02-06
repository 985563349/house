import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import { Inter } from 'next/font/google';

import Header from '@/components/header';
import Footer from '@/components/footer';
import ThemeProvider from '@/providers/theme';
import { cn } from '@/lib/utils';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            'grid grid-rows-[auto_1fr_auto] min-h-screen antialiased bg-white dark:bg-gray-950 overflow-auto',
            inter.className
          )}
        >
          <ThemeProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
