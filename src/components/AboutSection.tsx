import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="flex flex-col gap-8 w-full bg-white px-4 lg:px-[162px] py-20 max-md:px-10 max-md:py-[60px] max-sm:px-5 max-sm:py-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#333] mb-12 text-center">🔹 About Us 🔹</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-[#0A5180] mb-6">Our Mission</h3>
            <p className="text-lg text-[#4D4D4D] leading-relaxed mb-4 text-justify">
              At GHB Business Entrepreneurs, our mission is to empower organizations with innovative technology solutions and advanced artificial intelligence tailored to meet their unique needs and drive sustainable business growth. We are committed to delivering precise, efficient, and transformative services that enhance business processes and improve operational outcomes through strategic solutions. By forming strategic partnerships and leveraging a deep understanding of industry-specific challenges, we aim to help our clients thrive in an increasingly complex digital landscape.
            </p>
            <p className="text-lg text-[#4D4D4D] leading-relaxed text-justify">
              GHB is built on a foundation of integrity, compliance, and a relentless pursuit of excellence. By aligning cutting-edge technological advancements with the highest regulatory standards of data governance, we ensure that our solutions not only foster innovation but also safeguard our clients' trust and success. Our ultimate goal is to act as a reliable technology consulting partner, enabling businesses to reach their fullest potential while staying ahead in a competitive and rapidly evolving market.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-[#0A5180] mb-6">Our Vision</h3>
            <p className="text-lg text-[#4D4D4D] leading-relaxed text-justify">
              As a global leader in business technology and artificial intelligence, we are recognized for our ability to transform challenges into opportunities, driving meaningful business growth for organizations across various industries. We aspire to continuously innovate and set new benchmarks of excellence through strategic solutions, empowering businesses to thrive in an ever-evolving digital economy while maintaining a steadfast commitment to data governance, compliance, integrity, and client success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;