import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("cyber-theme", "dark");
  const [achievements, setAchievements] = useLocalStorage("cyber-achievements", []);
  const [quizScores, setQuizScores] = useLocalStorage("cyber-quiz-scores", []);
  const [simulationStats, setSimulationStats] = useLocalStorage("cyber-sim-stats", {
    phishingCompleted: 0,
    websitesChecked: 0,
    quizzesTaken: 0,
    scenariosCompleted: 0,
  });

  useEffect(() => {
    document.body.classList.toggle("light-theme", theme === "light");
    document.body.classList.toggle("dark-theme", theme === "dark");
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const unlockAchievement = (id) => {
    setAchievements((prev) => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
  };

  const recordQuizScore = (score, total) => {
    setQuizScores((prev) => [
      ...prev.slice(-9),
      { score, total, date: new Date().toISOString(), pct: Math.round((score / total) * 100) },
    ]);
    setSimulationStats((s) => ({ ...s, quizzesTaken: s.quizzesTaken + 1 }));
    if (score === total) unlockAchievement("perfect-quiz");
    if (score >= total * 0.8) unlockAchievement("quiz-master");
  };

  const incrementStat = (key) => {
    setSimulationStats((s) => ({ ...s, [key]: (s[key] || 0) + 1 }));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        achievements,
        unlockAchievement,
        quizScores,
        recordQuizScore,
        simulationStats,
        incrementStat,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
