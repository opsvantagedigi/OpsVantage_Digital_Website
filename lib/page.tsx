import { notFound } from 'next/navigation';
import { insights } from '@/lib/data';
import type { Metadata } from 'next';

// --- Governance Note ---
// This is the dynamic page template for a single insight/article. It uses
// `generateMetadata` to ensure each article has unique, SEO-friendly page titles
// and descriptions. The content is styled with `@tailwindcss/typography` for
// optimal readability.

interface InsightPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const insight = insights.find((i) => i.slug === params.slug);
  if (!insight) return {};
  return { title: insight.title, description: insight.summary };
}

export default function InsightPage({ params }: InsightPageProps) {
  const insight = insights.find((i) => i.slug === params.slug);

  if (!insight) {
    notFound();
  }

  return (
    <div className="container py-24 sm:py-32">
      <div className="max-w-3xl mx-auto">
        <article className="prose prose-invert prose-lg max-w-none">
          <header>
            <h1 className="font-orbitron">{insight.title}</h1>
            <p className="text-muted-foreground">
              By {insight.author} on {new Date(insight.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </header>

          <p>{insight.summary}</p>

          {/* Placeholder for full article content */}
          <p>This is where the full content of the article will go. Like our service detail pages, this content is ideally managed by a Headless CMS like Sanity.io. This allows for rich text editing, image embedding, and code blocks without requiring a developer to intervene for every new post.</p>
          <p>Adopting this pattern is a core tenet of Digital Stewardship, as it creates a scalable and maintainable content engine for the business.</p>
        </article>
      </div>
    </div>
  );
}