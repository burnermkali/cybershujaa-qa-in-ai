import { Linkedin, Mail, Globe, Github } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-0 left-0 right-0 h-12 bg-card/95 backdrop-blur-md border-t border-border z-30"
    >
      <div className="h-full flex items-center justify-between px-4 md:px-6">
        <p className="text-xs md:text-sm text-muted-foreground">
          <span className="hidden sm:inline">Presented by </span>
          <span className="font-medium text-foreground">Thomas Adika</span>
          <span className="hidden md:inline"> | June 11, 2026</span>
        </p>
        
        <div className="flex items-center gap-3">
          <a
            href="https://linkedin.com/in/thomasadika"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-secondary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary" />
          </a>
          <a
            href="mailto:thomas.adika@serianu.com"
            className="p-2 rounded-md hover:bg-secondary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4 text-muted-foreground hover:text-primary" />
          </a>
          <a
            href="https://github.com/burnermkali/cybershujaa-qa-in-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-secondary transition-colors"
            aria-label="GitHub Repository"
          >
            <Github className="w-4 h-4 text-muted-foreground hover:text-primary" />
          </a>
          <a
            href="https://bit.ly/CyberShujaa-JobHuntingandMentorship"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-secondary transition-colors"
            aria-label="CyberShujaa Event"
          >
            <Globe className="w-4 h-4 text-muted-foreground hover:text-primary" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
