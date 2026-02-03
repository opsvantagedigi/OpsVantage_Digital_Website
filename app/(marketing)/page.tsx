import React from 'react';
import Link from 'next/link';

// --- Governance Note ---
// This page will showcase client case studies. The content is placeholder, but
// the structure is "Legacy Grade." It uses a responsive CSS Grid that provides
// ample "Breathing Room" and creates a strong visual hierarchy, aligning with
// the core visual doctrine. Each item is a link to a future dynamic case study page.

const caseStudies = [
  {
    client: 'SaaS Innovators Inc.',
    title: 'Scaling a B2B Platform from 1k to 100k Users',
    description: 'A complete overhaul of the web application architecture using Next.js and Vercel, resulting in a 500% performance increase and a 300% rise in user engagement.',
    href: '/work/saas-innovators',
  },
  {
    client: 'Fintech Solutions Co.',
    title: 'Building a Secure, High-Conversion Onboarding Flow',
    description: 'We engineered a multi-step user onboarding experience that increased conversion rates by 40% while meeting stringent financial compliance standards.',
    href: '/work/fintech-solutions',
  },
  {
    client: 'E-commerce Leaders',
    title: 'Headless Commerce Implementation for Global Scale',
    description: 'Migrated a monolithic e-commerce site to a headless architecture with Sanity.io, enabling rapid international expansion and a 70% reduction in page load times.',
    href: '/work/ecommerce-leaders',
  },
];

export default function WorkPage() {
  return (
    <div className="container py-24 sm:py-32">
      <div className="mb-12 max-w-3xl">
        <h1 className="font-orbitron text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Proven Results
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We partner with ambitious companies to build digital products that are not just beautiful, but are engineered for growth and long-term success.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <Link href={study.href} key={study.client} className="group block rounded-lg border border-border/40 p-6 transition-all hover:border-primary/50 hover:bg-secondary/50">
            <h3 className="font-orbitron text-lg font-semibold text-foreground">{study.client}</h3>
            <p className="mt-2 font-medium text-primary">{study.title}</p>
            <p className="mt-3 text-sm text-muted-foreground">{study.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}