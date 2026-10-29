import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "../utils/helpers";

const variants = {
  primary:
    "bg-gradient-to-r from-neon-green to-neon-cyan text-cyber-black font-semibold glow-btn",
  secondary:
    "border border-neon-green/50 text-neon-green hover:bg-neon-green/10",
  danger:
    "border border-danger/50 text-danger hover:bg-danger/10",
  ghost:
    "text-slate-300 hover:text-neon-green hover:bg-white/5",
};

export const AnimatedButton = ({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className,
  icon: Icon,
  disabled,
  type = "button",
}) => {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300",
    variants[variant],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const content = (
    <>
      {Icon && <Icon size={18} />}
      {children}
    </>
  );

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.03 },
    whileTap: disabled ? {} : { scale: 0.97 },
  };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a {...motionProps} href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </motion.button>
  );
};
