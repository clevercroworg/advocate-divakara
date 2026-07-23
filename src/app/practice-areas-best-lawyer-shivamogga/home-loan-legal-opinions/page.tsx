import Link from "next/link";
import { ShieldCheck, ArrowLeft, CheckCircle } from "lucide-react";

export default function HomeLoanOpinionsPage() {
  return (
    <div className="bg-legal-bg min-h-screen py-16 md:py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-5 md:px-6 lg:px-8">
        <Link href="/practice-areas-best-lawyer-shivamogga" className="inline-flex items-center text-legal-accent hover:underline mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Practice Areas
        </Link>

        <div className="bg-white p-10 shadow-lg rounded-[20px] border-t-4 border-legal-accent">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-legal-bg p-4 rounded-full">
              <ShieldCheck className="w-10 h-10 text-legal-accent" />
            </div>
            <h1 className="text-section text-legal-dark fade-up text-legal-dark">Home Loan Legal Opinions</h1>
          </div>

          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="lead text-xl text-gray-600 mb-8 border-l-4 border-legal-accent pl-4">
              Clear, bank-compliant legal opinions for home loans, mortgage loans, and secured lending transactions, trusted by major financial institutions.
            </p>

            <h2 className="text-2xl font-bold font-cormorant text-legal-dark mb-4 mt-8">Facilitating Secure Lending</h2>
            <p className="mb-4">
              Banks and NBFCs require absolute certainty before disbursing loans against property. Our Home Loan Legal Opinions are structured to meet the stringent compliance criteria of financial institutions, clearly highlighting the property's marketable title and any associated risks.
            </p>

            <h2 className="text-2xl font-bold font-cormorant text-legal-dark mb-4 mt-8">Key Aspects of Our Opinions:</h2>
            <ul className="space-y-3 mb-8 list-none pl-0">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-legal-accent flex-shrink-0 mt-0.5" />
                <span><strong>Marketability:</strong> Certifying that the property can be legally mortgaged and sold if required.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-legal-accent flex-shrink-0 mt-0.5" />
                <span><strong>Compliance Checks:</strong> Ensuring all local municipal and statutory laws are adhered to.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-legal-accent flex-shrink-0 mt-0.5" />
                <span><strong>Risk Assessment:</strong> Identifying minor discrepancies and providing actionable solutions for rectification.</span>
              </li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-10">
              <h3 className="text-xl font-bold text-legal-dark mb-2">Need a Legal Opinion for Your Loan?</h3>
              <p className="mb-4 text-sm text-gray-600">We work with individuals and institutions to expedite the lending process.</p>
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
