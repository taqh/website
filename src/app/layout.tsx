import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { cn } from '@/lib/utils';
import type { Metadata, Viewport } from 'next';
import { Barlow, Geist_Mono } from 'next/font/google';
import '@/styles/globals.css';
import { SITE } from '@/lib/seo';
import Providers from './providers';

const barlow = Barlow({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rivo.gg'),
  alternates: {
    canonical: '/',
  },
  title: SITE.title2,
  description: SITE.description,
  twitter: {
    title: SITE.title2,
    card: 'summary_large_image',
    description: SITE.description,
    images: [
      {
        url: '/twitter-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  openGraph: {
    title: SITE.title2,
    description: SITE.description,
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: '/Logo.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  maximumScale: 5,
  themeColor: '#4876F2',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <script
          defer
          data-domain='rivo.gg'
          src='https://stats.wouldyoubot.gg/js/script.js'
        />
      </head>
      <html lang='en'>
        <body
          className={cn(
            'flex min-h-screen w-screen flex-col antialiased',
            barlow.className
          )}
        >
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </body>
      </html>
    </>
  );
}
