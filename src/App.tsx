
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Certifications from "./pages/Certifications";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

// Improved ScrollToHashElement to respond to both pathname and hash changes
const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    // Only execute if there is a hash
    if (location.hash) {
      // ensure the DOM is rendered before scrolling
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location.pathname, location.hash]); // Retrigger for both pathname and hash changes

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
