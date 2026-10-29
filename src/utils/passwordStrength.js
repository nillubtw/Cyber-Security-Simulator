// Password strength analysis utilities

const COMMON_PASSWORDS = [
  "password", "123456", "12345678", "qwerty", "abc123",
  "monkey", "letmein", "dragon", "master", "admin",
  "welcome", "login", "princess", "football", "shadow",
];

const WEAK_PATTERNS = [
  /^[a-z]+$/i,
  /^[0-9]+$/,
  /(.)\1{2,}/,
  /^(012|123|234|345|456|567|678|789|890)/,
  /password/i,
  /admin/i,
  /qwerty/i,
];

export const analyzePassword = (password) => {
  if (!password) {
    return {
      score: 0,
      label: "Enter a password",
      color: "#64748b",
      crackTime: "—",
      tips: ["Start typing to analyze your password strength"],
      checks: {},
    };
  }

  let score = 0;
  const checks = {
    length: password.length >= 12,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    numbers: /[0-9]/.test(password),
    symbols: /[^A-Za-z0-9]/.test(password),
    noCommon: !COMMON_PASSWORDS.includes(password.toLowerCase()),
    noRepeating: !/(.)\1{2,}/.test(password),
    noSequential: !/(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|012|123|234|345|456|567|678|789)/i.test(password),
  };

  // Length scoring
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  if (password.length >= 16) score += 1;
  if (password.length >= 20) score += 1;

  // Character variety
  if (checks.uppercase) score += 1;
  if (checks.lowercase) score += 1;
  if (checks.numbers) score += 1;
  if (checks.symbols) score += 2;

  // Penalties
  if (!checks.noCommon) score -= 3;
  if (!checks.noRepeating) score -= 1;
  if (!checks.noSequential) score -= 1;

  WEAK_PATTERNS.forEach((pattern) => {
    if (pattern.test(password)) score -= 1;
  });

  score = Math.max(0, Math.min(10, score));

  const levels = [
    { min: 0, label: "Very Weak", color: "#ff3366", crackTime: "Instant" },
    { min: 2, label: "Weak", color: "#ff6b35", crackTime: "Seconds" },
    { min: 4, label: "Fair", color: "#ffaa00", crackTime: "Minutes" },
    { min: 6, label: "Good", color: "#00d4ff", crackTime: "Days" },
    { min: 8, label: "Strong", color: "#00ff88", crackTime: "Centuries" },
    { min: 10, label: "Excellent", color: "#00ff88", crackTime: "Millennia+" },
  ];

  const level = [...levels].reverse().find((l) => score >= l.min) || levels[0];

  const tips = [];
  if (!checks.length) tips.push("Use at least 12 characters");
  if (!checks.uppercase) tips.push("Add uppercase letters (A-Z)");
  if (!checks.lowercase) tips.push("Add lowercase letters (a-z)");
  if (!checks.numbers) tips.push("Include numbers (0-9)");
  if (!checks.symbols) tips.push("Add special characters (!@#$%^&*)");
  if (!checks.noCommon) tips.push("Avoid common passwords");
  if (!checks.noRepeating) tips.push("Avoid repeating characters");
  if (!checks.noSequential) tips.push("Avoid sequential patterns");
  if (tips.length === 0) tips.push("Great password! Keep it unique and never reuse it.");

  const suggestions = generateSuggestions(password, checks);

  return {
    score,
    maxScore: 10,
    label: level.label,
    color: level.color,
    crackTime: level.crackTime,
    tips,
    checks,
    suggestions,
    percentage: (score / 10) * 100,
  };
};

const generateSuggestions = (password, checks) => {
  const base = "Xk9#";
  const parts = [];
  if (!checks.uppercase) parts.push("A");
  if (!checks.lowercase) parts.push("b");
  if (!checks.numbers) parts.push("7");
  if (!checks.symbols) parts.push("!");
  const suffix = parts.join("") || "mQ2!";
  const len = Math.max(16, password.length + 4);
  return `${base}${suffix}${"Z".repeat(Math.max(0, len - base.length - suffix.length))}`;
};
