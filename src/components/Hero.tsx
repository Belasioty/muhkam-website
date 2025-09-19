import React from 'react';

const Hero = () => {
  return (
    <section className="flex items-center self-stretch px-4 lg:pl-[162px] max-md:pl-10 max-sm:flex-col max-sm:pl-5">
      <div className="flex flex-col items-start gap-12 lg:gap-20 flex-[1_0_0]">
        <div className="flex flex-col items-start gap-8 lg:gap-10 self-stretch pr-4 lg:pr-[156px] max-md:pr-10 max-sm:pr-5">
          <div className="flex flex-col items-start gap-4 lg:gap-6 self-stretch">
            <div className="flex flex-col items-start gap-2.5 lg:gap-4 self-stretch">
              <h1 className="self-stretch text-[#1A1A1A] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] font-semibold leading-tight lg:leading-[87px]">
                Welcome to GHB EMEA!
              </h1>
              <p className="self-stretch text-[#4D4D4D] text-sm sm:text-base lg:text-lg font-normal leading-relaxed lg:leading-[27px]">
                We are a forward-thinking technology consulting firm, leveraging artificial intelligence and strategic solutions to help businesses grow, optimize operations, and ensure robust data governance.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-10 max-sm:flex-col max-sm:items-start max-sm:w-full">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 bg-[#0A5180] px-4 sm:px-6 py-3 sm:py-[18px] rounded-lg hover:bg-[#084066] transition-colors whitespace-nowrap"
            >
              <svg width="20" height="21" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white sm:w-6 sm:h-6">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.31726 1.78657C5.88395 1.90369 6.33524 2.28443 6.61564 2.78746L7.50885 4.3899C7.83785 4.98011 8.11473 5.47679 8.29554 5.90857C8.48735 6.36658 8.60126 6.81824 8.54919 7.3176C8.49711 7.81696 8.29246 8.2354 8.01029 8.64399C7.74428 9.02917 7.37088 9.45804 6.92718 9.96767L4.69932 12.5267C6.46617 15.4227 9.0751 18.0328 11.9741 19.8014L14.5331 17.5736C15.0427 17.1299 15.4716 16.7565 15.8568 16.4905C16.2653 16.2083 16.6838 16.0036 17.1831 15.9516C17.6825 15.8995 18.1342 16.0134 18.5922 16.2052C19.024 16.386 19.5206 16.6629 20.1109 16.9919L21.7133 17.8851C22.2163 18.1655 22.5971 18.6168 22.7142 19.1835C22.8325 19.7561 22.658 20.3316 22.2724 20.8047C20.8735 22.521 18.6322 23.6139 16.281 23.1396C14.8358 22.848 13.4098 22.3623 11.6851 21.3732C8.2197 19.3858 5.11263 16.277 3.12755 12.8157C2.13843 11.091 1.65272 9.665 1.36118 8.21974C0.88688 5.86852 1.97971 3.62724 3.69608 2.22833C4.16911 1.84279 4.74466 1.66822 5.31726 1.78657ZM13.3712 20.5739C14.5376 21.1486 15.552 21.4623 16.5776 21.6692C18.2737 22.0113 19.9859 21.2358 21.1097 19.857C21.2572 19.676 21.2582 19.5496 21.2452 19.4871C21.2311 19.4187 21.1738 19.3017 20.983 19.1953L19.4165 18.3221C18.7808 17.9678 18.3577 17.7332 18.0128 17.5888C17.6854 17.4517 17.4976 17.4269 17.3387 17.4435C17.1799 17.46 17.0012 17.5231 16.7092 17.7247C16.4015 17.9372 16.0358 18.2541 15.487 18.7319L13.3712 20.5739ZM3.92685 11.1296L5.76884 9.01376C6.24667 8.4649 6.56355 8.09925 6.77602 7.79159C6.9777 7.49956 7.04072 7.32086 7.05728 7.16202C7.07384 7.00319 7.04905 6.81533 6.91196 6.48797C6.76754 6.1431 6.53292 5.71993 6.17861 5.08429L5.30543 3.51778C5.19905 3.32693 5.08207 3.26966 5.01365 3.25552C4.95115 3.2426 4.82478 3.24351 4.64374 3.39106C3.26497 4.51482 2.48943 6.22708 2.83156 7.92313C3.03844 8.94871 3.35213 9.96319 3.92685 11.1296Z" fill="white"/>
              </svg>
              <span className="text-[#FDFDFC] text-sm sm:text-lg font-medium leading-[27px]">
                Book a Consultation
              </span>
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[#1A1A1A] text-sm sm:text-lg font-medium leading-[27px] hover:text-[#0A5180] transition-colors whitespace-nowrap"
            >
              Explore Our Services →
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-[815px] h-[977px] items-start gap-2.5 relative pt-20 pb-0 px-4 lg:px-20 rounded-[0_0_0_30px] max-sm:w-full max-sm:h-auto max-sm:pt-10 max-sm:pb-0 max-sm:px-5">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/4398f8063de7fdd2c0a11576a8a24e9c166c69a5?width=1310"
          alt="Professional consulting team"
          className="flex-[1_0_0] self-stretch object-cover"
        />
        <div className="w-full max-w-[388px] h-[349px] absolute left-0 -top-5 hidden lg:block">
          <div className="w-[137px] h-[133px] absolute bg-[#EEEBE5] left-0 top-0" />
          <div className="w-[137px] h-[133px] absolute bg-[#EEEBE5] left-[114px] top-28" />
          <div className="w-[137px] h-[133px] absolute bg-[#EEEBE5] left-0 top-[216px]" />
          <div className="w-[137px] h-[133px] absolute bg-[#EEEBE5] left-[251px] top-0" />
        </div>
        <div className="w-full max-w-[388px] h-[349px] absolute right-0 bottom-0 hidden lg:block">
          <div className="w-[137px] h-[133px] absolute bg-[#EEEBE5] right-0 bottom-0" />
          <div className="w-[137px] h-[133px] absolute bg-[#EEEBE5] right-[137px] bottom-[104px]" />
          <div className="w-[137px] h-[133px] absolute bg-[#EEEBE5] right-0 top-0" />
          <div className="w-[137px] h-[133px] absolute bg-[#EEEBE5] left-0 bottom-0" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
