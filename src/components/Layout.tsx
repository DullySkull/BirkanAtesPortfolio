import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Github, Mail, ChevronDown, Gamepad2 } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const projects = [
  { name: 'Queens Rush', path: '/projects/queens-rush' },
  { name: 'Whisper of Seasons', path: '/projects/whisper-of-seasons' },
  { name: 'Plora', path: '/projects/plora' },
  { name: 'Daggerbound', path: '/projects/daggerbound' },
  { name: 'Tower Defence', path: '/projects/tower-defence' },
  { name: 'Rogue Card', path: '/projects/rogue-card' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-parchment dark:bg-midnight-blue text-dark-brown dark:text-soft-white transition-colors duration-300 font-sans">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-parchment/90 dark:bg-midnight-blue/90 backdrop-blur-sm border-b-4 border-dark-brown dark:border-soft-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold uppercase tracking-wider font-heading" onClick={closeMenu}>
            Birkan Ates
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-muted-gold dark:hover:text-desaturated-purple font-bold uppercase transition-colors">Home</Link>
            <Link to="/about" className="hover:text-muted-gold dark:hover:text-desaturated-purple font-bold uppercase transition-colors">About</Link>
            
            <div className="relative group">
              <button 
                className="flex items-center hover:text-muted-gold dark:hover:text-desaturated-purple font-bold uppercase transition-colors focus:outline-none"
                onMouseEnter={() => setIsProjectDropdownOpen(true)}
                onClick={() => setIsProjectDropdownOpen(!isProjectDropdownOpen)}
              >
                Projects <ChevronDown size={16} className="ml-1" />
              </button>
              
              {/* Dropdown */}
              <div 
                className="absolute left-0 pt-2 w-56 hidden group-hover:block hover:block"
              >
                <div className="bg-parchment dark:bg-midnight-blue border-2 border-dark-brown dark:border-soft-white shadow-xl rounded-sm overflow-hidden">
                  {projects.map((project) => (
                    <Link 
                      key={project.name}
                      to={project.path}
                      className="block px-4 py-2 hover:bg-muted-gold dark:hover:bg-desaturated-purple hover:text-white transition-colors text-sm font-bold uppercase"
                    >
                      {project.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/contact" className="hover:text-muted-gold dark:hover:text-desaturated-purple font-bold uppercase transition-colors">Contact</Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-parchment dark:bg-midnight-blue border-t-2 border-dark-brown dark:border-soft-white">
            <div className="flex flex-col p-4 space-y-4">
              <Link to="/" className="font-bold uppercase" onClick={closeMenu}>Home</Link>
              <Link to="/about" className="font-bold uppercase" onClick={closeMenu}>About</Link>
              <div className="font-bold uppercase text-muted-gold dark:text-moonlight-blue">Projects</div>
              <div className="pl-4 flex flex-col space-y-2 border-l-2 border-dark-brown dark:border-soft-white ml-2">
                {projects.map((project) => (
                  <Link 
                    key={project.name}
                    to={project.path}
                    className="text-sm hover:text-muted-gold dark:hover:text-desaturated-purple"
                    onClick={closeMenu}
                  >
                    {project.name}
                  </Link>
                ))}
              </div>
              <Link to="/contact" className="font-bold uppercase" onClick={closeMenu}>Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-parchment dark:bg-midnight-blue border-t-4 border-dark-brown dark:border-soft-white py-8 mt-auto relative overflow-hidden">
        {/* Subtle pixel art decoration could go here */}
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-heading text-lg mb-2">Birkan Ates</h3>
            <p className="text-sm opacity-75">Gameplay Programmer & Game Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/birkan-ates-b5a40b2ab/" target="_blank" rel="noopener noreferrer" className="p-2 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded hover:bg-muted-gold dark:hover:bg-desaturated-purple transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/DullySkull" target="_blank" rel="noopener noreferrer" className="p-2 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded hover:bg-muted-gold dark:hover:bg-desaturated-purple transition-colors">
              <Github size={20} />
            </a>
            <a href="https://itch.io/profile/dullyskull" target="_blank" rel="noopener noreferrer" className="p-2 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded hover:bg-muted-gold dark:hover:bg-desaturated-purple transition-colors">
              <Gamepad2 size={20} />
            </a>
            <a href="mailto:Billy.ates@hotmail.com" className="p-2 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded hover:bg-muted-gold dark:hover:bg-desaturated-purple transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="text-center mt-6 text-xs opacity-50">
          © {new Date().getFullYear()} Birkan Ates. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
