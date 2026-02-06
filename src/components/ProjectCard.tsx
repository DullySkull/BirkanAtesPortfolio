import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Gamepad2, Code, GitBranch, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  contributionSummary?: string;
  image: string;
  link: string;
  time: string;
  engine: string;
  language: string;
  versionControl: string;
  imageFit?: 'cover' | 'contain';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  contributionSummary,
  image,
  link,
  time,
  engine,
  language,
  versionControl,
  imageFit = 'cover',
}) => {
  return (
    <div className="group relative bg-parchment dark:bg-midnight-blue border-4 border-dark-brown dark:border-soft-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden border-b-4 border-dark-brown dark:border-soft-white bg-black/5 dark:bg-white/5">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-${imageFit} transition-transform duration-500 group-hover:scale-110`}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold font-heading mb-2 uppercase text-dark-brown dark:text-soft-white">{title}</h3>
        <p className="text-sm mb-4 opacity-90 line-clamp-2">{description}</p>

        {contributionSummary && (
          <div className="flex items-start gap-2 mb-4 text-sm font-bold text-dark-brown dark:text-soft-white bg-black/5 dark:bg-white/5 p-2 rounded-sm border-l-4 border-forest-green dark:border-moonlight-blue">
            <span>{contributionSummary}</span>
          </div>
        )}

        {/* Metadata Row */}
        <div className="flex flex-wrap gap-4 mb-6 text-xs font-bold uppercase tracking-wide opacity-80">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <Gamepad2 size={14} />
            <span>{engine}</span>
          </div>
          <div className="flex items-center gap-1">
            <Code size={14} />
            <span>{language}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitBranch size={14} />
            <span>{versionControl}</span>
          </div>
        </div>

        {/* CTA */}
        <Link 
          to={link} 
          className="inline-flex items-center gap-2 px-6 py-2 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue font-bold uppercase hover:bg-muted-gold dark:hover:bg-desaturated-purple transition-colors rounded-sm"
        >
          Read More <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export const ComingSoonCard: React.FC<{ title: string; image: string }> = ({ title, image }) => {
  return (
    <div className="relative bg-parchment dark:bg-midnight-blue border-4 border-dashed border-dark-brown/50 dark:border-soft-white/50 rounded-sm overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
      <div className="h-48 overflow-hidden relative">
        <img src={image} alt="Coming Soon" className="w-full h-full object-contain" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <span className="font-heading text-2xl text-white drop-shadow-md uppercase tracking-widest">Coming Soon</span>
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold font-heading uppercase">{title}</h3>
      </div>
    </div>
  );
};
