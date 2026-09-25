import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ezcat.pages.dev'),
  icons: { icon: '/favicon.svg' },
  title: 'EZCAT — CAT preparation, without the extra work.',
  description: 'Daily, AI-curated practice from real CAT papers. Open the app, solve, improve, repeat. EZCAT makes CAT preparation simple, focused, and effective.',
  keywords: ['EZCAT', 'CAT preparation', 'CAT previous year questions', 'CAT mock tests', 'AI coach', 'IIM'],
  openGraph: {
    title: 'EZCAT — CAT preparation, without the extra work.',
    description: 'Real CAT papers, authentic mocks, and an AI coach by your side.',
    type: 'website',
    url: 'https://ezcat.pages.dev',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EZCAT — CAT preparation, without the extra work.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EZCAT — CAT preparation, without the extra work.',
    description: 'Real CAT papers, authentic mocks, and an AI coach by your side.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
