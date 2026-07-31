import { Metadata } from 'next';
import ImportantNotice from "@/components/ImportantNotice";
import { generateSeoMetadata } from '@/utils/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ShieldCheck, Scale, FileText, CheckCircle, ChevronRight, Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = generateSeoMetadata({
  title: 'About Divakara S.V. | Lawyer in Shivamogga',
  description: 'Learn more about Advocate Divakara S.V., a senior legal consultant with 25+ years of experience in property law, home loans, and civil litigation in Shivamogga.',
});

export default function About() {
  return (
    <div className="bg-[#F8F6F5] min-h-screen">
      
      {/* Deep Navy Blue Hero Section */}
      <section className="bg-[#1B263B] text-white pt-8 pb-16 md:pt-24 md:pb-32 rounded-b-[30px] md:rounded-b-[40px] shadow-lg relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 relative z-10">
          {/* Custom Light Breadcrumbs for Dark Hero */}
          <nav aria-label="Breadcrumb" className="flex items-center text-sm text-gray-300 mb-8 overflow-x-auto whitespace-nowrap pb-2">
            <ol className="flex items-center space-x-2">
              <li className="flex items-center">
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                  <Home className="w-4 h-4" />
                  <span className="sr-only">Home</span>
                </Link>
                <ChevronRight className="w-4 h-4 mx-2 text-gray-500 flex-shrink-0" />
              </li>
              <li className="flex items-center">
                <span className="text-white font-medium" aria-current="page">
                  About Us
                </span>
              </li>
            </ol>
          </nav>

          <div className="text-left md:text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-cormorant text-white mb-4 md:mb-6 drop-shadow-md">
              About Advocate Divakara S.V.
            </h1>
            <p className="text-base md:text-xl text-white/90 leading-relaxed">
              Delivering 25+ years of uncompromising legal excellence, trusted by major banks and thousands of clients across Shivamogga and Karnataka.
            </p>
          </div>
        </div>
      </section>
      <ImportantNotice />
{/* Light Content Section */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 -mt-8 md:-mt-12 relative z-20 pb-12 md:pb-16">
        
        {/* White Content Box */}
        <div className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-12 shadow-xl shadow-black/5 mb-8 md:mb-16 border-t-4 border-legal-accent">
          <div className="prose prose-xl text-gray-700 max-w-none">
            <h2 className="text-3xl font-bold font-cormorant text-legal-dark mb-6">A Legacy of Trust</h2>
            <p className="mb-6 leading-relaxed">
              Divakara S.V. is a senior Advocate and Legal Consultant based in Shivamogga, Karnataka, with over <strong className="text-legal-dark">25 years of extensive experience</strong> in property law, home loan legal opinions, and document verification.
            </p>
            <p className="mb-6 leading-relaxed">
              He provides expert Legal Scrutiny Reports (LSR), title verification, document vetting, and original verification reports for banks, NBFCs, real estate clients, and individual borrowers. His meticulous approach ensures that all workflows are highly bank-compliant and meet the strict legal standards required for secured lending and property acquisition.
            </p>
            <p className="mb-10 leading-relaxed">
              His expertise lies in the rigorous examination of revenue records, unbroken chain of ownership, encumbrance certificates, conversion orders, and statutory approvals. In addition to property and banking legal services, he handles civil and criminal matters including property disputes, partition suits, injunctions, and recovery proceedings before Civil Courts in Shivamogga.
            </p>
            
            {/* Features Row - Light Theme */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="w-12 h-12 text-[#D47C42] mb-4" />
                <h3 className="font-bold text-legal-dark text-xl mb-1">Bank-Compliant</h3>
                <p className="text-sm text-gray-500">Formats trusted by leading NBFCs & Banks.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FileText className="w-12 h-12 text-[#D47C42] mb-4" />
                <h3 className="font-bold text-legal-dark text-xl mb-1">Meticulous LSR</h3>
                <p className="text-sm text-gray-500">Flawless title tracing and legal scrutiny.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <CheckCircle className="w-12 h-12 text-[#D47C42] mb-4" />
                <h3 className="font-bold text-legal-dark text-xl mb-1">25+ Years</h3>
                <p className="text-sm text-gray-500">Deep understanding of local property laws.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Profile - Dark Maroon Card */}
        <div className="bg-legal-dark rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row border-4 border-white">
          <div className="w-full md:w-5/12 h-[280px] sm:h-[350px] md:h-auto relative">
            <Image 
              src="/images/Advocate-devakara-shivamogga-image1.jpeg"
              alt="Divakara S.V - Advocate in Shivamogga"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-legal-dark via-transparent to-transparent md:hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-legal-dark via-transparent to-transparent hidden md:block"></div>
          </div>
          <div className="w-full md:w-7/12 p-6 md:p-12 flex flex-col justify-center relative z-10">
            <Scale className="w-12 h-12 text-[#D47C42] mb-6 opacity-90" />
            <h2 className="text-3xl font-bold font-cormorant text-white mb-2">
              Divakara S.V.
            </h2>
            <p className="text-[#D47C42] font-bold tracking-widest uppercase text-sm mb-6">
              Founder & Senior Advocate
            </p>
            <p className="text-gray-300 leading-relaxed italic border-l-4 border-[#D47C42] pl-4">
              "My mission is to ensure every client, whether a major financial institution or an individual family, makes legally secure decisions without fear of hidden liabilities."
            </p>
          </div>
        </div>

      </section>
      <ImportantNotice />
</div>
  );
}
