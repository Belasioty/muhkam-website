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
          {imageSrc.endsWith('.mp4') ? (
            <video
              src={imageSrc}
              className="aspect-[16/10] w-full object-contain rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img 
              src={imageSrc} 
              alt={title}
              className="aspect-[16/10] w-full object-contain rounded-2xl"
            />
          )}
        </div>
      </div>
    </div>
  );
};