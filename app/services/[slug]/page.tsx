import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from '@sanity/image-url'
import { type SanityImageSource } from "@sanity/image-url";
import Image from "next/image";

const builder = imageUrlBuilder(client)

function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

async function getService(slug: string) {
  const service = await client.fetch(`*[_type == "service" && slug.current == $slug][0]{
    _id,
    title,
    longDescription,
    mainImage,
    tags
  }`, { slug });
  return service;
}

const portableTextComponents = {
    types: {
      image: ({ value }: { value: SanityImageSource }) => <Image src={urlFor(value).url()} alt={value.alt as string || ' '} width={700} height={700} />,
    },
  }

const ServicePage = async ({ params }: { params: { slug: string } }) => {
  const service = await getService(params.slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
        <div className="relative h-96">
            <Image src={urlFor(service.mainImage).url()} alt={service.title} layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h1 className="text-5xl font-orbitron font-bold text-center">{service.title}</h1>
            </div>
        </div>
      <div className="container mx-auto px-4 py-16">
        <article className="max-w-3xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <PortableText value={service.longDescription} components={portableTextComponents} />
          </div>
          <div className="mt-8">
            {service.tags?.map((tag: string) => (
                <span key={tag} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">#{tag}</span>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default ServicePage;
