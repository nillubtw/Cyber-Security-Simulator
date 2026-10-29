import { motion } from "framer-motion";
import { cn } from "../utils/helpers";

export const CyberCard = ({
  children,
  className,
  hover = true,
  glow = false,
  onClick,
  padding = "p-6",
}) => (
  <motion.div
    onClick={onClick}
    className={cn(
      "glass-card rounded-xl",
      padding,
      glow && "neon-border",
      hover && "transition-all duration-300 hover:border-neon-green/40 hover:shadow-[0_0_25px_rgba(0,255,136,0.15)]",
      onClick && "cursor-pointer",
      className
    )}
    whileHover={hover ? { y: -4 } : {}}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);
