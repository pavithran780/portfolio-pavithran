
import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = {
    languages: [
      { name: 'JavaScript', level: 90, icon: '⚡' },
      { name: 'TypeScript', level: 85, icon: '📘' },
      { name: 'Python', level: 75, icon: '🐍' },
      { name: 'Java', level: 70, icon: '☕' },
      { name: 'HTML/CSS', level: 95, icon: '🎨' },
      { name: 'SQL', level: 80, icon: '🗄️' },
    ],
    frameworks: [
      { name: 'React', level: 85, icon: '⚛️' },
      { name: 'Node.js', level: 80, icon: '🚀' },
      { name: 'Express.js', level: 75, icon: '🔧' },
      { name: 'Next.js', level: 70, icon: '📦' },
      { name: 'Vue.js', level: 65, icon: '💚' },
      { name: 'Django', level: 60, icon: '🐍' },
    ],
    tools: [
      { name: 'Git', level: 90, icon: '🌿' },
      { name: 'Docker', level: 75, icon: '🐳' },
      { name: 'AWS', level: 75, icon: '☁️' },
      { name: 'MongoDB', level: 80, icon: '🍃' },
      { name: 'PostgreSQL', level: 70, icon: '🐘' },
      { name: 'Redis', level: 65, icon: '🔴' },
    ]
  };

  const digitalBadges = [
    {
      name: 'AWS Certified Developer',
      platform: 'Amazon Web Services',
      icon: '☁️',
      color: 'from-orange-400 to-yellow-500',
      verificationUrl: 'https://aws.amazon.com/certification/verify',
      badgeId: 'AWS-DEV-2024'
    },
    {
      name: 'Google Cloud Professional',
      platform: 'Google Cloud',
      icon: '🔷',
      color: 'from-blue-400 to-cyan-500',
      verificationUrl: 'https://cloud.google.com/certification',
      badgeId: 'GCP-PRO-2024'
    },
    {
      name: 'Microsoft Azure Fundamentals',
      platform: 'Microsoft',
      icon: '🔵',
      color: 'from-blue-500 to-indigo-600',
      verificationUrl: 'https://learn.microsoft.com/en-us/certifications',
      badgeId: 'AZ-900-2024'
    },
    {
      name: 'Meta Frontend Developer',
      platform: 'Meta',
      icon: '📱',
      color: 'from-blue-600 to-purple-600',
      verificationUrl: 'https://www.credly.com/org/facebook-blueprint',
      badgeId: 'META-FE-2024'
    },
    {
      name: 'Docker Certified Associate',
      platform: 'Docker',
      icon: '🐳',
      color: 'from-cyan-400 to-blue-500',
      verificationUrl: 'https://training.mirantis.com/dca-certification-exam',
      badgeId: 'DCA-2024'
    },
    {
      name: 'MongoDB Developer',
      platform: 'MongoDB University',
      icon: '🍃',
      color: 'from-green-400 to-emerald-500',
      verificationUrl: 'https://university.mongodb.com/verify_certificate',
      badgeId: 'MONGODB-DEV-2024'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const CategorySection = ({ title, skills, delay = 0 }: { title: string; skills: any[]; delay?: number }) => (
    <div className="flex-1">
      <h3 className="text-xl font-semibold mb-6 text-white text-center capitalize">{title}</h3>
      <div className="grid grid-cols-1 gap-4">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-105 group"
            style={{ animationDelay: `${delay + index * 100}ms` }}
          >
            <div className="text-center">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h4 className="text-sm font-semibold mb-2 text-white">{skill.name}</h4>
              
              <div className="relative">
                <div className="w-full bg-gray-700 rounded-full h-1.5">
                  <div 
                    className="bg-gradient-to-r from-cyan-400 to-purple-500 h-1.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${delay + index * 100}ms`
                    }}
                  />
                </div>
                <div className="text-xs text-gray-400 mt-1">{skill.level}%</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const handleBadgeClick = (verificationUrl: string, badgeId: string) => {
    // Open verification URL in new tab
    window.open(`${verificationUrl}?badge=${badgeId}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          {/* Horizontal Skills Categories */}
          <div className="flex flex-col lg:flex-row gap-8 mb-16">
            <CategorySection title="Programming Languages" skills={skillCategories.languages} delay={0} />
            <CategorySection title="Frameworks & Libraries" skills={skillCategories.frameworks} delay={200} />
            <CategorySection title="Tools & Technologies" skills={skillCategories.tools} delay={400} />
          </div>

          {/* Digital Badges Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Digital Badges & Certifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {digitalBadges.map((badge, index) => (
                <div
                  key={badge.name}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:scale-105 cursor-pointer group"
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                  onClick={() => handleBadgeClick(badge.verificationUrl, badge.badgeId)}
                >
                  <div className="text-center">
                    <div className="relative mb-4">
                      <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${badge.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                        {badge.icon}
                      </div>
                      <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1">
                        <ExternalLink size={12} className="text-white" />
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                      {badge.name}
                    </h4>
                    
                    <p className="text-sm text-gray-400 mb-3">{badge.platform}</p>
                    
                    <div className="text-xs text-gray-500 bg-gray-700/50 rounded-full px-3 py-1 inline-block">
                      Click to verify
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-400 text-sm">
                Click on any badge to verify authenticity on the respective platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
