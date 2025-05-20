import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { Mission } from "@/components/about/Mission";
import { Values } from "@/components/about/Values";
import { Team } from "@/components/about/Team";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "About Us | Converzas AI Automation Agency",
  description: "Learn about our mission, values, and the team behind Converzas, the leading AI automation agency for modern businesses.",
  openGraph: {
    title: "About Us | Converzas AI Automation Agency",
    description: "Learn about our mission, values, and the team behind Converzas, the leading AI automation agency for modern businesses.",
    url: "https://converzas.co/about",
    siteName: "Converzas",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Converzas AI Automation Agency",
    description: "Learn about our mission, values, and the team behind Converzas, the leading AI automation agency for modern businesses.",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Values />
      <Team />
      <CTA />
    </>
  );
} 