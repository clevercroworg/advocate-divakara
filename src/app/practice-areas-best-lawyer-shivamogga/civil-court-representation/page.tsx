import Link from "next/link";
import { Landmark, ArrowLeft, CheckCircle } from "lucide-react";

export default function CivilCourtPage() {
  return (
    <div className="bg-legal-bg min-h-screen py-16 md:py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-5 md:px-6 lg:px-8">
        <Link href="/practice-areas-best-lawyer-shivamogga" className="inline-flex items-center text-legal-accent hover:underline mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Practice Areas
        </Link>

        <div className="bg-white p-10 shadow-lg rounded-[20px] border-t-4 border-legal-accent">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-legal-bg p-4 rounded-full">
              <Landmark className="w-10 h-10 text-legal-accent" />
            </div>
            <h1 className="text-section text-legal-dark fade-up text-legal-dark">Civil Court Representation in Shivamogga</h1>
          </div>

          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="lead text-xl text-gray-600 mb-8 border-l-4 border-legal-accent pl-4">
              Providing robust legal representation and advisory services for property disputes, partition suits, and recovery matters at the Shivamogga District Court.
            </p>

            <h2 className="text-2xl font-bold font-cormorant text-legal-dark mb-4 mt-8">Experienced Courtroom Advocacy</h2>
            <p className="mb-4">
              Beyond non-litigation property services, Advocate Divakara S.V. brings extensive courtroom experience to resolve complex civil disputes. We provide strategic counsel and representation aimed at achieving favorable outcomes efficiently.
            </p>

            <h2 className="text-2xl font-bold font-cormorant text-legal-dark mb-4 mt-8">Our Litigation Focus Areas:</h2>
            <ul className="space-y-3 mb-8 list-none pl-0">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-legal-accent flex-shrink-0 mt-0.5" />
                <span><strong>Property & Partition Disputes:</strong> Handling ancestral property division and ownership conflicts.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-legal-accent flex-shrink-0 mt-0.5" />
                <span><strong>Injunctions & Stays:</strong> Securing legal orders to prevent unauthorized construction, sale, or trespassing.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-legal-accent flex-shrink-0 mt-0.5" />
                <span><strong>Recovery & Contract Suits:</strong> Enforcing contractual obligations and financial recovery through civil channels.</span>
              </li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-10">
              <h3 className="text-xl font-bold text-legal-dark mb-2">Facing a Civil Dispute?</h3>
              <p className="mb-4 text-sm text-gray-600">Get expert legal representation in Shivamogga.</p>
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
