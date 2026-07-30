import { Phone } from 'lucide-react';

export default function MobileCallButton() {
  return (
    <div className="fixed bottom-0 left-0 w-full md:hidden z-50 bg-transparent p-4 pb-safe pointer-events-none">
      <a 
        href="tel:+919448628530" 
        className="w-full flex items-center justify-center gap-2 bg-[#198754] text-white font-bold py-3.5 px-4 rounded-xl shadow-xl transition-transform active:scale-95 text-lg pointer-events-auto border border-white/20"
      >
        <Phone className="w-5 h-5 animate-pulse" />
        Call Now
      </a>
    </div>
  );
}
