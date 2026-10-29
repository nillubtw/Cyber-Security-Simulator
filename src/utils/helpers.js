// General utility helpers

export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const formatNumber = (num) => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
};

export const getScoreGrade = (score, total) => {
  const pct = (score / total) * 100;
  if (pct >= 90) return { grade: "A+", label: "Cyber Expert", color: "text-neon-green" };
  if (pct >= 75) return { grade: "A", label: "Security Pro", color: "text-neon-cyan" };
  if (pct >= 60) return { grade: "B", label: "Aware User", color: "text-warning" };
  if (pct >= 40) return { grade: "C", label: "Needs Practice", color: "text-warning" };
  return { grade: "D", label: "High Risk", color: "text-danger" };
};

export const cn = (...classes) => classes.filter(Boolean).join(" ");
