import { MetadataRoute } from 'next';

// --- Governance Note ---
// This file dynamically generates the robots.txt file. It's a best practice
// for SEO, instructing web crawlers on how to index the site.
// It's configured to allow all crawlers and points to the sitemap.

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.opsvantage.digital/sitemap.xml', // Replace with your actual domain
  };
}