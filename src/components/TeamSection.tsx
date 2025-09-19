import React from 'react';
import { Linkedin } from 'lucide-react';
import hatemPhoto from '@/assets/hatem-photo.jpeg';
import basemPhoto from '@/assets/basem-photo.jpeg';

// Team member interface for type safety and easy editing
interface TeamMemberData {
  name: string;
  role: string;
  description: string;
  image: string;
  socialLinks: {
    linkedin?: string;
  };
}

const TeamMember = ({ name, role, description, image, socialLinks }: TeamMemberData) => (
  <div className="flex flex-col items-center gap-4 max-w-[400px] text-center bg-white p-6 rounded-xl shadow-sm h-full">
    <img
      src={image}
      alt={`${name} - ${role}`}
      className="w-[120px] h-[120px] object-cover rounded-[50%] border-4 border-gray-100"
    />
    <h3 className="text-2xl font-semibold text-[#333]">
      {name}
    </h3>
    <div className="text-lg font-medium text-[#0A5180] mb-2">
      {role}
    </div>
    <p className="text-base text-[#4D4D4D] leading-6 mb-4 flex-grow">
      {description}
    </p>
    <div className="flex gap-3">
      {socialLinks.linkedin && (
        <a 
          href={socialLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#0A5180] transition-colors"
          aria-label={`${name} on LinkedIn`}
        >
          <Linkedin size={20} />
        </a>
      )}
    </div>
  </div>
);

const TeamSection = () => {
  // Easy-to-edit team member data - UPDATE THIS SECTION TO MODIFY TEAM MEMBERS
  const teamMembers: TeamMemberData[] = [
    {
      name: "Hatem El Adl",
      role: "Co-Founder", 
      description: "Former co-founder of 200+ audit transformation projects across the Middle East. Trusted advisor in AI-driven compliance and risk frameworks.",
      image: hatemPhoto,
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/hatem-el-adl-9a531a1a/"
      }
    },
    {
      name: "Basem Elasioty",
      role: "Co-Founder",
      description: "20+ years in data governance, big data, and cloud platforms. Delivered mega-scale DWH and AI solutions for Vodafone, Etisalat Dubai, and global pharma.",
      image: basemPhoto,
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/basemelasuty/"
      }
    }
  ];

  return (
    <section id="team" className="flex flex-col items-center gap-12 w-full px-4 lg:px-[162px] max-md:w-full max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0">
      <h2 className="text-[#333] text-center text-5xl font-semibold leading-[72px] max-sm:text-4xl">
        🔹 Meet our team 🔹
      </h2>
      <p className="text-[#4D4D4D] text-center text-lg font-normal leading-[27px] max-w-[800px]">
        Our leadership team combines decades of expertise in audit transformation, AI integration, and enterprise data solutions to deliver exceptional results for our clients.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center w-full max-w-4xl">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
