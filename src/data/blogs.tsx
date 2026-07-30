import Checklist from './blog-content/checklist';
import WhyBanksReject from './blog-content/why-banks-reject';
import UnderstandingEncumbrance from './blog-content/understanding-encumbrance';

export interface BlogPost {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  excerpt: string;
  author: string;
  datePublished: string;
  content: React.ReactNode;
}

export const blogs: BlogPost[] = [
  {
    slug: 'property-document-verification-checklist-shivamogga',
    title: 'How to Verify Property Documents Before Buying a House in Shivamogga',
    shortTitle: 'Property Verification Checklist',
    category: 'Property Law',
    description: 'A complete legal checklist to verify property titles and ensure your real estate investment in Shivamogga is legally safe and secure.',
    excerpt: 'A comprehensive checklist to verify property titles and ensure your real estate investment is legally safe and secure. Learn what documents banks demand.',
    author: 'Advocate Divakara S.V.',
    datePublished: new Date().toISOString().split('T')[0], // Always current or can be hardcoded
    content: <Checklist />,
  },
  {
    slug: 'why-banks-reject-property-titles-lsr-shivamogga',
    title: 'Why Banks Reject Property Titles: Common Pitfalls in Legal Scrutiny Reports (LSR)',
    shortTitle: 'Why Banks Reject Titles',
    category: 'Banking & LSR',
    description: 'Discover the common reasons why banks reject home loans due to defective property titles, missing mother deeds, and LSR issues in Karnataka.',
    excerpt: 'Discover the frequent legal defects in property documents that cause banks to decline home loan approvals in Karnataka.',
    author: 'Advocate Divakara S.V.',
    datePublished: new Date().toISOString().split('T')[0],
    content: <WhyBanksReject />,
  },
  {
    slug: 'understanding-encumbrance-certificates-revenue-records-karnataka',
    title: 'Understanding Encumbrance Certificates (EC) and Revenue Records in Karnataka',
    shortTitle: 'Understanding EC & Records',
    category: 'Document Guide',
    description: 'A complete guide to reading Encumbrance Certificates (EC), Khata, and RTC (Pahani) for property buyers in Shivamogga, Karnataka.',
    excerpt: 'Learn how to read and interpret your property\'s EC, RTC, and Khata to confirm continuous and clear ownership flow.',
    author: 'Advocate Divakara S.V.',
    datePublished: new Date().toISOString().split('T')[0],
    content: <UnderstandingEncumbrance />,
  },
];
