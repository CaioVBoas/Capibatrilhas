import type { Metadata } from 'next';

import { ThemeProvider } from '../components/theme-provider'; 
import NextAuthSessionProvider from '../providers/sessionProvider';
import '../styles/globals.css';
import { outfit } from '../styles/fonts';

export const metadata: Metadata = {
  title: 'Capibatrilhas',
  description: 'Um sistema de gamificação cidadã para a cidade do Recife.',
  manifest: '/manifest.json'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}