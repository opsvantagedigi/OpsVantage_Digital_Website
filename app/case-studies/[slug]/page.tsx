import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { type SanityImageSource } from "@sanity/image-url";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

async function getCaseStudy(slug: string) {
  const study = await client.fetch(`*[_type == "caseStudy" && slug.current == $slug][0]{
    _id,
    title,
    clientName,
    projectSummary,
    mainImage,
    body,
    results,
    "relatedServiceTitle": relatedService->title,
    "relatedServiceSlug": relatedService->slug.current
  }`, { slug });
  return study;
}

const portableTextComponents = {
    types: {
      image: ({ value }: { value: SanityImageSource & { alt?: string } }) => <Image src={urlFor(value).url()} alt={value.alt || ' '} width={700} height={700} />,
    },
}

const CaseStudyPage = async ({ params }: { params: { slug: string } }) => {
  const study = await getCaseStudy(params.slug);

  if (!study) {
    return <div>Case Study not found</div>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
        <div className="relative h-[50vh]">
            <Image src={urlFor(study.mainImage).url()} alt={study.title || 'Case Study Image'} layout="fill" objectFit="cover" className="opacity-20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <p className="text-xl font-bold text-blue-400">{study.clientName}</p>
                <h1 className="text-4xl md:text-6xl font-orbitron font-bold mt-2">{study.title}</h1>
                <p className="mt-4 text-lg max-w-3xl text-gray-300">{study.projectSummary}</p>
            </div>
        </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 max-w-3xl">
              <div className="prose prose-invert prose-lg max-w-none">
                <PortableText value={study.body} components={portableTextComponents} />
              </div>
            </article>
            <aside className="lg:col-span-1">
                <div className="bg-gray-800 p-6 rounded-lg sticky top-24">
                    <h3 className="text-2xl font-orbitron font-bold mb-4">Key Results</h3>
                    <ul className="space-y-4">
                        {study.results?.map((result: any, index: number) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-lg">{result.value} {result.metric}</p>
                                    <p className="text-gray-400">{result.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
