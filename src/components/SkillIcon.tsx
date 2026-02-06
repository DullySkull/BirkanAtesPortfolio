import React from 'react';

interface SkillIconProps {
  name: string;
  icon?: React.ReactNode;
  imageSrc?: string;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ name, icon, imageSrc }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4 group">
      <div className="w-20 h-20 flex items-center justify-center bg-parchment dark:bg-soft-white border-4 border-dark-brown dark:border-soft-white rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300 group-hover:border-muted-gold dark:group-hover:border-desaturated-purple">
        {imageSrc ? (
          <img src={imageSrc} alt={name} className="w-12 h-12 object-contain" />
        ) : (
          <div className="text-dark-brown dark:text-midnight-blue">
            {icon}
          </div>
        )}
      </div>
      <span className="font-bold uppercase text-sm tracking-wider">{name}</span>
    </div>
  );
};
