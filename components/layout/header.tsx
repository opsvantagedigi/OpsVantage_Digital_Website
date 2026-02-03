'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { clsx } from 'clsx';

// --- Governance Note ---
// This is a placeholder for the main site navigation, as defined in the Blueprint.
// It will be responsible for: Logo, Services, Work, Process, Insights, Client Login, Start Project CTA.
// Its implementation must be fully responsive and accessible (WCAG 2.1 AA).

const navItems = [
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'Process', href: '/process' },
  { name: 'Insights', href: '/insights' },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-orbitron text-lg font-bold">OpsVantage</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                'transition-colors hover:text-foreground/80',
                pathname === item.href ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Client Login</Link>
          </Button>
          <Button asChild>
            <Link href="/booking">Start Project</Link>
          </Button>
          {/* Mobile Menu Button Placeholder */}
          <div className="md:hidden">
            {/* A Sheet or Dropdown trigger will go here */}
          </div>
        </div>
      </div>
    </header>
  );
};