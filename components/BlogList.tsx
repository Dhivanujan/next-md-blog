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
        <div className="relative max-w-lg mx-auto">
          <input
            type="text"
            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm bg-white/80 backdrop-blur-sm transition-all"
            placeholder="Search articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {allTags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedTag === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === tag
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
            ))}
        </div>
      ) : (
        <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No posts found matching your criteria.</p>
            <button 
                onClick={() => {setQuery(''); setSelectedTag(null)}}
                className="mt-4 text-blue-600 font-medium hover:underline"
            >
                Clear filters
            </button>
        </div>
      )}
    </div>
  );
}
