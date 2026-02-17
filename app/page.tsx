import Link from "next/link";
import PostCard from "@/components/PostCard";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const recentPosts = getSortedPostsData().slice(0, 2);

  return (
    <div className="relative isolate">
      {/* Hero Section */}
      <div className="relative isolate pt-14 lg:pt-20 border-b border-slate-200/60 bg-white overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50/50 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50/20 via-white to-blue-50/20 blur-3xl"></div>
        
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            
            <div className="mb-8 flex justify-center animate-fade-in opacity-0">
              <Link href="/blog/second-post" className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-slate-600 ring-1 ring-slate-900/10 hover:ring-indigo-600/30 hover:bg-indigo-50/50 bg-white/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 group shadow-sm">
                <span className="font-semibold text-indigo-600 mr-2">New Update</span> 
                The app router migration guide is out. 
                <span className="font-semibold text-indigo-600 ml-1 inline-flex items-center group-hover:translate-x-1 transition-transform">
                   Read <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6 animate-fade-in animate-delay-100 opacity-0 leading-tight">
              Engineering the Future of <br className="hidden sm:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Web Development</span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto animate-fade-in animate-delay-200 opacity-0 font-light">
              Deep dives into software architecture, modern frontend patterns, and building scalable applications. Join the community of developers building a better web.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in animate-delay-300 opacity-0">
              <Link
                href="/blog"
                className="rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-500/20 hover:bg-slate-800 hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all duration-300"
              >
                Start Reading
              </Link>
              <a href="https://github.com" className="text-sm font-semibold leading-6 text-slate-900 flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white hover:shadow-md transition-all duration-300 group">
                <svg className="h-5 w-5 text-slate-500 group-hover:text-slate-900" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
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
            <p className="mt-4 text-lg leading-8 text-slate-600 bg-white/50 inline-block px-4 py-1 rounded-full backdrop-blur-sm">
              Curated articles on the latest tech trends and coding practices.
            </p>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-20 text-center">
             <Link href="/blog" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-300">
                View all articles
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
