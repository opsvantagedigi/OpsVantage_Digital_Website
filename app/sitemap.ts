import { MetadataRoute } from 'next';
import { services, insights, caseStudies } from '@/lib/data';

// --- Governance Note ---
// This file dynamically generates the sitemap.xml file. A sitemap is critical
// for SEO as it helps search engines discover and index all pages on the site.
// It pulls from our centralized data sources to ensure it's always up-to-date.

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.opsvantage.digital'; // Replace with your actual domain

  const staticPages = [
    '/',
    '/work',
    '/process',
    '/insights',
    '/contact',
    '/booking',
    '/privacy',
    '/terms',
    '/cookies',
    '/disclaimer',
    '/refunds',
  ].map((url) => ({
    url: `${siteUrl}${url}`,
    lastModified: new Date(),
  }));

  const servicePages = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const workPages = caseStudies.map((study) => ({
    url: `${siteUrl}/work/${study.slug}`,
    lastModified: new Date(),
  }));

  const insightPages = insights.map((insight) => ({
    url: `${siteUrl}/insights/${insight.slug}`,
    lastModified: new Date(insight.date),
  }));

  return [...staticPages, ...servicePages, ...workPages, ...insightPages];
}