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
      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 py-16">
        <Link href="/blog" className="group inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 mb-10 transition-colors">
            <svg className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all posts
        </Link>
        <article>
          <header className="mb-12 text-center max-w-2xl mx-auto">
             <div className="flex items-center justify-center gap-2 mb-6">
                {postData.tags?.map(tag => (
                   <span key={tag} className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 uppercase tracking-wide">
                     {tag}
                   </span>
                ))}
             </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-6 leading-tight">{postData.title}</h1>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 border-b border-gray-100 pb-8">
                <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    {postData.date}
                </span>
                {postData.readingTime && (
                    <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {postData.readingTime}
                    </span>
                )}
            </div>
          </header>
          
          <div 
            className="prose prose-lg prose-slate prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500 mx-auto"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }} 
          />
          
          <hr className="my-12 border-gray-100" />
          
          {postData.author && (
            <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-6 max-w-2xl mx-auto">
                <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl ring-4 ring-white">
                    {postData.author.substring(0,2).toUpperCase()}
                </div>
                <div>
                   <h3 className="text-base font-bold text-gray-900">Written by {postData.author}</h3>
                   <p className="text-sm text-gray-600">Content creator and tech enthusiast sharing insights on web development.</p>
                </div>
            </div>
          )}
        </article>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
