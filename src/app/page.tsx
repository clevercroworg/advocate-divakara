"use client";
import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  Home,
  ShieldCheck,
  Briefcase,
  Landmark,
  Scale,
  ChevronDown,
  CheckCircle,
  Users,
  Map,
  ClipboardCheck,
  Building,
  Scroll
} from "lucide-react";
import { useState } from "react";
import { FAQJsonLd } from "@/components/JsonLd";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is Advocate Divakara S.V the best advocate in Shivamogga for Legal Scrutiny Reports for home loans?",
      answer: "Yes. Advocate Divakara S.V is recognized as one of the best advocates in Shivamogga for providing bank-compliant Legal Scrutiny Reports (LSR) for home loans, mortgage loans, and secured lending, ensuring thorough verification of property documents and clear title flow."
    },
    {
      question: "Does the best advocate in Shimoga, Advocate Divakara S.V, verify property title and ownership history?",
      answer: "Yes. As one of the best property law advocates in Shimoga (Shivamogga), Advocate Divakara S.V verifies property title and ownership history by examining sale deeds, EC, revenue records, conversion orders, layout approvals, and continuity of ownership."
    },
    {
      question: "Is Advocate Divakara S.V the best advocate in Shivamogga for banks and NBFC legal services?",
      answer: "Yes. Advocate Divakara S.V is considered one of the best advocates in Shivamogga for working with banks, NBFCs, MSMEs, and financial institutions by providing reliable legal opinions, property scrutiny reports, and documentation as per prescribed formats."
    },
    {
      question: "How can I consult the best advocate in Shivamogga, Advocate Divakara S.V, for legal verification?",
      answer: "To consult one of the best advocates in Shivamogga / Shimoga, you can call or WhatsApp Advocate Divakara S.V at 94486 28530 or visit the office at Durgigudi, Shivamogga for professional legal consultation and document verification."
    }
  ];

  const practiceAreas = [
    { icon: <FileText className="w-8 h-8 text-legal-accent" />, title: "Legal Scrutiny Reports (LSR)", description: "Preparation of detailed legal scrutiny reports involving title flow, ownership verification, encumbrance checks, and compliance as per bank and NBFC requirements.", link: "/legal-scrutiny-report-shivamogga" },
    { icon: <Home className="w-8 h-8 text-legal-accent" />, title: "Property Title Verification", description: "Comprehensive verification of property documents including sale deeds, revenue records, encumbrance certificates, and statutory approvals for safe transactions.", link: "/property-title-verification-shivamogga" },
    { icon: <Landmark className="w-8 h-8 text-legal-accent" />, title: "Mortgage & Loan Legal Assistance", description: "Professional legal assistance for mortgage, home loan, and secured lending processes, ensuring compliance with statutory regulations and minimizing risk.", link: "/home-loan-legal-opinion-shivamogga" },
    { icon: <Scale className="w-8 h-8 text-legal-accent" />, title: "Bail Matters", description: "Expert legal assistance and prompt representation for regular bail, anticipatory bail, and other criminal bail matters.", link: "/bail-matters-lawyer-shivamogga" },
    { icon: <Landmark className="w-8 h-8 text-legal-accent" />, title: "Money Recovery Suits", description: "Dedicated representation for the recovery of bad debts, unpaid loans, and commercial dues through civil courts.", link: "/money-recovery-suits-lawyer-shivamogga" },
    { icon: <ShieldCheck className="w-8 h-8 text-legal-accent" />, title: "Motor Vehicle Accident Cases", description: "Legal support for MACT (Motor Accident Claims Tribunal) cases to secure rightful compensation for accident victims.", link: "/motor-vehicle-accident-lawyer-shivamogga" },
    { icon: <Home className="w-8 h-8 text-legal-accent" />, title: "Family Matters", description: "Compassionate and confidential legal counseling and representation for divorce, alimony, child custody, and family property disputes.", link: "/family-matters-lawyer-shivamogga" },
    { icon: <FileText className="w-8 h-8 text-legal-accent" />, title: "Cheque Bounce Cases", description: "Strict legal action and representation under Section 138 of the NI Act for dishonored cheques and related financial frauds.", link: "/cheque-bounce-cases-lawyer-shivamogga" },
    { icon: <Briefcase className="w-8 h-8 text-legal-accent" />, title: "Execution Cases", description: "Filing and pursuing execution petitions to effectively enforce court decrees, orders, and arbitral awards.", link: "/execution-cases-lawyer-shivamogga" },
  ];

  return (
    <div>
      <FAQJsonLd faqs={faqs} />
      {/* Premium Hero Section */}
      <section className="bg-legal-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 lg:pt-12 pb-12 lg:pb-24">

          {/* 1. Left Text Content */}
          <div className="flex flex-col items-start justify-center text-left order-1 lg:order-1 lg:col-span-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/50 text-legal-dark text-xs md:text-sm font-bold tracking-widest uppercase shadow-sm">
              <Scale className="w-3 h-3 md:w-4 md:h-4 text-legal-accent" /> 25+ Years of Legal Excellence
            </div>
            <h1 className="text-hero text-legal-dark fade-up drop-shadow-sm w-full mt-4 md:mt-6">
              Trusted Advocate & <br className="hidden md:block" /> <span className="text-legal-accent">Legal Consultant</span> in Shivamogga
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-700 fade-up leading-relaxed w-full max-w-none md:max-w-xl mt-4 md:mt-8">
              Hi, I am Divakara S.V. I provide professional Legal Scrutiny Reports, property title verification, and highly secure home loan legal opinions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-6 md:mt-10 fade-up" style={{ animationDelay: "300ms" }}>
              <a href="tel:+919448628530" className="btn-primary w-full sm:w-auto">
                Book Consultation
              </a>
              <a href="tel:+919448628530" className="btn-secondary w-full sm:w-auto backdrop-blur-md">
                Call Now
              </a>
            </div>
          </div>

          {/* 2. Trust Metrics Strip (Above Photo on Mobile, Bottom Spanning on Desktop) */}
          <div className="bg-white/40 backdrop-blur-xl border border-white/50 py-6 lg:py-10 shadow-xl relative z-20 rounded-[20px] order-2 lg:order-3 lg:col-span-2 lg:mt-8 w-full max-w-6xl mx-auto">
            <div className="px-2 md:px-6 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 items-start justify-items-center gap-y-6 gap-x-2 lg:gap-8 text-center lg:divide-x divide-gray-300">
                <div className="flex flex-col items-center gap-1 lg:gap-2 px-1 lg:px-4 border-r lg:border-r-0 border-gray-300">
                  <Scale className="w-8 h-8 lg:w-10 lg:h-10 text-legal-accent mb-1 lg:mb-2" />
                  <span className="font-bold text-legal-dark text-2xl lg:text-3xl font-cormorant">25+</span>
                  <span className="text-gray-500 font-semibold tracking-wide text-xs lg:text-sm uppercase leading-tight">Years Experience</span>
                </div>
                <div className="flex flex-col items-center gap-1 lg:gap-2 px-1 lg:px-4">
                  <FileText className="w-8 h-8 lg:w-10 lg:h-10 text-legal-accent mb-1 lg:mb-2" />
                  <span className="font-bold text-legal-dark text-2xl lg:text-3xl font-cormorant">10,000+</span>
                  <span className="text-gray-500 font-semibold tracking-wide text-xs lg:text-sm uppercase leading-tight">Docs Verified</span>
                </div>
                <div className="flex flex-col items-center gap-1 lg:gap-2 px-1 lg:px-4 lg:border-l-0 border-r lg:border-r-0 border-gray-300">
                  <CheckCircle className="w-8 h-8 lg:w-10 lg:h-10 text-legal-accent mb-1 lg:mb-2" />
                  <span className="font-bold text-legal-dark text-2xl lg:text-3xl font-cormorant">100%</span>
                  <span className="text-gray-500 font-semibold tracking-wide text-xs lg:text-sm uppercase leading-tight">Bank-Compliant</span>
                </div>
                <div className="flex flex-col items-center gap-1 lg:gap-2 px-1 lg:px-4">
                  <Users className="w-8 h-8 lg:w-10 lg:h-10 text-legal-accent mb-1 lg:mb-2" />
                  <span className="font-bold text-legal-dark text-2xl lg:text-3xl font-cormorant">500+</span>
                  <span className="text-gray-500 font-semibold tracking-wide text-xs lg:text-sm uppercase leading-tight">Happy Clients</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Right Image Content */}
          <div className="w-full relative order-3 lg:order-2 lg:col-span-1 mt-12 lg:mt-0">
            <div
              className="relative rounded-[20px] overflow-hidden shadow-2xl h-[400px] lg:h-[500px] border-4 border-white"
            >
              <Image 
                src="/images/Advocate-devakara-shivamogga-image1.jpeg" 
                alt="Advocate Divakara S.V. Office Exterior Shivamogga" 
                fill 
                priority 
                className="object-cover object-center" 
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-8">
                <div className="text-white w-full">
                  <p className="font-cormorant text-3xl font-bold mb-2">Divakara S.V.</p>
                  <p className="font-semibold tracking-wide text-white inline-block bg-legal-accent/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs uppercase border border-white/20 shadow-lg">
                    Founder & Senior Advocate
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-legal-accent">
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-section text-white fade-up mb-6 drop-shadow-sm">About Divakara S.V.</h2>
          <p className="text-body-main text-white/90 leading-relaxed mb-6">
            Divakara S.V. is a senior practicing Advocate and Legal Consultant in Shivamogga, Karnataka, with more than 25 years of experience in property law, legal scrutiny, and secured lending documentation.
          </p>
          <p className="text-body-main text-white/90 leading-relaxed mb-6">
            He is well known for preparing detailed and bank-compliant Legal Scrutiny Reports (LSR), property title verification reports, and legal opinions required for home loans and mortgage-based lending.
          </p>
          <div className="mt-8 text-lg flex justify-center">
            <Link href="/about-best-lawyer-shivamogga" className="text-white hover:text-gray-200 font-bold underline transition-all underline-offset-4 flex items-center gap-2">
              Read Full Profile <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Practice Areas */}
      <section className="py-12 md:py-16 lg:py-20 bg-legal-bg">
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-section text-legal-dark fade-up text-legal-dark mb-4">Practice Areas & Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">Specialized legal services focused on property law, legal scrutiny, and secured lending, delivered with absolute accuracy and professional integrity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practiceAreas.map((area, idx) => (
              <Link href={area.link} key={idx} className="relative overflow-hidden bg-white/60 backdrop-blur-lg border border-white/50 p-8 rounded-2xl shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-300 group flex flex-col h-full transform hover:-translate-y-[6px]">
                <div className="absolute inset-0 -translate-x-[150%] skew-x-[-15deg] bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-shine z-10 pointer-events-none" />
                <div className="bg-white/80 w-16 h-16 rounded-[20px] flex items-center justify-center shadow-sm mb-6 group-hover:bg-legal-accent/20 transition-colors border border-white/60">
                  {area.icon}
                </div>
                <h3 className="text-card text-legal-dark mb-3 group-hover:text-rose-gold transition-colors">{area.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">{area.description}</p>
                <p className="text-legal-accent text-sm font-bold flex items-center gap-1 mt-6 tracking-wide uppercase">
                  Learn more <ChevronDown className="w-4 h-4 -rotate-90" />
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/practice-areas-best-lawyer-shivamogga" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-legal-accent border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-section text-white fade-up mb-4 drop-shadow-md">Happy Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#D47C42]">
              <div className="absolute inset-0 -translate-x-[150%] skew-x-[-15deg] bg-gradient-to-r from-transparent via-white/60 to-transparent group-hover:animate-shine z-10 pointer-events-none" />
              <div className="flex items-center gap-4 mb-6">
                <Image src="/images/img_sq.jpg" alt="Client Review Advocate Divakara" width={64} height={64} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h3 className="font-bold text-legal-dark">Ramesh K.</h3>
                  <p className="text-sm text-gray-500">Home Loan Applicant</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"Advocate Divakara S.V. provided a detailed Legal Scrutiny Report for my home loan. His explanation was clear and the bank accepted the report without any issues."</p>
            </div>

            <div className="relative overflow-hidden group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#D47C42]">
              <div className="absolute inset-0 -translate-x-[150%] skew-x-[-15deg] bg-gradient-to-r from-transparent via-white/60 to-transparent group-hover:animate-shine z-10 pointer-events-none" />
              <div className="flex items-center gap-4 mb-6">
                <Image src="/images/img_sq.jpg" alt="Client Review Advocate Divakara" width={64} height={64} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h3 className="font-bold text-legal-dark">Sunitha M.</h3>
                  <p className="text-sm text-gray-500">Property Buyer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"I approached him for property title verification before purchase. The due diligence was thorough and helped me avoid legal risks."</p>
            </div>

            <div className="relative overflow-hidden group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#D47C42]">
              <div className="absolute inset-0 -translate-x-[150%] skew-x-[-15deg] bg-gradient-to-r from-transparent via-white/60 to-transparent group-hover:animate-shine z-10 pointer-events-none" />
              <div className="flex items-center gap-4 mb-6">
                <Image src="/images/img_sq.jpg" alt="Client Review Advocate Divakara" width={64} height={64} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h3 className="font-bold text-legal-dark">Bank Officer</h3>
                  <p className="text-sm text-gray-500">NBFC Legal Department</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"His Legal Scrutiny Reports are well-structured, accurate, and fully compliant with banking standards. We regularly rely on his opinions for secured lending."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Staffs and Offices */}
      <section className="py-16 md:py-20 lg:py-32 md:py-20 lg:py-[120px] bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-section text-legal-dark fade-up text-legal-dark mb-4">Staffs and Offices</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer h-72">
              <Image src="/images/office3.jpeg" alt="Advocate Divakara S.V. Professional Legal Team Shivamogga" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transform transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center p-6  transition-opacity duration-300">
                <span className="text-white font-bold text-lg">Professional Team</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer h-72">
              <Image src="/images/office2.jpeg" alt="Advocate Divakara S.V. Law Office Location Shivamogga" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transform transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center p-6  transition-opacity duration-300">
                <span className="text-white font-bold text-lg">Location and Office</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer h-72">
              <Image src="/images/office1.jpeg" alt="Advocate Divakara S.V. Office Exterior View Shivamogga" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transform transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center p-6  transition-opacity duration-300">
                <span className="text-white font-bold text-lg">Exterior View</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 lg:py-32 md:py-20 lg:py-[120px] bg-legal-bg">
        <div className="max-w-4xl mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section text-legal-dark fade-up text-legal-dark mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-bold text-legal-dark pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-legal-accent transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 pb-5 ' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
