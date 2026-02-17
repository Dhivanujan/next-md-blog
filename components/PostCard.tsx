import Link from "next/link";
import { PostData } from "@/lib/posts";

export default function PostCard({ post }: { post: PostData }) {
  return (
    <div className="group relative flex flex-col items-start justify-between bg-white border border-slate-200/60 rounded-3xl p-8 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        <div className="relative z-10 w-full">
            <div className="flex items-center gap-x-4 text-xs mb-6 w-full text-slate-500 font-medium tracking-wide">
              <time dateTime={post.date} className="text-slate-400">
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </time>
              {post.tags && post.tags.length > 0 && (
                 <span className="relative z-10 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-600 ring-1 ring-inset ring-indigo-600/10 uppercase tracking-wider">
                    {post.tags[0]}
                 </span>
              )}
              {post.readingTime && (
                <span className="ml-auto flex items-center gap-1.5 text-slate-400">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   {post.readingTime}
                </span>
              )}
            </div>
            
            <div className="group relative flex-1">
              <h3 className="mt-2 text-2xl font-bold leading-tight text-slate-900 group-hover:text-indigo-600 transition-colors duration-200">
                <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {post.title}
                </Link>
              </h3>
              <p className="mt-4 line-clamp-3 text-[15px] leading-7 text-slate-600 font-normal">
                {post.description}
              </p>
            </div>
        </div>

        {post.author && (
            <div className="relative mt-8 flex items-center gap-x-4 border-t border-slate-100 pt-6 w-full z-10">
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs ring-2 ring-white shadow-sm flex-shrink-0">
                    {post.author.substring(0,2).toUpperCase()}
                </div>
                <div className="text-sm leading-6">
                    <p className="font-semibold text-slate-900">
                        {post.author}
                    </p>
                    <p className="text-slate-500 text-xs font-medium">Author</p>
                </div>
            </div>
        )}
    </div>
  );
}
