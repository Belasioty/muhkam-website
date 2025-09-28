import React from 'react';
import { Navigation } from '@/components/muhkam/Navigation';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-8 py-16 pt-24 max-md:px-5">
        <h1 className="text-4xl font-bold text-[#333] mb-8">Cookie Policy</h1>
        
        <div className="prose prose-lg max-w-none text-[#4D4D4D]">
          <p className="text-sm text-[#666] mb-8">Last updated: September 19, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">1. What Are Cookies</h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your computer or mobile device 
              when you visit our website. They are widely used to make websites work more 
              efficiently and provide information to website owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">2. How We Use Cookies</h2>
            <p className="mb-4">We use cookies for several purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> These help us understand how visitors interact with our website</li>
              <li><strong>Functional Cookies:</strong> These enable enhanced functionality and personalization</li>
              <li><strong>Marketing Cookies:</strong> These are used to deliver relevant advertisements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">3. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-[#333] mb-3">Essential Cookies</h3>
            <p className="mb-4">
              These cookies are strictly necessary to provide you with services available 
              through our website and to use some of its features.
            </p>

            <h3 className="text-xl font-semibold text-[#333] mb-3">Performance Cookies</h3>
            <p className="mb-4">
              These cookies collect information about how you use our website, such as 
              which pages you visit most often and if you get error messages.
            </p>

            <h3 className="text-xl font-semibold text-[#333] mb-3">Functionality Cookies</h3>
            <p className="mb-4">
              These cookies allow our website to remember choices you make and provide 
              enhanced, more personal features.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">4. Managing Cookies</h2>
            <p className="mb-4">
              You can control and/or delete cookies as you wish. You can delete all cookies 
              that are already on your computer and you can set most browsers to prevent them 
              from being placed.
            </p>
            <p className="mb-4">
              However, if you do this, you may have to manually adjust some preferences 
              every time you visit our site and some services and functionality may not work.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">5. Third-Party Cookies</h2>
            <p className="mb-4">
              Some cookies on our site are set by third-party services that appear on our pages. 
              These include analytics services and social media platforms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">6. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our Cookie Policy, please contact us at:
            </p>
            <p className="mb-2">Email: info@ghb-emea.com</p>
            <p className="mb-2">Phone: +44 7424 5678</p>
            <p>Address: PO Box 27774, Tornado Tower L22, West Bay Doha, Qatar</p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;