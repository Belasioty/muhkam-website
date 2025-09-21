import React from 'react';
import { ChecklistItem } from './ChecklistItem';
import { Button } from '@/components/ui/button';

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  checklistItems: Array<{
    text: string;
    iconSrc: string;
  }>;
  buttonText?: string;
  imagePosition: 'left' | 'right';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageSrc,
  checklistItems,
  buttonText,
  imagePosition
}) => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-8 max-md:px-5 mt-24">
      <div className={`flex gap-12 items-stretch max-md:flex-col ${imagePosition === 'right' ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className="w-2/5 max-md:w-full max-md:max-w-full flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-blue-600 mb-6">{title}</h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed text-justify">{description}</p>
          
          <div className="mb-8">
            {checklistItems.map((item, index) => (
              <ChecklistItem key={index} text={item.text} iconSrc={item.iconSrc} />
            ))}
          </div>
          
          {buttonText && (
            <Button variant="outline" className="px-6 py-3">
              {buttonText}
            </Button>
          )}
        </div>
        
        <div className="w-3/5 max-md:w-full max-md:max-w-full">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border border-white/20 shadow-xl p-4 hover:shadow-2xl transition-all duration-300 animate-fade-in h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-500/10"></div>
            <img 
              src={imageSrc} 
              alt={title}
              className="relative z-10 w-full h-[320px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};