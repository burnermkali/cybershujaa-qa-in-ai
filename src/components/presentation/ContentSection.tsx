import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/data/presentationData";
import { 
  CheckCircle, 
  Lightbulb, 
  Quote, 
  ExternalLink,
  Sparkles
} from "lucide-react";
import Quiz from "./Quiz";
import CareerTimeline from "./CareerTimeline";
import ToolsGrid from "./ToolsGrid";
import CodeBlock from "./CodeBlock";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";

interface ContentSectionProps {
  section: Section;
}

const ContentSection = ({ section }: ContentSectionProps) => {
  const { content } = section;
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (section.id === "thank-you") {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [section.id]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={section.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="space-y-8"
      >
        {/* Confetti for Thank You slide */}
        {showConfetti && (
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={200}
            colors={["#0ea5e9", "#22c55e", "#f97316", "#8b5cf6"]}
          />
        )}

        {/* Header */}
        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="p-2 rounded-lg bg-primary/10">
              <section.icon className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {section.title}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
          >
            {content.heading}
          </motion.h1>
          
          {content.subheading && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              {content.subheading}
            </motion.p>
          )}
        </div>

        {/* Highlights */}
        {content.highlights && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {content.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
              >
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                  {highlight.label}
                </div>
                <div className="text-sm font-semibold text-foreground">
                  {highlight.value}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Bullets */}
        {content.bullets && (
          <motion.ul 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-3"
          >
            {content.bullets.map((bullet, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="flex items-start gap-3 group"
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-foreground">{bullet}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}

        {/* Quote */}
        {content.quote && (
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20"
          >
            <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/30" />
            <p className="text-lg italic text-foreground pl-8 mb-2">
              "{content.quote.text}"
            </p>
            <cite className="text-sm text-muted-foreground pl-8 not-italic">
              — {content.quote.author}
            </cite>
          </motion.blockquote>
        )}

        {/* Tips */}
        {content.tips && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="p-4 rounded-xl bg-accent/10 border border-accent/20"
          >
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-5 h-5 text-accent" />
              <span className="font-semibold text-foreground">Pro Tips</span>
            </div>
            <ul className="space-y-2">
              {content.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Sparkles className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  {tip}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Quiz */}
        {content.quiz && <Quiz quiz={content.quiz} />}

        {/* Career Timeline */}
        {content.timeline && <CareerTimeline timeline={content.timeline} />}

        {/* Tools Grid */}
        {content.tools && <ToolsGrid tools={content.tools} />}

        {/* Code Snippet */}
        {content.codeSnippet && (
          <CodeBlock 
            language={content.codeSnippet.language} 
            code={content.codeSnippet.code} 
          />
        )}

        {/* Links */}
        {content.links && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-3"
          >
            {content.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                {link.label}
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ContentSection;
