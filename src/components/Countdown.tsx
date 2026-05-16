import { useEffect, useState } from "react";

const TARGET = new Date("2026-11-15T10:00:00+04:00").getTime();

function calc() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(calc());

  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Min", value: t.minutes },
    { label: "Sec", value: t.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-3 md:gap-4">
      {items.map((i) => (
        <div
          key={i.label}
          className="glass rounded-xl p-4 md:p-6 text-center relative overflow-hidden scanline"
        >
          <div className="font-mono text-3xl md:text-5xl font-bold text-gradient tabular-nums">
            {String(i.value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
            {i.label}
          </div>
        </div>
      ))}
    </div>
  );
}
