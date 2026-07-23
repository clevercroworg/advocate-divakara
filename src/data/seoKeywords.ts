export const seoKeywords = [
  "advocate-in-shivamogga",
  "best-advocate-in-shivamogga",
  "lawyer-in-shivamogga",
  "best-lawyer-in-shivamogga",
  "legal-consultant-in-shivamogga",
  "legal-advice-in-shivamogga",
  "property-lawyer-in-shivamogga",
  "property-advocate-in-shivamogga",
  "civil-lawyer-in-shivamogga",
  "real-estate-lawyer-in-shivamogga",
  "legal-scrutiny-report-shivamogga",
  "property-title-verification-shivamogga",
  "property-document-verification-shivamogga",
  "home-loan-legal-opinion-shivamogga",
  "property-due-diligence-shivamogga",
  "mortgage-legal-assistance-shivamogga",
  "bank-legal-opinion-shivamogga",
  "layout-document-scrutiny-shivamogga",
  "original-variation-report-shivamogga",
  "bank-panel-advocate-shivamogga",
  "legal-services-for-banks-shivamogga",
  "legal-services-for-nbfcs-shivamogga",
  "bank-compliant-legal-scrutiny-shivamogga",
  "title-flow-verification-shivamogga",
  "encumbrance-verification-shivamogga",
  "property-ownership-verification-shivamogga",
  "sale-deed-verification-shivamogga",
  "gift-deed-verification-shivamogga",
  "partition-deed-verification-shivamogga",
  "land-document-verification-shivamogga",
  "revenue-record-verification-shivamogga",
  "home-loan-lawyer-shivamogga",
  "property-legal-opinion-shivamogga",
  "property-verification-for-home-loan-shivamogga",
  "legal-opinion-before-buying-property-shivamogga",
  "property-document-lawyer-shivamogga",
  "property-dispute-lawyer-shivamogga"
];

// Helper to convert slug to human readable title (e.g. "best-advocate-in-shivamogga" -> "Best Advocate In Shivamogga")
export function formatSlugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
