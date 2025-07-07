import React from 'react';
import { Shield, Database, Cloud, Settings, Users, Target } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: <Shield className="w-6 h-6" />,
      skills: [
        { name: "Ethical Hacking", level: 90 },
        { name: "Penetration Testing", level: 85 },
        { name: "Vulnerability Assessment", level: 88 },
        { name: "Digital Forensics", level: 80 },
        { name: "Incident Response", level: 75 },
        { name: "Security Analysis", level: 85 }
      ]
    },
    {
      title: "Network Security",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Network Protocols", level: 85 },
        { name: "Firewall Configuration", level: 80 },
        { name: "IDS/IPS", level: 75 },
        { name: "VPN Technologies", level: 78 },
        { name: "Network Monitoring", level: 82 },
        { name: "Wireless Security", level: 75 }
      ]
    },
    {
      title: "Security Tools",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: "Metasploit", level: 85 },
        { name: "Nmap", level: 90 },
        { name: "Wireshark", level: 88 },
        { name: "Burp Suite", level: 82 },
        { name: "Nessus", level: 80 },
        { name: "OWASP ZAP", level: 78 }
      ]
    },
    {
      title: "Operating Systems",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "Linux", level: 88 },
        { name: "Windows", level: 85 },
        { name: "Kali Linux", level: 92 },
        { name: "Ubuntu", level: 85 },
        { name: "Command Line", level: 90 },
        { name: "Shell Scripting", level: 80 }
      ]
    },
    {
      title: "Programming & Scripting",
      icon: <Target className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 85 },
        { name: "Bash Scripting", level: 80 },
        { name: "PowerShell", level: 75 },
        { name: "SQL", level: 78 },
        { name: "JavaScript", level: 70 },
        { name: "C/C++", level: 72 }
      ]
    },
    {
      title: "Leadership & Management",
      icon: <Users className="w-6 h-6" />,
      skills: [
        { name: "Event Management", level: 95 },
        { name: "Team Leadership", level: 90 },
        { name: "Project Management", level: 85 },
        { name: "Public Speaking", level: 88 },
        { name: "Mentoring", level: 85 },
        { name: "Strategic Planning", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Skills & <span className="text-accent">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-light-secondary max-w-2xl mx-auto">
              Comprehensive cybersecurity skills developed through academic study, practical experience, and continuous learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-accent">{category.icon}</div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-light-primary font-medium">{skill.name}</span>
                        {/* <span className="text-accent text-sm">{skill.level}%</span> */}
                      {/* </div>
                      <div className="w-full bg-dark-border rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-accent/80 to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Additional Technologies & Frameworks</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "OWASP Top 10", "NIST Framework", "ISO 27001", "GDPR Compliance",
                "Risk Assessment", "Threat Modeling", "Social Engineering", "Cryptography",
                "Blockchain Security", "IoT Security", "Mobile Security", "Web Application Security",
                "CTF Competitions", "Red Team Operations", "Blue Team Defense"
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-dark-card border border-dark-border rounded-full text-light-secondary hover:border-accent hover:text-accent transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;