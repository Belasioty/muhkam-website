import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-section.png';

export const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gradient-to-br from-purple-400 via-blue-500 to-purple-600 flex w-full flex-col overflow-hidden items-stretch max-md:max-w-full relative min-h-screen">
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                Audit. Governance. Compliance. Risk.{' '}
                <span className="block">Unified.</span>
              </h1>
              
              <div className="mb-6">
                <span className="text-2xl md:text-3xl font-semibold text-blue-200 drop-shadow-[0_0_8px_rgba(147,197,253,0.8)]">MUHKAM</span>
                <span className="text-xl md:text-2xl ml-2">is your trusted partner in building a secure and compliant digital ecosystem.</span>
              </div>
              
              <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed opacity-90">
                MUHKAM is your trusted partner in building a secure and compliant digital ecosystem — with an AI-powered platform that unifies Audit, Governance, Compliance, and Risk into one intelligent system.
                Designed for Arabic, MENA region, and Islamic regulatory frameworks for banking and SMEs, it delivers continuous oversight, AI-driven workflows, and regulator-ready reporting.
              </p>
              
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Button>
            </div>
            
            {/* Right side - Image */}
            <div className="flex justify-center lg:justify-end">
              <img 
                src={heroImage} 
                alt="Ask AI interface for auditing, compliance, and risk management" 
                className="w-full max-w-5xl h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
