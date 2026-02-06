import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Github, Mail, Layers } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projects';

// Import images
import bgDay from '../assets/images/bg-day.png';
import bgNight from '../assets/images/bg-night.png';
import profilePic from '../assets/images/profile-pic.jpg';
import cvFile from '../assets/documents/Birkans_CV.pdf';

export const Home: React.FC = () => {
  const featuredProjects = projectsData.filter(p => p.time !== 'In Progress');
  const inProgressProjects = projectsData.filter(p => p.time === 'In Progress');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden py-20">
        {/* Backgrounds */}
        <div className="absolute inset-0 z-0">
          <img src={bgDay} alt="Day Background" className="w-full h-full object-cover dark:hidden" />
          <img src={bgNight} alt="Night Background" className="w-full h-full object-cover hidden dark:block" />
          <div className="absolute inset-0 bg-parchment/80 dark:bg-midnight-blue/80 backdrop-blur-[2px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-4 text-dark-brown dark:text-soft-white drop-shadow-lg uppercase tracking-tight">
              Birkan Ates
            </h1>
            <h2 className="text-xl md:text-2xl font-bold mb-8 text-forest-green dark:text-moonlight-blue uppercase tracking-widest">
              Gameplay Programmer
            </h2>
            <div className="text-base md:text-lg mb-10 font-medium opacity-90 max-w-xl space-y-4">
              <p>
                <strong>Gameplay Programmer specializing in Unreal Engine (C++)</strong>
              </p>
              <p>
                I focus on <strong>AI behaviors, procedural systems, and gameplay mechanics.</strong>
              </p>
              <p>
                Currently a second-year student at Futuregames, with hands-on experience building scalable gameplay systems in Unreal and C++.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue font-bold uppercase rounded-sm hover:bg-muted-gold dark:hover:bg-desaturated-purple transition-colors flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <Layers size={20} /> Projects
              </button>
              <a href="https://github.com/DullySkull" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-transparent border-4 border-dark-brown dark:border-soft-white text-dark-brown dark:text-soft-white font-bold uppercase rounded-sm hover:bg-dark-brown hover:text-parchment dark:hover:bg-soft-white dark:hover:text-midnight-blue transition-colors flex items-center gap-2">
                <Github size={20} /> GitHub
              </a>
              <a href={cvFile} download="Birkans_CV.pdf" className="px-8 py-3 bg-forest-green dark:bg-desaturated-purple text-white font-bold uppercase rounded-sm hover:brightness-110 transition-colors flex items-center gap-2 shadow-lg">
                <Download size={20} /> Download CV
              </a>
              <Link to="/contact" className="px-8 py-3 bg-transparent border-4 border-forest-green dark:border-desaturated-purple text-forest-green dark:text-desaturated-purple font-bold uppercase rounded-sm hover:bg-forest-green hover:text-white dark:hover:bg-desaturated-purple dark:hover:text-white transition-colors flex items-center gap-2">
                <Mail size={20} /> Contact
              </Link>
            </div>
          </div>

          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-dark-brown dark:border-soft-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src={profilePic} alt="Birkan Ates" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 bg-parchment dark:bg-midnight-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center uppercase text-dark-brown dark:text-soft-white">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project) => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                contributionSummary={project.contributionSummary}
                image={project.homeImage || project.image}
                link={`/projects/${project.id}`}
                time={project.time}
                engine={project.engine}
                language={project.language}
                versionControl={project.versionControl}
              />
            ))}
          </div>

          {/* In Development */}
          <h3 className="text-2xl font-bold font-heading mb-8 text-center uppercase text-muted-gold dark:text-moonlight-blue">
            In Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {inProgressProjects.map((project) => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                contributionSummary={project.contributionSummary}
                image={project.homeImage || project.image}
                link={`/projects/${project.id}`}
                time={project.time}
                engine={project.engine}
                language={project.language}
                versionControl={project.versionControl}
                imageFit="contain"
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href={cvFile} download="Birkans_CV.pdf" className="px-10 py-4 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue font-bold uppercase rounded-sm hover:bg-muted-gold dark:hover:bg-desaturated-purple transition-colors inline-flex items-center gap-2 shadow-xl text-lg">
              <Download size={24} /> Download Full CV (PDF)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
