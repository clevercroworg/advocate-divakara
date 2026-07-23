import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/'], // Disallow private paths if you ever add them
    },
    sitemap: 'https://advocate-divakara-shivamogga.in/sitemap.xml',
  };
}
