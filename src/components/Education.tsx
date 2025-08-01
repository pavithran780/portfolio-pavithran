import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Award, ExternalLink } from 'lucide-react';
import { GlowingCards, GlowingCard } from './GlowingCard';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      period: '2018 - 2020',
      description: 'Specialized in Software Engineering and Machine Learning with focus on AI algorithms and distributed systems.',
      gpa: '3.9/4.0',
      achievements: ['Dean\'s List', 'Research Assistant', 'Published 2 papers']
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'UC Berkeley',
      location: 'Berkeley, CA',
      period: '2014 - 2018',
      description: 'Major in Computer Science with focus on Web Development and Database Systems.',
      gpa: '3.8/4.0',
      achievements: ['Summa Cum Laude', 'CS Honor Society', 'Teaching Assistant']
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop',
      credentialId: 'AWS-SA-2023-001',
      glowColor: '#ff9500'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop',
      credentialId: 'GCP-PD-2023-002',
      glowColor: '#4285f4'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2022',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=200&fit=crop',
      credentialId: 'MDB-DEV-2022-003',
      glowColor: '#47a248'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2022',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop',
      credentialId: 'META-REACT-2022-004',
      glowColor: '#61dafb'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    if (sectionRef.current) {
      const mainObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );
      mainObserver.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="education" ref={sectionRef} className="py-16 sm:py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          
          {/* Education Timeline */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-8 sm:mb-12 text-white text-center">Educational Journey</h3>
            <div className="relative">
              {/* Timeline Line - Hidden on mobile */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full hidden md:block"></div>
              
              {/* Mobile Timeline */}
              <div className="md:hidden space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`timeline-item bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 ${
                      visibleItems.includes(index) 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                    }`}
                    data-index={index}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                        <p className="text-cyan-400 font-medium text-sm sm:text-base">{edu.institution}</p>
                      </div>
                      <div className="text-right text-sm">
                        <div className="flex items-center text-gray-400 mb-1">
                          <Calendar size={14} className="mr-1" />
                          {edu.period}
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin size={14} className="mr-1" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-3 text-sm sm:text-base">{edu.description}</p>
                    <div className="text-sm text-green-400 mb-3">GPA: {edu.gpa}</div>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <span key={i} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Timeline */}
              <div className="hidden md:block">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`timeline-item relative flex items-center mb-12 ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    } ${
                      visibleItems.includes(index) 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                    } transition-all duration-700`}
                    data-index={index}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-gray-900 z-10"></div>
                    
                    {/* Content Card */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                            <p className="text-cyan-400 font-medium">{edu.institution}</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center text-gray-400 mb-1">
                              <Calendar size={16} className="mr-1" />
                              {edu.period}
                            </div>
                            <div className="flex items-center text-gray-400">
                              <MapPin size={16} className="mr-1" />
                              {edu.location}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-3">{edu.description}</p>
                        <div className="text-sm text-green-400 mb-3">GPA: {edu.gpa}</div>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement, i) => (
                            <span key={i} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                              {achievement}
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

          {/* Certifications with Glowing Cards */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-white text-center">Professional Certifications</h3>
            
            <GlowingCards
              enableGlow={true}
              glowRadius={20}
              glowOpacity={0.8}
              animationDuration={300}
              gap="1.5rem"
              maxWidth="100%"
              padding="0"
              responsive={true}
            >
              {certifications.map((cert, index) => (
                <GlowingCard
                  key={index}
                  glowColor={cert.glowColor}
                  className="bg-gray-800/50 backdrop-blur-sm border-gray-700 rounded-lg overflow-hidden min-w-[280px] max-w-[300px] p-0"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.name}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute top-2 right-2">
                      <ExternalLink size={14} className="text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <Award className="text-purple-400 mr-2" size={14} />
                      <span className="text-purple-400 text-xs">{cert.date}</span>
                    </div>
                    <h4 className="text-white font-medium mb-1 text-sm">{cert.name}</h4>
                    <p className="text-gray-400 text-xs mb-2">{cert.issuer}</p>
                    <p className="text-gray-500 text-xs">ID: {cert.credentialId}</p>
                  </div>
                </GlowingCard>
              ))}
            </GlowingCards>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
