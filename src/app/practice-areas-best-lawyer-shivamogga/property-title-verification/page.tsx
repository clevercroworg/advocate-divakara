import Link from "next/link";
import { Home, ArrowLeft, CheckCircle } from "lucide-react";

export default function TitleVerificationPage() {
  return (
    <div className="bg-legal-bg min-h-screen py-16 md:py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-5 md:px-6 lg:px-8">
        <Link href="/practice-areas-best-lawyer-shivamogga" className="inline-flex items-center text-legal-accent hover:underline mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Practice Areas
        </Link>

        <div className="bg-white p-10 shadow-lg rounded-[20px] border-t-4 border-legal-accent">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-legal-bg p-4 rounded-full">
              <Home className="w-10 h-10 text-legal-accent" />
            </div>
            <h1 className="text-section text-legal-dark fade-up text-legal-dark">Property Title Verification</h1>
          </div>

          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="lead text-xl text-gray-600 mb-8 border-l-4 border-legal-accent pl-4">
              Protect your investment with comprehensive verification of property documents, ensuring safe transactions and clear ownership titles in Shivamogga.
            </p>

            <h2 className="text-2xl font-bold font-cormorant text-legal-dark mb-4 mt-8">Why is Title Verification Important?</h2>
            <p className="mb-4">
              Purchasing property without a clear title can lead to prolonged legal disputes, financial loss, and inability to secure bank loans. Proper title verification confirms that the seller has the legal right to sell the property and that no other party can claim ownership.
            </p>

            <h2 className="text-2xl font-bold font-cormorant text-legal-dark mb-4 mt-8">What We Verify:</h2>
            <ul className="space-y-3 mb-8 list-none pl-0">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-legal-accent flex-shrink-0 mt-0.5" />
                <span><strong>Sale Deeds & Conveyance:</strong> Ensuring authenticity and proper registration of prior deeds.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-legal-accent flex-shrink-0 mt-0.5" />
                <span><strong>Revenue Records:</strong> Cross-checking Khata, RTC, and mutation records against original sale documents.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-legal-accent flex-shrink-0 mt-0.5" />
                <span><strong>Original Verifications:</strong> Verification of changes in survey numbers, subdivisions, phodi, and re-survey records.</span>
              </li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-10">
              <h3 className="text-xl font-bold text-legal-dark mb-2">Secure Your Property Transaction</h3>
              <p className="mb-4 text-sm text-gray-600">Don't leave your investment to chance. Get a professional title verification today.</p>
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
