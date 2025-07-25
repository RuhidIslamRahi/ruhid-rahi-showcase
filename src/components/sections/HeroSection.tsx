
import { Linkedin, Github, Twitter, Download } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const HeroSection = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/drive/folders/yourfolderid', '_blank');
  };
  
  return (
    <section id="home" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <Avatar className="w-32 h-32 border-4 border-primary/20">
              <AvatarImage 
                src="/lovable-uploads/eb347c00-c06d-4953-a4ed-17e725cacabc.png" 
                alt="Ruhid Islam Rahi" 
                className="object-cover"
              />
              <AvatarFallback className="text-2xl bg-primary/10">RIR</AvatarFallback>
            </Avatar>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            I'm Ruhid Islam Rahi!
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-medium mb-6 text-primary">
            Data Science Student
          </p>
          
          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            with a strong foundation in Python, Data Analytics and Machine Learning. 
            Experienced in creating data-driven solutions, exploring AI tools, and building projects that solve real-world problems. 
            I'm on a continuous journey of learning and innovation.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <a 
              href="https://www.linkedin.com/in/ruhidislam-rahi/"
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-muted rounded-lg hover:bg-accent transition-colors"
            >
              <Linkedin className="text-primary" size={24} />
            </a>
            <a 
              href="https://github.com/RuhidIslamRahi"
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-muted rounded-lg hover:bg-accent transition-colors"
            >
              <Github className="text-primary" size={24} />
            </a>
            <a 
              href="https://x.com/RuhidIslamRahi"
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-muted rounded-lg hover:bg-accent transition-colors"
            >
              <Twitter className="text-primary" size={24} />
            </a>
          </div>
          
          {/* Download Resume Button */}
          <button 
            onClick={handleDownload}
            className="btn btn-primary flex items-center gap-2 mx-auto mb-12"
          >
            <Download size={18} />
            Download Resume
          </button>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-card p-6 rounded-lg border">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Projects</div>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <div className="text-3xl font-bold text-primary mb-2">BSc</div>
              <div className="text-muted-foreground">Data Science</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
