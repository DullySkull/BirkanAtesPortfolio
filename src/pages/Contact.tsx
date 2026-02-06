import React from 'react';
import { Mail, Linkedin, Github, Phone, Gamepad2 } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20 min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold font-heading mb-12 uppercase text-dark-brown dark:text-soft-white text-center">
        Get In Touch
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {/* Contact Info */}
        <div className="bg-parchment dark:bg-midnight-blue border-4 border-dark-brown dark:border-soft-white p-8 rounded-sm shadow-lg flex flex-col justify-center space-y-8">
          <p className="text-lg opacity-90 text-center md:text-left">
            I'm currently open to new opportunities in gameplay programming and game development. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-6">
            <a href="mailto:Billy.ates@hotmail.com" className="flex items-center gap-4 text-xl font-bold hover:text-muted-gold dark:hover:text-desaturated-purple transition-colors group">
              <div className="p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded-full group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <span>Billy.ates@hotmail.com</span>
            </a>
            
            <a href="https://www.linkedin.com/in/birkan-ates-b5a40b2ab/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl font-bold hover:text-muted-gold dark:hover:text-desaturated-purple transition-colors group">
              <div className="p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded-full group-hover:scale-110 transition-transform">
                <Linkedin size={24} />
              </div>
              <span>LinkedIn Profile</span>
            </a>
            
            <a href="https://github.com/DullySkull" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl font-bold hover:text-muted-gold dark:hover:text-desaturated-purple transition-colors group">
              <div className="p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded-full group-hover:scale-110 transition-transform">
                <Github size={24} />
              </div>
              <span>GitHub Profile</span>
            </a>

            <a href="https://itch.io/profile/dullyskull" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl font-bold hover:text-muted-gold dark:hover:text-desaturated-purple transition-colors group">
              <div className="p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded-full group-hover:scale-110 transition-transform">
                <Gamepad2 size={24} />
              </div>
              <span>Itch.io Profile</span>
            </a>

            <a href="tel:+46761938665" className="flex items-center gap-4 text-xl font-bold hover:text-muted-gold dark:hover:text-desaturated-purple transition-colors group">
              <div className="p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded-full group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <span>+46 76 193 86 65</span>
            </a>
          </div>
        </div>

        {/* Decorative / Form Placeholder */}
        <div className="bg-dark-brown dark:bg-soft-white p-1 rounded-sm shadow-lg">
          <div className="bg-parchment dark:bg-midnight-blue h-full w-full border-2 border-dashed border-dark-brown/30 dark:border-soft-white/30 p-8 flex flex-col items-center justify-center text-center">
            <Mail size={64} className="text-muted-gold dark:text-desaturated-purple mb-6 opacity-50" />
            <h3 className="text-2xl font-bold font-heading uppercase mb-2">Send a Message</h3>
            <p className="opacity-70">
              (Contact form integration coming soon)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
