import { motion } from "framer-motion";
import { Tool } from "@/data/presentationData";
import { 
  Code, 
  Bug, 
  GitBranch, 
  Server, 
  Wrench,
  LayoutGrid
} from "lucide-react";

interface ToolsGridProps {
  tools: Tool[];
}

const categoryIcons: Record<string, typeof Code> = {
  "Automation": Code,
  "Management": LayoutGrid,
  "API Testing": Bug,
  "Version Control": GitBranch,
  "CI/CD": Server,
};

const ToolsGrid = ({ tools }: ToolsGridProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Wrench className="w-5 h-5 text-primary" />
        <span className="font-semibold text-foreground">QA Toolkit</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool, index) => {
          const Icon = categoryIcons[tool.category] || Code;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all cursor-default group"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-primary/70 font-medium uppercase tracking-wider mb-1">
                    {tool.category}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {tool.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ToolsGrid;
