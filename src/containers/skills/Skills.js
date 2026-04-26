import React, {useContext} from "react";
import "./Skills.scss";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import RadarChart from "../../components/RadarChart/RadarChart";
import skillsAnimation from "../../assets/lottie/skills-animation.json";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <Fade bottom duration={1000}>
        <div className="skills-header-div">
          <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
            {skillsSection.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle skills-text-subtitle"
                : "subTitle skills-text-subtitle"
            }
          >
            {skillsSection.subTitle}
          </p>
        </div>
      </Fade>

      <div className="skills-content-div">
        <Fade left duration={1000}>
          <div className="skills-visual-div">
            <div className="skills-lottie-div">
              <DisplayLottie animationData={skillsAnimation} />
            </div>
            <div className="radar-wrapper">
              {skillsSection.radarData && (
                <RadarChart data={skillsSection.radarData} isDark={isDark} />
              )}
            </div>
          </div>
        </Fade>

        <div className="skills-categories-wrapper">
          {/* Core Expertise Cards */}
          {skillsSection.skillCategories && (
            <div className="skill-category-grid">
              {skillsSection.skillCategories.map((cat, i) => (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode skill-category-card hover-tilt card-glow"
                      : "skill-category-card hover-tilt card-glow"
                  }
                >
                  <Fade right duration={1000} delay={i * 100}>
                    <div className="skill-category-icon">
                      <i className={cat.icon}></i>
                    </div>
                    <h3 className="skill-category-title">{cat.category}</h3>
                    <p className="skill-category-description">
                      {cat.description}
                    </p>
                  </Fade>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
