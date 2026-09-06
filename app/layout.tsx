import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  icons: { icon: '/favicon.svg' },
  title: 'EZCAT — CAT preparation, without the extra work.',
  description: 'Daily, AI-curated practice from real CAT papers. Open the app, solve, improve, repeat. EZCAT makes CAT preparation simple, focused, and effective.',
  keywords: ['EZCAT', 'CAT preparation', 'CAT previous year questions', 'CAT mock tests', 'AI coach', 'IIM'],
  openGraph: { title: 'EZCAT — CAT preparation, without the extra work.', description: 'Real CAT papers, authentic mocks, and an AI coach by your side.', type: 'website' },
  twitter: { card: 'summary', title: 'EZCAT — CAT preparation, without the extra work.', description: 'Real CAT papers, authentic mocks, and an AI coach by your side.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
