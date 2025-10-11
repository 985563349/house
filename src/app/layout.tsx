import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { cn } from '@/lib/utils';

import { TooltipProvider } from '@/components/ui/tooltip';
import GradualBlur from '@/components/gradual-blur';
import Footer from '@/components/footer';
import Header from '@/components/header';

import ThemeProvider from '@/providers/theme';

import '../globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: {
    template: '%s - Jason',
    default: 'Jason Wang',
  },
  description: 'Jason Wang',
  authors: [{ name: 'Jason' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(geist.className, geist.variable, geistMono.variable)}>
        <ThemeProvider>
          <TooltipProvider>
            <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto] min-h-dvh">
              <Header />
              <main>
                <div className="mx-auto px-4 py-6 sm:px-6 max-w-3xl h-full">
                  {children}
                </div>
              </main>
              <GradualBlur />
              <Footer />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
