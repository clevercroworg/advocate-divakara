import Link from "next/link";
import { FileText, ArrowLeft, CheckCircle } from "lucide-react";

export default function OriginalVariationReportsPage() {
  return (
    <div className="bg-legal-bg min-h-screen py-16 md:py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-5 md:px-6 lg:px-8">
        <Link href="/practice-areas-best-lawyer-shivamogga" className="inline-flex items-center text-legal-accent hover:underline mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Areas of Expertise
        </Link>

        <div className="bg-white p-10 shadow-lg rounded-[20px] border-t-4 border-legal-accent">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-legal-bg p-4 rounded-full">
              <FileText className="w-10 h-10 text-legal-accent" />
            </div>
            <h1 className="text-section text-legal-dark fade-up text-legal-dark">Original Variation Reports</h1>
          </div>

          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="lead text-xl text-gray-600 mb-8 border-l-4 border-legal-accent pl-4">
              Verification of changes in survey numbers, ownership history, subdivisions, phodi, and re-survey records by cross-checking original land documents.
            </p>

            <h2 className="text-2xl font-bold font-cormorant text-legal-dark mb-4 mt-8">Ensuring Accurate Land Records</h2>
            <p className="mb-4">
              Over time, land records undergo numerous changes due to subdivisions, family partitions, re-surveys, and government acquisitions. Our Original Variation Reports meticulously track these changes to ensure that the current property details accurately reflect the historical records without any illegal discrepancies.
            </p>

            <h2 className="text-2xl font-bold font-cormorant text-legal-dark mb-4 mt-8">What We Verify:</h2>
            <ul className="space-y-3 mb-8 list-none pl-0">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-legal-accent flex-shrink-0 mt-0.5" />
                <span><strong>Survey Number Changes:</strong> Tracing the evolution of old survey numbers to new ones (Hissa & Phodi).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-legal-accent flex-shrink-0 mt-0.5" />
                <span><strong>Ownership History:</strong> Cross-checking mutation registers against original sale deeds and partition deeds.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-legal-accent flex-shrink-0 mt-0.5" />
                <span><strong>Record Discrepancies:</strong> Identifying and resolving mismatches in land dimensions, boundaries, and classifications.</span>
              </li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-10">
              <h3 className="text-xl font-bold text-legal-dark mb-2">Need a Variation Report?</h3>
              <p className="mb-4 text-sm text-gray-600">Ensure your land records are legally sound and updated.</p>
              <Link href="/contact-best-lawyer-shivamogga" className="btn-primary">
                Contact Advocate Divakara S.V.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
