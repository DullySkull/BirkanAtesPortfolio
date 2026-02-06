import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Clock, Gamepad2, Code, GitBranch, ArrowLeft, ChevronDown, ChevronUp, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData } from '../data/projects';

const DeepDiveItem: React.FC<{ dive: { title: string; content: string; code?: string; images?: string[] } }> = ({ dive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (dive.images) {
      setCurrentImageIndex((prev) => (prev + 1) % dive.images!.length);
    }
  };

  const prevImage = () => {
    if (dive.images) {
      setCurrentImageIndex((prev) => (prev - 1 + dive.images!.length) % dive.images!.length);
    }
  };

  return (
    <section className="bg-white/50 dark:bg-black/20 p-6 rounded-sm border-l-4 border-forest-green dark:border-moonlight-blue mb-8">
      <h3 className="text-xl font-bold mb-3 uppercase text-forest-green dark:text-moonlight-blue">{dive.title}</h3>
      <p className="mb-4 opacity-90 whitespace-pre-line">{dive.content}</p>
      
      {dive.images && dive.images.length > 0 && (
        <div className="mb-6 relative group">
          <div className="relative aspect-video bg-black/50 rounded-sm overflow-hidden border-2 border-dark-brown/20 dark:border-soft-white/20">
            <img 
              src={dive.images[currentImageIndex]} 
              alt={`${dive.title} screenshot ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
            />
            
            {dive.images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-forest-green transition-colors opacity-0 group-hover:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-forest-green transition-colors opacity-0 group-hover:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {dive.images.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {dive.code && (
        <div className="mt-4">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-sm font-bold uppercase text-dark-brown dark:text-soft-white hover:text-muted-gold dark:hover:text-desaturated-purple transition-colors"
          >
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {isOpen ? 'Hide Code' : 'View Code'}
          </button>
          
          {isOpen && (
            <pre className="mt-4 bg-dark-brown text-parchment p-4 rounded-sm overflow-x-auto text-sm font-mono shadow-inner animate-in fade-in slide-in-from-top-2 duration-300">
              <code>{dive.code}</code>
            </pre>
          )}
        </div>
      )}
    </section>
  );
};

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full object-cover ${project.id === 'whisper-of-seasons' ? 'object-bottom' : 'object-center'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-parchment dark:from-midnight-blue via-transparent to-black/30" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 container mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-white mb-4 hover:text-muted-gold transition-colors font-bold uppercase text-sm bg-black/50 px-3 py-1 rounded-sm backdrop-blur-sm">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          {project.externalLink && (
            <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white mb-4 ml-4 hover:text-muted-gold transition-colors font-bold uppercase text-sm bg-forest-green/80 px-3 py-1 rounded-sm backdrop-blur-sm">
              <ExternalLink size={16} /> Play on Itch.io
            </a>
          )}
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white drop-shadow-lg uppercase mb-2">{project.title}</h1>
          <p className="text-lg text-white/90 font-medium max-w-2xl drop-shadow-md">{project.description}</p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12">
        {/* Metadata Row */}
        <div className="flex flex-wrap gap-6 mb-12 p-6 bg-parchment dark:bg-midnight-blue border-4 border-dark-brown dark:border-soft-white rounded-sm shadow-md">
          <div className="flex items-center gap-2 font-bold uppercase text-sm">
            <Clock className="text-muted-gold dark:text-desaturated-purple" />
            <span>{project.time}</span>
          </div>
          <div className="flex items-center gap-2 font-bold uppercase text-sm">
            <Gamepad2 className="text-muted-gold dark:text-desaturated-purple" />
            <span>{project.engine}</span>
          </div>
          <div className="flex items-center gap-2 font-bold uppercase text-sm">
            <Code className="text-muted-gold dark:text-desaturated-purple" />
            <span>{project.language}</span>
          </div>
          <div className="flex items-center gap-2 font-bold uppercase text-sm">
            <GitBranch className="text-muted-gold dark:text-desaturated-purple" />
            <span>{project.versionControl}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Gallery Section */}
            {project.gallery && project.gallery.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold font-heading mb-6 uppercase text-dark-brown dark:text-soft-white border-b-4 border-muted-gold dark:border-desaturated-purple pb-2 inline-block">
                  Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.gallery.map((img, index) => (
                    <div key={index} className="rounded-sm overflow-hidden border-2 border-dark-brown dark:border-soft-white shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <img src={img} alt={`${project.title} screenshot ${index + 1}`} className="w-full h-32 object-cover" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Video Section */}
            {project.video && (
              <section>
                <h2 className="text-2xl font-bold font-heading mb-6 uppercase text-dark-brown dark:text-soft-white border-b-4 border-muted-gold dark:border-desaturated-purple pb-2 inline-block">
                  Gameplay Video
                </h2>
                <div className="aspect-video w-full rounded-sm overflow-hidden border-4 border-dark-brown dark:border-soft-white shadow-lg">
                  <iframe 
                    src={project.video} 
                    title={`${project.title} Gameplay`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                </div>
              </section>
            )}

            {/* Tech Overview */}
            <section>
              <h2 className="text-2xl font-bold font-heading mb-4 uppercase text-dark-brown dark:text-soft-white border-b-4 border-muted-gold dark:border-desaturated-purple pb-2 inline-block">Code Overview</h2>
              <p className="text-lg opacity-90 leading-relaxed">
                {project.techOverview}
              </p>
            </section>

            {/* Deep Dives */}
            {project.deepDives.map((dive, index) => (
              <DeepDiveItem key={index} dive={dive} />
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-parchment dark:bg-midnight-blue border-4 border-dark-brown dark:border-soft-white p-6 rounded-sm sticky top-24">
              <h3 className="text-xl font-bold font-heading mb-6 uppercase text-dark-brown dark:text-soft-white border-b-2 border-dark-brown/20 dark:border-soft-white/20 pb-2">
                Key Contributions
              </h3>
              <ul className="space-y-4">
                {project.contributions.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 text-forest-green dark:text-desaturated-purple">
                      <div className="w-2 h-2 bg-current rounded-full" />
                    </div>
                    <span className="text-sm font-medium opacity-90">{item}</span>
                  </li>
                ))}
              </ul>
              
              {project.contributionsGif && (
                <div className="mt-6 rounded-sm overflow-hidden border-2 border-dark-brown dark:border-soft-white shadow-md">
                  <img 
                    src={project.contributionsGif} 
                    alt={`${project.title} Contributions Showcase`} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
