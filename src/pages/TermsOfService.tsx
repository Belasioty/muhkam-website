import React from 'react';
import { Navigation } from '@/components/muhkam/Navigation';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-8 py-16 max-md:px-5">
        <h1 className="text-4xl font-bold text-[#333] mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none text-[#4D4D4D]">
          <p className="text-sm text-[#666] mb-8">Last updated: September 19, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using Muhkam's AI-powered governance and audit solutions, 
              you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">2. Service Description</h2>
            <p className="mb-4">
              Muhkam provides AI-powered governance and audit solutions designed to help 
              organizations streamline their compliance and risk management processes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">3. User Responsibilities</h2>
            <p className="mb-4">Users agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of their account credentials</li>
              <li>Use the service in compliance with applicable laws</li>
              <li>Not misuse or attempt to disrupt the service</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">4. Intellectual Property</h2>
            <p className="mb-4">
              The service and its original content, features, and functionality are owned by 
              GHB EMEA Ltd and are protected by international copyright, trademark, and other laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">5. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall GHB EMEA Ltd be liable for any indirect, incidental, special, 
              consequential, or punitive damages arising out of your use of the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">6. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your account and access to the service immediately, 
              without prior notice, for conduct that we believe violates these Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">7. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="mb-2">Email: info@ghb-emea.com</p>
            <p className="mb-2">Phone: +44 7424 5678</p>
            <p>Address: Office No.BL12, Floor 22, Servcorp, No17, Tornado Tower, Doha</p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;