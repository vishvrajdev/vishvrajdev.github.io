import React from "react";
import "./HireMeFAB.scss";

const HireMeFAB = ({isDark}) => {
  return (
    <a href="#contact" className={`hire-me-fab ${isDark ? "dark" : ""}`}>
      <div className="fab-content">
        <i className="fas fa-briefcase"></i>
        <span>Hire Me</span>
      </div>
    </a>
  );
};

export default HireMeFAB;
