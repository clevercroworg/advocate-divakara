import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1B263B] text-gray-100 py-16 md:py-20 lg:py-32 border-t-[8px] border-white/20">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold font-cormorant text-white mb-6">Advocate Divakara S.V.</h3>
          <p className="text-sm leading-relaxed text-gray-200 max-w-sm">
            A senior Advocate and Legal Consultant in Shivamogga, Karnataka, delivering 25+ years of expertise in Legal Scrutiny Reports (LSR), property title verification, and secure home loan legal opinions.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-white text-gray-300 transition-colors">Home</Link></li>
            <li><Link href="/about-best-lawyer-shivamogga" className="hover:text-white text-gray-300 transition-colors">About Advocate</Link></li>
            <li><Link href="/practice-areas-best-lawyer-shivamogga" className="hover:text-white text-gray-300 transition-colors">Practice Areas</Link></li>
            <li><Link href="/blog" className="hover:text-white text-gray-300 transition-colors">Blog & Insights</Link></li>
            <li><Link href="/contact-best-lawyer-shivamogga" className="hover:text-white text-gray-300 transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Information</h3>
          <address className="not-italic text-sm text-gray-300 space-y-3">
            <p>A-5, Renuka Complex, 1st Floor,<br />Near Shaneshwara Temple,<br />3rd Cross, Durgigudi,<br />Shivamogga – Karnataka</p>
            <p className="pt-2 flex items-center gap-2">
              <span className="text-white font-semibold">Phone:</span> <a href="tel:+919448628530" className="hover:text-white transition-colors">+91 94486 28530</a>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-white font-semibold">Email:</span> <a href="mailto:divu.smg.adv@gmail.com" className="hover:text-white transition-colors">divu.smg.adv@gmail.com</a>
            </p>
          </address>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 mt-16 pt-8 border-t border-white/20 text-sm text-gray-300">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <p>Copyright © {new Date().getFullYear()} advocate-divakara-shivamogga.in. All rights reserved.</p>
        </div>
        <div className="text-center md:text-left text-xs text-gray-400 mt-2">
          <p>This website is in compliance with the Advocates Act, 1961 and Bar Council of India Rules.</p>
        </div>
      </div>
    </footer>
  );
}

