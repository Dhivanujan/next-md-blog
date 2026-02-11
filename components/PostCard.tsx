import Link from "next/link";
import { PostData } from "@/lib/posts";

import Link from "next/link";
import { PostData } from "@/lib/posts";

export default function PostCard({ post }: { post: PostData }) {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="flex items-center gap-x-4 text-xs mb-4">
          <time dateTime={post.date} className="text-gray-500">
            {post.date}
          </time>
          <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
            Article
          </span>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-blue-600 transition-colors">
            <span className="absolute inset-0" />
            {post.title}
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {post.description}
          </p>
        </div>
      </Link>
    </div>
  );
}
