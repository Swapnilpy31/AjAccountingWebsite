import React from 'react';
import HeroSection from '@/components/hero/HeroSection';
import ClientsAndPartnersSection from '@/components/sections/ClientsAndPartnersSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ServiceSection from '@/components/sections/ServiceSection';
import FAQSection from '@/components/sections/FAQSection';
import ServicesCarouselSection from '@/components/sections/ServicesCarouselSection';
import HighlightBox from '@/components/sections/HighlightBox';
import WhyUsSection from '@/components/sections/WhyUsSection';

export default function Home() {
  return (
    <div className="bg-white">
      <ServicesCarouselSection />
      <HeroSection />
      <HighlightBox />
      <ClientsAndPartnersSection />
      <WhyUsSection />
      <ProcessSection />
      <ServiceSection />
      <FAQSection />
    </div>
  );
}
