import React, { useState } from 'react';

export const CTASection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Contact form submitted:', { email, message });
    // Reset form
    setEmail('');
    setMessage('');
    alert('Thank you for your interest! We will contact you soon.');
  };

  return (
    <section id="contact" className="bg-background flex w-full flex-col overflow-hidden items-center justify-center py-24 max-md:max-w-full">
      <div className="min-h-[356px] w-[1280px] max-w-full px-8 max-md:px-5">
        <div className="bg-white flex w-full overflow-hidden justify-between p-16 rounded-2xl max-md:max-w-full max-md:px-5 shadow-lg border border-gray-200">
          <div className="min-w-60 w-full flex-1 shrink basis-[0%] px-8 max-md:max-w-full max-md:px-5">
            <div className="flex w-full flex-col items-center max-md:max-w-full">
              <div className="w-[768px] max-w-full text-center">
                <div className="text-[#181D27] text-4xl font-semibold leading-none tracking-[-0.72px] max-md:max-w-full">
                  Don't Wait for Compliance Gaps.
                </div>
                <div className="text-[#535862] text-xl font-normal leading-[30px] mt-5 max-md:max-w-full">
                  <span style={{ fontWeight: 700 }}>
                    Stay Ahead – Audit Proactively, Not Reactively.
                  </span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="w-full max-w-md mt-8 space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your needs"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-lg shadow-[0_1px_2px_0_rgba(10,13,18,0.05)] border border-[rgba(37,99,235,0.80)] transition-colors duration-200"
                >
                  Contact Us
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
