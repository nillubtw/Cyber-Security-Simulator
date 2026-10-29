import { motion } from "framer-motion";
import { ShieldOff, Home } from "lucide-react";
import { AnimatedButton } from "../components/AnimatedButton";
import { ParticleBackground } from "../components/ParticleBackground";

export const NotFound = () => (
  <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
    <ParticleBackground count={40} />
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative text-center px-4"
    >
      <ShieldOff className="mx-auto text-danger mb-6" size={64} />
      <h1 className="font-display text-8xl font-bold text-neon-green neon-text-green mb-4">404</h1>
      <h2 className="text-2xl text-white font-semibold mb-4">Access Denied — Page Not Found</h2>
      <p className="text-slate-400 mb-8 max-w-md mx-auto font-mono text-sm">
        &gt; ERROR: The requested resource does not exist in this secure zone.
      </p>
      <AnimatedButton to="/" icon={Home}>
        Return to Base
      </AnimatedButton>
    </motion.div>
  </section>
);
