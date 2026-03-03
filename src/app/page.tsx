import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyUs";
import WhatWeTeach from "@/components/home/Subjects";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <WhatWeTeach />
      <Testimonials />
      <FAQ />
      <CTABanner /> 
    </>
  );
}