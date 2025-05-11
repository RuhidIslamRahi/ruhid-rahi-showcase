
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string; 
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A fully responsive e-commerce platform built with React, Redux and Tailwind CSS.",
      image: "/placeholder.svg",
      tags: ["React", "Redux", "Tailwind CSS"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A drag and drop task management application with user authentication.",
      image: "/placeholder.svg",
      tags: ["React", "Firebase", "Tailwind CSS"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website with smooth animations and modern design.",
      image: "/placeholder.svg",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application that shows forecast data with beautiful visualizations.",
      image: "/placeholder.svg",
      tags: ["React", "API", "Chart.js"],
      demoUrl: "#",
      codeUrl: "#",
    },
  ];

  const [filter, setFilter] = useState("All");
  
  // Get unique tags from all projects
  const allTags = ["All", ...Array.from(new Set(projects.flatMap(project => project.tags)))];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">My Projects</h2>
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent mt-2"></div>
        </div>
        
        <div className="flex justify-center mb-10 flex-wrap gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm ${
                filter === tag
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="project-overlay">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 btn btn-primary text-sm px-4 py-2"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {project.codeUrl && (
                    <a 
                      href={project.codeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 btn btn-outline text-sm px-4 py-2"
                    >
                      <Github size={16} /> View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
