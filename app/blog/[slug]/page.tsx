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
      <div className="bg-slate-50/50 min-h-screen pb-24">
        {/* Header Background */}
        <div className="relative bg-white border-b border-slate-200/60 pb-16 pt-32 sm:pt-40 overflow-hidden">
             <div className="absolute inset-0 bg-grid-pattern opacity-[0.4]" />
             <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white" />
             
            <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center z-10">
                 <Link href="/blog" className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-indigo-600 mb-10 transition-colors group">
                    <svg className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Articles
                </Link>

                <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                    {postData.tags?.map(tag => (
                    <span key={tag} className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 tracking-wider uppercase ring-1 ring-inset ring-indigo-600/10">
                        {tag}
                    </span>
                    ))}
                </div>
                
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl mb-8 leading-tight max-w-3xl mx-auto">{postData.title}</h1>
                
                <div className="flex items-center justify-center gap-8 text-sm font-medium text-slate-500">
                    <span className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        {new Date(postData.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                    {postData.readingTime && (
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
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
                   <div className="bg-white p-2 rounded-full shadow-lg ring-1 ring-slate-200/60">
                     <div className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white font-bold text-2xl">
                         {postData.author.substring(0,2).toUpperCase()}
                     </div>
                   </div>
                </div>
             )}

            <article className="prose prose-lg prose-slate prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-8 prose-li:text-slate-600 prose-a:text-indigo-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:text-indigo-500 prose-img:rounded-3xl prose-img:shadow-xl prose-img:ring-1 prose-img:ring-slate-900/5 prose-code:text-indigo-600 prose-code:bg-indigo-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-semibold prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:shadow-lg prose-pre:rounded-2xl mx-auto bg-white p-8 sm:p-16 rounded-3xl shadow-sm ring-1 ring-slate-900/5">
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }} />
            </article>

            <div className="mt-16 pt-10 border-t border-slate-200 text-center">
                 <p className="text-slate-500 font-medium">Thanks for reading!</p>
            </div>
        </div>
      </div>
    );

  } catch (error) {
    notFound();
  }
}
