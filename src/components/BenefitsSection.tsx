import React from 'react';

const BenefitCard = ({ title, description, className = "" }: { title: string; description: string; className?: string }) => (
  <div className={`flex flex-col items-center gap-6 h-full bg-[#F7F6F3] p-6 md:p-8 lg:p-[50px] rounded-xl ${className}`}>
    <h3 className="self-stretch text-[#333] text-2xl font-semibold leading-9">
      {title}
    </h3>
    <p className="self-stretch text-[#4D4D4D] text-lg font-normal leading-[27px]">
      {description}
    </p>
  </div>
);

const BenefitsSection = () => {
  return (
    <section id="benefits" className="flex w-full flex-col items-start gap-12 px-4 lg:px-[162px] max-md:w-full max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0">
      <div className="flex flex-col items-center gap-2 self-stretch px-4 lg:px-[300px] py-0 max-md:px-10 max-md:py-0 max-sm:p-0">
        <h2 className="self-stretch text-[#333] text-center text-5xl font-semibold leading-[72px] max-sm:text-4xl">
          🔹 Benefits of Partnering with GHB EMEA
        </h2>
        <p className="self-stretch text-[#4D4D4D] text-center text-lg font-normal leading-[27px]">
          By choosing GHB EMEA, your organization will benefit from strategic expertise, cutting-edge technologies, and trusted guidance designed to drive long-term success.
        </p>
      </div>
      <div className="flex flex-col gap-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          <BenefitCard
            title="Tailored Strategic Solutions"
            description="We craft customized technology and AI strategies aligned with your unique goals, ensuring measurable impact and sustainable growth."
          />
          <BenefitCard
            title="Innovation that Delivers Results"
            description="Our solutions combine creativity with technical excellence, transforming complex challenges into opportunities for competitive advantage."
          />
          <BenefitCard
            title="Client-Centric Approach"
            description="We place your organization at the heart of our process through collaboration, transparency, and a deep understanding of your industry needs."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          <BenefitCard
            title="Future-Ready Digital Transformation"
            description="From AI integration to IT governance, our solutions prepare your business to adapt, scale, and thrive in today's rapidly evolving digital economy."
          />
          <BenefitCard
            title="Strong Compliance & Data Security"
            description="With expertise in GDPR, ISO 27001, and DAMA standards, we safeguard your data and ensure trust, security, and regulatory alignment."
          />
          <BenefitCard
            title="Customized AI Solutions"
            description="We develop bespoke AI applications tailored to your specific business needs, from intelligent automation to predictive analytics that drive measurable outcomes."
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
