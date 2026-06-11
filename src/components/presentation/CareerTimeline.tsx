import { motion } from "framer-motion";
import { TimelineItem } from "@/data/presentationData";
import { cn } from "@/lib/utils";
import { TrendingUp } from "lucide-react";

interface CareerTimelineProps {
  timeline: TimelineItem[];
}

const levelColors = {
  junior: "from-cyber-blue/60 to-cyber-blue/40",
  mid: "from-cyber-blue/70 to-cyber-green/50",
  senior: "from-cyber-green/60 to-cyber-green/80",
  lead: "from-accent to-cyber-green",
};

const levelWidths = {
  junior: "25%",
  mid: "50%",
  senior: "75%",
  lead: "100%",
};

const CareerTimeline = ({ timeline }: CareerTimelineProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="p-6 rounded-xl bg-card border border-border"
    >
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-5 h-5 text-primary" />
        <span className="font-semibold text-foreground">Career Progression</span>
      </div>

      <div className="space-y-6">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="relative"
          >
            <div className="flex items-start gap-4">
              {/* Level indicator */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
                {index + 1}
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                
                {/* Progress bar */}
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: levelWidths[item.level] }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                    className={cn(
                      "h-full rounded-full bg-gradient-to-r",
                      levelColors[item.level]
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Connector line */}
            {index < timeline.length - 1 && (
              <div className="absolute left-5 top-10 w-0.5 h-6 bg-border" />
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-6 p-4 rounded-lg bg-accent/10 border border-accent/20"
      >
        <p className="text-sm text-muted-foreground">
          💡 <span className="font-medium text-foreground">Your journey starts now!</span> Every expert was once a beginner. Focus on learning, building, and growing consistently.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default CareerTimeline;
