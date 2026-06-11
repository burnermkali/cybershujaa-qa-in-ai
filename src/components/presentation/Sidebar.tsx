import { motion } from "framer-motion";
import { sections } from "@/data/presentationData";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed bottom-4 right-4 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg glow-blue"
        aria-label="Toggle menu"
      >
        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className={cn(
          "fixed top-16 left-0 h-[calc(100vh-4rem-3rem)] w-64 bg-sidebar border-r border-sidebar-border overflow-y-auto z-40 transition-transform duration-300",
          "lg:translate-x-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <nav className="p-3 space-y-1" role="navigation" aria-label="Presentation sections">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <motion.button
                key={section.id}
                data-section={section.id}
                onClick={() => handleSectionClick(section.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                  isActive
                    ? "bg-primary text-primary-foreground glow-blue"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <span className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-md text-sm font-bold",
                  isActive 
                    ? "bg-primary-foreground/20" 
                    : "bg-sidebar-accent"
                )}>
                  {index + 1}
                </span>
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-medium truncate">{section.shortTitle}</span>
              </motion.button>
            );
          })}
        </nav>

        {/* Progress Indicator */}
        <div className="p-4 border-t border-sidebar-border">
          <div className="text-xs text-muted-foreground mb-2">Progress</div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent"
              initial={{ width: 0 }}
              animate={{ 
                width: `${((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100}%` 
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="text-xs text-muted-foreground mt-1 text-right">
            {sections.findIndex(s => s.id === activeSection) + 1} / {sections.length}
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
