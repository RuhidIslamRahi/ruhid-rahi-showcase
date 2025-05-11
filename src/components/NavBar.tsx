
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scrolling and section detection
  useEffect(() => {
    const handleScroll = () => {
      // Header background change on scroll
      setIsScrolled(window.scrollY > 50);
      
      // Detect which section is in view - only on home page
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'projects', 'skills', 'contact'];
        const currentPos = window.scrollY + 100;
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offset = element.offsetTop;
            
            if (currentPos >= offset && currentPos < offset + element.offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);
  
  const navLinks = [
    { title: 'Home', id: 'home', path: '/' },
    { title: 'About', id: 'about', path: '/' },
    { title: 'Projects', id: 'projects', path: '/' },
    { title: 'Skills', id: 'skills', path: '/' },
    { title: 'Certifications', id: 'certifications', path: '/certifications' },
    { title: 'Contact', id: 'contact', path: '/' }
  ];
  
  const scrollToSection = (id: string, path: string) => {
    if (path === '/') {
      if (location.pathname === '/') {
        // If we're already on the home page, just scroll
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If we're on another page, navigate home first
        window.location.href = `/#${id}`;
      }
    }
    setIsOpen(false);
  };
  
  const isActive = (id: string, path: string) => {
    if (path !== '/') {
      return location.pathname === path;
    }
    return location.pathname === '/' && activeSection === id;
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
            link.path === '/' ? (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id, link.path)}
                className={cn(
                  "nav-link",
                  isActive(link.id, link.path) && "active"
                )}
              >
                {link.title}
              </button>
            ) : (
              <Link
                key={link.id}
                to={link.path}
                className={cn(
                  "nav-link",
                  isActive(link.id, link.path) && "active"
                )}
              >
                {link.title}
              </Link>
            )
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
              link.path === '/' ? (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id, link.path)}
                  className={cn(
                    "py-2 text-left",
                    isActive(link.id, link.path) && "text-purple-500"
                  )}
                >
                  {link.title}
                </button>
              ) : (
                <Link
                  key={link.id}
                  to={link.path}
                  className={cn(
                    "py-2 text-left",
                    isActive(link.id, link.path) && "text-purple-500"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
