import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const CTASection: React.FC = () => {
  const { toast } = useToast();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [hearAbout, setHearAbout] = useState('');
  const [interestedIn, setInterestedIn] = useState('');
  const [contactMethod, setContactMethod] = useState('');
  const [contactTime, setContactTime] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionTime] = useState(Date.now());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Spam prevention: Check honeypot
      if (honeypot) {
        toast({
          title: "Error",
          description: "Please try again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      const formData = {
        firstName,
        lastName,
        email,
        phone,
        subject,
        message,
        hearAbout,
        interestedIn,
        contactMethod,
        contactTime,
        source: 'muhkam_site',
        submissionTime,
        currentTime: Date.now()
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
      setPhone('');
      setSubject('');
      setMessage('');
      setHearAbout('');
      setInterestedIn('');
      setContactMethod('');
      setContactTime('');
      setHoneypot('');
      
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
              
              <form onSubmit={handleSubmit} className="w-full max-w-2xl mt-8 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-foreground">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      placeholder="First Name"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-foreground">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      placeholder="Last Name"
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-foreground">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Email"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-foreground">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="Phone Number"
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-foreground">
                    Subject <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    placeholder="Subject"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground">
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    placeholder="Message"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label className="text-foreground">
                    How did you hear about us? <span className="text-red-500">*</span>
                  </Label>
                  <Select value={hearAbout} onValueChange={setHearAbout} required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google</SelectItem>
                      <SelectItem value="social-media">Social Media</SelectItem>
                      <SelectItem value="referral">Referral</SelectItem>
                      <SelectItem value="conference">Conference/Event</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="text-foreground">
                    Are you interested in: <span className="text-red-500">*</span>
                  </Label>
                  <Select value={interestedIn} onValueChange={setInterestedIn} required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="audit-planning">AI Audit Planning</SelectItem>
                      <SelectItem value="control-assessment">Control Assessment</SelectItem>
                      <SelectItem value="grc-platform">GRC Platform</SelectItem>
                      <SelectItem value="consulting">Consulting Services</SelectItem>
                      <SelectItem value="training">Training</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="text-foreground">
                    What is your preferred method of contact? <span className="text-red-500">*</span>
                  </Label>
                  <Select value={contactMethod} onValueChange={setContactMethod} required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="teams">Microsoft Teams</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="text-foreground">
                    When would you like to be contacted? <span className="text-red-500">*</span>
                  </Label>
                  <Select value={contactTime} onValueChange={setContactTime} required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">As soon as possible</SelectItem>
                      <SelectItem value="within-week">Within a week</SelectItem>
                      <SelectItem value="within-month">Within a month</SelectItem>
                      <SelectItem value="next-quarter">Next quarter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                
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
