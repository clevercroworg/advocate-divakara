import { MetadataRoute } from 'next';
import { seoKeywords } from '@/data/seoKeywords';
import { blogs } from '@/data/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.advocate-divakara-shivamogga.in';

  // Core static pages
  const staticRoutes = [
    '',
    '/about-best-lawyer-shivamogga',
    '/contact-best-lawyer-shivamogga',
    '/practice-areas-best-lawyer-shivamogga',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic SEO pages
  const dynamicRoutes = seoKeywords.map((keyword) => ({
    url: `${baseUrl}/${encodeURIComponent(keyword)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Dynamic Blog pages
  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.datePublished),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicRoutes, ...blogRoutes];
}
