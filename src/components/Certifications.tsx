import React from 'react';
import { Award, Calendar, ExternalLink, Shield } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      name: "Certified Ethical Hacker (CEH) V12",
      issuer: "EC-Council",
      date: "Aug 2024",
      expiryDate: "Aug 2027",
      credentialId: "ECC2198346705",
      description: "Industry-leading certification validating skills in ethical hacking and penetration testing methodologies",
      verifyUrl: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=",
      featured: true
    },
    {
      name: "Pre Security",
      issuer: "TryHackMe",
      date: "Jul 2023",
      credentialId: "THM-VCHVLCSLY6",
      description: "Foundational cybersecurity knowledge covering networking, web applications, and Linux fundamentals",
      verifyUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-VCHVLCSLY6.png",
      featured: true
    },
    {
      name: "Introduction to Cyber Security",
      issuer: "TryHackMe",
      date: "Aug 2023",
      credentialId: "THM-CB9W734KTM",
      description: "Comprehensive introduction to cybersecurity concepts, threats, and defensive strategies",
      verifyUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-CB9W734KTM.png",
      featured: true
    },
    {
      name: "Advent of Cyber 2022",
      issuer: "TryHackMe",
      date: "Dec 2022",
      credentialId: "THM-VQNPY7MPKF",
      description: "Completed the annual Advent of Cyber challenge covering various cybersecurity topics and practical exercises",
      verifyUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-VQNPY7MPKF.png",
      featured: false
    }
  ];

  const featuredCerts = certifications.filter(cert => cert.featured);
  const otherCerts = certifications.filter(cert => !cert.featured);

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-accent">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-light-secondary max-w-2xl mx-auto">
              Professional certifications that validate my expertise in cybersecurity and ethical hacking.
            </p>
          </div>

          {/* Featured Certifications */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredCerts.map((cert, index) => (
              <div
                key={index}
                className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-light-secondary">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2 text-accent">
                  {cert.name}
                </h3>

                <p className="text-light-primary font-medium mb-2">
                  {cert.issuer}
                </p>

                <p className="text-light-secondary text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="text-xs">
                    <span className="text-light-secondary">Credential ID: </span>
                    <span className="text-accent">{cert.credentialId}</span>
                  </div>
                  {cert.expiryDate && (
                    <div className="text-xs">
                      <span className="text-light-secondary">Valid until: </span>
                      <span className="text-accent">{cert.expiryDate}</span>
                    </div>
                  )}
                </div>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors duration-300"
                >
                  <ExternalLink size={16} />
                  <span className="text-sm">View Certificate</span>
                </a>
              </div>
            ))}
          </div>

          {/* Other Certifications */}
          {otherCerts.length > 0 && (
            <>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Additional Certifications</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {otherCerts.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold">{cert.name}</h4>
                      <div className="flex items-center space-x-2 text-sm text-light-secondary">
                        <Calendar size={14} />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    
                    <p className="text-light-primary font-medium mb-2">{cert.issuer}</p>
                    
                    <p className="text-light-secondary mb-4 text-sm">
                      {cert.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs">
                        <span className="text-light-secondary">ID: </span>
                        <span className="text-accent">{cert.credentialId}</span>
                      </div>
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certifications;