import type { Metadata, Viewport } from 'next';
import './globals.css';
import { IBM_Plex_Mono, Ubuntu } from 'next/font/google';
import NavigationBar from './components/NavigationBar';
import Script from 'next/script';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  variable: '--font-ubuntu',
  weight: ['300', '400', '500'],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Mina Mamdouh | Front-End Developer (React & Next.js)',
  description:
    "I'm Mina Mamdouh, a passionate Front-End Developer specializing in React.js, Next.js, and TypeScript. I build modern, responsive, and SEO-friendly web applications to help businesses grow.",
  keywords: [
    'Mina Mamdouh',
    'Front-End Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'JavaScript',
    'Remote Frontend Developer',
  ],
  authors: [{ name: 'Mina Mamdouh' }],
  openGraph: {
    title: 'Mina Mamdouh | Front-End Developer',
    description:
      'Passionate Front-End Developer specializing in React.js, Next.js, and TypeScript. Building responsive and SEO-friendly web apps.',
    url: process.env.NEXT_PUBLIC_MY_DOMAIN,
    siteName: 'Mina Mamdouh Portfolio',
    images: [
      {
        url: '/my-pic.jpg',
        width: 1200,
        height: 630,
        alt: 'Mina Mamdouh - Front-End Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mina Mamdouh | Front-End Developer',
    description:
      'React.js & Next.js Front-End Developer crafting responsive, modern web apps.',
    images: ['/my-pic.jpg'],
    creator: '@your_twitter_handle',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_MY_DOMAIN!),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_MY_DOMAIN,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${ubuntu.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <NavigationBar />
        {children}
      </body>
      {/* SEO */}
      <Script
        id='structured-data'
        type='application/ld+json'
        strategy='afterInteractive'
      >
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Mina Mamdouh',
          jobTitle: 'Front-End Developer',
          url: process.env.NEXT_PUBLIC_MY_DOMAIN,
          sameAs: [
            'https://www.linkedin.com/in/mina-mamdouh-793a60326/',
            'https://github.com/MinaMamdouh1881',
          ],
        })}
      </Script>
    </html>
  );
}
