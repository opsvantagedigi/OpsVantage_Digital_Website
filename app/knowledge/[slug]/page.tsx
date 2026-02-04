import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from '@sanity/image-url'
import { type SanityImageSource } from "@sanity/image-url";
import Image from "next/image";

const builder = imageUrlBuilder(client)

function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

async function getPost(slug: string) {
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    mainImage,
    "authorName": author->name,
    "authorImage": author->image,
    "categories": categories[]->title,
    publishedAt,
    body
  }`, { slug });
  return post;
}

const portableTextComponents = {
    types: {
      image: ({ value }: { value: SanityImageSource }) => <Image src={urlFor(value).url()} alt={value.alt as string || ' '} width={700} height={700} />,
    },
  }


const PostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">{post.title}</h1>
          <div className="flex items-center mb-8 text-gray-400">
            {post.authorImage && <Image src={urlFor(post.authorImage).width(50).height(50).url()} alt={post.authorName} className="w-10 h-10 rounded-full mr-4" width={50} height={50} />}
            <span>By {post.authorName}</span>
            <span className="mx-2">•</span>
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          </div>
          {post.mainImage && <Image src={urlFor(post.mainImage).url()} alt={post.title} className="w-full h-auto rounded-lg mb-8" width={800} height={400} />}
          <div className="prose prose-invert prose-lg max-w-none">
            <PortableText value={post.body} components={portableTextComponents} />
          </div>
        </article>
      </div>
    </div>
  );
};

export default PostPage;