import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import SectionHeader from "@/components/SectionHeader";

const projects = [
  {
    id: 1,
    title: "Student Performance Analysis",
    description: "A comprehensive data analysis project examining factors affecting student academic performance using Python, Pandas, and visualization libraries. The project analyzes various factors that influence student grades and provides insights for educational improvement.",
    image: "/lovable-uploads/8d783da8-8cb9-4b6b-95df-281c0f2a2f36.png",
    tags: ["Python", "Pandas", "Matplotlib", "+2"],
    githubUrl: "https://github.com/RuhidIslamRahi",
    liveUrl: "#",
    featured: true,
    date: "10/12/2024"
  },
  {
    id: 2,
    title: "Sales Data Dashboard", 
    description: "Interactive dashboard built with Python and Streamlit to visualize sales trends and key performance indicators for business decision making. Features real-time data updates and comprehensive analytics.",
    image: "/lovable-uploads/a9dfc89e-3ec8-4231-9138-dabaf763d0be.png",
    tags: ["Python", "Streamlit", "Plotly", "+1"],
    githubUrl: "https://github.com/RuhidIslamRahi",
    liveUrl: "#",
    featured: true,
    date: "8/30/2024"
  },
  {
    id: 3,
    title: "Machine Learning Classifier",
    description: "Comparative study of different machine learning algorithms for classification tasks, implementing models from scratch and using scikit-learn. Includes model evaluation and performance metrics analysis.",
    image: "/lovable-uploads/eb347c00-c06d-4953-a4ed-17e725cacabc.png",
    tags: ["Python", "Scikit-learn", "NumPy", "+3"],
    githubUrl: "https://github.com/RuhidIslamRahi",
    liveUrl: "#",
    featured: true,
    date: "7/17/2024"
  },
  {
    id: 4,
    title: "Data Visualization Tool",
    description: "A comprehensive data visualization platform that allows users to upload datasets and create interactive charts and graphs. Built with modern web technologies for optimal user experience.",
    image: "/lovable-uploads/8d783da8-8cb9-4b6b-95df-281c0f2a2f36.png",
    tags: ["Python", "Plotly", "Dash", "+4"],
    githubUrl: "https://github.com/RuhidIslamRahi",
    liveUrl: "#",
    featured: true,
    date: "3/21/2024"
  },
  {
    id: 5,
    title: "Time Series Analysis",
    description: "Advanced time series forecasting project using statistical models and machine learning techniques. Analyzes historical data patterns to predict future trends with high accuracy.",
    image: "/lovable-uploads/a9dfc89e-3ec8-4231-9138-dabaf763d0be.png",
    tags: ["Python", "ARIMA", "Prophet", "+4"],
    githubUrl: "https://github.com/RuhidIslamRahi",
    liveUrl: "#",
    featured: true,
    date: "9/29/2023"
  },
  {
    id: 6,
    title: "NLP Sentiment Analysis",
    description: "Natural Language Processing project for sentiment analysis of social media data. Implements multiple approaches including traditional ML and deep learning models for text classification.",
    image: "/lovable-uploads/eb347c00-c06d-4953-a4ed-17e725cacabc.png",
    tags: ["Python", "NLTK", "PyTorch", "+5"],
    githubUrl: "https://github.com/RuhidIslamRahi",
    liveUrl: "#",
    featured: true,
    date: "8/15/2023"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <SectionHeader>Featured Projects</SectionHeader>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative bg-card rounded-lg overflow-hidden shadow-sm border hover:shadow-lg transition-all duration-300">
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary" className="bg-yellow-500/90 text-white text-xs px-2 py-1">
                    Featured
                  </Badge>
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white text-sm bg-black/50 px-3 py-1 rounded">Hover to scroll</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <span className="text-xs text-muted-foreground">{project.date}</span>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors bg-muted px-3 py-2 rounded-lg"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors bg-muted px-3 py-2 rounded-lg"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
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