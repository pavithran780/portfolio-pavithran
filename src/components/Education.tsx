
import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      period: '2018 - 2020',
      description: 'Specialized in Software Engineering and Machine Learning',
      gpa: '3.9/4.0'
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'UC Berkeley',
      location: 'Berkeley, CA',
      period: '2014 - 2018',
      description: 'Major in Computer Science with focus on Web Development',
      gpa: '3.8/4.0'
    }
  ];

  const certifications = [
    'AWS Certified Developer',
    'Google Cloud Professional',
    'MongoDB Certified Developer',
    'React Developer Certification'
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

  return (
    <section id="education" ref={sectionRef} className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-white">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
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
                    <div className="text-sm text-green-400">GPA: {edu.gpa}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-white">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:scale-105"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-center">
                      <Award className="text-purple-400 mr-3" size={20} />
                      <span className="text-white font-medium">{cert}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
