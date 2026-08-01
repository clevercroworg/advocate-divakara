"use client";

import { useState, useEffect } from "react";

export default function DisclaimerPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem("hasAcceptedDisclaimer");
    if (!hasAccepted) {
      // Prevent scrolling when popup is open
      document.body.style.overflow = "hidden";
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("hasAcceptedDisclaimer", "true");
    document.body.style.overflow = "unset";
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      {/* Dark semi-transparent backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="bg-[#50223c] text-white p-6 md:p-8 flex-shrink-0">
          <h2 className="text-2xl md:text-3xl font-bold font-cormorant tracking-wide text-center">
            LEGAL DISCLAIMER AND NOTICE
          </h2>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-grow text-gray-700 text-sm md:text-base leading-relaxed space-y-4">
          <p className="font-semibold text-gray-900">
            This website is meant solely for providing information and does not constitute advertising or solicitation. The information provided on this website is not intended to create any lawyer-client relationship.
          </p>

          <p>By accessing this website, you acknowledge and confirm that:</p>

          <ul className="list-disc pl-5 space-y-3">
            <li>The information provided herein is for general informational purposes only and should not be construed as legal advice.</li>
            <li>There has been no advertisement, personal communication, solicitation, invitation, or inducement of any kind whatsoever from this law office or its members to solicit any work through this website.</li>
            <li>The contents of this website are the intellectual property of <strong>Advocate Divakara S.V.</strong> and may not be reproduced without permission.</li>
            <li>This law office does not wish to represent anyone based solely upon viewing this website. Transmission of information from this website is neither intended to create, nor does it create, a lawyer-client relationship.</li>
            <li>No material or information provided on this website should be construed as a substitute for consultation with qualified legal counsel.</li>
            <li>By proceeding to view this website, you accept and acknowledge the above disclaimer.</li>
          </ul>

          <div className="text-xs text-gray-500 mt-6 border-t border-gray-100 pt-4 space-y-2">
            <p>
              <strong>Note:</strong> The Bar Council of India does not permit advertisement or solicitation by advocates. This website is in strict compliance with the Advocates Act, 1961 and the Bar Council of India Rules.
            </p>
            <p>
              This website does not contain client testimonials, case outcomes, ratings, or comparative claims.
            </p>
          </div>
        </div>

        {/* Footer / Action */}
        <div className="bg-gray-50 p-6 border-t border-gray-200 flex-shrink-0">
          <button
            onClick={handleAccept}
            className="w-full bg-[#50223c] hover:bg-[#3A182B] text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 uppercase tracking-widest text-sm shadow-md"
          >
            I Acknowledge and Accept
          </button>
        </div>
      </div>
    </div>
  );
}
