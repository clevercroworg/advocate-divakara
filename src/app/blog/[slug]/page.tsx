import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Metadata, ResolvingMetadata } from "next";
import { blogs } from "@/data/blogs";
import { JsonLd } from "@/components/JsonLd";

// This tells Next.js to statically generate all these pages at build time
export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

// Dynamically generate SEO metadata for each specific blog page
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const blog = blogs.find((b) => b.slug === slug);
  
  if (!blog) return {};
  
  return {
    title: `${blog.title} | Advocate Divakara S.V.`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://advocate-divakara-shivamogga.in/blog/${slug}`,
      type: 'article',
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const blog = blogs.find((b) => b.slug === slug);

  // 404 if the slug isn't in our predefined blogs list
  if (!blog) {
    notFound();
  }

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.description,
    "author": {
      "@type": "Person",
      "name": blog.author,
      "url": "https://advocate-divakara-shivamogga.in/about-best-lawyer-shivamogga"
    },
    "publisher": {
      "@type": "LegalService",
      "name": "Advocate Divakara S.V.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://advocate-divakara-shivamogga.in/images/logo.png"
      }
    },
    "datePublished": blog.datePublished,
  };

  return (
    <div className="bg-[#f0dac5] min-h-screen pb-16">
      <JsonLd data={blogPostingJsonLd} />

      {/* Hero Section */}
      <section className="bg-[#50223c] text-white pt-8 md:pt-16 pb-12 md:pb-16 px-5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-sm text-gray-300 mb-6 font-sans">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium truncate">{blog.shortTitle}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold font-cormorant leading-tight mb-6">
            {blog.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm font-sans text-gray-300 border-t border-white/20 pt-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-legal-accent text-white flex items-center justify-center font-bold text-lg border-2 border-white/30">
                DS
              </div>
              <div>
                <p className="text-white font-medium">{blog.author}</p>
                <p>25+ Years Experience | Shivamogga</p>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-5 mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-20">
        
        {/* Article Body */}
        <article className="lg:col-span-8 bg-white p-6 md:p-10 rounded-2xl md:rounded-[32px] shadow-xl border border-gray-100 font-sans">
          <div className="prose prose-lg md:prose-xl text-gray-700 max-w-none prose-a:text-[#D47C42] prose-a:no-underline hover:prose-a:underline">
            {blog.content}
          </div>
        </article>
      </main>
    </div>
  );
}
