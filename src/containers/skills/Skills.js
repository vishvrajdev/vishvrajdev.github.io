import React, {useContext} from "react";
import "./Skills.scss";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import ml from "../../assets/lottie/ml.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={ml} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
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

            {/* Core Expertise Cards */}
            {skillsSection.skillCategories && (
              <div className="skill-category-grid">
                {skillsSection.skillCategories.map((cat, i) => (
                  <Fade right duration={1000} delay={i * 150} key={i}>
                    <div
                      className={
                        isDark
                          ? "dark-mode skill-category-card"
                          : "skill-category-card"
                      }
                    >
                      <div className="skill-category-icon">
                        <i className={cat.icon}></i>
                      </div>
                      <h3 className="skill-category-title">{cat.category}</h3>
                      <p className="skill-category-description">
                        {cat.description}
                      </p>
                    </div>
                  </Fade>
                ))}
              </div>
            )}
          </div>
        </Fade>
      </div>
    </div>
  );
}
