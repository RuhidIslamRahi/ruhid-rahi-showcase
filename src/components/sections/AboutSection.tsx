
import { User, Mail, MapPin, ExternalLink } from 'lucide-react';

const AboutSection = () => {
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
              I am a passionate and driven student pursuing a Bachelor's in Data Science. With a strong interest in AI, 
              machine learning, and data analytics, I am eager to build a career as a Data Scientist.
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
            
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="rounded-lg overflow-hidden border-2 border-purple-500 shadow-lg shadow-purple-500/20 relative">
              {/* Purple gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 via-transparent to-purple-700/20"></div>
              {/* Using the uploaded image */}
              <img 
                src="/lovable-uploads/8d783da8-8cb9-4b6b-95df-281c0f2a2f36.png" 
                alt="Ruhid Islam Rahi" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
