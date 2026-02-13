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
      <div className="bg-white min-h-screen pb-24">
        {/* Header Background */}
        <div className="bg-slate-50 border-b border-slate-100 py-16 sm:py-24">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                 <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-blue-600 mb-8 transition-colors bg-white px-4 py-2 rounded-full shadow-sm ring-1 ring-slate-200">
                    <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Blog
                </Link>

                <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                    {postData.tags?.map(tag => (
                    <span key={tag} className="text-sm font-bold px-3 py-1 rounded-full bg-blue-100/50 text-blue-700 tracking-wide border border-blue-100">
                        {tag}
                    </span>
                    ))}
                </div>
                
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl mb-8 leading-tight">{postData.title}</h1>
                
                <div className="flex items-center justify-center gap-8 text-sm font-medium text-slate-500">
                    <span className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        {postData.date}
                    </span>
                    {postData.readingTime && (
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            {postData.readingTime}
                        </span>
                    )}
                </div>
            </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 lg:px-8 -mt-10 sm:-mt-12 relative z-10">
             {postData.author && (
                <div className="flex items-center justify-center mb-12">
                   <div className="bg-white p-2 rounded-full shadow-lg ring-1 ring-slate-100">
                     <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-2xl">
                         {postData.author.substring(0,2).toUpperCase()}
                     </div>
                   </div>
                </div>
             )}

            <article className="prose prose-lg prose-slate prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-600 prose-li:text-slate-600 prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-2xl prose-img:shadow-lg mx-auto bg-white p-0 sm:p-8 rounded-none sm:rounded-3xl">
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }} />
            </article>

            <div className="mt-16 pt-10 border-t border-slate-100 text-center">
                 <p className="text-slate-500 italic">Thanks for reading!</p>
            </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
