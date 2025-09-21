import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogoProcessor } from '../LogoProcessor';
import audaiLogo from '../../assets/audai-logo-new.png';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  const [logoUrl, setLogoUrl] = useState<string>(audaiLogo);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <LogoProcessor onProcessed={setLogoUrl} />
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-2">
          <img
            src={logoUrl}
            alt="Muhkam logo"
            className="w-[40px] h-[40px]"
          />
          <span className="text-blue-600 text-2xl font-medium">MUHKAM</span>
        </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-8">
        {isMainPage ? (
          <>
            <button 
              onClick={() => scrollToSection('overview')}
              className="text-gray-800 hover:text-blue-600 transition-colors cursor-pointer font-medium px-4 py-2 text-lg"
            >
              Overview
            </button>
            <button 
              onClick={() => scrollToSection('why-audai')}
              className="text-gray-800 hover:text-blue-600 transition-colors cursor-pointer font-medium px-4 py-2 text-lg"
            >
              Why Muhkam
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-800 hover:text-blue-600 transition-colors cursor-pointer font-medium px-4 py-2 text-lg"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('use-cases')}
              className="text-gray-800 hover:text-blue-600 transition-colors cursor-pointer font-medium px-4 py-2 text-lg"
            >
              Use Cases
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-800 hover:text-blue-600 transition-colors cursor-pointer font-medium px-4 py-2 text-lg"
            >
              Contact Us
            </button>
          </>
        ) : (
          <Link 
            to="/" 
            className="text-gray-800 hover:text-blue-600 transition-colors cursor-pointer font-medium px-4 py-2 text-lg"
          >
            ← Back to Home
          </Link>
        )}
      </div>

      </nav>
    </>
  );
};