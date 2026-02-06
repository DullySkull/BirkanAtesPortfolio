import React from 'react';
import { SkillIcon } from '../components/SkillIcon';
import { Code, Terminal, Cpu, Database, Layers, PenTool, Gamepad as GamepadIcon, Brain as BrainIcon, Dices as DiceIcon, GitBranch as GitBranchIcon } from 'lucide-react';
import profileAboutNew from '../assets/images/profile-about-new.jpg';
import unityLogo from '../assets/images/skills/unity-logo.png';
import unrealLogo from '../assets/images/skills/unreal-logo.png';
import cppLogo from '../assets/images/skills/cpp-logo.png';
import csharpLogo from '../assets/images/skills/csharp-logo.png';
import githubLogo from '../assets/images/skills/github-logo.png';
import perforceLogo from '../assets/images/skills/perforce-logo.png';

export const About: React.FC = () => {
  return (
    <div className="py-20 container mx-auto px-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-12 uppercase text-dark-brown dark:text-soft-white text-center">About Me</h1>
        
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Text Content */}
          <div className="md:w-2/3 space-y-6 text-lg opacity-90 leading-relaxed">
            <p className="font-bold text-xl">Hi! I’m Birkan Ates, a second-year Game Programmer at Futuregames.</p>
            
            <p>
              I specialize in <strong>gameplay systems development</strong>, with a strong focus on <strong>AI behaviours</strong>, <strong>procedural content generation</strong>, and <strong>gameplay tools</strong>. I enjoy building systems that are <strong>robust, modular, and scalable</strong>, supporting both gameplay features and designer workflows.
            </p>

            <div>
              <h3 className="text-xl font-bold uppercase mb-2 text-forest-green dark:text-moonlight-blue">What I work with</h3>
              <p className="mb-2">
                I primarily work in <strong>Unreal Engine using C++</strong>, where I develop:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>AI behaviour systems</strong> (Behavior Trees, state machines, decision logic)</li>
                <li><strong>Pathfinding and navigation solutions</strong></li>
                <li><strong>Procedural generation tools and systems</strong></li>
                <li><strong>Core gameplay mechanics and supporting tools</strong></li>
              </ul>
              <p className="mt-2">
                I enjoy working <strong>close to the engine layer</strong>, designing systems that are easy to extend, debug, and iterate on throughout development.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold uppercase mb-2 text-forest-green dark:text-moonlight-blue">How I approach programming</h3>
              <p>
                I approach programming as a <strong>problem-solving discipline</strong>. I enjoy breaking down complex gameplay challenges into clear, maintainable systems. Whether it’s <strong>AI decision-making</strong>, <strong>procedural environments</strong>, or <strong>tooling</strong>, my goal is to create solutions that <strong>scale well</strong> and remain readable over time.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold uppercase mb-2 text-forest-green dark:text-moonlight-blue">Background & flexibility</h3>
              <p>
                I’ve been coding in <strong>C# since 2018</strong>, and later challenged myself by transitioning into <strong>Unreal Engine and C++</strong> at Futuregames. This shift gave me a strong understanding of <strong>Unreal’s architecture</strong> and modern gameplay programming practices.
              </p>
              <p className="mt-2">
                Alongside Unreal, I also have experience working in <strong>Unity (C#)</strong> for rapid prototyping and smaller projects, giving me flexibility across engines and workflows.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold uppercase mb-2 text-forest-green dark:text-moonlight-blue">Looking ahead</h3>
              <p>
                I’m currently looking for opportunities as a <strong>junior or intern game programmer</strong>, particularly in roles involving <strong>AI systems</strong>, <strong>gameplay systems</strong>, or <strong>tools programming</strong>, where I can contribute to meaningful systems and continue growing as a technical developer.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="w-full max-w-sm rounded-lg border-4 border-dark-brown dark:border-soft-white overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-300">
              <img src={profileAboutNew} alt="Birkan Ates" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold font-heading mb-10 text-center uppercase text-forest-green dark:text-desaturated-purple">Skills</h2>
        
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          <SkillIcon name="Unity" imageSrc={unityLogo} />
          <SkillIcon name="Unreal Engine" imageSrc={unrealLogo} />
          <SkillIcon name="C++" imageSrc={cppLogo} />
          <SkillIcon name="C#" imageSrc={csharpLogo} />
          <SkillIcon name="GitHub" imageSrc={githubLogo} />
          <SkillIcon name="Perforce" imageSrc={perforceLogo} />
        </div>
        
        <p className="text-center text-sm font-bold uppercase opacity-70 tracking-wider">
          Primary tools I use in production and coursework.
        </p>
      </div>

      {/* Focus Section */}
      <div className="bg-parchment/50 dark:bg-midnight-blue/50 border-4 border-dark-brown dark:border-soft-white p-8 md:p-12 rounded-sm max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold font-heading mb-10 text-center uppercase text-dark-brown dark:text-soft-white">What I Focus On</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue h-fit rounded-sm">
              <GamepadIcon size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase mb-2">Gameplay Systems</h3>
              <p className="opacity-80">Designing and implementing core gameplay loops, character mechanics, and interaction systems that feel responsive and satisfying.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue h-fit rounded-sm">
              <BrainIcon size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase mb-2">AI Systems</h3>
              <p className="opacity-80">Creating intelligent behaviors using Behavior Trees, GOAP, and State Machines to bring NPCs and enemies to life.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue h-fit rounded-sm">
              <DiceIcon size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase mb-2">Procedural Content Generation</h3>
              <p className="opacity-80">Developing algorithms for generating levels, items, and events to ensure replayability and variety.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue h-fit rounded-sm">
              <PenTool size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase mb-2">Tools Programming</h3>
              <p className="opacity-80">Building custom editors and workflow tools to accelerate development and empower content creators.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};