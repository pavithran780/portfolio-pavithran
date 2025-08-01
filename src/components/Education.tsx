
import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Award, ExternalLink } from 'lucide-react';
import { GlowingCards, GlowingCard } from './GlowingCard';
import { ScrollTimeline } from './ScrollTimeline';
import { TeamCarousel } from './TeamCarousel';

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
          
          {/* Educational Journey with ScrollTimeline */}
          <div className="mb-16 sm:mb-20">
            <ScrollTimeline
              events={educationEvents}
              title="Educational Journey"
              subtitle="Scroll to explore my academic path"
              cardAlignment="alternating"
              progressIndicator={true}
              revealAnimation="slide"
              cardEffect="glow"
              darkMode={true}
              className="bg-transparent"
            />
          </div>

          {/* Professional Certifications with TeamCarousel */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700">
            <TeamCarousel
              members={certifications}
              title="Professional Certifications"
              titleColor="rgba(34, 211, 238, 1)"
              titleSize="lg"
              cardWidth={280}
              cardHeight={300}
              autoPlay={4000}
              pauseOnHover={true}
              showArrows={true}
              showDots={true}
              infoPosition="none"
              grayscaleEffect={true}
              sideCardScale={0.85}
              sideCardOpacity={0.7}
              className="bg-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
