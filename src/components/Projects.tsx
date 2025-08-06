
import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Star, GitFork, Eye } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 'ecommerce',
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, admin dashboard, and real-time notifications.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
      github: '#',
      live: '#',
      stats: { stars: 234, forks: 56, views: 1200 }
    },
    {
      id: 'task-manager',
      title: 'Task Management App',
      description: 'A productivity app built with React Native and Firebase. Features real-time collaboration, push notifications, offline support, and advanced analytics.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      github: '#',
      live: '#',
      stats: { stars: 156, forks: 23, views: 890 }
    },
    {
      id: 'ai-chatbot',
      title: 'AI Chat Bot',
      description: 'An intelligent chatbot using OpenAI API with natural language processing capabilities, conversation memory, and multi-language support.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
      technologies: ['Python', 'OpenAI', 'FastAPI', 'PostgreSQL', 'Docker'],
      github: '#',
      live: '#',
      stats: { stars: 389, forks: 78, views: 2100 }
    },
    {
      id: 'weather-dashboard',
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, historical data visualization, and weather alerts.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      technologies: ['Vue.js', 'D3.js', 'Weather API', 'Tailwind CSS'],
      github: '#',
      live: '#',
      stats: { stars: 112, forks: 34, views: 670 }
    },
    {
      id: 'crypto-tracker',
      title: 'Crypto Portfolio Tracker',
      description: 'Real-time cryptocurrency portfolio tracking with price alerts, advanced charts, portfolio analytics, and market news integration.',
      image: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=500&h=300&fit=crop',
      technologies: ['React', 'Chart.js', 'CoinGecko API', 'WebSocket'],
      github: '#',
      live: '#',
      stats: { stars: 445, forks: 89, views: 3200 }
    },
    {
      id: 'fitness-tracker',
      title: 'Fitness Tracker',
      description: 'Mobile app for tracking workouts, nutrition, and progress with social features, achievement system, and personal trainer integration.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
      technologies: ['Flutter', 'Firebase', 'HealthKit', 'Dart'],
      github: '#',
      live: '#',
      stats: { stars: 203, forks: 45, views: 1100 }
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

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <div
      className={`relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 group bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
          hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex space-x-4">
            <a 
              href={project.github}
              className="bg-gray-900/90 p-3 rounded-full hover:bg-cyan-500 transition-colors transform hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a 
              href={project.live}
              className="bg-gray-900/90 p-3 rounded-full hover:bg-purple-500 transition-colors transform hover:scale-110"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        {/* Project Stats */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <div className="bg-gray-900/80 px-2 py-1 rounded-full text-xs text-gray-300 flex items-center">
            <Star size={12} className="mr-1" />
            {project.stats.stars}
          </div>
          <div className="bg-gray-900/80 px-2 py-1 rounded-full text-xs text-gray-300 flex items-center">
            <GitFork size={12} className="mr-1" />
            {project.stats.forks}
          </div>
          <div className="bg-gray-900/80 px-2 py-1 rounded-full text-xs text-gray-300 flex items-center">
            <Eye size={12} className="mr-1" />
            {project.stats.views}
          </div>
        </div>
      </div>
      
      <div className="p-4 sm:p-6 space-y-3">
        <h3 className="text-lg sm:text-xl font-semibold text-white">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech: string) => (
            <span
              key={tech}
              className="bg-gray-700/50 text-cyan-400 px-2 py-1 rounded-full text-xs border border-gray-600"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-gray-700/50 text-gray-400 px-2 py-1 rounded-full text-xs border border-gray-600">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" ref={sectionRef} className="py-12 sm:py-20 relative z-10 px-4">
      <div className="container mx-auto">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          {/* Projects Grid - Simple 3 column layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
