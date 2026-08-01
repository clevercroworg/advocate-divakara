import Link from "next/link";
import { Briefcase, ArrowLeft, CheckCircle } from "lucide-react";

export default function DocumentVettingPage() {
  return (
    <div className="bg-legal-bg min-h-screen py-16 md:py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-5 md:px-6 lg:px-8">
        <Link href="/practice-areas-best-lawyer-shivamogga" className="inline-flex items-center text-legal-accent hover:underline mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Practice Areas
        </Link>

        <div className="bg-white p-10 shadow-lg rounded-[20px] border-t-4 border-legal-accent">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-legal-bg p-4 rounded-full">
              <Briefcase className="w-10 h-10 text-legal-accent" />
            </div>
            <h1 className="text-section text-legal-dark fade-up text-legal-dark">Document Vetting & Due Diligence</h1>
          </div>

          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="lead text-xl text-gray-600 mb-8 border-l-4 border-legal-accent pl-4">
              Expert legal vetting of property and loan documents, including sale deeds, agreements, GPA, and mortgage deeds, to identify risks and ensure absolute validity.
            </p>

            <h2 className="text-2xl font-bold font-cormorant text-legal-dark mb-4 mt-8">Preventing Legal Disputes</h2>
            <p className="mb-4">
              A poorly drafted or unverified legal document can result in years of litigation. Document vetting involves a critical review of legal instruments before they are signed or registered, ensuring your rights are protected and liabilities are minimized.
            </p>

            <h2 className="text-2xl font-bold font-cormorant text-legal-dark mb-4 mt-8">Documents We Review:</h2>
            <ul className="space-y-3 mb-8 list-none pl-0">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-legal-accent flex-shrink-0 mt-0.5" />
                <span><strong>Sale & Agreement to Sell:</strong> Reviewing terms, payment schedules, and default clauses.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-legal-accent flex-shrink-0 mt-0.5" />
                <span><strong>Power of Attorney (GPA):</strong> Ensuring the GPA is legally valid, properly executed, and registered if applicable.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-legal-accent flex-shrink-0 mt-0.5" />
                <span><strong>Mortgage & Lease Deeds:</strong> Verifying the terms of secured lending and long-term lease agreements.</span>
              </li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-10">
              <h3 className="text-xl font-bold text-legal-dark mb-2">Need a Document Reviewed?</h3>
              <p className="mb-4 text-sm text-gray-600">Don't sign until you are certain of the legal implications.</p>
              <Link href="/contact-best-lawyer-shivamogga" className="btn-primary">
                Contact Advocate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
