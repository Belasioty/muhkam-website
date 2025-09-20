import React from 'react';
import { Navigation } from '@/components/muhkam/Navigation';
import { HeroSection } from '@/components/muhkam/HeroSection';
import { FeaturesSection } from '@/components/muhkam/FeaturesSection';
import { WhyAudaiSection } from '@/components/muhkam/WhyAudaiSection';
import { HowItWorksSection } from '@/components/muhkam/HowItWorksSection';
import { UseCasesSection } from '@/components/muhkam/UseCasesSection';
import { CTASection } from '@/components/muhkam/CTASection';
import Footer from '@/components/Footer';

const Muhkam = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />

      {/* Main content area with top padding for fixed navbar */}
    <main className="px-0.5 pt-20">
      <div className="bg-neutral-50 flex w-full flex-col overflow-hidden items-stretch max-md:max-w-full">
        <HeroSection />
        
        <div className="bg-neutral-50 flex min-h-px w-full max-md:max-w-full" />
        
        <FeaturesSection />
        
        <div className="bg-neutral-50 flex w-full justify-center max-md:max-w-full">
            <div className="w-full mx-auto px-8 max-md:px-5">
            <div className="bg-[rgba(233,234,235,1)] flex min-h-px w-full max-md:max-w-full" />
          </div>
        </div>
        
        <WhyAudaiSection />
        
        <div className="bg-neutral-50 flex w-full justify-center max-md:max-w-full">
            <div className="w-full mx-auto px-8 max-md:px-5">
            <div className="bg-[rgba(233,234,235,1)] flex min-h-px w-full max-md:max-w-full" />
          </div>
        </div>
        
        <HowItWorksSection />
        
        <div className="bg-neutral-50 flex w-full justify-center max-md:max-w-full">
            <div className="w-full mx-auto px-8 max-md:px-5">
            <div className="bg-[rgba(233,234,235,1)] flex min-h-px w-full max-md:max-w-full" />
          </div>
        </div>
        
        <UseCasesSection />
        
        <div className="bg-neutral-50 flex w-full justify-center max-md:max-w-full">
          <div className="w-full mx-auto px-8 max-md:px-5">
            <div className="bg-[rgba(233,234,235,1)] flex min-h-px w-full max-md:max-w-full" />
          </div>
        </div>
        
        
        <CTASection />
        
        <Footer />
      </div>
    </main>
    </div>
  );
};

export default Muhkam;