import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Menu, X, Sun, Moon } from "lucide-react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../utils/helpers";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/phishing-simulator", label: "Phishing" },
  { to: "/fake-website-detector", label: "Websites" },
  { to: "/password-analyzer", label: "Passwords" },
  { to: "/cyber-quiz", label: "Quiz" },
  { to: "/attack-simulation", label: "Scenarios" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/about", label: "About" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollPosition();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cyber-black/80 backdrop-blur-xl border-b border-neon-green/10 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-neon-green/10 group-hover:bg-neon-green/20 transition-colors">
              <Shield className="text-neon-green" size={24} />
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-white text-sm leading-tight">
                CyberSec
              </span>
              <span className="block text-neon-green text-xs font-mono">Simulator</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-neon-green bg-neon-green/10"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-400 hover:text-neon-green hover:bg-white/5 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-cyber-black/95 backdrop-blur-xl border-b border-neon-green/10"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "text-neon-green bg-neon-green/10"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
