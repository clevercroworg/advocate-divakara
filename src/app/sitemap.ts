import { MetadataRoute } from 'next';
import { seoKeywords } from '@/data/seoKeywords';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://advocate-divakara-shivamogga.in'; // Ensure this matches the actual production domain

  // Core static pages
  const staticRoutes = [
    '',
    '/about-best-lawyer-shivamogga',
    '/contact-best-lawyer-shivamogga',
    '/practice-areas-best-lawyer-shivamogga',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic SEO pages
  const dynamicRoutes = seoKeywords.map((keyword) => ({
    url: `${baseUrl}/${keyword}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
