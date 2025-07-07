import React from 'react';
import { Shield, Target, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity Focus",
      description: "Specialized knowledge in ethical hacking and security practices"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "CTF Competitions",
      description: "Active participant in Capture The Flag competitions and challenges"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership",
      description: "Head of Operations at CYSEC GITAM with event management skills"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Always exploring new cybersecurity trends and technologies"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About <span className="text-accent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <div className="space-y-6">
              <p className="text-lg text-light-secondary leading-relaxed">
                I'm a dedicated B.Tech student specializing in Cyber Security at GITAM (Deemed to be University), 
                with a strong interest in cybersecurity that began during the lockdown period. Since then, 
                I've been actively exploring the field—both academically and practically.
              </p>
              <p className="text-lg text-light-secondary leading-relaxed">
                Throughout my academic journey at GITAM, I've actively contributed to the CYSEC Club, 
                gaining hands-on experience in cybersecurity. By organizing events and participating in 
                CTF competitions, I've built both technical expertise and management skills.
              </p>
              <p className="text-lg text-light-secondary leading-relaxed">
                Outside of academics, I enjoy anime and gaming, which help me stay creative and focused. 
                I'm always eager to learn, grow, and take on new challenges in the world of cybersecurity. 
                My achievement of reaching the Top 50 in TCS Hackquest 9 reflects my dedication to excellence.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-6 bg-dark-card border border-dark-border rounded-lg hover:border-accent/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-accent mb-4">{highlight.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-light-secondary">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;