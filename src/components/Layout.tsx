
import React from 'react';
import NavBar from './NavBar';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="min-h-screen">
      <NavBar />
      
      <main>
        {children}
      </main>
      
      <footer className="bg-black py-8 mt-16">
        <div className="container">
          <div className="text-center">
            <div className="mb-4 gradient-text text-xl font-bold">Portfolio</div>
            <p className="text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 bg-purple-600 p-3 rounded-full text-white shadow-lg transition-all duration-300",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default Layout;
