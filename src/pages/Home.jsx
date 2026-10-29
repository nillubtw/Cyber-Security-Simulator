import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Users,
  Target,
  Zap,
  Star,
} from "lucide-react";
import { ParticleBackground } from "../components/ParticleBackground";
import { TypingText } from "../components/TypingText";
import { AnimatedButton } from "../components/AnimatedButton";
import { CyberCard } from "../components/CyberCard";
import { SectionTitle } from "../components/SectionTitle";
import { StatsCard } from "../components/StatsCard";
import { ThreatAlert } from "../components/ThreatAlert";
import { CyberTips } from "../components/CyberTips";
import { features, homeStats } from "../data/features";
import { testimonials } from "../data/testimonials";
import { staggerContainer, fadeInUp } from "../animations/variants";

export const Home = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <ParticleBackground count={80} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-black/50 to-cyber-black" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-green/30 bg-neon-green/5 mb-6">
            <Shield className="text-neon-green" size={16} />
            <span className="text-neon-green text-sm font-mono">
              Interactive Cybersecurity Training Platform
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Learn Cybersecurity Through{" "}
            <span className="text-neon-green neon-text-green">Real Simulations</span>
          </h1>

          <p className="text-slate-400 text-lg mb-4 max-w-2xl">
            <TypingText
              text="> Master phishing detection, password security, and threat response in a safe environment..."
              speed={30}
            />
          </p>

          <p className="text-slate-500 mb-8 max-w-xl">
            Practice identifying cyber threats with realistic simulations. No real risk — just real skills.
          </p>

          <div className="flex flex-wrap gap-4">
            <AnimatedButton to="/phishing-simulator" icon={ArrowRight}>
              Start Training
            </AnimatedButton>
            <AnimatedButton to="/cyber-quiz" variant="secondary">
              Take the Quiz
            </AnimatedButton>
          </div>
        </motion.div>
      </div>

      {/* Floating terminal decoration */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="hidden xl:block absolute right-8 top-1/3 w-80"
      >
        <CyberCard className="font-mono text-xs text-neon-green/80 scan-line relative overflow-hidden">
          <p className="text-neon-cyan mb-2">$ threat-monitor --live</p>
          <p>├─ Phishing blocked: 8,934</p>
          <p>├─ Malware detected: 1,247</p>
          <p>├─ Active users: 45,231</p>
          <p className="text-neon-green">└─ Status: PROTECTED ✓</p>
        </CyberCard>
      </motion.div>
    </section>

    <ThreatAlert />

    {/* Stats */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {homeStats.map((stat, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <StatsCard
                icon={[Users, Target, Shield, Zap][i]}
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Training Simulations"
          subtitle="Hands-on modules designed to build real-world cybersecurity awareness"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Link to={feature.path}>
                <CyberCard className={`h-full bg-gradient-to-br ${feature.color}`} glow>
                  <feature.icon className="text-neon-green mb-4" size={36} />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{feature.description}</p>
                  <span className="text-neon-green text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight size={16} />
                  </span>
                </CyberCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-cyber-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="What Experts Say" subtitle="Trusted by security professionals worldwide" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <CyberCard>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="text-warning fill-warning" size={16} />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neon-green/20 flex items-center justify-center text-neon-green font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{t.name}</p>
                    <p className="text-slate-500 text-sm">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </CyberCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Tips */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Security Tips" subtitle="Quick wins to improve your digital safety today" />
        <CyberTips />
      </div>
    </section>

    {/* CTA */}
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <CyberCard glow className="py-12">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to Test Your <span className="text-neon-green">Cyber Skills</span>?
          </h2>
          <p className="text-slate-400 mb-8">
            Start with our phishing simulator or challenge yourself with the cyber safety quiz.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AnimatedButton to="/attack-simulation">Run Attack Scenarios</AnimatedButton>
            <AnimatedButton to="/dashboard" variant="secondary">
              View Dashboard
            </AnimatedButton>
          </div>
        </CyberCard>
      </div>
    </section>
  </>
);
