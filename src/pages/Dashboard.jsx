import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Activity, TrendingUp, Shield, AlertTriangle } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { CyberCard } from "../components/CyberCard";
import { StatsCard } from "../components/StatsCard";
import { userPerformance } from "../data/dashboardData";
import { useTheme } from "../context/ThemeContext";
import { staggerContainer, fadeInUp } from "../animations/variants";

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-card p-3 rounded-lg border border-neon-green/20 text-sm">
      <p className="text-white font-mono mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color }}>
          {p.name}: {p.value}
        </p>
      ))}
    </div>
  );
};

export const Dashboard = () => {
  const { simulationStats, quizScores } = useTheme();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionTitle
        title="Analytics Dashboard"
        subtitle="Track your training progress and performance metrics"
        align="left"
      />

      {/* User stats */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      >
        {[
          { label: "Phishing Completed", value: simulationStats.phishingCompleted, icon: Shield },
          { label: "Websites Checked", value: simulationStats.websitesChecked, icon: Activity },
          { label: "Quizzes Taken", value: simulationStats.quizzesTaken, icon: TrendingUp },
          { label: "Scenarios Done", value: simulationStats.scenariosCompleted, icon: AlertTriangle },
        ].map((stat, i) => (
          <motion.div key={i} variants={fadeInUp}>
            <StatsCard icon={stat.icon} label={stat.label} value={stat.value || 0} color="text-neon-cyan" />
          </motion.div>
        ))}
      </motion.div>

      {/* User performance line */}
      <div className="mb-8">
        <CyberCard>
          <h3 className="text-white font-semibold mb-4">Training Performance Trend</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={userPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="week" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} domain={[0, 100]} />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#00ff88"
                strokeWidth={2}
                dot={{ fill: "#00ff88", r: 4 }}
                name="Score %"
              />
            </LineChart>
          </ResponsiveContainer>
        </CyberCard>
      </div>

      {/* Quiz history */}
      {quizScores.length > 0 && (
        <CyberCard>
          <h3 className="text-white font-semibold mb-4">Your Quiz History</h3>
          <div className="space-y-2">
            {quizScores.map((q, i) => (
              <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                <span className="text-slate-400 text-sm font-mono">
                  {new Date(q.date).toLocaleDateString()}
                </span>
                <span className="text-neon-green font-mono">
                  {q.score}/{q.total} ({q.pct}%)
                </span>
              </div>
            ))}
          </div>
        </CyberCard>
      )}
    </div>
  );
};
