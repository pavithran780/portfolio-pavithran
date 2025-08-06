
import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Award, ExternalLink } from 'lucide-react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
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

  useEffect(() => {
    if (sectionRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stagger the animation of timeline items
            educationEvents.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, index]);
              }, index * 300);
            });
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
            Education
          </h2>
          
          {/* Educational Journey with Enhanced Timeline Animation */}
          <div className="mb-16 sm:mb-20">
            <div className="relative max-w-4xl mx-auto">
              {/* Animated Timeline Line */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full transition-all duration-2000 ${
                isVisible ? 'h-full opacity-100' : 'h-0 opacity-0'
              }`}></div>
              
              {educationEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`relative flex items-center mb-12 transition-all duration-800 ease-out ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } ${
                    visibleItems.includes(index) 
                      ? 'opacity-100 translate-x-0' 
                      : `opacity-0 ${index % 2 === 0 ? '-translate-x-12' : 'translate-x-12'}`
                  }`}
                >
                  {/* Animated Timeline Node */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-400 rounded-full border-4 border-gray-900 z-10 transition-all duration-600 ${
                    visibleItems.includes(index) 
                      ? 'scale-100 opacity-100' 
                      : 'scale-0 opacity-0'
                  }`}></div>
                  
                  {/* Content Card with Smooth Animation */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-400/20 transform ${
                      visibleItems.includes(index) 
                        ? 'scale-100 rotate-0' 
                        : 'scale-95 rotate-1'
                    }`}>
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
        </div>
      </div>
    </section>
  );
};

export default Education;
