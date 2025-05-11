
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scrolling and section detection
  useEffect(() => {
    const handleScroll = () => {
      // Header background change on scroll
      setIsScrolled(window.scrollY > 50);
      
      // Detect which section is in view
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const currentPos = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const offset = element.offsetTop;
          
          if (currentPos >= offset && currentPos < offset + element.offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { title: 'Home', id: 'home' },
    { title: 'About', id: 'about' },
    { title: 'Projects', id: 'projects' },
    { title: 'Skills', id: 'skills' },
    { title: 'Contact', id: 'contact' }
  ];
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };
  
  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
      isScrolled ? "bg-dark shadow-lg bg-opacity-90 py-2" : "bg-transparent"
    )}>
      <div className="container flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">Portfolio</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={cn(
                "nav-link",
                activeSection === link.id && "active"
              )}
            >
              {link.title}
            </button>
          ))}
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-dark bg-opacity-95 py-4 shadow-lg animate-fade-in">
          <div className="container flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "py-2 text-left",
                  activeSection === link.id && "text-purple-500"
                )}
              >
                {link.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
