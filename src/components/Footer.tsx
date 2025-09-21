import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-8 w-full bg-[#F7F6F3] px-4 lg:px-[162px] py-20 max-md:px-10 max-md:py-[60px] max-sm:px-5 max-sm:py-10">
      <div className="flex justify-between gap-12 max-md:flex-col max-md:gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-[#333]">
            Get in touch
          </h3>
          <p className="text-base text-[#4D4D4D]">
            Feel free to reach out to us
          </p>
          <a href="tel:+447424567" className="text-base text-[#0A5180] font-medium hover:underline">
            +44 7424 5678
          </a>
          <a href="mailto:info@ghb-emea.com" className="text-base text-[#0A5180] font-medium hover:underline">
            info@ghb-emea.com
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-[#333]">Address</h3>
          <address className="text-base text-[#4D4D4D] max-w-[300px] not-italic">
            Office No.BL12, Floor 22, Servcorp, No17, Tornado Tower, Doha
          </address>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-[#333]">
            Social Profiles
          </h3>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/ghb-business-entrepreneurs/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-2xl text-[#0A5180] hover:text-[#084066] transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center pt-8 border-t-[#E1DBD1] border-t border-solid max-md:flex-col max-md:gap-6 max-sm:text-center">
        <div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/53b075d93364c4753c543ea7e0ef7e444d50adcc?width=340"
            alt="GHB EMEA"
            className="h-12"
          />
        </div>
        <nav className="flex gap-8">
          <a href="https://ghb-emea.com/" target="_blank" rel="noopener noreferrer" className="text-base text-[#333] hover:text-[#0A5180] transition-colors">About Us</a>
          <a href="/#contact" className="text-base text-[#333] hover:text-[#0A5180] transition-colors">Contact Us</a>
        </nav>
      </div>
      <div className="text-center text-sm text-[#4D4D4D] pt-6">
        Copyright © 2024 GHB EMEA Ltd. All rights reserved. | 
        <a href="/privacy-policy" className="hover:underline"> Privacy Policy</a> | 
        <a href="/terms-of-service" className="hover:underline"> Terms of Use</a> | 
        <a href="/data-protection" className="hover:underline"> Data Protection</a> | 
        <a href="/cookie-policy" className="hover:underline"> Cookie Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
