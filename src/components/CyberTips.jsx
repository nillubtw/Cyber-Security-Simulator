import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { cyberTips } from "../data/tips";
import { CyberCard } from "./CyberCard";
import { staggerContainer, fadeInUp } from "../animations/variants";

export const CyberTips = () => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  >
    {cyberTips.map((item, i) => (
      <motion.div key={i} variants={fadeInUp}>
        <CyberCard>
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-neon-green/10 text-neon-green flex-shrink-0">
              <Lightbulb size={20} />
            </div>
            <div>
              <span className="text-xs text-neon-cyan font-mono uppercase tracking-wider">
                {item.category}
              </span>
              <h4 className="text-white font-semibold mt-1 mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm">{item.tip}</p>
            </div>
          </div>
        </CyberCard>
      </motion.div>
    ))}
  </motion.div>
);
