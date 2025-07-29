
import { Download, Linkedin, Github, Globe } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="bg-background min-h-screen pt-20 pb-16">
      <div className="container px-4 mx-auto">
        <div className="text-center py-16">
          {/* Profile Image */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/20">
            <img 
              src="/lovable-uploads/a9dfc89e-3ec8-4231-9138-dabaf763d0be.png" 
              alt="Ruhid Islam Rahi" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            I'm Ruhid Islam Rahi!
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl font-medium text-primary mb-6">
            Data Scientist
          </h2>
          
          {/* Description */}
          <p className="max-w-2xl mx-auto text-muted-foreground mb-8 leading-relaxed">
            with a strong foundation in Python, Machine Learning and AI tools. 
            Experienced in creating data-driven solutions, exploring analytical insights with clean, efficient code and 
            modern technologies.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <a 
              href="https://linkedin.com/in/ruhidislam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/ruhidislam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
            >
              <Globe size={20} />
            </a>
          </div>
          
          {/* Download Resume Button */}
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            <Download size={20} />
            Download Resume
          </button>
        </div>
        
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-card p-8 rounded-xl text-center border border-border">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Projects</div>
          </div>
          <div className="bg-card p-8 rounded-xl text-center border border-border">
            <div className="text-3xl font-bold text-primary mb-2">1.5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="bg-card p-8 rounded-xl text-center border border-border">
            <div className="text-3xl font-bold text-primary mb-2">BSc</div>
            <div className="text-muted-foreground">Data Science</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
