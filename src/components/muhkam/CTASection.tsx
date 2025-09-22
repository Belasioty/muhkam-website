import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const CTASection: React.FC = () => {
  const { toast } = useToast();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = {
        firstName,
        lastName,
        email,
        subject: 'Contact Request from Homepage',
        message: message || 'I am interested in learning more about your services.',
        phone: '',
        hearAbout: '',
        interestedIn: '',
        contactMethod: 'email',
        contactTime: 'asap'
      };

      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }

      // Reset form
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
      
      toast({
        title: "Thank you for your interest!",
        description: "We'll contact you soon.",
      });

    } catch (error: any) {
      console.error('Error sending email:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-background flex w-full flex-col overflow-hidden items-center justify-center py-24 max-md:max-w-full">
      <div className="min-h-[356px] w-[1280px] max-w-full px-8 max-md:px-5">
        <div className="bg-white flex w-full overflow-hidden justify-between p-16 rounded-2xl max-md:max-w-full max-md:px-5 shadow-lg border border-gray-200">
          <div className="min-w-60 w-full flex-1 shrink basis-[0%] px-8 max-md:max-w-full max-md:px-5">
            <div className="flex w-full flex-col items-center max-md:max-w-full">
              <div className="w-[768px] max-w-full text-center">
                <div className="bg-clip-text text-transparent bg-gradient-to-br from-purple-400 via-blue-500 to-purple-600 text-4xl font-semibold leading-none tracking-[-0.72px] max-md:max-w-full">
                  Don't Wait for Compliance Gaps.
                </div>
                <div className="text-[#535862] text-xl font-normal leading-[30px] mt-5 max-md:max-w-full">
                  <span style={{ fontWeight: 700 }}>
                    Stay Ahead – Audit Proactively, Not Reactively.
                  </span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="w-full max-w-md mt-8 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
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
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-lg shadow-[0_1px_2px_0_rgba(10,13,18,0.05)] border border-[rgba(37,99,235,0.80)] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Contact Us'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
