"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you might route to a search page or filter the current list.
    // For now, let's just update the query param if we were on a search page, 
    // or we can implement client-side filtering in the parent component.
    // However, since this is a simple blog, let's assume this component 
    // is used to just set a URL query param, and the page reads it.
    // Or simpler: pass a callback if used inside the blog list.
    
    // Let's keep it simple: Just visual for now or emit an event?
    // Actually, distinct client-side 'SearchableBlogList' is better.
  };

  return (
    <div className="relative max-w-lg w-full mx-auto mb-10">
      <input
        type="text"
        className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm bg-white/50 backdrop-blur-sm transition-all"
        placeholder="Search articles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
}
