import {
  Mail,
  Globe,
  KeyRound,
  Brain,
  Swords,
  BarChart3,
} from "lucide-react";

export const features = [
  {
    icon: Mail,
    title: "Phishing Simulator",
    description:
      "Analyze realistic fake emails and learn to spot phishing tactics like urgency, spoofed senders, and malicious links.",
    path: "/phishing-simulator",
    color: "from-neon-green/20 to-neon-cyan/10",
  },
  {
    icon: Globe,
    title: "Fake Website Detector",
    description:
      "Compare legitimate vs fraudulent websites. Inspect URLs, SSL certificates, and suspicious popups.",
    path: "/fake-website-detector",
    color: "from-neon-cyan/20 to-neon-purple/10",
  },
  {
    icon: KeyRound,
    title: "Password Analyzer",
    description:
      "Test password strength in real-time with crack-time estimates and personalized security recommendations.",
    path: "/password-analyzer",
    color: "from-neon-purple/20 to-neon-green/10",
  },
  {
    icon: Brain,
    title: "Cyber Safety Quiz",
    description:
      "Challenge yourself with timed multiple-choice questions covering modern cybersecurity threats.",
    path: "/cyber-quiz",
    color: "from-neon-green/20 to-danger/10",
  },
  {
    icon: Swords,
    title: "Attack Scenarios",
    description:
      "Experience interactive simulations of OTP scams, QR fraud, fake tech support, and social engineering.",
    path: "/attack-simulation",
    color: "from-danger/20 to-warning/10",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Visualize global threat trends, phishing statistics, and track your personal security training progress.",
    path: "/dashboard",
    color: "from-neon-cyan/20 to-neon-green/10",
  },
];

export const homeStats = [
  { label: "Simulations Completed", value: 125000, suffix: "+" },
  { label: "Threats Detected", value: 89000, suffix: "+" },
  { label: "Users Trained", value: 45000, suffix: "+" },
  { label: "Countries Reached", value: 120, suffix: "+" },
];
