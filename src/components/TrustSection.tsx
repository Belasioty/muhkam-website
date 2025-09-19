import React from 'react';
import { Link } from 'react-router-dom';
import audaiLogo from '../assets/audai-logo-new.png';

const TrustSection = () => {
  const PatternDot = ({ opacity = 1 }: { opacity?: number }) => (
    <div className="flex items-start gap-3" style={{ opacity }}>
      <div className="w-[9px] h-[9px] bg-[#AAB3C3] rounded-[1.5px]" />
      <div className="opacity-50 w-[9px] h-[9px] bg-[#AAB3C3] rounded-[1.5px]" />
      <div className="opacity-20 w-[9px] h-[9px] bg-[#AAB3C3] rounded-[1.5px]" />
    </div>
  );

  const PatternRow = ({ pattern }: { pattern: number[] }) => (
    <div className="flex justify-between items-center self-stretch">
      {pattern.map((opacity, index) => (
        <PatternDot key={index} opacity={opacity} />
      ))}
    </div>
  );

  const patternRows = [
    [1, 0.5, 0.2, 0.1],
    [0.1, 0.2, 1, 0.5, 0.2, 0.1],
    [0.5, 0.2, 0.1, 1],
    [1, 0.1, 0.2, 0.2, 0.1, 0.5],
    [0.5, 1, 0.2, 0.1],
    [1, 0.2, 0.5, 0.2, 1, 0.1],
    [0.2, 0.5, 0.2, 0.1],
    [0.1, 0.2, 1, 0.5, 0.2, 0.1],
    [0.5, 0.2, 0.1, 1],
    [1, 0.2, 0.1, 0.5],
    [1, 0.5, 0.2, 0.1],
    [0.1, 0.2, 0.5, 0.2, 1, 0.1],
    [1, 0.2, 0.1, 0.5],
    [1, 0.5, 0.2, 0.1],
    [0.1, 0.2, 1, 0.5],
    [0.1, 0.2, 1, 0.5, 0.2, 0.1],
    [0.2, 0.5, 0.2, 0.1]
  ];

  return (
    <section className="flex min-h-[400px] lg:h-[624px] justify-center items-center gap-6 self-stretch relative bg-white px-4 md:px-6 py-8 md:py-4 rounded-xl">
      <div className="relative z-[2] flex flex-col items-center gap-4 md:gap-6 max-w-[600px] text-center px-4">
        <div className="flex justify-center items-center">
          <img
            src={audaiLogo}
            alt="Audai Logo"
            className="w-16 h-16 md:w-20 md:h-20 brightness-75 contrast-125"
          />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#333] leading-tight lg:leading-[72px]">
          Together, We Redefine
          <div className="text-blue-600">Trust in Compliance</div>
        </h2>
        <p className="text-base md:text-lg text-[#4D4D4D] leading-6 md:leading-[27px]">
          Ready to join trusted companies in building a secure and compliant digital environment? Our AI-powered platform offers audit, trust, compliance, governance, and risk tools are designed to transform your business and help you stay ahead in the evolving regulatory landscape.
        </p>
        <Link 
          to="/muhkam"
          className="text-[#FDFDFC] text-base md:text-lg font-medium cursor-pointer bg-[#0A5180] px-4 md:px-6 py-3 md:py-[18px] rounded-lg hover:bg-[#084066] transition-colors inline-block"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default TrustSection;
