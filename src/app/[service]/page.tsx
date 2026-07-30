import { seoKeywords, formatSlugToTitle } from "@/data/seoKeywords";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ShieldCheck, ArrowRight, CheckCircle, Scale, Phone, ChevronRight, Home } from "lucide-react";
import type { Metadata, ResolvingMetadata } from "next";

// This tells Next.js to statically generate all these pages at build time
export function generateStaticParams() {
  return seoKeywords.map((service) => ({
    service: service,
  }));
}

type Props = {
  params: Promise<{ service: string }>;
};

// Dynamically generate SEO metadata for each specific keyword page
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const { service } = resolvedParams;
  if (!seoKeywords.includes(service)) return {};
  
  const title = formatSlugToTitle(service);
  
  return {
    title: `${title} | Advocate Divakara S.V.`,
    description: `Looking for ${title}? Advocate Divakara S.V. offers expert legal services, property scrutiny, and document verification in Shivamogga.`,
  };
}

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params;
  const { service } = resolvedParams;

  // 404 if the slug isn't in our predefined SEO list
  if (!seoKeywords.includes(service)) {
    notFound();
  }

  const title = formatSlugToTitle(service);

  return (
    <div className="bg-[#F8F6F5] min-h-screen">
      
      {/* Deep Navy Blue Hero Section */}
      <section className="bg-[#1B263B] text-white pt-8 pb-16 md:pt-24 md:pb-32 rounded-b-[30px] md:rounded-b-[40px] shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 relative z-10">
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
                <Link href="/practice-areas-best-lawyer-shivamogga" className="hover:text-white transition-colors">
                  Services
                </Link>
                <ChevronRight className="w-4 h-4 mx-2 text-gray-500 flex-shrink-0" />
              </li>
              <li className="flex items-center">
                <span className="text-white font-medium" aria-current="page">
                  {title}
                </span>
              </li>
            </ol>
          </nav>

          <div className="text-left md:text-center max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-gray-200 text-xs font-semibold tracking-widest uppercase mb-4 border border-white/20">
              Expert Legal Services
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-cormorant text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-base md:text-xl text-gray-300 leading-relaxed mb-8">
              Advocate Divakara S.V. brings over 25 years of specialized experience to provide you with reliable, highly professional legal solutions in Shivamogga.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-start md:justify-center gap-4">
              <a href="tel:+919448628530" className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold bg-[#198754] text-white hover:bg-[#146c43] flex items-center justify-center gap-2 transition-all shadow-md">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <Link href="https://wa.me/919448628530?text=Hello%20Advocate%20Divakara%20S.V.,%20I%20need%20legal%20assistance" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold bg-white text-legal-dark hover:bg-gray-100 flex items-center justify-center gap-2 transition-all shadow-md">
                WhatsApp Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Light Content Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 -mt-8 md:-mt-12 relative z-20 pb-12 md:pb-20">
        
        <div className="bg-white rounded-2xl p-6 md:p-12 shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Col: Features */}
            <div>
              <h2 className="text-3xl font-bold text-legal-dark font-cormorant mb-6">
                Why Choose Advocate Divakara S.V. for {title}?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                When dealing with property laws, banking regulations, or civil matters, you need precision and trust. Advocate Divakara S.V. is highly regarded across Shivamogga for rigorous legal scrutiny and completely bank-compliant reporting.
              </p>
              <ul className="space-y-4">
                {[
                  "25+ Years of Dedicated Legal Experience",
                  "Expertise in Legal Scrutiny Reports (LSR)",
                  "Accepted by Major Banks & NBFCs",
                  "Meticulous Property Title Flow Verification"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                    <CheckCircle className="w-5 h-5 text-legal-dark flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right Col: Consultation Card */}
            <div className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-200 text-center">
              <Scale className="w-12 h-12 text-legal-dark mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-legal-dark font-cormorant mb-4">Need Immediate Assistance?</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Every legal matter carries risk. Don't leave your case or investment to chance. Book a consultation today to ensure you are legally secure.
              </p>
              <a href="tel:+919448628530" className="w-full inline-flex px-8 py-3 rounded-lg font-bold bg-legal-dark text-white hover:bg-legal-dark/90 items-center justify-center gap-2 transition-all shadow-md">
                Contact Best Advocate in Shivamogga <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
