import Link from "next/link";
import PostCard from "@/components/PostCard";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const recentPosts = getSortedPostsData().slice(0, 2);

  return (
    <div className="relative isolate">
      {/* Hero Section */}
      <div className="relative isolate pt-14 lg:pt-20 border-b border-slate-100 bg-white">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-white via-white to-blue-50/30"></div>
        
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-slate-600 ring-1 ring-slate-900/10 hover:ring-slate-900/20 bg-white/50 backdrop-blur-sm transition-all">
                <span className="font-semibold text-blue-600">New</span> The app router migration guide is out. <Link href="/blog/second-post" className="font-semibold text-blue-600"><span className="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></Link>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl mb-6">
              Engineering the Future of <span className="text-blue-600">Web Development</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 max-w-xl mx-auto">
              Deep dives into software architecture, modern frontend patterns, and building scalable applications. Join the community of developers building better web.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/blog"
                className="rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 transition-all hover:scale-105"
              >
                Read the Blog
              </Link>
              <a href="https://github.com" className="text-sm font-semibold leading-6 text-slate-900 flex items-center gap-1 group">
                View on GitHub <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Posts Section */}
      <div className="bg-slate-50/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Latest Insights</h2>
            <p className="mt-2 text-lg leading-8 text-slate-600">
              Curated articles on the latest tech trends and coding practices.
            </p>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-16 text-center">
             <Link href="/blog" className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-8 py-3 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50 hover:text-blue-600 transition-colors">
                View all articles
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
