import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCallButton from "@/components/MobileCallButton";
import { GlobalBusinessJsonLd, WebSiteJsonLd } from "@/components/JsonLd";
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans" 
});

export const viewport: Viewport = {
  themeColor: '#5a2a27',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.advocate-divakara-shivamogga.in"),
  title: {
    template: "%s | Advocate Divakara S.V.",
    default: "Advocate Divakara S.V. | Legal Consultant Shivamogga",
  },
  description: "Senior Advocate in Shivamogga. Expert in Legal Scrutiny Reports, Property Verification, and Home Loan Legal Opinions.",
  keywords: "Advocate Shivamogga, Legal Consultant Shivamogga, Property Law Shivamogga, Legal Scrutiny Report, Home Loan Legal Opinion Shivamogga",
  alternates: {
    canonical: '/',
  },
  authors: [{ name: "Advocate Divakara S.V." }],
  creator: "Advocate Divakara S.V.",
  publisher: "Advocate Divakara S.V.",
  openGraph: {
    title: "Advocate Divakara S.V. | Legal Consultant Shivamogga",
    description: "Senior Advocate in Shivamogga. Expert in Legal Scrutiny Reports, Property Verification, and Home Loan Legal Opinions.",
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Advocate Divakara S.V.",
    images: [
      { 
        url: "https://www.advocate-divakara-shivamogga.in/images/og-share-card.png", 
        width: 1200, 
        height: 630,
        alt: "Advocate Divakara S.V. Legal Consultant"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advocate Divakara S.V. | Legal Consultant Shivamogga",
    description: "Senior Advocate in Shivamogga. Expert in Legal Scrutiny Reports, Property Verification, and Home Loan Legal Opinions.",
    images: ["https://www.advocate-divakara-shivamogga.in/images/og-share-card.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased text-gray-900 flex flex-col min-h-screen font-sans text-xl`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <MobileCallButton />
        <GlobalBusinessJsonLd />
        <WebSiteJsonLd />
      </body>
    </html>
  );
}
