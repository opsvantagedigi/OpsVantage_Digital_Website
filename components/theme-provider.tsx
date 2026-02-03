'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

// --- Governance Note ---
// This component abstracts the `next-themes` library, a standard practice for
// managing dark/light mode in Next.js. It is a "safe" and "teachable" pattern
// that isolates theme logic. It is configured in the root layout to provide
// context to the entire application.
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}