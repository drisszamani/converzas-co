import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesList } from "@/components/services/ServicesList";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "AI Automation Services | Converzas",
  description: "Explore our AI automation services including chatbots, workflow automation, data analysis, custom AI solutions, and API integration.",
  openGraph: {
    title: "AI Automation Services | Converzas",
    description: "Explore our AI automation services including chatbots, workflow automation, data analysis, custom AI solutions, and API integration.",
    url: "https://converzas.co/services",
    siteName: "Converzas",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Services | Converzas",
    description: "Explore our AI automation services including chatbots, workflow automation, data analysis, custom AI solutions, and API integration.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <CTA />
    </>
  );
} 