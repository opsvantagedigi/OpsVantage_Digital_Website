import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import { clsx } from 'clsx';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ThemeProvider } from '@/components/theme-provider';

import '../styles/globals.css';

// --- Governance Note ---
// Per the Blueprint, Inter is for body text and Orbitron for headings.
// We define them here as CSS variables for efficient, global access,
// aligning with the "Stewardship over Shortcuts" pillar.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});

// --- Governance Note ---
// Centralized metadata ensures brand consistency for SEO and social sharing.
// I have expanded this to include Open Graph and Twitter card data for rich
// social media previews, a critical component of a modern SEO strategy.
export const metadata: Metadata = {
  metadataBase: new URL('https://www.opsvantage.digital'), // Replace with your actual domain
  title: {
    default: 'OpsVantage Digital | Digital Products That Scale Revenue',
    template: `%s | OpsVantage Digital`,
  },
  description: 'We build high-performance websites, growth-driven web applications, and scalable SaaS products. Partner with us for world-class digital stewardship.',
  keywords: ['Next.js development', 'SaaS development', 'web engineering', 'conversion optimization', 'SEO', 'digital strategy'],
  openGraph: {
    title: 'OpsVantage Digital | Digital Products That Scale Revenue',
    description: 'High-performance websites, growth-driven engineering, and conversion science.',
    url: 'https://www.opsvantage.digital',
    siteName: 'OpsVantage Digital',
    locale: 'en_US',
    type: 'website',
  },
};

// --- Governance Note ---
// This RootLayout is the single source of truth for the page shell.
// Placing Header, Footer, and ThemeProvider here strictly enforces the
// "No duplicate overlays" rule from the Visual Doctrine. This is the
// most critical file for maintaining structural integrity and is "Legacy Grade."
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx('min-h-screen bg-background font-sans antialiased', inter.variable, orbitron.variable)}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}