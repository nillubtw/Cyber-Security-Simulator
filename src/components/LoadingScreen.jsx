import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export const LoadingScreen = () => (
  <div className="fixed inset-0 z-[100] bg-cyber-black flex items-center justify-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="inline-flex p-4 rounded-full border-2 border-neon-green/30 mb-6"
      >
        <Shield className="text-neon-green" size={48} />
      </motion.div>
      <h2 className="font-display text-xl text-neon-green neon-text-green mb-2">
        Cyber Security Awareness Simulator
      </h2>
      <p className="text-slate-500 font-mono text-sm terminal-cursor">
        Initializing secure environment
      </p>
      <div className="mt-6 w-48 h-1 bg-cyber-border rounded-full overflow-hidden mx-auto">
        <motion.div
          className="h-full bg-gradient-to-r from-neon-green to-neon-cyan"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  </div>
);
