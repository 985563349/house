'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <NextThemeProvider attribute="class" defaultTheme="light">
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
