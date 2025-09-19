import React from 'react';

export const WhyAudaiSection: React.FC = () => {
  return (
    <section id="why-audai" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Why Choose Muhkam?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your governance, risk, and compliance management with our AI-powered unified platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Glass Card 1 - AI-Powered Intelligence */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50/80 to-indigo-100/80 backdrop-blur-md border border-blue-200/30 shadow-xl p-8 hover:shadow-2xl transition-all duration-300 animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-500/10"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">AI-Powered Intelligence</h3>
              <p className="text-gray-700 leading-relaxed">
                Leverage advanced artificial intelligence to automate compliance monitoring, risk assessment, and audit processes with unprecedented accuracy.
              </p>
            </div>
          </div>
          
          {/* Glass Card 2 - Unified Platform */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50/80 to-indigo-100/80 backdrop-blur-md border border-blue-200/30 shadow-xl p-8 hover:shadow-2xl transition-all duration-300 animate-fade-in hover-scale">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-blue-500/10"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Unified Platform</h3>
              <p className="text-gray-700 leading-relaxed">
                Consolidate all your GRC activities into one comprehensive platform, eliminating silos and improving collaboration across teams.
              </p>
            </div>
          </div>
          
          {/* Glass Card 3 - Real-Time Reporting */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50/80 to-indigo-100/80 backdrop-blur-md border border-blue-200/30 shadow-xl p-8 hover:shadow-2xl transition-all duration-300 animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-indigo-500/10"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Real-Time Reporting</h3>
              <p className="text-gray-700 leading-relaxed">
                Generate regulator-ready reports instantly with real-time data visualization and automated compliance tracking.
              </p>
            </div>
          </div>
          
          {/* Glass Card 4 - Enterprise Security */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50/80 to-indigo-100/80 backdrop-blur-md border border-blue-200/30 shadow-xl p-8 hover:shadow-2xl transition-all duration-300 animate-fade-in hover-scale">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 to-blue-500/10"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Enterprise Security</h3>
              <p className="text-gray-700 leading-relaxed">
                Built with enterprise-grade security standards, ensuring your sensitive data remains protected and compliant.
              </p>
            </div>
          </div>
          
          {/* Glass Card 5 - Scalable Growth */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50/80 to-indigo-100/80 backdrop-blur-md border border-blue-200/30 shadow-xl p-8 hover:shadow-2xl transition-all duration-300 animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-500/10"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Scalable Growth</h3>
              <p className="text-gray-700 leading-relaxed">
                Scale effortlessly as your organization grows, with flexible deployment options and customizable workflows.
              </p>
            </div>
          </div>
          
          {/* Glass Card 6 - 24/7 Support */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50/80 to-indigo-100/80 backdrop-blur-md border border-blue-200/30 shadow-xl p-8 hover:shadow-2xl transition-all duration-300 animate-fade-in hover-scale">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-indigo-500/10"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">24/7 Support</h3>
              <p className="text-gray-700 leading-relaxed">
                Get round-the-clock support from our expert team, ensuring your operations run smoothly without interruption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};