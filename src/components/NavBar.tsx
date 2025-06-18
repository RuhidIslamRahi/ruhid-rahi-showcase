import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  const location = useLocation();

  // Toggle html class for Tailwind dark mode
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Handle scrolling and section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

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

  const navLinks = [{
    title: 'Home',
    id: 'home',
    path: '/'
  }, {
    title: 'About',
    id: 'about',
    path: '/#about'
  }, {
    title: 'Resume',
    id: 'resume',
    path: '/resume'
  }, {
    title: 'Projects',
    id: 'projects',
    path: '/#projects'
  }, {
    title: 'Skills',
    id: 'skills',
    path: '/#skills'
  }, {
    title: 'Certifications',
    id: 'certifications',
    path: '/certifications'
  }, {
    title: 'Contact',
    id: 'contact',
    path: '/#contact'
  }];

  const handleNavigation = (path: string, id: string) => {
    setIsOpen(false);
    if (path.startsWith('/#')) {
      if (location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };

  const isActive = (id: string, path: string) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && activeSection === id;
    }
    return location.pathname === path;
  };

  return <header className={cn("fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4", isScrolled ? "bg-dark shadow-lg bg-opacity-90 py-2" : "bg-transparent")}>
      <div className="container flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">Ruhid</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 items-center">
          {navLinks.map(link => <Link key={link.id} to={link.path} className={cn("nav-link", isActive(link.id, link.path) && "active")} onClick={() => handleNavigation(link.path, link.id)}>
              {link.title}
            </Link>)}
          {/* Dark mode toggle button */}
          <button
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setDarkMode(v => !v)}
            className={cn(
              "ml-4 p-2 rounded-full bg-muted hover:bg-accent border border-border transition-colors",
              "text-primary" // text color fits in both themes
            )}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
        
        {/* Mobile Menu Toggle + Dark mode */}
        <div className="md:hidden flex items-center gap-2">
          <button
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setDarkMode(v => !v)}
            className="p-2 rounded-full bg-muted hover:bg-accent border border-border transition-colors text-primary"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden absolute top-16 left-0 w-full bg-dark bg-opacity-95 py-4 shadow-lg animate-fade-in">
          <div className="container flex flex-col space-y-3">
            {navLinks.map(link => <Link key={link.id} to={link.path} className={cn("py-2 text-left", isActive(link.id, link.path) && "text-purple-500")} onClick={() => handleNavigation(link.path, link.id)}>
                {link.title}
              </Link>)}
          </div>
        </div>}
    </header>;
};

export default NavBar;
