import { notFound } from 'next/navigation';
import { services } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// --- Governance Note ---
// This is a dynamic route that generates a page for each service. It uses the
// `services` array from the centralized data library as its source. This pattern
// is highly scalable and maintainable. The `generateStaticParams` function can be
// added later to pre-build these pages at build time for maximum performance.

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return { title: service.title, description: service.description };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);

  // If no service matches the slug, render a 404 page.
  // This is a "safe" pattern that prevents runtime errors.
  if (!service) {
    notFound();
  }

  return (
    <div className="container py-24 sm:py-32" key={service.slug}>
      <div className="max-w-3xl mx-auto prose prose-invert prose-lg">
        <header>
          <h1 className="font-orbitron">{service.title}</h1>
          <p className="lead !text-xl !text-muted-foreground">{service.description}</p>
        </header>

        {service.slug === 'growth-driven-web-engineering' ? (
          <>
            <p>Your website isn't just a digital brochure; it's your most powerful engine for revenue growth. Traditional web development focuses on launch day. Our Growth-Driven Web Engineering focuses on the entire lifecycle of your digital asset, engineering it from day one for performance, scalability, and conversion.</p>
            
            <h2>Beyond Aesthetics: Engineering for Performance</h2>
            <p>A beautiful site that loads slowly is a liability. We build on Next.js and deploy to the Vercel Edge Network to guarantee sub-second load times and perfect Core Web Vitals. This isn't just a technical vanity metric—it's a direct driver of higher search rankings, lower bounce rates, and superior user experience.</p>
            <ul>
              <li><strong>First-Class SEO:</strong> Server-side rendering (SSR) and static site generation (SSG) ensure your content is perfectly indexed by search engines.</li>
              <li><strong>Optimized Core Web Vitals:</strong> We obsess over metrics like Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) so your users have a seamless experience.</li>
              <li><strong>Image & Asset Optimization:</strong> Automatic image optimization and modern asset formats mean your site is fast and efficient on any device, anywhere in the world.</li>
            </ul>

            <h2>Architecture Built for Scale & Stewardship</h2>
            <p>We don't build disposable websites. We build scalable digital platforms designed for a 10-year horizon. Our architecture anticipates future needs, from integrating a headless CMS to building out a full SaaS application. This "Stewardship over Shortcuts" approach saves you from costly rebuilds down the line.</p>

            <h2>Conversion Science at the Core</h2>
            <p>Every component, every user flow, and every line of code is written with a single question in mind: "Does this help drive a conversion?" We build systems that are not only technically excellent but are also finely tuned marketing instruments. We bake in analytics, A/B testing hooks, and clear user pathways to turn visitors into customers.</p>
            
            <div className="not-prose my-12 text-center">
              <Button size="lg" asChild>
                <Link href="/booking">Book a Web Strategy Session</Link>
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* Generic Placeholder for other services */}
            <p>Further details about our {service.title} offering will be presented here. This section can be powered by a Headless CMS like Sanity.io to allow for easy content updates without requiring a code deployment.</p>
            <p>This approach ensures that the marketing team can manage detailed service descriptions, case studies, and pricing information independently, aligning with our principle of building scalable and maintainable digital assets.</p>
          </>
        )}
      </div>
    </div>
  );
}