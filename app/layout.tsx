import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "OpsVantage Digital - The Platform for Modern Business",
  description:
    "An end-to-end ecosystem integrating Premium Dev, Business Automation, AI Agents, and Infrastructure Management.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "OpsVantage",
    "Business Automation",
    "AI Agents",
  ],
  authors: [
    {
      name: "Ajay Sidal",
      url: "https://opsvantagedigital.online",
    },
  ],
  creator: "Ajay Sidal",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://opsvantagedigital.online",
    title: "OpsVantage Digital - The Platform for Modern Business",
    description:
      "An end-to-end ecosystem integrating Premium Dev, Business Automation, AI Agents, and Infrastructure Management.",
    siteName: "OpsVantage Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpsVantage Digital - The Platform for Modern Business",
    description:
      "An end-to-end ecosystem integrating Premium Dev, Business Automation, AI Agents, and Infrastructure Management.",

    creator: "@opsvantagedigi",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          orbitron.variable
        )}
      import CinematicHeader from "@/components/layout/header";
import LegacyFooter from "@/components/layout/footer";
// ...existing code...
      >
        import AuthProvider from "@/components/auth-provider";
// ...existing code...
        <AuthProvider>
          <CinematicHeader />
          <main className="flex-grow">{children}</main>
          <LegacyFooter />
        </AuthProvider>
      </body>
// ...existing code...
      </body>
// ...existing code...
    </html>
  );
}
