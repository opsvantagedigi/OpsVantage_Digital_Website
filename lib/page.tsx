import { notFound } from 'next/navigation';
import { caseStudies } from '@/lib/data';
import type { Metadata } from 'next';

// --- Governance Note ---
// This is the dynamic page template for a single case study. It follows the
// "Metric-First Narrative" structure: key results are presented upfront for
// scannability, followed by the detailed story. This caters to both executive
// and technical audiences.

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) return {};
  return { title: `${study.client}: ${study.title}`, description: study.description };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = caseStudies.find((s) => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="container py-24 sm:py-32">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <p className="font-orbitron text-base font-semibold leading-7 text-primary">{study.client}</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{study.title}</h1>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">{study.description}</p>
        </header>

        {study.stats && (
          <div className="my-12">
            <h2 className="text-base font-semibold leading-7 text-foreground">Results at a Glance</h2>
            <div className="mt-4 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {study.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="text-sm font-medium leading-6 text-muted-foreground">{stat.label}</dt>
                  <dd className="font-orbitron text-2xl font-semibold leading-9 tracking-tight text-primary">{stat.value}</dd>
                </div>
              ))}
            </div>
          </div>
        )}

        {study.content ? (
          <article
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
        ) : (
          <p className="text-muted-foreground">Detailed write-up for this case study is coming soon.</p>
        )}
      </div>
    </div>
  );
}