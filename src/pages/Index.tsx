import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SkillsSection from '@/components/SkillsSection';
import AboutSection from '@/components/AboutSection';
import BenefitsSection from '@/components/BenefitsSection';
import TrustSection from '@/components/TrustSection';
import TeamSection from '@/components/TeamSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
      />
      <div className="flex w-full flex-col items-center gap-20 bg-white overflow-x-hidden" style={{ fontFamily: 'Manrope, sans-serif' }}>
        <div className="flex flex-col items-start gap-10 self-stretch">
          <Navbar />
          <Hero />
        </div>
        <SkillsSection />
        <BenefitsSection />
        <TrustSection />
        <AboutSection />
        <TeamSection />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default Index;
