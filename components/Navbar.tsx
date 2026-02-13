import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 sm:border-slate-100 transition-all supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" className="font-bold text-xl text-slate-900 tracking-tight hover:text-blue-600 transition-colors flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-serif italic text-lg shadow-sm">B</span>
            <span>BlogApp</span>
          </Link>
        </div>
        <div className="hidden sm:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Home
          </Link>
          <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Articles
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
