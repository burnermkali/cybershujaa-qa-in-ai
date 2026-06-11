import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QuizQuestion } from "@/data/presentationData";
import { CheckCircle, XCircle, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizProps {
  quiz: QuizQuestion;
}

const Quiz = ({ quiz }: QuizProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (index: number) => {
    if (showResult) return;
    setSelectedOption(index);
    setShowResult(true);
  };

  const isCorrect = selectedOption !== null && quiz.options[selectedOption].isCorrect;

  const resetQuiz = () => {
    setSelectedOption(null);
    setShowResult(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="p-6 rounded-xl bg-card border border-border"
    >
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="w-5 h-5 text-primary" />
        <span className="font-semibold text-foreground">Quick Quiz</span>
      </div>

      <p className="text-lg font-medium text-foreground mb-6">{quiz.question}</p>

      <div className="space-y-3">
        {quiz.options.map((option, index) => (
          <motion.button
            key={index}
            data-quiz-option={index}
            onClick={() => handleOptionClick(index)}
            disabled={showResult}
            whileHover={!showResult ? { scale: 1.01 } : {}}
            whileTap={!showResult ? { scale: 0.99 } : {}}
            className={cn(
              "w-full p-4 rounded-lg text-left transition-all duration-200 border",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              showResult && selectedOption === index && option.isCorrect &&
                "bg-accent/20 border-accent text-foreground",
              showResult && selectedOption === index && !option.isCorrect &&
                "bg-destructive/20 border-destructive text-foreground",
              showResult && option.isCorrect && selectedOption !== index &&
                "bg-accent/10 border-accent/50 text-foreground",
              !showResult && "bg-secondary hover:bg-secondary/80 border-border hover:border-primary/50",
              showResult && selectedOption !== index && !option.isCorrect &&
                "opacity-50"
            )}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{option.text}</span>
              {showResult && option.isCorrect && (
                <CheckCircle className="w-5 h-5 text-accent" />
              )}
              {showResult && selectedOption === index && !option.isCorrect && (
                <XCircle className="w-5 h-5 text-destructive" />
              )}
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6"
          >
            <div className={cn(
              "p-4 rounded-lg",
              isCorrect ? "bg-accent/10 border border-accent/30" : "bg-destructive/10 border border-destructive/30"
            )}>
              <p className={cn(
                "font-medium",
                isCorrect ? "text-accent" : "text-destructive"
              )}>
                {isCorrect ? quiz.feedback.correct : quiz.feedback.incorrect}
              </p>
            </div>
            <button
              onClick={resetQuiz}
              className="mt-4 px-4 py-2 text-sm font-medium text-primary hover:underline"
            >
              Try Again
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Quiz;
