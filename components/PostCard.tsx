import Link from "next/link";
import { PostData } from "@/lib/posts";

export default function PostCard({ post }: { post: PostData }) {
  return (
    <div className="group relative flex flex-col items-start justify-between bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center gap-x-4 text-xs mb-6 w-full text-slate-500 font-medium">
          <time dateTime={post.date}>
            {post.date}
          </time>
          {post.tags && post.tags.length > 0 && (
             <span className="relative z-10 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 hover:bg-blue-100 transition-colors uppercase tracking-wide">
                {post.tags[0]}
             </span>
          )}
          {post.readingTime && (
            <span className="ml-auto flex items-center gap-1.5">
               <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               {post.readingTime}
            </span>
          )}
        </div>
        
        <div className="group relative">
          <h3 className="mt-2 text-2xl font-bold leading-tight text-slate-900 group-hover:text-blue-600 transition-colors">
            <Link href={`/blog/${post.slug}`}>
              <span className="absolute inset-0" />
              {post.title}
            </Link>
          </h3>
          <p className="mt-4 line-clamp-3 text-base leading-7 text-slate-600">
            {post.description}
          </p>
        </div>

        {post.author && (
            <div className="relative mt-8 flex items-center gap-x-4 border-t border-slate-100 pt-6 w-full">
            <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs ring-2 ring-white shadow-sm">
                {post.author.substring(0,2).toUpperCase()}
            </div>
            <div className="text-sm leading-6">
                <p className="font-semibold text-slate-900">
                <span className="absolute inset-0" />
                {post.author}
                </p>
                <p className="text-slate-500 text-xs">Author</p>
            </div>
            </div>
        )}
    </div>
  );
}
