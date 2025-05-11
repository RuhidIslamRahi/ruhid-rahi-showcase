
import { User, Mail, MapPin, ExternalLink } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent mt-2"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Who am I?</h3>
            <h4 className="text-xl mb-4">I'm John Doe, a <span className="text-purple-500">Web Developer</span></h4>
            <p className="text-gray-300 mb-6">
              I am a passionate web developer with expertise in creating responsive and user-friendly websites.
              With 5 years of experience, I specialize in front-end development using modern frameworks like React
              and crafting beautiful user interfaces with Tailwind CSS.
            </p>
            <p className="text-gray-300 mb-6">
              My goal is to build applications that not only look great but also provide exceptional user experiences.
              I love solving complex problems and turning ideas into reality through code.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300 mb-8">
              <div className="flex items-center gap-3">
                <User size={18} className="text-purple-500" />
                <span>John Doe</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-purple-500" />
                <span>john@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-purple-500" />
                <span>New York, USA</span>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink size={18} className="text-purple-500" />
                <a href="https://example.com" className="hover:text-purple-500 transition-colors">
                  example.com
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
              {/* Placeholder image - replace with your actual image */}
              <img 
                src="/placeholder.svg" 
                alt="John Doe" 
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
