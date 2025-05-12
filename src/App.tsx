
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/resume" element={<Resume />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
