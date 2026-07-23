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
                <Link href="/practice-areas-best-lawyer-shivamogga" className="hover:text-white transition-colors">
                  Services
                </Link>
                <ChevronRight className="w-4 h-4 mx-2 text-white/30 flex-shrink-0" />
              </li>
              <li className="flex items-center">
                <span className="text-white font-medium" aria-current="page">
                  {title}
                </span>
              </li>
            </ol>
          </nav>

          <div className="text-left md:text-center max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase mb-4 shadow-sm border border-white/20">
              Expert Legal Services
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-cormorant text-white mb-6 drop-shadow-md leading-tight">
              {title}
            </h1>
            <p className="text-base md:text-xl text-white/90 leading-relaxed mb-8">
              Advocate Divakara S.V. brings over 25 years of specialized experience to provide you with the most reliable, bank-compliant legal solutions in Shivamogga.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-start md:justify-center gap-4">
              <a href="tel:+919448628530" className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-white text-legal-accent hover:bg-gray-100 flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <Link href="https://wa.me/919448628530?text=Hello%20Advocate%20Divakara%20S.V.,%20I%20need%20legal%20assistance" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-[#25D366] text-white hover:bg-[#20bd5a] flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Connect on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Light Content Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 -mt-8 md:-mt-12 relative z-20 pb-12 md:pb-20">
        
        <div className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-12 shadow-xl shadow-black/5 border-t-4 border-legal-accent">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Col: Features */}
            <div>
              <h2 className="text-3xl font-bold text-legal-dark font-cormorant mb-6">
                Why Choose Advocate Divakara S.V. for <span className="text-[#D47C42]">{title}</span>?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-xl">
                When dealing with property laws, banking regulations, or civil matters, you need precision and trust. Advocate Divakara S.V. is highly regarded across Shivamogga for rigorous legal scrutiny and completely bank-compliant reporting.
              </p>
              <ul className="space-y-5">
                {[
                  "25+ Years of Dedicated Legal Experience",
                  "Expertise in Legal Scrutiny Reports (LSR)",
                  "Accepted by Major Banks & NBFCs",
                  "Meticulous Property Title Flow Verification"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-[#F8F6F5] border border-gray-100">
                    <CheckCircle className="w-6 h-6 text-[#D47C42] flex-shrink-0" />
                    <span className="text-legal-dark font-bold text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right Col: Consultation Card */}
            <div className="bg-legal-dark p-8 md:p-10 rounded-[24px] border-4 border-[#D47C42] text-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <div className="relative z-10">
                <Scale className="w-16 h-16 text-[#D47C42] mb-6 mx-auto opacity-90" />
                <h3 className="text-2xl font-bold text-white font-cormorant mb-4">Need Immediate Assistance?</h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  Every property transaction carries hidden legal risks. Don't leave your investment to chance. Book a consultation today to ensure your documents are 100% secure.
                </p>
                <Link href="/contact-best-lawyer-shivamogga" className="w-full btn-primary bg-[#D47C42] text-white hover:bg-[#b06536] flex items-center justify-center gap-2 border-none">
                  Book a Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
