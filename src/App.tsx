
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Certifications from "./pages/Certifications";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

// Component to handle hash navigation
const ScrollToHashElement = () => {
  useEffect(() => {
    // If there is a hash in the URL, scroll to the element with that ID
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [window.location.hash]);

  return null;
};

// Set the document title
const TitleSetter = () => {
  useEffect(() => {
    // Force the title update and prevent any other scripts from changing it
    document.title = "Ruhid Rahi | Portfolio";
    
    // Use an additional event listener to ensure the title stays correct
    const observer = new MutationObserver(() => {
      if (document.title !== "Ruhid Rahi | Portfolio") {
        document.title = "Ruhid Rahi | Portfolio";
      }
    });
    
    // Observe title changes
    observer.observe(document.querySelector('title'), { 
      childList: true, 
      characterData: true 
    });
    
    return () => observer.disconnect();
  }, []);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <TitleSetter />
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
