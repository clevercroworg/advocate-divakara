import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export default function WhyBanksReject() {
  return (
    <>
      <p className="lead text-xl text-gray-800 font-medium leading-relaxed">
        Applying for a home loan is a critical step in buying property. However, many buyers in Shivamogga face unexpected rejections from banks—not because of poor credit scores, but because the property title failed the Legal Scrutiny Report (LSR).
      </p>

      <h2 className="text-3xl font-bold text-[#D47C42] mt-12 mb-6 font-cormorant border-b border-gray-200 pb-2">
        What is a Legal Scrutiny Report (LSR)?
      </h2>
      <p>
        Before a bank or NBFC sanctions a home loan, they require their empanelled advocate to conduct a thorough examination of the property’s documents. The advocate produces a <strong>Legal Scrutiny Report (LSR)</strong> which certifies whether the title is "clear and marketable." If the LSR highlights defects, the bank will reject the loan to mitigate their risk.
      </p>

      <h2 className="text-3xl font-bold text-[#D47C42] mt-12 mb-6 font-cormorant border-b border-gray-200 pb-2">
        Top Reasons Banks Reject Property Titles
      </h2>

      <h3 className="text-2xl font-bold text-[#D47C42] mt-8 mb-4 font-cormorant">1. Missing Mother Deed</h3>
      <p>
        The most common reason for LSR rejection is a broken chain of title. The Mother Deed is the root document that establishes the original ownership of the property. If it is missing, banks cannot trace how the current owner legally acquired the property, leading to instant rejection.
      </p>

      <h3 className="text-2xl font-bold text-[#D47C42] mt-8 mb-4 font-cormorant">2. Unapproved Layouts (Revenue Sites)</h3>
      <p>
        In Shivamogga and across Karnataka, plots formed in agricultural lands without proper DC conversion (Deputy Commissioner) and layout approval from SUDA (Shivamogga Urban Development Authority) or local planning authorities are considered illegal. Banks do not finance properties that lack statutory approvals.
      </p>

      <h3 className="text-2xl font-bold text-[#D47C42] mt-8 mb-4 font-cormorant">3. Defects in Minor's Share</h3>
      <p>
        If a property was previously owned by a family where a minor had a share, and the property was sold without obtaining the permission of the competent court (as required under the Hindu Minority and Guardianship Act), the title is legally defective. Banks will flag this in the LSR.
      </p>

      <h3 className="text-2xl font-bold text-[#D47C42] mt-8 mb-4 font-cormorant">4. Discrepancies in Encumbrance Certificate (EC)</h3>
      <p>
        The EC must reflect a nil encumbrance (Form 16) or clearly show all legitimate transactions (Form 15). If the EC shows existing mortgages, pending litigation, or unreleased attachments from courts, the bank will refuse to create a new mortgage over the property.
      </p>

      <h3 className="text-2xl font-bold text-[#D47C42] mt-8 mb-4 font-cormorant">5. Mismatch in Property Dimensions (Schedule)</h3>
      <p>
        If the physical dimensions of the property do not match the dimensions mentioned in the Sale Deed, Khata, and approved building plan, the advocate will note the discrepancy in the LSR. Banks are highly risk-averse to boundary disputes.
      </p>

      <h2 className="text-3xl font-bold text-[#D47C42] mt-12 mb-6 font-cormorant border-b border-gray-200 pb-2">
        How to Avoid LSR Rejections
      </h2>
      <ul className="space-y-3 mb-8">
        <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-legal-accent mr-2 shrink-0 mt-1" /> <span><strong>Pre-Scrutiny:</strong> Hire an independent senior advocate to scrutinize the documents <em>before</em> paying a massive advance to the seller.</span></li>
        <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-legal-accent mr-2 shrink-0 mt-1" /> <span><strong>Gather the Chain:</strong> Ensure you have the original Sale Deed, Mother Deed, and all intermediate link documents spanning at least 13 to 30 years.</span></li>
        <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-legal-accent mr-2 shrink-0 mt-1" /> <span><strong>Update Revenue Records:</strong> Ensure the Khata and RTC are mutated and reflect the current seller's name exactly as it appears on their Aadhaar/PAN.</span></li>
      </ul>

      <div className="bg-[#F8F6F5] p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="text-xl font-bold text-[#D47C42] font-cormorant mb-4">Secure Your Investment</h3>
        <p className="text-gray-700 text-base mb-4">
          Don't wait for the bank to reject your property. Get a comprehensive Legal Scrutiny Report done independently by a senior advocate with 25+ years of experience in Shivamogga.
        </p>
        <Link href="/contact-best-lawyer-shivamogga" className="inline-block px-6 py-3 bg-[#1B263B] text-white font-bold rounded-md hover:bg-opacity-90 transition-colors">
          Request a Legal Opinion
        </Link>
      </div>
    </>
  );
}
