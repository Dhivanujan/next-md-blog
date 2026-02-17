"use client";

import { useState, useMemo } from 'react';
import { PostData } from '@/lib/posts';
import PostCard from './PostCard';

export default function BlogList({ posts }: { posts: PostData[] }) {
  const [query, setQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach(post => {
      post.tags?.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, [posts]);

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesQuery = post.title.toLowerCase().includes(query.toLowerCase()) || 
                         post.description.toLowerCase().includes(query.toLowerCase());
    const matchesTag = selectedTag ? post.tags?.includes(selectedTag) : true;
    return matchesQuery && matchesTag;
  });

  return (
    <div>
      {/* Search and Filter Section */}
      <div className="mb-16 space-y-8">
        <div className="relative max-w-2xl mx-auto group z-10">
          <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <input
            type="text"
            className="relative w-full pl-14 pr-12 py-5 rounded-3xl border-0 ring-1 ring-slate-200 outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all text-lg bg-white/80 backdrop-blur-xl placeholder:text-slate-400 text-slate-900 font-medium"
            placeholder="Search articles directly..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none z-10">
            <svg className="h-6 w-6 text-slate-400 group-focus-within:text-indigo-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute inset-y-0 right-0 pr-5 flex items-center cursor-pointer text-slate-400 hover:text-slate-600 transition-colors z-10"
              aria-label="Clear search"
            >
              <svg className="h-5 w-5 bg-slate-100 rounded-full p-0.5 hover:bg-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {allTags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm ring-1 ring-inset ${
                selectedTag === null
                  ? 'bg-slate-900 text-white ring-slate-900 shadow-slate-900/20 hover:bg-slate-800'
                  : 'bg-white text-slate-600 ring-slate-200 hover:ring-indigo-200 hover:bg-indigo-50/50 hover:text-indigo-600'
              }`}
            >
              All Topics
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm ring-1 ring-inset capitalize ${
                  selectedTag === tag
                    ? 'bg-indigo-600 text-white ring-indigo-600 shadow-indigo-500/30 hover:bg-indigo-700'
                    : 'bg-white text-slate-600 ring-slate-200 hover:ring-indigo-200 hover:bg-indigo-50/50 hover:text-indigo-600'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pb-20">
            {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
            ))}
        </div>
      ) : (
        <div className="text-center py-32 bg-white rounded-[2.5rem] border border-dashed border-slate-300/60 shadow-sm">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-50 mb-6 ring-8 ring-slate-50">
                <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">No articles found</h3>
            <p className="text-slate-500 max-w-sm mx-auto mb-10 text-lg">We couldn't find any articles matching "{query}"{selectedTag && ` in ${selectedTag}`}.</p>
            <button 
                onClick={() => {setQuery(''); setSelectedTag(null)}}
                className="inline-flex items-center px-6 py-3 rounded-full text-indigo-600 font-bold bg-indigo-50 hover:bg-indigo-100 transition-colors"
            >
                Clear all filters
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
        </div>
      )}
    </div>
  );
}
