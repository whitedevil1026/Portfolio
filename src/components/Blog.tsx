import React from 'react';
import { ExternalLink, Github, Calendar, Shield, Trophy, Users } from 'lucide-react';

const Blog: React.FC = () => {
  const projects = [
    {
      title: "TCS Hackquest 9 - Top 50 Achievement",
      description: "Achieved Top 50 ranking in TCS Hackquest 9, a prestigious national-level cybersecurity competition demonstrating advanced problem-solving and technical skills.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Cybersecurity", "Problem Solving", "Competitive Programming"],
      achievement: "Top 50 Nationally",
      date: "2024",
      featured: true,
      type: "Competition",
      link:"https://hackquest.tcs.com/"
    },
    {
      title: "CYSEC GITAM Event Management",
      description: "Led and organized multiple cybersecurity events, workshops, and CTF competitions as Head of Operations, enhancing cybersecurity awareness in the university community.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Event Management", "Leadership", "Community Building"],
      achievement: "40+ Events Organized",
      date: "2021-2025",
      featured: true,
      type: "Leadership"
    },
    {
      title: "CTF Competition Participation",
      description: "Active participant in various Capture The Flag competitions, solving complex cybersecurity challenges and improving practical skills in penetration testing and digital forensics.",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Penetration Testing", "Digital Forensics", "Cryptography"],
      achievement: "Multiple CTF Completions",
      date: "2021-Present",
      featured: true,
      type: "Technical"
    },
    {
      title: "Cybersecurity Workshop Series",
      description: "Designed and conducted educational workshops on various cybersecurity topics including ethical hacking, network security, and incident response for university students.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Teaching", "Ethical Hacking", "Network Security"],
      achievement: "200+ Students Trained",
      date: "2022-2024",
      featured: false,
      type: "Education"
    },
    {
      title: "Security Assessment Projects",
      description: "Conducted vulnerability assessments and penetration testing during internship at Afors Consulting, identifying security weaknesses and providing remediation strategies.",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Vulnerability Assessment", "Penetration Testing", "Security Analysis"],
      achievement: "Professional Experience",
      date: "2024",
      featured: false,
      type: "Professional"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Competition':
        return <Trophy className="w-5 h-5" />;
      case 'Leadership':
        return <Users className="w-5 h-5" />;
      case 'Technical':
        return <Shield className="w-5 h-5" />;
      default:
        return <Shield className="w-5 h-5" />;
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Blog 
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-light-secondary max-w-2xl mx-auto">
              Showcasing my cybersecurity projects, competition achievements, and leadership contributions.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-dark-card border border-dark-border rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 hover:scale-105"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer" >
                
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-dark-bg/60 group-hover:bg-dark-bg/40 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <div className="p-2 bg-accent/20 backdrop-blur-sm rounded-full text-accent">
                      {getTypeIcon(project.type)}
                    </div>
                    <span className="px-2 py-1 bg-dark-bg/80 backdrop-blur-sm rounded-full text-accent text-xs">
                      {project.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-accent/20 backdrop-blur-sm rounded-full text-accent text-xs">
                      {project.achievement}
                    </span>
                  </div>
                </div>
                </a>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-sm text-light-secondary">
                      <Calendar size={14} />
                      <span>{project.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-light-secondary mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
        </div>
      </div>
    </section>
  );
};

export default Blog;