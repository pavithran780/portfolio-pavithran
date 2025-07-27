
import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web',
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'A productivity app built with React Native and Firebase. Real-time collaboration, push notifications, and offline support.',
      image: '/placeholder.svg',
      technologies: ['React Native', 'Firebase', 'Redux'],
      category: 'Mobile',
      github: '#',
      live: '#'
    },
    {
      title: 'AI Chat Bot',
      description: 'An intelligent chatbot using OpenAI API with natural language processing capabilities and conversation memory.',
      image: '/placeholder.svg',
      technologies: ['Python', 'OpenAI', 'FastAPI', 'PostgreSQL'],
      category: 'AI',
      github: '#',
      live: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and historical data visualization.',
      image: '/placeholder.svg',
      technologies: ['Vue.js', 'D3.js', 'Weather API'],
      category: 'Web',
      github: '#',
      live: '#'
    },
    {
      title: 'Crypto Portfolio Tracker',
      description: 'Real-time cryptocurrency portfolio tracking with price alerts, charts, and portfolio analytics.',
      image: '/placeholder.svg',
      technologies: ['React', 'Chart.js', 'CoinGecko API'],
      category: 'Web',
      github: '#',
      live: '#'
    },
    {
      title: 'Fitness Tracker',
      description: 'Mobile app for tracking workouts, nutrition, and progress with social features and achievement system.',
      image: '/placeholder.svg',
      technologies: ['Flutter', 'Firebase', 'HealthKit'],
      category: 'Mobile',
      github: '#',
      live: '#'
    }
  ];

  const filters = ['All', 'Web', 'Mobile', 'AI'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
    <section id="projects" ref={sectionRef} className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a 
                      href={project.github}
                      className="bg-gray-900/80 p-2 rounded-full hover:bg-cyan-500 transition-colors"
                    >
                      <Github size={16} />
                    </a>
                    <a 
                      href={project.live}
                      className="bg-gray-900/80 p-2 rounded-full hover:bg-purple-500 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700 text-cyan-400 px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
