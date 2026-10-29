import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import { CyberCard } from "./CyberCard";
import { cn } from "../utils/helpers";

export const QuizCard = ({
  question,
  options,
  selected,
  onSelect,
  showResult,
  correctIndex,
  disabled,
}) => (
  <CyberCard glow>
    <h3 className="text-lg font-semibold text-white mb-6">{question}</h3>
    <div className="space-y-3">
      {options.map((option, index) => {
        const isSelected = selected === index;
        const isCorrect = index === correctIndex;
        const showCorrect = showResult && isCorrect;
        const showWrong = showResult && isSelected && !isCorrect;

        return (
          <motion.button
            key={index}
            onClick={() => !disabled && onSelect(index)}
            disabled={disabled}
            whileHover={!disabled ? { x: 4 } : {}}
            className={cn(
              "w-full text-left p-4 rounded-lg border transition-all duration-300 flex items-center gap-3",
              isSelected && !showResult && "border-neon-green bg-neon-green/10",
              !isSelected && !showResult && "border-cyber-border hover:border-neon-cyan/50 bg-white/5",
              showCorrect && "border-neon-green bg-neon-green/20",
              showWrong && "border-danger bg-danger/20",
              disabled && "cursor-default"
            )}
          >
            <span className="flex-shrink-0 w-8 h-8 rounded-full border border-current flex items-center justify-center text-sm font-mono">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="flex-1 text-slate-300">{option}</span>
            {showCorrect && <CheckCircle className="text-neon-green" size={20} />}
            {showWrong && <XCircle className="text-danger" size={20} />}
          </motion.button>
        );
      })}
    </div>
  </CyberCard>
);
