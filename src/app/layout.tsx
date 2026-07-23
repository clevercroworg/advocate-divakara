import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { GlobalBusinessJsonLd } from "@/components/JsonLd";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant"
});
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans" 
});

export const metadata: Metadata = {
  metadataBase: new URL("https://advocate-divakara-shivamogga.in"),
  title: {
    template: "%s | Advocate Divakara S.V.",
    default: "Advocate Divakara S.V. | Legal Consultant Shivamogga",
  },
  description: "Senior Advocate in Shivamogga specializing in Legal Scrutiny Reports (LSR), Property Title Verification, and Home Loan Legal Opinions.",
  keywords: "Advocate Shivamogga, Legal Consultant Shivamogga, Property Law Shivamogga, Legal Scrutiny Report, Home Loan Legal Opinion Shivamogga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${cormorant.variable} antialiased text-gray-900 flex flex-col min-h-screen font-sans`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <GlobalBusinessJsonLd />
      </body>
    </html>
  );
}
