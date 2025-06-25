import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import PageTransition from '@/components/page-transition';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ncode Innovations -  AI-Powered Solutions & Premium Web Development',
  description: 'Leading provider of AI-powered automation, intelligent agents, web development, and mobile app solutions. Transform your business with cutting-edge technology.',
  keywords: 'AI automation, AI agents, web development, mobile apps, artificial intelligence, machine learning, automation solutions',
  authors: [{ name: 'Ncode Innovations' }],
  openGraph: {
    title: 'Ncode Innovations - AI-Powered Solutions & Premium Web Development',
    description: 'Leading provider of AI-powered automation, intelligent agents, web development, and mobile app solutions. Transform your business with cutting-edge technology.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <PageTransition>
            {children}
          </PageTransition>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}