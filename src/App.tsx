import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-light-primary font-inter">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Skills />
      <Blog />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;