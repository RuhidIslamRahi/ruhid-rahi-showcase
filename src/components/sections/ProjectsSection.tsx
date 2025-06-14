import { useState } from 'react';
import { ExternalLink, Github, Code, ChartBar, Database, FileCode } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
  const projects: Project[] = [{
    id: 1,
    title: "Time Series Forecasting",
    description: "Advanced time series forecasting model using ARIMA and Prophet to predict stock market trends with interactive visualizations.",
    image: "/placeholder.svg",
    tags: ["Python", "Pandas", "Matplotlib", "Prophet", "Time Series"],
    demoUrl: "#",
    codeUrl: "#"
  }, {
    id: 2,
    title: "Sentiment Analysis Dashboard",
    description: "NLP-powered sentiment analysis dashboard for social media data using BERT and spaCy with real-time processing.",
    image: "/placeholder.svg",
    tags: ["Python", "NLTK", "spaCy", "BERT", "NLP"],
    demoUrl: "#",
    codeUrl: "#"
  }, {
    id: 3,
    title: "Customer Segmentation",
    description: "Machine learning model for customer segmentation using K-means clustering with interactive visualization dashboard.",
    image: "/placeholder.svg",
    tags: ["Python", "scikit-learn", "Matplotlib", "Clustering", "Data Visualization"],
    demoUrl: "#",
    codeUrl: "#"
  }, {
    id: 4,
    title: "Predictive Maintenance",
    description: "Predictive maintenance model for industrial equipment using random forest and gradient boosting algorithms.",
    image: "/placeholder.svg",
    tags: ["Python", "scikit-learn", "XGBoost", "Machine Learning"],
    demoUrl: "#",
    codeUrl: "#"
  }, {
    id: 5,
    title: "Image Classification",
    description: "Deep learning model for image classification using TensorFlow and Keras with data augmentation techniques.",
    image: "/placeholder.svg",
    tags: ["Python", "TensorFlow", "Keras", "CNN", "Deep Learning"],
    demoUrl: "#",
    codeUrl: "#"
  }, {
    id: 6,
    title: "Data Pipeline Automation",
    description: "Automated ETL pipeline for processing large datasets using Apache Airflow and integrating with cloud storage.",
    image: "/placeholder.svg",
    tags: ["Python", "Airflow", "ETL", "Data Engineering"],
    demoUrl: "#",
    codeUrl: "#"
  }];
  const [filter, setFilter] = useState("All");
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');

  // Get unique tags from all projects
  const allTags = ["All", ...Array.from(new Set(projects.flatMap(project => project.tags)))];
  const filteredProjects = filter === "All" ? projects : projects.filter(project => project.tags.includes(filter));
  return <section id="projects" className="py-20 bg-black">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 style={{
            lineHeight: 1.1
          }} className="text-5xl tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent animate-fade-in md:text-5xl font-extrabold">Projects</h2>
            {/* Modern animated underline gesture */}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-4/5 rounded-full bg-gradient-to-r from-purple-500 via-pink-400 to-indigo-400 animate-underline-gesture pointer-events-none"></span>
          </div>
          <style>
            {`
            @keyframes underline-gesture {
              0% { width: 0; opacity:0; }
              10% { opacity:1;}
              100% { width: 80%; opacity:1;}
            }
            .animate-underline-gesture {
              animation: underline-gesture 1.2s cubic-bezier(.73,0,.28,1.01) 0.2s both;
            }
            `}
          </style>
          <div className="w-full h-0.5 mt-4"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of my data science projects showcasing expertise in machine learning, 
            data visualization, and predictive analytics using Python and its powerful libraries.
          </p>
        </div>
        
        <div className="flex justify-between items-center mb-10">
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => <button key={tag} onClick={() => setFilter(tag)} className={`px-4 py-2 rounded-full transition-all duration-300 text-sm ${filter === tag ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
                {tag}
              </button>)}
          </div>
          
          <div className="flex gap-2">
            <button onClick={() => setViewMode('grid')} className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-purple-600' : 'bg-gray-800'}`} aria-label="Grid view">
              <Database size={16} />
            </button>
            <button onClick={() => setViewMode('carousel')} className={`p-2 rounded-md ${viewMode === 'carousel' ? 'bg-purple-600' : 'bg-gray-800'}`} aria-label="Carousel view">
              <ChartBar size={16} />
            </button>
          </div>
        </div>
        
        {viewMode === 'grid' ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredProjects.map(project => <Card key={project.id} className="bg-gray-900 border-gray-800 hover:border-purple-500 transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <AspectRatio ratio={16 / 9}>
                    <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2">
                      {project.tags.slice(0, 3).map(tag => <span key={tag} className="bg-purple-600/70 text-white px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>)}
                      {project.tags.length > 3 && <span className="bg-gray-700/70 text-white px-2 py-1 rounded-full text-xs">
                          +{project.tags.length - 3}
                        </span>}
                    </div>
                  </div>
                </div>
                
                <CardContent className="pt-4">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>
                </CardContent>
                
                <CardFooter className="flex gap-2 pt-0">
                  {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs bg-purple-600 hover:bg-purple-700 text-white py-1 px-3 rounded-full transition-colors">
                      <ExternalLink size={12} /> Live Demo
                    </a>}
                  {project.codeUrl && <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 py-1 px-3 rounded-full transition-colors">
                      <Github size={12} /> Code
                    </a>}
                </CardFooter>
              </Card>)}
          </div> : <div className="mt-8">
            <Carousel className="w-full">
              <CarouselContent>
                {filteredProjects.map(project => <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <div className="h-full">
                      <Card className="bg-gray-900 border-gray-800 h-full flex flex-col">
                        <div className="relative">
                          <AspectRatio ratio={16 / 9}>
                            <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                          </AspectRatio>
                          <div className="absolute top-2 right-2 flex flex-wrap justify-end gap-1 max-w-[80%]">
                            {project.tags.slice(0, 2).map(tag => <span key={tag} className="bg-purple-600/80 text-white px-2 py-0.5 rounded-full text-xs">
                                {tag}
                              </span>)}
                          </div>
                        </div>
                        
                        <CardContent className="pt-4 flex-grow">
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>
                        </CardContent>
                        
                        <CardFooter className="flex gap-2 pt-0">
                          {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs bg-purple-600 hover:bg-purple-700 text-white py-1 px-3 rounded-full transition-colors">
                              <ExternalLink size={12} /> Demo
                            </a>}
                          {project.codeUrl && <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 py-1 px-3 rounded-full transition-colors">
                              <FileCode size={12} /> Code
                            </a>}
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>)}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="-left-12 bg-gray-800 hover:bg-purple-600 border-0" />
                <CarouselNext className="-right-12 bg-gray-800 hover:bg-purple-600 border-0" />
              </div>
            </Carousel>
          </div>}
      </div>
    </section>;
};
export default ProjectsSection;