import { Shield, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import thomasAvatar from "@/assets/thomas-adika.jpg";

interface HeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const Header = ({ isDarkMode, onToggleDarkMode }: HeaderProps) => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 h-16 bg-card/95 backdrop-blur-md border-b border-border"
    >
      <div className="h-full flex items-center justify-between px-4 md:px-6">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary glow-blue">
              <img 
                src={thomasAvatar} 
                alt="Thomas Adika" 
                className="w-full h-full object-cover"
              />
            </div>
            <Shield className="absolute -bottom-1 -right-1 w-4 h-4 text-accent" />
          </div>
          <div className="hidden sm:block">
            <h1 data-testid="site-title" className="text-lg md:text-xl font-bold text-foreground">
              Thomas Adika <span className="text-primary">AI in QA</span>
            </h1>
            <p className="text-xs text-muted-foreground hidden md:block">
              AI in Quality Assurance – CyberShujaa Mentorship 2026
            </p>
          </div>
          <h1 className="sm:hidden text-sm font-bold text-foreground">
            QA Mentor Hour
          </h1>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={onToggleDarkMode}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
          aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Night Ops Mode"}
        >
          {isDarkMode ? (
            <>
              <Sun className="w-4 h-4 text-cyber-orange" />
              <span className="hidden md:inline text-sm font-medium">Day Mode</span>
            </>
          ) : (
            <>
              <Moon className="w-4 h-4 text-primary" />
              <span className="hidden md:inline text-sm font-medium">Night Ops</span>
            </>
          )}
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
