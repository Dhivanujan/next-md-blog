import Link from "next/link";
import { PostData } from "@/lib/posts";

export default function PostCard({ post }: { post: PostData }) {
  return (
    <div className="group relative flex flex-col items-start justify-between bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1.5 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2">
        <div className="flex items-center gap-x-4 text-xs mb-6 w-full text-slate-500 font-medium tracking-wide">
          <time dateTime={post.date} className="text-slate-400">
            {post.date}
          </time>
          {post.tags && post.tags.length > 0 && (
             <span className="relative z-10 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-bold text-blue-600 hover:bg-blue-100 transition-colors uppercase tracking-wider">
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
          <h3 className="mt-2 text-2xl font-bold leading-tight text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
            <Link href={`/blog/${post.slug}`} className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              {post.title}
            </Link>
          </h3>
          <p className="mt-4 line-clamp-3 text-[15px] leading-7 text-slate-600 font-light">
            {post.description}
          </p>
        </div>

        {post.author && (
            <div className="relative mt-8 flex items-center gap-x-4 border-t border-slate-100 pt-6 w-full">
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs ring-2 ring-white shadow-sm flex-shrink-0">
                    {post.author.substring(0,2).toUpperCase()}
                </div>
                <div className="text-sm leading-6">
                    <p className="font-semibold text-slate-900">
                        {post.author}
                    </p>
                    <p className="text-slate-500 text-xs">Author</p>
                </div>
            </div>
        )}
    </div>
  );
}
