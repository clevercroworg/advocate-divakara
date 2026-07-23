import { Metadata } from 'next';
import { generateSeoMetadata } from '@/utils/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { MapPin, Phone, Mail, ChevronRight, Home } from "lucide-react";
import Link from 'next/link';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Contact Divakara S.V. | Best Lawyer in Shivamogga',
  description: 'Get in touch with Advocate Divakara S.V. for professional legal scrutiny, property title verification, and civil court representation in Shivamogga.',
});

export default function Contact() {
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
                  Contact Us
                </span>
              </li>
            </ol>
          </nav>

          <div className="text-left md:text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-cormorant text-white mb-4 md:mb-6 drop-shadow-md">
              Contact <span className="text-rose-gold block md:inline mt-1 md:mt-0">Us</span>
            </h1>
            <p className="text-base md:text-xl text-white/90 leading-relaxed">
              Get professional legal scrutiny and property law assistance from the most trusted advocate in Shivamogga.
            </p>
          </div>
        </div>
      </section>

      {/* Light Content Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 -mt-8 md:-mt-12 relative z-20 pb-12 md:pb-20">
        
        {/* Address and Map Split Grid */}
        <div className="flex flex-col lg:flex-row bg-white rounded-[24px] md:rounded-[32px] shadow-xl shadow-black/5 overflow-hidden border-t-4 border-legal-accent mb-12">
          
          {/* Contact Information (Left Side - Dark Theme) */}
          <div className="lg:w-1/2 bg-legal-dark text-white p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold font-cormorant text-white mb-8 border-b border-white/20 pb-4">
              Office Information
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="w-8 h-8 text-[#D47C42] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-wide">Office Address</h3>
                  <address className="text-gray-300 leading-relaxed not-italic">
                    A-5, Renuka Complex, 1st Floor,<br />
                    Near Shaneshwara Temple,<br />
                    3rd Cross, Durgigudi,<br />
                    Shivamogga – Karnataka
                  </address>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-8 h-8 text-[#D47C42] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-wide">Phone / WhatsApp</h3>
                  <p className="text-gray-300">
                    <a href="tel:+919448628530" className="hover:text-rose-gold transition-colors">+91 94486 28530</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-8 h-8 text-[#D47C42] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-wide">Email Address</h3>
                  <p className="text-gray-300">
                    <a href="mailto:divu.smg.adv@gmail.com" className="hover:text-rose-gold transition-colors">divu.smg.adv@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Container (Right Side) */}
          <div className="lg:w-1/2 h-[300px] lg:h-auto bg-gray-100 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x3bbadd77e3843e91%3A0xc3ba67e997f6424e!2sDurgigudi%2C%20Shivamogga%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form Section (Light Theme) */}
        <div className="bg-white p-8 md:p-12 rounded-[24px] md:rounded-[32px] shadow-xl shadow-black/5 border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-cormorant text-legal-dark mb-4">Request a Consultation</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Fill out the form below and our team will get back to you shortly.</p>
          </div>

          <form className="space-y-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-bold tracking-wide text-legal-dark mb-2 uppercase">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full px-5 py-4 rounded-xl bg-[#F8F6F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-legal-accent focus:border-transparent transition-all text-legal-dark"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold tracking-wide text-legal-dark mb-2 uppercase">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-4 rounded-xl bg-[#F8F6F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-legal-accent focus:border-transparent transition-all text-legal-dark"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-bold tracking-wide text-legal-dark mb-2 uppercase">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-5 py-4 rounded-xl bg-[#F8F6F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-legal-accent focus:border-transparent transition-all text-legal-dark"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold tracking-wide text-legal-dark mb-2 uppercase">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-5 py-4 rounded-xl bg-[#F8F6F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-legal-accent focus:border-transparent transition-all text-legal-dark resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="btn-primary w-full md:w-auto px-12 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
