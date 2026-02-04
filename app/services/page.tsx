import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

async function getServices() {
  const services = await client.fetch(`*[_type == "service"]{
    _id,
    title,
    slug,
    shortDescription,
    mainImage
  }`);
  return services;
}

const ServicesPage = async () => {
  const services = await getServices();

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-orbitron font-bold">Our Services</h1>
          <p className="text-xl text-gray-400 mt-2">Crafting Digital Excellence</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: any) => (
            <Link key={service._id} href={`/services/${service.slug.current}`} className="block bg-gray-800 rounded-lg overflow-hidden group">
              <div className="relative h-48">
                <Image
                  src={urlFor(service.mainImage).url()}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold font-orbitron mb-2">{service.title}</h3>
                <p className="text-gray-400 font-inter">{service.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
