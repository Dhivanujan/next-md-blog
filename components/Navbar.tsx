import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" className="font-bold text-xl text-gray-900 tracking-tighter hover:text-blue-600 transition-colors">
            MyBlog<span className="text-blue-600">.</span>
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            Blog
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition shadow-sm hover:shadow-md"
          >
            Subscribe
          </a>
        </div>
      </div>
    </nav>
  );
}
