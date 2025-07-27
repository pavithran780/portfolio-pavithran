
import React, { useEffect, useRef, useState } from 'react';

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
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-6 text-white text-center capitalize">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-105 group"
            style={{ animationDelay: `${delay + index * 100}ms` }}
          >
            <div className="text-center">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">{skill.name}</h4>
              
              <div className="relative">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${delay + index * 100}ms`
                    }}
                  />
                </div>
                <div className="text-sm text-gray-400 mt-2">{skill.level}%</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <CategorySection title="Programming Languages" skills={skillCategories.languages} delay={0} />
          <CategorySection title="Frameworks & Libraries" skills={skillCategories.frameworks} delay={200} />
          <CategorySection title="Tools & Technologies" skills={skillCategories.tools} delay={400} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
