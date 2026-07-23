import Link from "next/link";
import { Briefcase, ArrowLeft, CheckCircle } from "lucide-react";

export default function DueDiligencePage() {
  return (
    <div className="bg-legal-bg min-h-screen py-16 md:py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-5 md:px-6 lg:px-8">
        <Link href="/practice-areas-best-lawyer-shivamogga" className="inline-flex items-center text-legal-accent hover:underline mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Areas of Expertise
        </Link>

        <div className="bg-white p-10 shadow-lg rounded-[20px] border-t-4 border-legal-accent">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-legal-bg p-4 rounded-full">
              <Briefcase className="w-10 h-10 text-legal-accent" />
            </div>
            <h1 className="text-section text-legal-dark fade-up text-legal-dark">Property Legal Due Diligence</h1>
          </div>

          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="lead text-xl text-gray-600 mb-8 border-l-4 border-legal-accent pl-4">
              Thorough legal due diligence for residential and commercial properties to support safe purchase, lending, and investment decisions.
            </p>

            <h2 className="text-2xl font-bold font-cormorant text-legal-dark mb-4 mt-8">Comprehensive Risk Assessment</h2>
            <p className="mb-4">
              Before committing to a significant real estate investment, it is crucial to uncover any hidden legal liabilities, pending litigations, or statutory non-compliances. Our extensive due diligence process provides a 360-degree legal view of the target property.
            </p>

            <h2 className="text-2xl font-bold font-cormorant text-legal-dark mb-4 mt-8">Our Due Diligence Scope:</h2>
            <ul className="space-y-3 mb-8 list-none pl-0">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-legal-accent flex-shrink-0 mt-0.5" />
                <span><strong>Title Clearance:</strong> Confirming the seller's absolute right to transfer the property.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-legal-accent flex-shrink-0 mt-0.5" />
                <span><strong>Litigation Check:</strong> Searching court records for any pending disputes or injunctions involving the property.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-legal-accent flex-shrink-0 mt-0.5" />
                <span><strong>Statutory Compliance:</strong> Ensuring building plans, land conversion, and tax assessments are up to date and legally sound.</span>
              </li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-10">
              <h3 className="text-xl font-bold text-legal-dark mb-2">Planning a Property Investment?</h3>
              <p className="mb-4 text-sm text-gray-600">Mitigate risks with our expert legal due diligence services.</p>
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
