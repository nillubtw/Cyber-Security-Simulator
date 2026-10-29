import { AlertTriangle } from "lucide-react";
import { cyberAlerts } from "../data/cyberAlerts";

export const ThreatAlert = () => {
  const doubled = [...cyberAlerts, ...cyberAlerts];

  return (
    <div className="bg-danger/10 border-y border-danger/30 py-3 overflow-hidden">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 flex items-center gap-2 px-4 bg-danger/20 py-1 rounded-r-lg">
          <AlertTriangle className="text-danger animate-pulse" size={18} />
          <span className="text-danger font-mono text-xs font-bold uppercase tracking-wider">
            Live Alerts
          </span>
        </div>
        <div className="overflow-hidden flex-1">
          <div className="flex gap-12 ticker-animate whitespace-nowrap">
            {doubled.map((alert, i) => (
              <span key={i} className="text-sm text-slate-300 font-mono">
                {alert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
