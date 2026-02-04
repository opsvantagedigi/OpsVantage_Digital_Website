import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

async function getCaseStudies() {
  const caseStudies = await client.fetch(`*[_type == "caseStudy"]{
    _id,
    title,
    slug,
    projectSummary,
    mainImage,
    clientName
  }`);
  return caseStudies;
}

const CaseStudiesPage = async () => {
  const caseStudies = await getCaseStudies();

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-orbitron font-bold">Case Studies</h1>
          <p className="text-xl text-gray-400 mt-2">Real-world examples of our impact.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study: any) => (
            <Link key={study._id} href={`/case-studies/${study.slug.current}`} className="block bg-gray-800 rounded-lg overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src={urlFor(study.mainImage).url()}
                  alt={study.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-blue-400 font-semibold text-sm mb-1">{study.clientName}</p>
                <h3 className="text-2xl font-bold font-orbitron mb-2">{study.title}</h3>
                <p className="text-gray-400 font-inter">{study.projectSummary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
