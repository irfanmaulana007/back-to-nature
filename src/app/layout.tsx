import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "HikingNusantara - Discover Indonesia's Majestic Mountains",
  description:
    'Plan your next hiking adventure with detailed information about Indonesian mountains, tracks, and registration requirements. Your comprehensive guide to mountain hiking in Indonesia.',
  keywords:
    'hiking, mountains, Indonesia, gunung, pendakian, Rinjani, Semeru, Bromo, Kerinci',
  authors: [{ name: 'HikingNusantara Team' }],
  openGraph: {
    title: "HikingNusantara - Discover Indonesia's Majestic Mountains",
    description:
      'Plan your next hiking adventure with detailed information about Indonesian mountains, tracks, and registration requirements.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
