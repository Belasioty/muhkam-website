import React from 'react';

interface ChecklistItemProps {
  text: string;
  iconSrc: string;
}

export const ChecklistItem: React.FC<ChecklistItemProps> = ({ text, iconSrc }) => {
  return (
    <div className="flex w-full gap-3 flex-wrap mt-5 max-md:max-w-full">
      <img
        src={iconSrc}
        className="aspect-[1] object-contain w-7 shrink-0 rounded-[14px]"
        alt="Check icon"
      />
      <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
        <div className="max-md:max-w-full">
          {text}
        </div>
      </div>
    </div>
  );
};
