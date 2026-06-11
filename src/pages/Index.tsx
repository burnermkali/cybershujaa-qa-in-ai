import { useState, useEffect } from "react";
import { sections } from "@/data/presentationData";
import Header from "@/components/presentation/Header";
import Sidebar from "@/components/presentation/Sidebar";
import Footer from "@/components/presentation/Footer";
import ContentSection from "@/components/presentation/ContentSection";
import { motion } from "framer-motion";

const Index = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Initialize with dark mode
    document.documentElement.classList.add("dark");
  }, []);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    const currentIndex = sections.findIndex((s) => s.id === activeSection);
    
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      if (currentIndex < sections.length - 1) {
        setActiveSection(sections[currentIndex + 1].id);
      }
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      if (currentIndex > 0) {
        setActiveSection(sections[currentIndex - 1].id);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSection]);

  const currentSection = sections.find((s) => s.id === activeSection) || sections[0];

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <Header isDarkMode={isDarkMode} onToggleDarkMode={handleToggleDarkMode} />
      
      <div className="flex pt-16 pb-12">
        <Sidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
        
        {/* Main Content */}
        <main 
          className="flex-1 lg:ml-64 min-h-[calc(100vh-4rem-3rem)]"
          role="main"
          aria-label="Presentation content"
        >
          <motion.div 
            layout
            className="max-w-4xl mx-auto p-6 md:p-8 lg:p-12"
          >
            <ContentSection section={currentSection} />
            
            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mt-12 pt-6 border-t border-border">
              <button
                data-testid="btn-previous"
                aria-label="Previous slide"
                onClick={() => {
                  const currentIndex = sections.findIndex((s) => s.id === activeSection);
                  if (currentIndex > 0) {
                    setActiveSection(sections[currentIndex - 1].id);
                  }
                }}
                disabled={sections.findIndex((s) => s.id === activeSection) === 0}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <span>←</span>
                <span className="hidden sm:inline">Previous</span>
              </button>

              <span data-testid="slide-counter" className="text-sm text-muted-foreground">
                Use arrow keys to navigate
              </span>

              <button
                data-testid="btn-next"
                aria-label="Next slide"
                onClick={() => {
                  const currentIndex = sections.findIndex((s) => s.id === activeSection);
                  if (currentIndex < sections.length - 1) {
                    setActiveSection(sections[currentIndex + 1].id);
                  }
                }}
                disabled={sections.findIndex((s) => s.id === activeSection) === sections.length - 1}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <span className="hidden sm:inline">Next</span>
                <span>→</span>
              </button>
            </div>
          </motion.div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
