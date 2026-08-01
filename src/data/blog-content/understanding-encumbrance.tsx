import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export default function UnderstandingEncumbrance() {
  return (
    <>
      <p className="lead text-xl text-gray-800 font-medium leading-relaxed">
        When dealing with real estate in Karnataka, the jargon can quickly become overwhelming. Terms like "EC," "Khata," and "RTC (Pahani)" are thrown around by builders, brokers, and bank officials. Understanding these Revenue Records is the key to a safe property purchase.
      </p>

      <h2 className="text-3xl font-bold text-[#D47C42] mt-12 mb-6 font-cormorant border-b border-gray-200 pb-2">
        The Encumbrance Certificate (EC) Explained
      </h2>
      <p>
        An <strong>Encumbrance Certificate (EC)</strong> is a document issued by the Sub-Registrar’s office that details all the registered transactions related to a property over a specific period. It shows whether the property is free from legal or financial liabilities (encumbrances).
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-legal-accent mr-2 shrink-0 mt-1" /> <span><strong>Form 15:</strong> Issued when there are actual transactions, mortgages, or sales on the property during the specified period.</span></li>
        <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-legal-accent mr-2 shrink-0 mt-1" /> <span><strong>Form 16:</strong> Issued as a "Nil Encumbrance Certificate" when there have been no registered transactions during the specified period.</span></li>
      </ul>
      <p className="bg-red-50 text-red-900 p-4 rounded-lg border border-red-100 text-base">
        <strong>Crucial Warning:</strong> An EC only records <em>registered</em> transactions. It will not show unregistered wills, equitable mortgages (where title deeds are deposited without registration), or pending civil litigations that haven't resulted in an attachment order. Therefore, an EC is necessary, but not sufficient alone to prove clear title.
      </p>

      <h2 className="text-3xl font-bold text-[#D47C42] mt-12 mb-6 font-cormorant border-b border-gray-200 pb-2">
        Understanding Khata (A & B Khata)
      </h2>
      <p>
        The word "Khata" literally translates to an "account." It is an account of a person who has property in the city and owes property tax to the municipal corporation (e.g., Shivamogga City Corporation).
      </p>
      <p>
        <strong>It is a myth that Khata proves ownership.</strong> A Khata is solely for the purpose of paying property tax. However, it is a mandatory document required for property registration, obtaining building plan approvals, and applying for home loans.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-legal-accent mr-2 shrink-0 mt-1" /> <span><strong>Khata Certificate:</strong> A certificate stating that a particular property number stands in the name of a particular person.</span></li>
        <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-legal-accent mr-2 shrink-0 mt-1" /> <span><strong>Khata Extract:</strong> Contains the specific details of the property, such as its size, location, and built-up area used for tax assessment.</span></li>
      </ul>

      <h2 className="text-3xl font-bold text-[#D47C42] mt-12 mb-6 font-cormorant border-b border-gray-200 pb-2">
        RTC / Pahani (For Agricultural Land)
      </h2>
      <p>
        RTC stands for <strong>Record of Rights, Tenancy, and Crops</strong>. In Karnataka, this is commonly referred to as the <em>Pahani</em>. If you are buying agricultural land or land that was recently converted for non-agricultural (NA) use, the RTC is the most vital document.
      </p>
      <p>
        The RTC contains incredibly detailed information, including:
      </p>
      <ul className="list-disc pl-6 mb-8 text-gray-700">
        <li>Information about the landowner (name, extent of land owned).</li>
        <li>Details of the soil type and crops grown.</li>
        <li>Tenancy details (if the land is cultivated by a tenant).</li>
        <li>Bank loans or mortgages taken on the land (this is critical for buyers).</li>
        <li>Water rights and liabilities.</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#D47C42] mt-12 mb-6 font-cormorant border-b border-gray-200 pb-2">
        The Role of Mutation
      </h2>
      <p>
        Mutation is the process of updating or transferring the title of the property in the local revenue records from one person to another (usually after a sale, partition, or death of the owner). It is vital to ensure that after you purchase a property, the mutation is carried out so that the Khata or RTC reflects your name.
      </p>

      <div className="bg-[#f0dac5] p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="text-xl font-bold text-[#D47C42] font-cormorant mb-4">Need Help Reading Your Records?</h3>
        <p className="text-gray-700 text-base mb-4">
          Revenue records in Karnataka can be complex and are often recorded in specialized Kannada administrative terminology. Ensure your documents are meticulously vetted by a legal expert.
        </p>
        <a href="tel:+919448628530" className="inline-block px-6 py-3 bg-[#50223c] text-white font-bold rounded-md hover:bg-opacity-90 transition-colors">
          Contact Advocate
        </a>
      </div>
    </>
  );
}
