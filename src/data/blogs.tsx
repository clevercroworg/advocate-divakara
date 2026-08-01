import Checklist from './blog-content/checklist';
import WhyBanksReject from './blog-content/why-banks-reject';
import UnderstandingEncumbrance from './blog-content/understanding-encumbrance';
import HusbandClaimMaintenance from './blog-content/husband-claim-maintenance';
import FindTopCivilLawyer from './blog-content/qa-find-top-civil-lawyer-shivamogga';

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
    slug: 'qa-how-to-find-top-civil-lawyer-in-shivamogga-advocate',
    title: 'Q&A: How to Find the Top Civil Lawyer in Shivamogga',
    shortTitle: 'Find Top Civil Lawyer',
    category: 'Legal Guide',
    description: 'Learn how to find the best civil lawyer and advocate in Shivamogga for property disputes, LSR, and civil litigation based on local court experience.',
    excerpt: 'Finding reliable legal representation in Shivamogga requires looking for specific professional qualities, such as extensive local court experience and deep knowledge of revenue documentation.',
    author: 'Advocate Divakara S.V.',
    datePublished: new Date().toISOString().split('T')[0],
    content: <FindTopCivilLawyer />,
  },
  {
    slug: 'can-a-husband-claim-maintenance-from-wife-indian-law-best-legal-advocate-shimoga',
    title: 'Can a Husband Also Claim Maintenance from a Wife? – What Indian Law Says',
    shortTitle: 'Husband Claiming Maintenance',
    category: 'Family Law',
    description: 'Learn about the legal provisions under the Hindu Marriage Act, 1955, where a husband can claim interim or permanent maintenance from his earning wife.',
    excerpt: 'When people think of matrimonial maintenance, the assumption is that it is exclusively a right for the wife. However, under specific circumstances, a husband can legally ask for maintenance.',
    author: 'Advocate Divakara S.V.',
    datePublished: new Date().toISOString().split('T')[0],
    content: <HusbandClaimMaintenance />,
  },
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
