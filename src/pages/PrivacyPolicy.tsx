import React from 'react';
import { Navigation } from '@/components/muhkam/Navigation';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-8 py-16 max-md:px-5">
        <h1 className="text-4xl font-bold text-[#333] mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-[#4D4D4D]">
          <p className="text-sm text-[#666] mb-8">Last updated: September 19, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              contact us, or use our Muhkam AI-powered governance and audit solutions.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Personal information (name, email address, phone number)</li>
              <li>Business information (company name, role, industry)</li>
              <li>Usage data and analytics</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">3. Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">4. Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">5. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;