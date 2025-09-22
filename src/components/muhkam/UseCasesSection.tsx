import React from 'react';

export const UseCasesSection: React.FC = () => {
  return (
    <section id="use-cases" className="bg-background self-center relative flex max-w-full w-full lg:w-[1440px] flex-col overflow-hidden items-center py-12 md:py-24">
      {/* Background pattern - hidden on mobile for better performance */}
      <img
        src="https://api.builder.io/api/v1/image/assets/275619cd8b38439686a74a9fbfcacc6a/27aa7a6c86c17f7de521d3919fc379d43b210258?placeholderIfAbsent=true"
        className="hidden md:block aspect-[1] object-contain w-[300px] lg:w-[450px] absolute z-0 max-w-full h-[300px] lg:h-[450px] right-5 lg:right-10 top-1/2 transform -translate-y-1/2 opacity-50"
        alt="Background pattern"
      />
      
      {/* Simplified background circles for mobile */}
      <div className="hidden md:block absolute z-0 flex w-[600px] lg:w-[930px] max-w-full flex-col -translate-x-2/4 -translate-y-2/4 h-[600px] lg:h-[930px] p-0.5 left-2/4 top-2/4">
        <div className="flex flex-col items-stretch justify-center p-8 lg:p-[72px] rounded-[50%] max-md:max-w-full">
          <div className="flex flex-col items-stretch justify-center px-8 lg:px-20 py-12 lg:py-[86px] rounded-[50%] max-md:max-w-full">
            <div className="flex flex-col items-stretch justify-center px-8 lg:px-20 py-12 lg:py-[91px] rounded-[50%] max-md:max-w-full">
              <div className="flex flex-col items-stretch justify-center p-8 lg:p-[77px] rounded-[50%] max-md:max-w-full">
                <div className="flex shrink-0 h-[150px] lg:h-[275px] rounded-[50%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="z-10 w-full max-w-[1280px] px-4 md:px-8 mb-8 md:mb-16">
        <div className="flex w-full flex-col text-left">
          <div className="w-full md:w-[600px]">
            <div className="flex w-full flex-col">
              <div className="text-base md:text-lg font-semibold text-black mb-4">
                Use Cases
              </div>
              <div className="text-[#181D27] text-base md:text-lg font-normal leading-6 md:leading-7 tracking-[0]">
                <span className="text-lg md:text-xl font-semibold text-blue-600 block mb-2">
                  Board Decision Transparency
                </span>
                <span className="text-sm md:text-base leading-relaxed">
                – Imagine a financial institution using our AI-Powered Governance Program to centralize board and committee decisions. Policies, procedures, and authorization matrices would be linked in real time to risks and controls through the Knowledge Graph. This would ensure every decision is traceable, compliant with regulatory requirements, and instantly reportable to auditors and regulators.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="z-10 w-full max-w-[1280px] px-4 md:px-8">
        <div className="flex w-full flex-col text-left">
          <div className="w-full md:w-[600px]">
            <div className="flex w-full flex-col">
              <div className="text-base md:text-lg leading-6 md:leading-7 tracking-[0]">
                <span className="text-lg md:text-xl font-semibold text-blue-600 block mb-2">
                  Risk-Based Audit Planning
                </span>
                <span className="text-sm md:text-base leading-relaxed">
                – With our AI-Powered Audit Planning, an international bank could automatically map risks to controls and prioritize high-risk areas. By connecting directly to core systems and documents, evidence could be collected automatically, reducing planning time from weeks to days. The result would be smarter, adaptive audits that focus on what matters most, with instant reporting for management and regulators.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
