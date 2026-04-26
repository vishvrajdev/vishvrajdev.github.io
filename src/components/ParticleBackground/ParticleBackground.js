import React, { useEffect, useRef } from "react";
import "./ParticleBackground.scss";

export default function ParticleBackground({ isDark }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particleCount = 18;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const dot = document.createElement("span");
      dot.className = "particle-dot";

      // Random position
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;

      // Random size (2px - 6px)
      const size = 2 + Math.random() * 4;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;

      // Random animation duration (15s - 35s) and delay
      dot.style.animationDuration = `${15 + Math.random() * 20}s`;
      dot.style.animationDelay = `${-Math.random() * 20}s`;

      // Random opacity (0.08 - 0.25)
      dot.style.opacity = `${0.08 + Math.random() * 0.17}`;

      container.appendChild(dot);
      particles.push(dot);
    }

    return () => {
      particles.forEach((p) => {
        if (p.parentNode) p.parentNode.removeChild(p);
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`particle-container ${isDark ? "particle-dark" : ""}`}
      aria-hidden="true"
    />
  );
}
