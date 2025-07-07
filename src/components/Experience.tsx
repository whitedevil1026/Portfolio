import React from 'react';
import { Calendar, MapPin, Shield, Users, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Head of Operations",
      company: "CYSEC GITAM",
      location: "Visakhapatnam, Andhra Pradesh, India",
      period: "Jan 2024 - Mar 2025",
      type: "Leadership Role",
      description: "Leading operations for the cybersecurity club at GITAM University, managing events, coordinating activities, and driving strategic initiatives for the cybersecurity community.",
      achievements: [
        "Managed large-scale cybersecurity events and workshops",
        "Coordinated with industry professionals for guest lectures",
        "Improved club engagement and participation by 40%"
      ],
      tech: ["Event Management", "Internal Communications", "Team Leadership"]
    },
    {
      title: "Cyber Security Engineer",
      company: "Afors Consulting",
      location: "Hyderabad, Telangana, India",
      period: "May 2024 - Jun 2024",
      type: "Full-time Internship",
      description: "Gained hands-on experience in cybersecurity practices, vulnerability assessments, and security implementations in a professional consulting environment.",
      achievements: [
        "Conducted security assessments for client systems",
        "Assisted in penetration testing activities",
        "Documented security findings and recommendations"
      ],
      tech: ["Penetration Testing", "Vulnerability Assessment", "Security Analysis"]
    },
    {
      title: "Executive Team Member",
      company: "CYSEC GITAM",
      location: "Visakhapatnam, Andhra Pradesh, India",
      period: "Aug 2022 - Mar 2025",
      type: "Leadership Position",
      description: "Part of the executive team responsible for strategic planning and execution of cybersecurity initiatives within the university community.",
      achievements: [
        "Organized multiple CTF competitions and workshops",
        "Managed Google Workspace for the organization",
        "Mentored junior members in cybersecurity concepts"
      ],
      tech: ["Google Workspace Manager", "Strategic Planning", "Mentoring"]
    },
    {
      title: "Core Team Member",
      company: "CYSEC GITAM",
      location: "Visakhapatnam, Andhra Pradesh, India",
      period: "Dec 2021 - Mar 2025",
      type: "Active Contributor",
      description: "Active core team member contributing to various cybersecurity initiatives, events, and educational programs within the university.",
      achievements: [
        "Participated in organizing cybersecurity awareness programs",
        "Contributed to technical workshops and seminars",
        "Helped establish club protocols and procedures"
      ],
      tech: ["Event Organization", "Technical Workshops", "Community Building"]
    },
    {
      title: "Community Member",
      company: "CYSEC GITAM",
      location: "Visakhapatnam, Andhra Pradesh, India",
      period: "Apr 2021 - Mar 2025",
      type: "Part-time",
      description: "Started my journey with CYSEC GITAM as a community member, actively participating in cybersecurity activities and learning opportunities.",
      achievements: [
        "Attended cybersecurity workshops and training sessions",
        "Participated in club activities and networking events",
        "Built foundational knowledge in cybersecurity practices"
      ],
      tech: ["Cybersecurity Fundamentals", "Networking", "Continuous Learning"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Experience & <span className="text-accent">Leadership</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-dark-border"></div>

            {experiences.map((experience, index) => (
              <div key={index} className="relative mb-12 md:mb-16">
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-dark-bg"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-accent mb-2 sm:mb-0">
                        {experience.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-light-secondary">
                        <Calendar size={16} />
                        <span>{experience.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="text-lg font-medium">{experience.company}</h4>
                      <Shield size={16} className="text-accent" />
                    </div>

                    <div className="flex items-center space-x-2 mb-2 text-light-secondary">
                      <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20">
                        {experience.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-4 text-light-secondary">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>

                    <p className="text-light-secondary mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="mb-4">
                      <h5 className="font-medium mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="text-light-secondary text-sm flex items-start">
                            <span className="text-accent mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {experience.tech.map((tech, i) => (
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;