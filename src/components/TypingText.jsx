import { useTypingEffect } from "../hooks/useTypingEffect";
import { cn } from "../utils/helpers";

export const TypingText = ({ text, speed = 40, className, showCursor = true }) => {
  const { displayed, done } = useTypingEffect(text, speed);

  return (
    <span className={cn("terminal-text", className)}>
      {displayed}
      {showCursor && !done && <span className="terminal-cursor" />}
    </span>
  );
};
