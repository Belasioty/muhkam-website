import React from 'react';
import { Check, Search, Settings, Play, BarChart, RefreshCw } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      title: "Connect",
      description: "Seamlessly connect to documents, applications, and systems to automatically collect evidence and assess controls.",
      icon: Check
    },
    {
      title: "Discover & Prioritize",
      description: "Automatically map policies and processes against regulations. AI highlights critical risks and builds a unified Knowledge Graph.",
      icon: Search
    },
    {
      title: "Design", 
      description: "Define and align your GRC programs with AI support for smarter decision-making and strategic planning.",
      icon: Settings
    },
    {
      title: "Execute",
      description: "Automate audit workflows, risk assessments, and compliance checks with precision and efficiency.",
      icon: Play
    },
    {
      title: "Report",
      description: "Generate instant, explainable reports and dashboards with full visibility for management and regulators.",
      icon: BarChart
    },
    {
      title: "Remediate, Iterate and Improve",
      description: "Drive continuous improvement by tracking issues, assigning actions, and ensuring timely remediation.",
      icon: RefreshCw
    }
  ];

  return (
    <section id="how-it-works" className="bg-white relative flex w-full flex-col overflow-hidden py-24 max-md:max-w-full">
      <div className="self-center z-0 w-[1280px] max-w-full text-center px-8 max-md:px-5">
        <div className="flex w-full flex-col items-center max-md:max-w-full">
          <div className="w-[768px] max-w-full">
            <div className="flex w-full flex-col font-semibold max-md:max-w-full">
              <div className="text-base text-black bg-clip-text max-md:max-w-full">
                Your Journey to GRC Excellence
              </div>
              <div className="text-blue-600 text-4xl leading-none tracking-[-0.72px] mt-3 max-md:max-w-full">
                How It Works
              </div>
            </div>
            <div className="text-[#535862] text-xl font-normal mt-5 max-md:max-w-full">
              Start your audit and compliance workflow in a few simple steps:
            </div>
          </div>
        </div>
      </div>
      
      <div className="self-center z-0 w-[1280px] max-w-full mt-16 px-8 max-md:mt-10 max-md:px-5">
        {/* First row - steps 1-3 */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-8 mb-16">
          {steps.slice(0, 3).map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="flex items-center">
                <div className="text-center relative flex-1 max-w-xs">
                  <div className="absolute top-0 left-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="flex flex-col items-center">
                     <div className="w-16 h-16 bg-gradient-to-br from-purple-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                       <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-blue-600 text-xl font-medium mb-2">
                      {step.title}
                    </div>
                    <div className="text-[#535862] text-base font-normal leading-6">
                      {step.description}
                    </div>
                  </div>
                </div>
                {/* Vertical separator - hidden on last item */}
                {index < 2 && (
                  <div className="hidden md:block w-px h-32 bg-gray-300 opacity-70 mx-8"></div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Light separator */}
        <div className="w-full flex justify-center mb-16">
          <div className="w-3/4 h-px bg-gray-300 opacity-70"></div>
        </div>
        
        {/* Second row - steps 4-6 */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-8">
          {steps.slice(3).map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index + 3} className="flex items-center">
                <div className="text-center relative flex-1 max-w-xs">
                  <div className="absolute top-0 left-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 4}
                  </div>
                  <div className="flex flex-col items-center">
                     <div className="w-16 h-16 bg-gradient-to-br from-purple-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                       <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-blue-600 text-xl font-medium mb-2">
                      {step.title}
                    </div>
                    <div className="text-[#535862] text-base font-normal leading-6">
                      {step.description}
                    </div>
                  </div>
                </div>
                {/* Vertical separator - hidden on last item */}
                {index < 2 && (
                  <div className="hidden md:block w-px h-32 bg-gray-300 opacity-70 mx-8"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};