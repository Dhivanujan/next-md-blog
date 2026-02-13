import Link from "next/link";
import { PostData } from "@/lib/posts";

import Link from "next/link";
import { PostData } from "@/lib/posts";

export default function PostCard({ post }: { post: PostData }) {
  return (
    <div className="group relative flex flex-col items-start justify-between bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center gap-x-4 text-xs mb-4 w-full">
          <time dateTime={post.date} className="text-gray-500">
            {post.date}
          </time>
          {post.tags && post.tags.length > 0 ? (
             <span className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-600 hover:bg-blue-100 transition-colors">
                {post.tags[0]}
             </span>
          ) : (
            <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                Article
            </span>
          )}
          {post.readingTime && (
            <span className="text-gray-400 ml-auto flex items-center gap-1">
               <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               {post.readingTime}
            </span>
          )}
        </div>
        
        <div className="group relative">
          <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-blue-600 transition-colors">
            <Link href={`/blog/${post.slug}`}>
              <span className="absolute inset-0" />
              {post.title}
            </Link>
          </h3>
          <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
            {post.description}
          </p>
        </div>

        {post.author && (
            <div className="relative mt-6 flex items-center gap-x-4">
            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-xs ring-1 ring-white">
                {post.author.substring(0,2).toUpperCase()}
            </div>
            <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                <span className="absolute inset-0" />
                {post.author}
                </p>
            </div>
            </div>
        )}
    </div>
  );
}
