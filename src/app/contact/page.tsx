import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us | Converzas AI Automation Agency",
  description: "Get in touch with our team to discuss how AI automation can transform your business. Schedule a free consultation today.",
  openGraph: {
    title: "Contact Us | Converzas AI Automation Agency",
    description: "Get in touch with our team to discuss how AI automation can transform your business. Schedule a free consultation today.",
    url: "https://converzas.co/contact",
    siteName: "Converzas",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Converzas AI Automation Agency",
    description: "Get in touch with our team to discuss how AI automation can transform your business. Schedule a free consultation today.",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-700">
            Have a question or ready to start your AI automation journey? Get in touch with our team today. Your message will be securely stored in our Google Sheets database.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
          <div>
            <ContactInfo />
            
            <div className="mt-8 p-5 bg-blue-50 border border-blue-100 rounded-lg">
              <h3 className="font-medium text-lg mb-2">About Your Data</h3>
              <p className="text-sm text-gray-700">
                At Converzas, we value your privacy. We use Google Sheets to securely store your contact information, 
                ensuring it's only accessible to authorized team members who need it to respond to your inquiry. 
                We never share your information with third parties without your consent.
              </p>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </Section>
      
      {/* Map or additional content could go here */}
    </div>
  );
} 