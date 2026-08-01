import Link from 'next/link';

export default function HusbandClaimMaintenance() {
  return (
    <>
      <div className="w-full relative h-[300px] md:h-[400px] mb-8 rounded-xl overflow-hidden shadow-lg border border-gray-200">
        <img 
          src="/images/maintenance-law-india.jpg" 
          alt="Husband claiming maintenance under Hindu Marriage Act in Shivamogga court" 
          className="w-full h-full object-cover"
        />
      </div>
      <p className="lead text-xl text-gray-800 font-medium leading-relaxed">
        When people think of matrimonial maintenance in India, the common assumption is that financial support is exclusively a right for the wife. However, legal provisions and landmark judicial rulings have evolved to recognize that financial dependency can happen on either side.
      </p>
      
      <p>
        Under specific circumstances, a husband can legally ask for maintenance from his wife. Here is a breakdown of what Indian law states about a husband's right to maintenance.
      </p>

      <h2 className="text-3xl font-bold text-[#D47C42] mt-12 mb-6 font-cormorant border-b border-gray-200 pb-2">
        1. The Legal Foundation: Hindu Marriage Act, 1955
      </h2>
      <p>
        The primary legal provisions allowing a husband to claim financial support come under Sections 24 and 25 of the Hindu Marriage Act, 1955. Crucially, the language in these sections uses the term "either party," meaning both husbands and wives have equal footing to approach the court.
      </p>

      <h3 className="text-2xl font-bold text-[#D47C42] mt-8 mb-4 font-cormorant">Section 24: Interim Maintenance & Litigation Expenses</h3>
      <p>
        Section 24 deals with financial support during the pendency of a matrimonial case.
      </p>
      <ul className="list-disc pl-5 space-y-2 my-4">
        <li><strong>The Purpose:</strong> If a husband is unemployed, physically unable to work, earning very little, or financially weaker than his wife, he can file an application before the family court.</li>
        <li><strong>What the Court Considers:</strong> The court evaluates the income, professional qualifications, health conditions, lifestyle, and overall financial capacity of both spouses.</li>
        <li><strong>The Principle:</strong> Merely being a man does not bar someone from seeking support. In modern times, where many wives are well-educated and earn high salaries while husbands may face financial instability, courts have actively recognized the husband's right to interim maintenance and court expenses so he can contest the case properly.</li>
      </ul>

      <h3 className="text-2xl font-bold text-[#D47C42] mt-8 mb-4 font-cormorant">Section 25: Permanent Alimony and Maintenance</h3>
      <p>
        Section 25 provides for permanent alimony and maintenance granted after a decree of divorce, judicial separation, restitution of conjugal rights, or other matrimonial proceedings.
      </p>
      <ul className="list-disc pl-5 space-y-2 my-4">
        <li><strong>The Provision:</strong> Either spouse can seek permanent maintenance or alimony.</li>
        <li><strong>The Scope:</strong> The court may award a monthly allowance or a one-time lump-sum payment.</li>
        <li><strong>Key Factors:</strong> The court examines the conduct of both parties, their respective incomes, properties, age, health, and future needs. If circumstances change significantly in the future, the court retains the power to modify the maintenance amount.</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#D47C42] mt-12 mb-6 font-cormorant border-b border-gray-200 pb-2">
        2. Can a Husband Claim Maintenance Under Criminal Law (Section 125 CrPC / BNSS)?
      </h2>
      <p>
        <strong>No.</strong> Under the general criminal procedure provisions (formerly Section 125 of the CrPC, now corresponding provisions under the Bharatiya Nagarik Suraksha Sanhita, or BNSS), maintenance provisions are primarily designed to protect wives, children, and dependent parents. A husband generally cannot claim maintenance under these specific criminal provisions.
      </p>
      <p>
        Therefore, a husband’s legal recourse for financial support exists primarily under civil matrimonial laws like the Hindu Marriage Act, rather than general criminal code maintenance provisions meant for dependents.
      </p>

      <h2 className="text-3xl font-bold text-[#D47C42] mt-12 mb-6 font-cormorant border-b border-gray-200 pb-2">
        3. A Practical Example: When Does a Court Grant Maintenance to a Husband?
      </h2>
      <ul className="list-disc pl-5 space-y-2 my-4">
        <li><strong>When It May Be Granted:</strong> Suppose a wife is employed with a stable government job or a high-paying private sector position, while the husband is unemployed due to chronic illness, a major disability, severe business loss, or other genuine, unavoidable circumstances. In such valid cases, the family court may order the wife to pay maintenance.</li>
        <li><strong>When It Will Be Denied:</strong> Courts are strict about able-bodied individuals. If a husband is healthy, well-qualified, capable of working, but intentionally chooses to remain unemployed or avoids work just to claim money from his earning wife, the court will firmly reject his petition.</li>
      </ul>
      <p className="italic">Every maintenance case is unique and depends strictly on its own facts, evidence, and circumstances.</p>

      <h2 className="text-3xl font-bold text-[#D47C42] mt-12 mb-6 font-cormorant border-b border-gray-200 pb-2">
        Final Thoughts
      </h2>
      <p className="mb-8">
        Maintenance laws in India are designed to prevent financial destitution during or after the breakdown of a marriage—regardless of gender. If you are navigating a complex family law matter or need professional legal guidance regarding maintenance rights in Shivamogga, consulting an experienced family lawyer is essential to understand the best approach for your specific situation.
      </p>

      <div className="bg-[#f0dac5] p-8 rounded-xl border border-gray-200 shadow-sm mt-12 text-center">
        <h3 className="text-2xl font-bold text-legal-dark mb-4 font-cormorant">Need Legal Advice on Matrimonial Matters?</h3>
        <p className="mb-6 text-gray-700">
          Book a consultation with Advocate Divakara S.V. for expert guidance on family law, maintenance, and divorce proceedings in Shivamogga.
        </p>
        <Link href="/contact-best-lawyer-shivamogga" className="inline-block px-6 py-3 bg-[#50223c] text-white font-bold rounded-md hover:bg-opacity-90 transition-colors">
          Contact Us
        </Link>
      </div>
    </>
  );
}
