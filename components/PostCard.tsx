import Link from "next/link";
import { PostData } from "@/lib/posts";

export default function PostCard({ post }: { post: PostData }) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
      <Link href={`/blog/${post.slug}`} className="block">
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600">
            {post.title}
        </h3>
        <p className="text-sm text-gray-500 mb-3">{post.date}</p>
        <p className="text-gray-700">{post.description}</p>
      </Link>
    </div>
  );
}
