import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "BharatRank | India's Most Trusted Product Ranking Engine",
  description: 'Helping millions of Indians discover the best products through unbiased rankings.',
  metadataBase: new URL('https://bharatrank.com'),
  openGraph: {
    title: 'BharatRank',
    description: 'India\'s Most Trusted Product Ranking Engine',
    url: 'https://bharatrank.com',
    siteName: 'BharatRank',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BharatRank',
    description: 'Helping millions of Indians discover the best products through unbiased rankings.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-950 antialiased dark:bg-slate-950 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
