import { Metadata } from 'next';
import { generateSeoMetadata } from '@/utils/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import {
  FileText,
  Home,
  ShieldCheck,
  Briefcase,
  Landmark,
  ArrowRight,
  ChevronRight
} from "lucide-react";

export const metadata: Metadata = generateSeoMetadata({
  title: 'Practice Areas | Advocate Divakara S.V.',
  description: 'Explore the legal practice areas of Advocate Divakara S.V. in Shivamogga, including property law, home loan legal opinions, and civil court representation.',
});

export default function PracticeAreas() {
  const services = [
    {
      title: "Conducting case at shivamogga disctrict court",
      description: "We provide representation and legal advisory in various civil matters, Property disputes, partition suits, Recovery suits Contract, Land acquisition matters, disputes Family property settlements.",
      icon: <Landmark className="w-8 h-8 text-[#D47C42]" />,
      link: "/civil-lawyer-in-shivamogga"
    },
    {
      title: "Property Title Verification",
      description: "End-to-end verification of property titles through examination of sale deeds, revenue records, encumbrance certificates, and ownership continuity.",
      icon: <Home className="w-8 h-8 text-[#D47C42]" />,
      link: "/property-title-verification-shivamogga"
    },
    {
      title: "Document Vetting & Due Diligence",
      description: "Legal vetting of property and loan documents including sale deeds, agreements, GPA, and mortgage deeds to identify risks and ensure validity.",
      icon: <Briefcase className="w-8 h-8 text-[#D47C42]" />,
      link: "/property-document-verification-shivamogga"
    },
    {
      title: "Original Variation Reports",
      description: "Verification of changes in survey numbers, ownership history, subdivisions, phodi, and re-survey records by cross-checking original land documents.",
      icon: <FileText className="w-8 h-8 text-[#D47C42]" />,
      link: "/original-variation-report-shivamogga"
    },
    {
      title: "Home Loan Legal Opinion",
      description: "Issuance of clear, accurate, and bank-compliant legal opinions for home loans, mortgage loans, and secured lending transactions.",
      icon: <ShieldCheck className="w-8 h-8 text-[#D47C42]" />,
      link: "/home-loan-legal-opinion-shivamogga"
    },
    {
      title: "Property Legal Due Diligence",
      description: "Thorough legal due diligence for residential and commercial properties to support safe purchase, lending, and investment decisions.",
      icon: <Briefcase className="w-8 h-8 text-[#D47C42]" />,
      link: "/property-due-diligence-shivamogga"
    }
  ];

  return (
    <div className="bg-[#F8F6F5] min-h-screen">
      
      {/* Dark Maroon Hero Section */}
      <section className="bg-legal-accent text-white pt-8 pb-16 md:pt-24 md:pb-32 rounded-b-[30px] md:rounded-b-[40px] shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center text-sm text-white/70 mb-8 overflow-x-auto whitespace-nowrap pb-2">
            <ol className="flex items-center space-x-2">
              <li className="flex items-center">
                <Link href="/" className="hover:text-rose-gold transition-colors flex items-center gap-1">
                  <Home className="w-4 h-4" />
                  <span className="sr-only">Home</span>
                </Link>
                <ChevronRight className="w-4 h-4 mx-2 text-white/30 flex-shrink-0" />
              </li>
              <li className="flex items-center">
                <span className="text-white font-medium" aria-current="page">
                  Practice Areas
                </span>
              </li>
            </ol>
          </nav>

          <div className="text-left md:text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-cormorant text-white mb-4 md:mb-6 drop-shadow-md">
              Areas of <span className="text-rose-gold block md:inline mt-1 md:mt-0">Expertise</span>
            </h1>
            <p className="text-base md:text-xl text-white/90 leading-relaxed">
              Specialized legal services focused on property law, legal scrutiny, and secured lending, delivered with absolute accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* Light Content Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 -mt-8 md:-mt-12 relative z-20 pb-12 md:pb-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Link href={service.link} key={index} className="bg-white p-8 rounded-[24px] shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-300 border-t-4 border-legal-accent group flex flex-col h-full overflow-hidden break-words transform hover:-translate-y-1">
              <div className="bg-[#F8F6F5] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-legal-accent/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-cormorant text-legal-dark mb-3 group-hover:text-rose-gold transition-colors">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
              <div className="flex items-center text-legal-accent font-bold text-sm tracking-wide uppercase">
                View Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Banner - Dark Theme */}
        <div className="mt-12 md:mt-20 bg-legal-dark p-8 md:p-12 rounded-[24px] md:rounded-[32px] shadow-2xl text-center max-w-4xl mx-auto border-4 border-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-cormorant text-white mb-4">Need Legal Assistance?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">Contact us today to schedule a consultation and get professional legal scrutiny and property law assistance.</p>
            <Link href="/contact-best-lawyer-shivamogga" className="btn-primary inline-block px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all">
              Book a Consultation
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}
