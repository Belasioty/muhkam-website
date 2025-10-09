import React from 'react';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import audaiLogo from '@/assets/audai-logo-new.png';

const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="flex justify-between items-center px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-32 py-4 lg:py-5">
        <div className="flex items-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/53b075d93364c4753c543ea7e0ef7e444d50adcc?width=340"
            alt="GHB EMEA Logo"
            className="w-32 md:w-40 lg:w-44 h-8 md:h-10 lg:h-11 mr-6 lg:mr-8"
          />
        </div>
          
        {/* Navigation Links - centered and evenly distributed */}
        <div className="hidden lg:flex items-center justify-center flex-1 gap-1">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex-1 flex items-center justify-center text-[#333] text-sm lg:text-base font-medium cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-1 flex items-center justify-center text-[#333] text-sm lg:text-base font-medium cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-1 flex items-center justify-center text-[#333] text-sm lg:text-base font-medium cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Benefits
          </button>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-1 flex items-center justify-center text-[#333] text-sm lg:text-base font-medium cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            About Us
          </button>
          <button 
            onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-1 flex items-center justify-center text-[#333] text-sm lg:text-base font-medium cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Our Team
          </button>
          <div className="flex items-center">
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              variant="default"
              size="sm"
              className="flex items-center gap-2 text-sm lg:text-base font-medium whitespace-nowrap bg-[#0A5180] hover:bg-[#084066] text-white"
            >
              <Users size={16} />
              Contact Sales
            </Button>
          </div>
        </div>
        
        {/* Action Buttons - Audai and Call positioned at the end */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/muhkam" className="flex h-11 lg:h-12 justify-center items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all duration-300 shadow-lg">
            <img
              src={audaiLogo}
              alt="Audai logo"
              className="w-5 h-5 lg:w-6 lg:h-6 brightness-75 contrast-125"
            />
            <div className="text-blue-600 text-sm lg:text-base font-medium">
              Muhkam
            </div>
          </Link>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex h-11 lg:h-12 justify-center items-center gap-2 bg-[#0A5180] px-4 py-2 rounded-lg hover:bg-[#084066] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white lg:w-5 lg:h-5">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.31726 1.28657C5.88395 1.40369 6.33524 1.78443 6.61564 2.28746L7.50885 3.8899C7.83785 4.48011 8.11473 4.97679 8.29554 5.40857C8.48735 5.86658 8.60126 6.31824 8.54919 6.8176C8.49711 7.31696 8.29246 7.7354 8.01029 8.14399C7.74428 8.52917 7.37088 8.95804 6.92718 9.46767L4.69932 12.0267C6.46617 14.9227 9.0751 17.5328 11.9741 19.3014L14.5331 17.0736C15.0427 16.6299 15.4716 16.2565 15.8568 15.9905C16.2653 15.7083 16.6838 15.5036 17.1831 15.4516C17.6825 15.3995 18.1342 15.5134 18.5922 15.7052C19.024 15.886 19.5206 16.1629 20.1109 16.4919L21.7133 17.3851C22.2163 17.6655 22.5971 18.1168 22.7142 18.6835C22.8325 19.2561 22.658 19.8316 22.2724 20.3047C20.8735 22.021 18.6322 23.1139 16.281 22.6396C14.8358 22.348 13.4098 21.8623 11.6851 20.8732C8.2197 18.8858 5.11263 15.777 3.12755 12.3157C2.13843 10.591 1.65272 9.165 1.36118 7.71974C0.88688 5.36852 1.97971 3.12724 3.69608 1.72833C4.16911 1.34279 4.74466 1.16822 5.31726 1.28657ZM13.3712 20.0739C14.5376 20.6486 15.552 20.9623 16.5776 21.1692C18.2737 21.5113 19.9859 20.7358 21.1097 19.357C21.2572 19.176 21.2582 19.0496 21.2452 18.9871C21.2311 18.9187 21.1738 18.8017 20.983 18.6953L19.4165 17.8221C18.7808 17.4678 18.3577 17.2332 18.0128 17.0888C17.6854 16.9517 17.4976 16.9269 17.3387 16.9435C17.1799 16.96 17.0012 17.0231 16.7092 17.2247C16.4015 17.4372 16.0358 17.7541 15.487 18.2319L13.3712 20.0739ZM3.92685 10.6296L5.76884 8.51376C6.24667 7.9649 6.56355 7.59925 6.77602 7.29159C6.9777 6.99956 7.04072 6.82086 7.05728 6.66202C7.07384 6.50319 7.04905 6.31533 6.91196 5.98797C6.76754 5.6431 6.53292 5.21993 6.17861 4.58429L5.30543 3.01778C5.19905 2.82693 5.08207 2.76966 5.01365 2.75552C4.95115 2.7426 4.82478 2.74351 4.64374 2.89106C3.26497 4.01482 2.48943 5.72708 2.83156 7.42313C3.03844 8.44871 3.35213 9.46319 3.92685 10.6296Z" fill="white"/>
            </svg>
            <span className="text-[#FDFDFC] text-sm lg:text-base font-medium">
              Book a Consultation
            </span>
          </button>
        </div>
        
        {/* Mobile buttons - visible only on medium and smaller screens */}
        <div className="flex lg:hidden items-center gap-4 ml-auto">
          <Link to="/muhkam" className="flex h-12 justify-center items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all duration-300 shadow-lg">
            <img
              src={audaiLogo}
              alt="Audai logo"
              className="w-[20px] h-[20px] brightness-75 contrast-125"
            />
            <div className="text-blue-600 text-sm font-medium">
              Muhkam
            </div>
          </Link>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex h-12 justify-center items-center gap-2 bg-[#0A5180] px-3 py-2 rounded-lg hover:bg-[#084066] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.31726 1.28657C5.88395 1.40369 6.33524 1.78443 6.61564 2.28746L7.50885 3.8899C7.83785 4.48011 8.11473 4.97679 8.29554 5.40857C8.48735 5.86658 8.60126 6.31824 8.54919 6.8176C8.49711 7.31696 8.29246 7.7354 8.01029 8.14399C7.74428 8.52917 7.37088 8.95804 6.92718 9.46767L4.69932 12.0267C6.46617 14.9227 9.0751 17.5328 11.9741 19.3014L14.5331 17.0736C15.0427 16.6299 15.4716 16.2565 15.8568 15.9905C16.2653 15.7083 16.6838 15.5036 17.1831 15.4516C17.6825 15.3995 18.1342 15.5134 18.5922 15.7052C19.024 15.886 19.5206 16.1629 20.1109 16.4919L21.7133 17.3851C22.2163 17.6655 22.5971 18.1168 22.7142 18.6835C22.8325 19.2561 22.658 19.8316 22.2724 20.3047C20.8735 22.021 18.6322 23.1139 16.281 22.6396C14.8358 22.348 13.4098 21.8623 11.6851 20.8732C8.2197 18.8858 5.11263 15.777 3.12755 12.3157C2.13843 10.591 1.65272 9.165 1.36118 7.71974C0.88688 5.36852 1.97971 3.12724 3.69608 1.72833C4.16911 1.34279 4.74466 1.16822 5.31726 1.28657ZM13.3712 20.0739C14.5376 20.6486 15.552 20.9623 16.5776 21.1692C18.2737 21.5113 19.9859 20.7358 21.1097 19.357C21.2572 19.176 21.2582 19.0496 21.2452 18.9871C21.2311 18.9187 21.1738 18.8017 20.983 18.6953L19.4165 17.8221C18.7808 17.4678 18.3577 17.2332 18.0128 17.0888C17.6854 16.9517 17.4976 16.9269 17.3387 16.9435C17.1799 16.96 17.0012 17.0231 16.7092 17.2247C16.4015 17.4372 16.0358 17.7541 15.487 18.2319L13.3712 20.0739ZM3.92685 10.6296L5.76884 8.51376C6.24667 7.9649 6.56355 7.59925 6.77602 7.29159C6.9777 6.99956 7.04072 6.82086 7.05728 6.66202C7.07384 6.50319 7.04905 6.31533 6.91196 5.98797C6.76754 5.6431 6.53292 5.21993 6.17861 4.58429L5.30543 3.01778C5.19905 2.82693 5.08207 2.76966 5.01365 2.75552C4.95115 2.7426 4.82478 2.74351 4.64374 2.89106C3.26497 4.01482 2.48943 5.72708 2.83156 7.42313C3.03844 8.44871 3.35213 9.46319 3.92685 10.6296Z" fill="white"/>
            </svg>
            <span className="text-[#FDFDFC] text-sm font-medium">
              Call
            </span>
          </button>
        </div>
      </nav>
      <div className="w-full h-px bg-[#E1DBD1]"></div>
    </div>
  );
};

export default Navbar;