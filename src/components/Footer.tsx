import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp, Shield, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/avinash-kotla",
      label: "LinkedIn"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/whitedevil1026",
      label: "GitHub"
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      href: "https://whitedevil1026.github.io/",
      label: "Blog"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:avinashkotla3699@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold text-accent">Avinash Kotla</h3>
            </div>
            <p className="text-light-secondary">
              Cybersecurity Enthusiast & CEH V12 Certified professional passionate about 
              securing digital environments and building safer technology solutions.
            </p>
            <div className="flex items-center space-x-2 text-accent">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Top 50 in TCS Hackquest 9</span>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-dark-bg border border-dark-border rounded-lg hover:border-accent hover:text-accent transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-light-secondary hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-light-secondary">
              <p>Visakhapatnam, Andhra Pradesh, India</p>
              <a 
                href="mailto:avinashkotla3699@gmail.com"
                className="block hover:text-accent transition-colors duration-300"
              >
                avinashkotla3699@gmail.com
              </a>
              <div className="mt-4 space-y-2">
                <a
                  href="https://www.linkedin.com/in/avinash-kotla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-accent hover:text-accent/80 transition-colors duration-300"
                >
                  LinkedIn: avinash-kotla
                </a>
                <a
                  href="https://github.com/whitedevil1026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-accent hover:text-accent/80 transition-colors duration-300"
                >
                  GitHub: whitedevil1026
                </a>
                <a
                  href="https://whitedevil1026.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-accent hover:text-accent/80 transition-colors duration-300"
                >
                  Blog: whitedevil1026.github.io
                </a>
              </div>
              <div className="mt-4 p-3 bg-accent/10 border border-accent/20 rounded-lg">
                <p className="text-accent text-sm font-medium">Currently pursuing B.Tech in Cyber Security</p>
                <p className="text-light-secondary text-xs">GITAM (Deemed to be University)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-dark-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-light-secondary text-sm">
            <p className="flex items-center">
              © {currentYear} Avinash Kotla. Made with 
              <Heart className="w-4 h-4 text-accent mx-1" /> 
              and dedication to cybersecurity.
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg text-accent hover:bg-accent/20 transition-all duration-300 hover:scale-105"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-sm">Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;