import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const footerLinks = {
  Simulations: [
    { to: "/phishing-simulator", label: "Phishing Simulator" },
    { to: "/fake-website-detector", label: "Website Detector" },
    { to: "/password-analyzer", label: "Password Analyzer" },
    { to: "/attack-simulation", label: "Attack Scenarios" },
  ],
  Learn: [
    { to: "/cyber-quiz", label: "Cyber Safety Quiz" },
    { to: "/dashboard", label: "Analytics Dashboard" },
    { to: "/about", label: "About Us" },
  ],
};

export const Footer = () => (
  <footer className="bg-cyber-dark border-t border-neon-green/10 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <Shield className="text-neon-green" size={28} />
            <span className="font-display font-bold text-white">CyberSec Simulator</span>
          </Link>
          <p className="text-slate-500 text-sm">
            Learn cybersecurity through realistic interactive simulations. Stay safe online.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-display text-white font-semibold mb-4">{title}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-500 hover:text-neon-green text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-6 border-t border-cyber-border flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-slate-600 text-sm font-mono">
          © {new Date().getFullYear()} Cyber Security Awareness Simulator. Educational use only.
        </p>
        <p className="text-slate-600 text-xs font-mono">
          <span className="text-neon-green">●</span> System Secure — All simulations are safe
        </p>
      </div>
    </div>
  </footer>
);
