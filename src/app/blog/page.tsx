import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { blogs } from '@/data/blogs';

export const metadata: Metadata = {
  title: 'Legal Blog & Property Insights | Advocate Divakara S.V.',
  description: 'Read the latest legal insights, property document verification guides, and banking norms from Advocate Divakara S.V. in Shivamogga.',
};

export default function BlogArchivePage() {
  return (
    <div className="bg-[#f0dac5] min-h-screen pb-16 md:pb-24">
      {/* Deep Navy Blue Hero Section */}
      <section className="bg-[#50223c] text-white pt-8 pb-16 md:pt-24 md:pb-32 rounded-b-[30px] md:rounded-b-[40px] shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center text-sm text-gray-300 mb-8 overflow-x-auto whitespace-nowrap pb-2">
            <ol className="flex items-center space-x-2">
              <li className="flex items-center">
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                  <Home className="w-4 h-4" />
                  <span className="sr-only">Home</span>
                </Link>
                <ChevronRight className="w-4 h-4 mx-2 text-gray-500 flex-shrink-0" />
              </li>
              <li className="flex items-center">
                <span className="text-white font-medium" aria-current="page">
                  Blog & Legal Insights
                </span>
              </li>
            </ol>
          </nav>

          <div className="text-left md:text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-cormorant text-white mb-4 md:mb-6 drop-shadow-md">
              Legal Insights & Property Guides
            </h1>
            <p className="text-base md:text-xl text-gray-300 leading-relaxed">
              Stay informed with expert legal advice, property verification tips, and updates on banking norms in Karnataka.
            </p>
          </div>
        </div>
      </section>
{/* Blog Grid Section */}
      <section className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 -mt-8 md:-mt-12 relative z-20">
        <div className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-12 shadow-xl shadow-black/5 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {blogs.map((blog) => (
              <div key={blog.slug} className="bg-[#f0dac5] rounded-[24px] p-8 shadow-sm border border-gray-200 flex flex-col hover:shadow-xl transition-shadow duration-300">
                <span className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider">{blog.category}</span>
                <h2 className="font-bold text-xl text-legal-dark mb-4 font-sans leading-snug">{blog.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {blog.excerpt}
                </p>
                <Link href={`/blog/${blog.slug}`} className="text-[#D47C42] font-bold text-sm flex items-center gap-2 hover:text-[#b06536] transition-colors mt-auto group">
                  Read Article <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
            
          </div>
        </div>
      </section>
</div>
  );
}
