import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/components/header';
import Footer from '@/components/footer';

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
