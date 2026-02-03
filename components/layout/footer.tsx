import React from 'react';
import Link from 'next/link';

// --- Governance Note ---
// This is a placeholder for the site footer, as defined in the Blueprint.
// This is the full implementation of the site footer, as defined in the Blueprint.
// It uses a multi-column layout to provide clear, non-intrusive navigation options.
// The design must provide "Breathing Room" and align with the "Care over Exploitation" pillar.
// by making legal and contact information easily accessible.

const footerLinks = {
  company: [
    { name: 'Work', href: '/work' },
    { name: 'Process', href: '/process' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Web Engineering', href: '/services' },
    { name: 'SaaS Development', href: '/services' },
    { name: 'SEO & Conversion', href: '/services' },
    { name: 'Digital Stewardship', href: '/services' },
  ],
  clients: [
    { name: 'Client Login', href: '/login' },
    { name: 'Book a Session', href: '/booking' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Refund Policy', href: '/refunds' },
  ],
};

const FooterLinkColumn = ({ title, links }: { title: string; links: { name: string; href: string }[] }) => (
  <div>
    <h3 className="font-orbitron text-sm font-semibold text-foreground">{title}</h3>
    <ul role="list" className="mt-6 space-y-4">
      {links.map((item) => (
        <li key={item.name}>
          <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer = () => {
  return (
    <footer className="border-t border-border/40" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="font-orbitron text-lg font-bold">
              OpsVantage
            </Link>
            <p className="text-sm leading-6 text-muted-foreground">
              Digital products that scale revenue. Built with Care, Clarity, and Stewardship.
            </p>
            {/* Social links can go here in the future */}
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
            <FooterLinkColumn title="Company" links={footerLinks.company} />
            <FooterLinkColumn title="Services" links={footerLinks.services} />
            <FooterLinkColumn title="Clients" links={footerLinks.clients} />
            <FooterLinkColumn title="Legal" links={footerLinks.legal} />
          </div>
        </div>
        <div className="mt-16 border-t border-border/40 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-muted-foreground">&copy; {new Date().getFullYear()} OpsVantage Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};