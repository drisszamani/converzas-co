import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Clients } from "@/components/home/Clients";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Clients />
      <CTA />
    </>
  );
}
