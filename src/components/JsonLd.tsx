import React from 'react';

type JsonLdProps = {
  data: Record<string, any>;
};

// Base JSON-LD Wrapper
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// WebSite JSON-LD
export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Advocate Divakara S.V.",
    "url": "https://www.advocate-divakara-shivamogga.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.advocate-divakara-shivamogga.in/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  return <JsonLd data={data} />;
}

// Global Business Entity (Attorney / LegalService)
export function GlobalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "Attorney", "LocalBusiness"],
    "name": "Advocate Divakara S.V.",
    "image": "https://www.advocate-divakara-shivamogga.in/images/Advocate-devakara-shivamogga-image1.jpeg",
    "@id": "https://www.advocate-divakara-shivamogga.in",
    "url": "https://www.advocate-divakara-shivamogga.in",
    "telephone": "+919448628530",
    "email": "divu.smg.adv@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A-5, Renuka Complex, 1st Floor, Near Shaneshwara Temple, 3rd Cross, Durgigudi",
      "addressLocality": "Shivamogga",
      "addressRegion": "Karnataka",
      "postalCode": "577201",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.9299,
      "longitude": 75.5681
    },
    "priceRange": "$$",
    "areaServed": ["Shivamogga", "Shimoga", "Karnataka"]
  };
  return <JsonLd data={data} />;
}

// BreadcrumbList JSON-LD
export function BreadcrumbsJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://www.advocate-divakara-shivamogga.in${item.url}`
    }))
  };
  return <JsonLd data={data} />;
}

// FAQPage JSON-LD
export function FAQJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  return <JsonLd data={data} />;
}
