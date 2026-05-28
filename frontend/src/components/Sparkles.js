import React, { useEffect, useRef } from "react";

const COLORS = ["#4f46e5", "#7c3aed", "#06b6d4", "#f59e0b", "#ec4899", "#22c55e"];

export default function Sparkles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const sparkles = [];

    for (let i = 0; i < 30; i++) {
      const el = document.createElement("div");
      el.className = "sparkle";
      const size = Math.random() * 8 + 4;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const left = Math.random() * 100;
      const duration = Math.random() * 8 + 6;
      const delay = Math.random() * 10;

      el.style.cssText = `
        width: ${size}px; height: ${size}px;
        background: ${color};
        left: ${left}%;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        opacity: 0.5;
      `;
      container.appendChild(el);
      sparkles.push(el);
    }
    return () => sparkles.forEach((s) => s.remove());
  }, []);

  return <div className="sparkle-bg" ref={containerRef} />;
}
