import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, Shield, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-dark-card opacity-80"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto h-screen flex flex-col items-center justify-center space-y-8">
          {/* Profile Image */}
          {/* <div className="mb-8 animate-fade-in">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-accent/20 to-accent/40 p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-dark-card flex items-center justify-center">
                <Shield className="w-16 h-16 text-accent" />
              </div>
            </div>
          </div> */}

          {/* Main Content */}
          <div className="animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-accent">Avinash Kotla</span>
            </h1>
            <p className="text-xl sm:text-2xl text-light-secondary mb-4 leading-relaxed">
              Cybersecurity Enthusiast & CEH V12 Certified
            </p>
            <p className="text-lg text-accent mb-8">
              Top 50 in TCS Hackquest 9 || B.Tech Cyber Security Student
            </p>
            <p className="text-lg text-light-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
              Dedicated B.Tech student specializing in Cyber Security at GITAM University. 
              Passionate about cybersecurity with hands-on experience in CTF competitions, 
              event management, and building secure solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
            <a
              href="https://www.linkedin.com/in/avinash-kotla"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-dark-card border border-dark-border rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/whitedevil1026"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-dark-card border border-dark-border rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://whitedevil1026.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-dark-card border border-dark-border rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110"
              aria-label="Blog"
            >
              <ExternalLink size={24} />
            </a>
            <a
              href="mailto:avinashkotla3699@gmail.com"
              className="p-3 bg-dark-card border border-dark-border rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-accent text-dark-bg font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
            <a
              href="https://whitedevil1026.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-8 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300 hover:scale-105"
            >
              <ExternalLink size={18} />
              <span>Visit Blog</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-accent" />
      </button>
    </section>
  );
};

export default Hero;