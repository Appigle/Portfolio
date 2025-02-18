import EasterEggs from '@/components/easter-eggs';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Particles from '@/components/Particles';
import Preloader from '@/components/preloader';
import RemoteCursors from '@/components/realtime/remote-cursors';
import { ThemeProvider } from '@/components/theme-provider';
import ElasticCursor from '@/components/ui/ElasticCursor';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import SocketContextProvider from '@/contexts/socketio';
import { config } from '@/data/config';
import type { Metadata } from 'next';
import { Archivo_Black } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: config.title,
  description: config.description.long,
  keywords: config.keywords,
  authors: [{ name: config.author }],
  openGraph: {
    title: config.title,
    description: config.description.short,
    url: config.site,
    images: [
      {
        url: config.ogImg,
        width: 800,
        height: 600,
        alt: 'Portfolio preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: config.title,
    description: config.description.short,
    images: [config.ogImg],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[archivoBlack.className].join(' ')}>
      <head>
        {process.env.UMAMI_DOMAIN && (
          <Script
            defer
            src={process.env.UMAMI_DOMAIN}
            data-website-id={process.env.UMAMI_SITE_ID}
          ></Script>
        )}
        {/* <Analytics /> */}

        <link rel="icon" href="/favicon2.ico" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Particles
            className="fixed inset-0 -z-10 animate-fade-in"
            quantity={100}
          />
          <Preloader>
            <SocketContextProvider>
              <RemoteCursors />
              <TooltipProvider>
                <Header />
                {children}
                <Footer />
              </TooltipProvider>
            </SocketContextProvider>
            <Toaster />
            <EasterEggs />
            <ElasticCursor />
          </Preloader>
        </ThemeProvider>
      </body>
    </html>
  );
}
