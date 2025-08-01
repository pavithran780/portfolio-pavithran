
import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Award, ExternalLink } from 'lucide-react';
import { GlowingCards, GlowingCard } from './GlowingCard';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const educationEvents = [
    {
      id: 'stanford',
      year: '2018 - 2020',
      title: 'Master of Computer Science',
      subtitle: 'Stanford University',
      description: 'Specialized in Software Engineering and Machine Learning with focus on AI algorithms and distributed systems. GPA: 3.9/4.0',
      icon: <Award className="h-4 w-4 mr-2 text-cyan-400" />,
    },
    {
      id: 'berkeley',
      year: '2014 - 2018',
      title: 'Bachelor of Computer Science',
      subtitle: 'UC Berkeley',
      description: 'Major in Computer Science with focus on Web Development and Database Systems. GPA: 3.8/4.0',
      icon: <Award className="h-4 w-4 mr-2 text-cyan-400" />,
    }
  ];

  const certifications = [
    {
      id: 'aws',
      name: 'AWS Certified Solutions Architect',
      role: 'Amazon Web Services',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop',
      bio: 'Credential ID: AWS-SA-2023-001',
    },
    {
      id: 'gcp',
      name: 'Google Cloud Professional Developer',
      role: 'Google Cloud',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop',
      bio: 'Credential ID: GCP-PD-2023-002',
    },
    {
      id: 'mongodb',
      name: 'MongoDB Certified Developer',
      role: 'MongoDB University',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=200&fit=crop',
      bio: 'Credential ID: MDB-DEV-2022-003',
    },
    {
      id: 'react',
      name: 'React Developer Certification',
      role: 'Meta',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop',
      bio: 'Credential ID: META-REACT-2022-004',
    }
  ];

  useEffect(() => {
    if (sectionRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(sectionRef.current);

      return () => observer.disconnect();
    }
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
          
          {/* Educational Journey with Smooth Animation */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-2xl font-bold text-center mb-8 text-cyan-400">Educational Journey</h3>
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>
              
              {educationEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-400 rounded-full border-4 border-gray-900 z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
                      <div className="flex items-center mb-2 justify-start">
                        {event.icon}
                        <span className="text-sm font-bold text-cyan-400">{event.year}</span>
                      </div>
                      <h4 className="text-xl font-bold mb-1 text-white">{event.title}</h4>
                      <p className="text-cyan-400 font-medium mb-2">{event.subtitle}</p>
                      <p className="text-gray-300 text-sm">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Certifications with Proper Padding and Card Sizing */}
          <div className="px-4">
            <h3 className="text-2xl font-bold text-center mb-8 text-cyan-400">Professional Certifications</h3>
            <div className="max-w-6xl mx-auto">
              <GlowingCards
                enableGlow={true}
                glowRadius={20}
                glowOpacity={0.8}
                gap="1.5rem"
                padding="2rem"
                className="bg-transparent"
              >
                {certifications.map((cert) => (
                  <GlowingCard
                    key={cert.id}
                    glowColor={
                      cert.id === 'aws' ? '#ff9900' :
                      cert.id === 'gcp' ? '#4285f4' :
                      cert.id === 'mongodb' ? '#47a248' :
                      '#61dafb'
                    }
                    className="w-full sm:w-64 h-80 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <div className="h-full flex flex-col">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-32 object-cover rounded-t-lg mb-4"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-white font-semibold mb-2 text-sm">{cert.name}</h4>
                          <p className="text-gray-400 text-xs mb-3">{cert.role}</p>
                        </div>
                        <p className="text-gray-500 text-xs">{cert.bio}</p>
                      </div>
                    </div>
                  </GlowingCard>
                ))}
              </GlowingCards>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
