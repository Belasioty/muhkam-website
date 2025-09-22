import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';
import muhkamLogo from '../../assets/muhkam-logo-new.png';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoUrl = muhkamLogo;
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      {/* Logo and Brand Name */}
      <div className="flex items-center gap-2">
        <img
          src={logoUrl}
          alt="Muhkam logo"
          className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]"
        />
        <span className="text-blue-600 text-xl md:text-2xl font-medium">MUHKAM</span>
      </div>

      {/* Desktop Navigation Links */}
      {!isMobile && (
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
                Why MUHKAM
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
      )}

      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-gray-800 hover:text-blue-600 transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Mobile Menu Overlay */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-white backdrop-blur-md z-50 shadow-lg border-t border-gray-200">
          <div className="flex flex-col px-6 py-8 space-y-6">
            {isMainPage ? (
              <>
                <button 
                  onClick={() => scrollToSection('overview')}
                  className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-lg text-left"
                >
                  Overview
                </button>
                <button 
                  onClick={() => scrollToSection('why-audai')}
                  className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-lg text-left"
                >
                  Why MUHKAM
                </button>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-lg text-left"
                >
                  How It Works
                </button>
                <button 
                  onClick={() => scrollToSection('use-cases')}
                  className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-lg text-left"
                >
                  Use Cases
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-lg text-left"
                >
                  Contact Us
                </button>
              </>
            ) : (
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-lg text-left"
              >
                ← Back to Home
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};