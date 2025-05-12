
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullTexts = ["Data Scientist", "Python Enthusiast", "Problem Solver"];
  const [textIndex, setTextIndex] = useState(0);
  
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let charIndex = 0;
    
    if (isTyping) {
      // Typing effect
      if (charIndex < fullTexts[textIndex].length) {
        timer = setTimeout(() => {
          setText(fullTexts[textIndex].substring(0, charIndex + 1));
          charIndex++;
          
          if (charIndex === fullTexts[textIndex].length) {
            setIsTyping(false);
            charIndex = 0;
          }
        }, 100);
      }
    } else {
      // Wait before erasing
      timer = setTimeout(() => {
        // Erasing effect
        timer = setTimeout(() => {
          if (text.length > 0) {
            setText(text.substring(0, text.length - 1));
          } else {
            setTextIndex((prev) => (prev + 1) % fullTexts.length);
            setIsTyping(true);
          }
        }, 50);
      }, 1500);
    }
    
    return () => clearTimeout(timer);
  }, [text, isTyping, textIndex, fullTexts]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/30 to-black"></div>
      
      <div className="container relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          <div>Hello, I'm <span className="gradient-text">Ruhid Islam Rahi</span></div>
        </h1>
        
        <div className="h-16 flex justify-center items-center">
          <div className="text-xl md:text-3xl font-medium typing-container">
            <span className="typing-text">{text}</span>
          </div>
        </div>
        
        <p className="mt-6 max-w-lg mx-auto text-gray-300 md:text-lg">
          I create data-driven solutions, explore Python and AI tools, and enjoy building projects that solve real-world problems. I'm on a continuous journey of learning and innovation.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-300 hover:text-white transition-colors"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="animate-bounce" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;
