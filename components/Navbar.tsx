import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" className="font-bold text-xl text-gray-800 tracking-tight hover:text-blue-600 transition-colors">
            MyBlog
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
            Home
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
