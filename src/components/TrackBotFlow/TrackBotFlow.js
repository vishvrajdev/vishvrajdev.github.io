import React from "react";
import "./TrackBotFlow.scss";

const flowNodes = [
  { icon: "fas fa-satellite-dish", label: "Sensor Input", sub: "LiDAR, RFID, IMU" },
  { icon: "fas fa-microchip", label: "Processing", sub: "ESP32, PID, FSM" },
  { icon: "fas fa-brain", label: "AI Decision", sub: "A* Path, Optimization" },
  { icon: "fas fa-arrows-alt", label: "Movement", sub: "Mecanum Drive" }
];

export default function TrackBotFlow({ isDark }) {
  return (
    <div className={`trackbot-flow ${isDark ? "trackbot-flow-dark" : ""}`}>
      <h6 className="flow-title">
        <i className="fas fa-project-diagram"></i> System Pipeline
      </h6>
      <div className="flow-nodes">
        {flowNodes.map((node, i) => (
          <React.Fragment key={i}>
            <div className="flow-node" style={{ animationDelay: `${i * 0.3}s` }}>
              <div className="flow-node-icon">
                <i className={node.icon}></i>
                <span className="node-pulse"></span>
              </div>
              <span className="flow-node-label">{node.label}</span>
              <span className="flow-node-sub">{node.sub}</span>
            </div>
            {i < flowNodes.length - 1 && (
              <div className="flow-arrow" style={{ animationDelay: `${i * 0.3 + 0.15}s` }}>
                <i className="fas fa-chevron-right"></i>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
