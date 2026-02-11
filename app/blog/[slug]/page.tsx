import { getPostData, getAllPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

import { getPostData, getAllPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params; 

  try {
    const postData = await getPostData(slug);
    
    return (
      <div className="max-w-3xl mx-auto px-6 sm:px-6 lg:px-8 py-12">
        <Link href="/blog" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 mb-8 transition-colors">
            &larr; Back to all posts
        </Link>
        <article>
          <header className="mb-10 text-center">
             <div className="mb-4 text-sm text-blue-600 font-semibold uppercase tracking-wider">Article</div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4 leading-tight">{postData.title}</h1>
            <time className="text-gray-500 text-lg">{postData.date}</time>
          </header>
          
          <div 
            className="prose prose-lg prose-slate mx-auto"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }} 
          />
        </article>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
