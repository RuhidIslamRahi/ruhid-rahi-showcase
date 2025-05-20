
import { User, Mail, MapPin, ExternalLink, Download } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const handleDownload = () => {
    // Open Google Drive link in a new tab
    window.open('https://drive.google.com/drive/folders/yourfolderid', '_blank');
  };

  return (
    <section id="about" className="py-20 min-h-screen flex items-center">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent mt-2"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Who am I?</h3>
            <h4 className="text-xl mb-4">I'm Ruhid Islam Rahi, a <span className="text-purple-500">Data Science Student</span></h4>
            <p className="text-gray-300 mb-6">
              I am a passionate and driven student pursuing a Bachelor's in Data Science at United International University. 
              With a strong interest in AI, machine learning, and data analytics, I am eager to build a career as a Data Scientist.
            </p>
            <p className="text-gray-300 mb-6">
              I am actively learning Python, SQL, and data visualization tools to develop the technical skills required 
              for this field. I aim to leverage data to solve real-world problems and contribute innovative solutions.
            </p>
            <p className="text-gray-300 mb-6">
              I am open to internships, collaborations, and networking opportunities in the Data Science domain.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300 mb-8">
              <div className="flex items-center gap-3">
                <User size={18} className="text-purple-500" />
                <span>Ruhid Islam Rahi</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-purple-500" />
                <span>ruhidislamrahi@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-purple-500" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink size={18} className="text-purple-500" />
                <a href="#projects" className="hover:text-purple-500 transition-colors">
                  View My Projects
                </a>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
              <Button 
                variant="outline" 
                className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
                onClick={handleDownload}
              >
                <Download className="mr-2" size={16} />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Using the Avatar component for a round image */}
              <Avatar className="w-full h-full border-4 border-purple-500 shadow-lg shadow-purple-500/20">
                <AvatarImage 
                  src="/lovable-uploads/eb347c00-c06d-4953-a4ed-17e725cacabc.png" 
                  alt="Ruhid Islam Rahi"
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl bg-purple-900">RIR</AvatarFallback>
              </Avatar>
              
              {/* Purple gradient ring effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-700/20 via-transparent to-purple-700/30 -z-10 blur-md transform scale-105"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
