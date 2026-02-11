import PostCard from "@/components/PostCard";
import { getSortedPostsData } from "@/lib/posts";

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Latest Posts</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {allPostsData.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
