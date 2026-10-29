import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { CyberCard } from "./CyberCard";
import { cn } from "../utils/helpers";

export const AchievementBadge = ({ achievement, unlocked }) => {
  const Icon = achievement.icon;

  return (
    <CyberCard
      className={cn(
        "text-center transition-opacity",
        !unlocked && "opacity-50"
      )}
      hover={unlocked}
    >
      <div
        className={cn(
          "inline-flex p-4 rounded-full mb-3",
          unlocked ? "bg-neon-green/10" : "bg-white/5"
        )}
      >
        {unlocked ? (
          <Icon className={achievement.color} size={32} />
        ) : (
          <Lock className="text-slate-600" size={32} />
        )}
      </div>
      <h4 className="font-semibold text-white text-sm mb-1">{achievement.title}</h4>
      <p className="text-slate-500 text-xs">{achievement.description}</p>
      {unlocked && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="inline-block mt-2 text-xs text-neon-green font-mono"
        >
          UNLOCKED
        </motion.span>
      )}
    </CyberCard>
  );
};
