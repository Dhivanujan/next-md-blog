import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        Welcome to My Blog
      </h1>
      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Built with Next.js 14, App Router, Tailwind CSS, and Markdown.
      </p>
      <div className="mt-10 flex justify-center gap-4">
        <Link 
          href="/blog" 
          className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
        >
          Read Blog
        </Link>
        <a 
          href="https://nextjs.org" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
        >
          Learn Next.js
        </a>
      </div>
    </div>
  );
}
