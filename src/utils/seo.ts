import type { Metadata } from 'next';

const siteName = 'Advocate Divakara S.V.';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.advocate-divakara-shivamogga.in';

type SeoProps = {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
};

export function generateSeoMetadata({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = `${baseUrl}/images/Advocate-devakara-shivamogga-image1.jpeg`,
}: SeoProps): Metadata {
  const fullTitle = `${title} | ${siteName}`;
  const url = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;

  return {
    title: fullTitle,
    description,
    keywords: keywords || 'Advocate Shivamogga, Lawyer Shivamogga, Legal Consultant, Property Lawyer, Legal Scrutiny Report, Home Loan Legal Opinion',
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
