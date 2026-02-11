import { getPostData, getAllPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  // In Next.js 15+, params is a Promise, but in 14 it's direct object often, 
  // though recent 14.x updates encourage awaiting params/searchParams in some contexts. 
  // Logic here assumes 14.x standard behavior.
  // If utilizing strict async params (future proof):
  const { slug } = params; 

  try {
    const postData = await getPostData(slug);
    
    return (
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8 border-b pb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{postData.title}</h1>
          <time className="text-gray-500">{postData.date}</time>
        </header>
        
        {/* Render Markdown HTML - safely, assuming content is trusted */}
        <div 
          className="prose prose-lg prose-blue max-w-none"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }} 
        />
      </article>
    );
  } catch (error) {
    notFound();
  }
}
