import { motion } from "framer-motion";
import { cn } from "../utils/helpers";

export const SectionTitle = ({
  title,
  subtitle,
  align = "center",
  className,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={cn(
      "mb-12",
      align === "center" && "text-center",
      align === "left" && "text-left",
      className
    )}
  >
    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
      {title.split(" ").map((word, i) =>
        word.toLowerCase() === "cyber" ||
        word.toLowerCase() === "security" ||
        word.toLowerCase() === "simulations" ||
        word.toLowerCase() === "training" ? (
          <span key={i} className="text-neon-green neon-text-green">
            {word}{" "}
          </span>
        ) : (
          <span key={i}>{word} </span>
        )
      )}
    </h2>
    {subtitle && (
      <p className="text-slate-400 max-w-2xl mx-auto text-lg">{subtitle}</p>
    )}
    <motion.div
      className={cn(
        "h-1 w-24 bg-gradient-to-r from-neon-green to-neon-cyan rounded-full mt-4",
        align === "center" && "mx-auto"
      )}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    />
  </motion.div>
);
