import Link from "next/link";
import { FileText, ArrowLeft, CheckCircle } from "lucide-react";

export default function LSRPage() {
  return (
    <div className="bg-legal-bg min-h-screen py-16 md:py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-5 md:px-6 lg:px-8">
        <Link href="/practice-areas-best-lawyer-shivamogga" className="inline-flex items-center text-legal-accent hover:underline mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Practice Areas
        </Link>

        <div className="bg-white p-10 shadow-lg rounded-[20px] border-t-4 border-legal-accent">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-legal-bg p-4 rounded-full">
              <FileText className="w-10 h-10 text-legal-accent" />
            </div>
            <h1 className="text-section text-legal-dark fade-up text-legal-dark">Legal Scrutiny Reports (LSR)</h1>
          </div>

          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="lead text-xl text-gray-600 mb-8 border-l-4 border-legal-accent pl-4">
              We specialize in preparing detailed, highly accurate, and bank-compliant Legal Scrutiny Reports (LSR) for home loans, mortgage loans, and secured lending in Shivamogga.
            </p>

            <h2 className="text-2xl font-bold font-cormorant text-legal-dark mb-4 mt-8">What is a Legal Scrutiny Report?</h2>
            <p className="mb-4">
              A Legal Scrutiny Report (LSR) is a comprehensive document prepared by a qualified legal professional after thoroughly examining property documents. It determines the legality of the property title, traces the flow of ownership, verifies encumbrances, and ensures statutory compliance, helping banks and NBFCs make safe lending decisions.
            </p>

            <h2 className="text-2xl font-bold font-cormorant text-legal-dark mb-4 mt-8">Our LSR Process Includes:</h2>
            <ul className="space-y-3 mb-8 list-none pl-0">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-legal-accent flex-shrink-0 mt-0.5" />
                <span><strong>Title Flow Verification:</strong> Tracing the unbroken chain of ownership across multiple decades.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-legal-accent flex-shrink-0 mt-0.5" />
                <span><strong>Encumbrance Check:</strong> Examining Encumbrance Certificates (EC) to identify any existing loans, mortgages, or legal liabilities.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-legal-accent flex-shrink-0 mt-0.5" />
                <span><strong>Revenue Records Scrutiny:</strong> Verifying RTCs, mutation registers, and Khata extracts to ensure revenue department compliance.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-legal-accent flex-shrink-0 mt-0.5" />
                <span><strong>Statutory Approvals:</strong> Checking layout plans, conversion orders (ALN), and building permissions.</span>
              </li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-10">
              <h3 className="text-xl font-bold text-legal-dark mb-2">Ready to request an LSR?</h3>
              <p className="mb-4 text-sm text-gray-600">Ensure your property transaction is risk-free with a comprehensive legal opinion.</p>
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
