import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold text-gray-900 tracking-tight">MyBlog</h3>
            <p className="text-gray-500 text-sm mt-1">
              Thoughts, stories, and ideas.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              Twitter
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              GitHub
            </a>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-center text-sm text-gray-400">
              &copy; {new Date().getFullYear()} MyBlog. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
