import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Problems from "@/components/sections/Problems";
import Solution from "@/components/sections/Solution";
import Integrations from "@/components/sections/Integrations";
import HowItWorks from "@/components/sections/HowItWorks";
import SystemExamples from "@/components/sections/SystemExamples";
import Engagement from "@/components/sections/Engagement";
import Fit from "@/components/sections/Fit";
import Industries from "@/components/sections/Industries";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Problems />
      <Solution />
      <Integrations />
      <HowItWorks />
      <SystemExamples />
      <Engagement />
      <Fit />
      <Industries />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
