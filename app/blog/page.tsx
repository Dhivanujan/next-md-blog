import BlogList from "@/components/BlogList";
import { getSortedPostsData } from "@/lib/posts";

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Blog</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Insights, tutorials, and latest news from the world of web development.
        </p>
      </div>
      
      <BlogList posts={allPostsData} />
    </div>
  );
}
