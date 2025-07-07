import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, Shield } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Cyber Security",
      institution: "GITAM (Deemed to be University)",
      location: "Visakhapatnam, Andhra Pradesh, India",
      period: "2021 - 2025",
      status: "Currently Pursuing",
      description: "Specialized program focusing on cybersecurity fundamentals, ethical hacking, network security, and digital forensics. Active member of CYSEC club with leadership roles.",
      achievements: [
        "Head of Operations at CYSEC GITAM (2024-2025)",
        "Executive Team Member (2022-2025)",
        "Active participant in CTF competitions",
        "Organized multiple cybersecurity events and workshops"
      ],
      courses: ["Network Security", "Ethical Hacking", "Digital Forensics", "Cryptography", "Incident Response", "Security Analysis"]
    }
  ];

  // const languages = [
  //   { name: "English", proficiency: "Full professional proficiency" },
  //   { name: "Telugu", proficiency: "Native or bilingual proficiency" },
  //   { name: "Hindi", proficiency: "Limited working proficiency" }
  // ];

  return (
    <section id="education" className="py-20 bg-dark-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-accent">Education</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 mb-4 lg:mb-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-accent mb-2 sm:mb-0">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-light-secondary">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-lg font-medium mb-2">{edu.institution}</h4>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-light-secondary">
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award size={16} />
                          <span className="text-accent">{edu.status}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-light-secondary mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Achievements */}
                      <div>
                        <h5 className="font-medium mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="text-light-secondary text-sm flex items-start">
                              <span className="text-accent mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Relevant Courses */}
                      <div>
                        <h5 className="font-medium mb-2">Core Subjects:</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Languages Section
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Languages</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="bg-dark-card border border-dark-border rounded-lg p-4 text-center hover:border-accent/50 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-accent mb-2">{language.name}</h4>
                  <p className="text-light-secondary text-sm">{language.proficiency}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Education;