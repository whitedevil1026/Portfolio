import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navigationItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-bg/95 backdrop-blur-sm border-b border-dark-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-light-primary hover:text-accent transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <a
  href="/avinash-kotla-Resume.pdf"
  download
  className="flex items-center space-x-2 px-4 py-2 bg-accent text-dark-bg rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105"
>
  <Download size={16} />
  <span>Resume</span>
</a>

          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-light-primary hover:text-accent transition-colors ml-auto"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-dark-bg/95 backdrop-blur-sm border-b border-dark-border">
            <nav className="flex flex-col space-y-4 p-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-light-primary hover:text-accent transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <button className="flex items-center space-x-2 px-4 py-2 bg-accent text-dark-bg rounded-lg hover:bg-accent/90 transition-all duration-300 w-fit">
                <Download size={16} />
                <span>Resume</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;