"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Scale } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#1B263B] text-white shadow-xl shadow-black/10 sticky top-0 z-50 border-b border-[#2A3B5C]">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-bold text-2xl tracking-tight text-white font-cormorant hover:text-gray-200 transition-colors duration-200 flex items-center gap-2">
              <Scale className="w-8 h-8 text-white" />
              <span>Advocate Divakara S.V.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200 px-3 py-2 text-sm font-semibold tracking-wide">Home</Link>
            <Link href="/about-best-lawyer-shivamogga" className="text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200 px-3 py-2 text-sm font-semibold tracking-wide">About</Link>
            <Link href="/practice-areas-best-lawyer-shivamogga" className="text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200 px-3 py-2 text-sm font-semibold tracking-wide">Practice Areas</Link>
            <Link href="/blog" className="text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200 px-3 py-2 text-sm font-semibold tracking-wide">Blog</Link>
            <Link href="/contact-best-lawyer-shivamogga" className="text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200 px-3 py-2 text-sm font-semibold tracking-wide">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 focus:outline-none p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#1B263B] border-b border-[#2A3B5C] shadow-2xl absolute w-full left-0 top-20">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <Link onClick={toggleMenu} href="/" className="block px-4 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors">Home</Link>
            <Link onClick={toggleMenu} href="/about-best-lawyer-shivamogga" className="block px-4 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors">About</Link>
            <Link onClick={toggleMenu} href="/practice-areas-best-lawyer-shivamogga" className="block px-4 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors">Practice Areas</Link>
            <Link onClick={toggleMenu} href="/blog" className="block px-4 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors">Blog</Link>
            <Link onClick={toggleMenu} href="/contact-best-lawyer-shivamogga" className="block px-4 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
