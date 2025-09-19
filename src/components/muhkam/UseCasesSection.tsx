import React from 'react';

export const UseCasesSection: React.FC = () => {
  return (
    <section id="use-cases" className="bg-white self-center relative flex max-w-full w-[1440px] flex-col overflow-hidden items-center py-24">
      <img
        src="https://api.builder.io/api/v1/image/assets/275619cd8b38439686a74a9fbfcacc6a/27aa7a6c86c17f7de521d3919fc379d43b210258?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-[450px] absolute z-0 max-w-full h-[450px] right-10 top-1/2 transform -translate-y-1/2"
        alt="Background pattern"
      />
      
      <div className="absolute z-0 flex w-[930px] max-w-full flex-col -translate-x-2/4 -translate-y-2/4 h-[930px] p-0.5 left-2/4 top-2/4">
        <div className="flex flex-col items-stretch justify-center p-[72px] rounded-[50%] max-md:max-w-full max-md:px-5">
          <div className="flex flex-col items-stretch justify-center px-20 py-[86px] rounded-[50%] max-md:max-w-full max-md:px-5">
            <div className="flex flex-col items-stretch justify-center px-20 py-[91px] rounded-[50%] max-md:max-w-full max-md:px-5">
              <div className="flex flex-col items-stretch justify-center p-[77px] rounded-[50%] max-md:max-w-full max-md:px-5">
                <div className="flex shrink-0 h-[275px] rounded-[50%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="z-0 w-[1280px] max-w-full px-8 max-md:px-5 mb-16">
        <div className="flex w-full flex-col text-left max-md:max-w-full">
          <div className="w-[600px] max-w-full">
            <div className="flex w-full flex-col max-md:max-w-full">
              <div className="text-base font-semibold bg-clip-text max-md:max-w-full text-black">
                Use Cases
              </div>
              <div className="text-[#181D27] text-lg font-normal leading-7 tracking-[0] mt-3 max-md:max-w-full">
                <span style={{ fontWeight: 600, color: '#2563eb' }} className="text-xl">
                  Board Decision Transparency
                </span>{" "}
                <span className="text-base">
                – Imagine a financial institution using our AI-Powered Governance Program to centralize board and committee decisions. Policies, procedures, and authorization matrices would be linked in real time to risks and controls through the Knowledge Graph. This would ensure every decision is traceable, compliant with regulatory requirements, and instantly reportable to auditors and regulators.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="z-0 w-[1280px] max-w-full px-8 max-md:px-5">
        <div className="flex w-full flex-col text-left max-md:max-w-full">
          <div className="w-[600px] max-w-full">
            <div className="flex w-full flex-col max-md:max-w-full">
              <div className="text-lg leading-7 tracking-[0] max-md:max-w-full">
                <span style={{ fontWeight: 600, color: '#2563eb' }} className="text-xl">
                  Risk-Based Audit Planning
                </span>{" "}
                <span className="text-base">
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
