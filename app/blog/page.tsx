import BlogList from "@/components/BlogList";
import { getSortedPostsData } from "@/lib/posts";

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="bg-slate-50 min-h-screen pb-24 relative">
        <div className="fixed inset-0 bg-grid-pattern opacity-[0.3] pointer-events-none" />
        
        {/* Header */}
        <div className="relative bg-white border-b border-slate-200/60 pb-20 pt-32 sm:pt-40 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-white to-white" />
            
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6 ring-1 ring-inset ring-indigo-600/10">
                    The Blog
                </span>
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
                    Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Insights</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto font-light">
                    Technical deep dives, tutorials, and thoughts on software engineering, best practices, and the future of web development.
                </p>
            </div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 z-10">
            <BlogList posts={allPostsData} />
        </div>
    </div>
  );
}
