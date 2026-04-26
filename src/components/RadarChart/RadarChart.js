import React from "react";
import "./RadarChart.scss";

const RadarChart = ({data, isDark}) => {
  const size = 500; // Increased to 500 to provide massive internal padding
  const radius = 120; // Keep at 120 for generous label room
  const center = size / 2;
  const angleStep = (Math.PI * 2) / data.length;

  // Generate points for the background grid
  const gridLevels = [0.2, 0.4, 0.6, 0.8, 1.0];
  const gridLines = gridLevels.map((level) => {
    const points = data.map((_, i) => {
      const x = center + radius * level * Math.cos(i * angleStep - Math.PI / 2);
      const y = center + radius * level * Math.sin(i * angleStep - Math.PI / 2);
      return `${x},${y}`;
    });
    return points.join(" ");
  });

  // Generate points for the data polygon
  const dataPoints = data.map((d, i) => {
    const r = (d.A / d.fullMark) * radius;
    const x = center + r * Math.cos(i * angleStep - Math.PI / 2);
    const y = center + r * Math.sin(i * angleStep - Math.PI / 2);
    return `${x},${y}`;
  }).join(" ");

  // Generate labels
  const labels = data.map((d, i) => {
    const labelRadius = radius + 35; // Increased padding for labels
    const x = center + labelRadius * Math.cos(i * angleStep - Math.PI / 2);
    const y = center + labelRadius * Math.sin(i * angleStep - Math.PI / 2);
    
    // Determine text anchor based on position
    let anchor = "middle";
    if (x < center - 30) anchor = "end";
    else if (x > center + 30) anchor = "start";

    return {text: d.subject, x, y, anchor};
  });

  return (
    <div className="radar-chart-container">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Grid lines */}
        {gridLines.map((points, i) => (
          <polygon
            key={i}
            points={points}
            fill="none"
            stroke={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
            strokeWidth="1"
          />
        ))}

        {/* Axis lines */}
        {data.map((_, i) => {
          const x = center + radius * Math.cos(i * angleStep - Math.PI / 2);
          const y = center + radius * Math.sin(i * angleStep - Math.PI / 2);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
              strokeWidth="1"
            />
          );
        })}

        {/* Data polygon */}
        <polygon
          points={dataPoints}
          fill="rgba(108, 99, 255, 0.4)"
          stroke="rgba(108, 99, 255, 1)"
          strokeWidth="2"
        />

        {/* Labels */}
        {labels.map((l, i) => (
          <text
            key={i}
            x={l.x}
            y={l.y}
            textAnchor={l.anchor}
            dominantBaseline="middle"
            fontSize="12"
            fill={isDark ? "#fff" : "#333"}
            fontWeight="bold"
          >
            {l.text}
          </text>
        ))}
      </svg>
    </div>
  );
};

export default RadarChart;
