import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import { CyberCard } from "./CyberCard";

export const StatsCard = ({ icon: Icon, label, value, suffix = "", color = "text-neon-green" }) => (
  <CyberCard className="text-center">
    {Icon && (
      <div className={`inline-flex p-3 rounded-lg bg-white/5 mb-4 ${color}`}>
        <Icon size={28} />
      </div>
    )}
    <div className={`text-3xl md:text-4xl font-display font-bold ${color} mb-2`}>
      <AnimatedCounter end={value} suffix={suffix} />
    </div>
    <p className="text-slate-400 text-sm">{label}</p>
  </CyberCard>
);
