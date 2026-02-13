import BlogList from "@/components/BlogList";
import { getSortedPostsData } from "@/lib/posts";

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
        {/* Header */}
        <div className="bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
                    Engineering Blog
                </h1>
                <p className="mt-4 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
                    Technical deep dives, tutorials, and thoughts on software engineering, best practices, and the future of web development.
                </p>
            </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <BlogList posts={allPostsData} />
        </div>
    </div>
  );
}
