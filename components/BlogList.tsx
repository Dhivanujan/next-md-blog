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
      <div className="mb-12 space-y-6">
        <div className="relative max-w-2xl mx-auto group">
          <input
            type="text"
            className="w-full pl-12 pr-12 py-4 rounded-2xl border border-slate-200 outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 shadow-sm hover:shadow-md transition-all text-lg bg-white placeholder:text-slate-400 text-slate-900"
            placeholder="Search articles directly..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-6 w-6 text-slate-400 group-focus-within:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Clear search"
            >
              <svg className="h-5 w-5 bg-slate-100 rounded-full p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {allTags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-sm ${
                selectedTag === null
                  ? 'bg-blue-600 text-white shadow-blue-200 hover:bg-blue-700'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              All Topics
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-sm capitalize ${
                  selectedTag === tag
                    ? 'bg-blue-600 text-white shadow-blue-200 hover:bg-blue-700'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
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
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
            ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-slate-200">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 mb-6">
                <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No articles found</h3>
            <p className="text-slate-500 max-w-xs mx-auto mb-8">We couldn't find any articles matching "{query}"{selectedTag && ` in ${selectedTag}`}.</p>
            <button 
                onClick={() => {setQuery(''); setSelectedTag(null)}}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
                Clear all filters
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
        </div>
      )}
    </div>
  );
}
