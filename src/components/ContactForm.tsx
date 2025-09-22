import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    hearAbout: '',
    interestedIn: '',
    contactMethod: '',
    contactTime: '',
    honeypot: ''
  });
  const [submissionTime] = useState(Date.now());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Spam prevention: Check honeypot and submission time
      if (formData.honeypot) {
        toast({
          title: "Error",
          description: "Please try again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      const submissionData = {
        ...formData,
        submissionTime,
        currentTime: Date.now()
      };

      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: submissionData
      });

      if (error) {
        throw error;
      }

      // Reset form on success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        hearAbout: '',
        interestedIn: '',
        contactMethod: '',
        contactTime: '',
        honeypot: ''
      });

      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

    } catch (error: any) {
      console.error('Error sending email:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="flex flex-col items-center gap-12 w-full px-4 lg:px-[162px] py-20 max-md:w-full max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0">
      <div className="text-5xl text-[#0A5180]">
        📧
      </div>
      <h2 className="text-[#333] text-center text-5xl font-semibold leading-[72px] max-sm:text-4xl">
        🔹 We'd Love to Hear from You 🔹
      </h2>
      <p className="text-[#4D4D4D] text-center text-lg font-normal leading-[27px] max-w-[800px]">
        At GHB EMEA, we value every interaction with our clients. Whether you're seeking consultation, have questions about our services, or need expert advice on AI and governance, our team is ready to assist.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-[800px]">
        <div className="flex gap-6 max-md:flex-col">
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="firstName" className="text-base font-medium text-[#333]">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="border text-base px-4 py-3 rounded-lg border-solid border-[#E1DBD1] focus:outline-none focus:ring-2 focus:ring-[#0A5180] focus:border-transparent"
              required
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="lastName" className="text-base font-medium text-[#333]">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="border text-base px-4 py-3 rounded-lg border-solid border-[#E1DBD1] focus:outline-none focus:ring-2 focus:ring-[#0A5180] focus:border-transparent"
              required
            />
          </div>
        </div>
        <div className="flex gap-6 max-md:flex-col">
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="email" className="text-base font-medium text-[#333]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="border text-base px-4 py-3 rounded-lg border-solid border-[#E1DBD1] focus:outline-none focus:ring-2 focus:ring-[#0A5180] focus:border-transparent"
              required
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="phone" className="text-base font-medium text-[#333]">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="border text-base px-4 py-3 rounded-lg border-solid border-[#E1DBD1] focus:outline-none focus:ring-2 focus:ring-[#0A5180] focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="subject" className="text-base font-medium text-[#333]">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="border text-base px-4 py-3 rounded-lg border-solid border-[#E1DBD1] focus:outline-none focus:ring-2 focus:ring-[#0A5180] focus:border-transparent"
            required
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="message" className="text-base font-medium text-[#333]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className="border text-base px-4 py-3 rounded-lg border-solid border-[#E1DBD1] focus:outline-none focus:ring-2 focus:ring-[#0A5180] focus:border-transparent resize-vertical"
            required
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="hearAbout" className="text-base font-medium text-[#333]">
            How did you hear about us?
          </label>
          <select
            id="hearAbout"
            name="hearAbout"
            value={formData.hearAbout}
            onChange={handleInputChange}
            className="border text-base px-4 py-3 rounded-lg border-solid border-[#E1DBD1] focus:outline-none focus:ring-2 focus:ring-[#0A5180] focus:border-transparent"
          >
            <option value="">Please select</option>
            <option value="search">Search Engine</option>
            <option value="social">Social Media</option>
            <option value="referral">Referral</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="interestedIn" className="text-base font-medium text-[#333]">
            Are you interested in:
          </label>
          <select
            id="interestedIn"
            name="interestedIn"
            value={formData.interestedIn}
            onChange={handleInputChange}
            className="border text-base px-4 py-3 rounded-lg border-solid border-[#E1DBD1] focus:outline-none focus:ring-2 focus:ring-[#0A5180] focus:border-transparent"
          >
            <option value="">Please select</option>
            <option value="ai-strategy">AI Strategy & Roadmap</option>
            <option value="predictive-analytics">Predictive Analytics</option>
            <option value="data-governance">Data Governance & Compliance</option>
            <option value="technology-consulting">Technology & Management Consulting</option>
            <option value="implementation">Implementation & Integration</option>
            <option value="digital-transformation">Innovation & Digital Transformation</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="contactMethod" className="text-base font-medium text-[#333]">
            What is your preferred method of contact?
          </label>
          <select
            id="contactMethod"
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleInputChange}
            className="border text-base px-4 py-3 rounded-lg border-solid border-[#E1DBD1] focus:outline-none focus:ring-2 focus:ring-[#0A5180] focus:border-transparent"
          >
            <option value="">Please select</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="video-call">Video Call</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="contactTime" className="text-base font-medium text-[#333]">
            When would you like to be contacted?
          </label>
          <select
            id="contactTime"
            name="contactTime"
            value={formData.contactTime}
            onChange={handleInputChange}
            className="border text-base px-4 py-3 rounded-lg border-solid border-[#E1DBD1] focus:outline-none focus:ring-2 focus:ring-[#0A5180] focus:border-transparent"
          >
            <option value="">Please select</option>
            <option value="asap">As soon as possible</option>
            <option value="within-week">Within a week</option>
            <option value="within-month">Within a month</option>
            <option value="no-rush">No rush</option>
          </select>
        </div>
        
        {/* Honeypot field - hidden from users */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleInputChange}
          style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />
        
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="text-[#FDFDFC] text-lg font-medium cursor-pointer bg-[#0A5180] px-6 py-[18px] rounded-lg border-none hover:bg-[#084066] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
