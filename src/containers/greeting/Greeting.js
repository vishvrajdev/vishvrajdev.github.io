import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import ml from "../../assets/lottie/ml.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import ParticleBackground from "../../components/ParticleBackground/ParticleBackground";
import {illustration, greeting, resumeSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting" style={{position: "relative"}}>
        {/* Floating Particles Background */}
        <ParticleBackground isDark={isDark} />

        <div className="greeting-main" style={{position: "relative", zIndex: 1}}>
          <div className="greeting-text-div">
            <div>
              {/* 1. Status badge */}
              <div className={isDark ? "dark-mode internship-badge" : "internship-badge"}>
                <span className="internship-dot"></span>
                🎯 Actively seeking internships in AI & Data Science
              </div>

              {/* 2. Main headline */}
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}
              </h1>

              {/* 3. Subheading paragraph */}
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>

              {/* 4. Bullet achievement list */}
              {greeting.proofPoints && greeting.proofPoints.length > 0 && (
                <ul className={isDark ? "dark-mode proof-points" : "proof-points"}>
                  {greeting.proofPoints.map((point, i) => (
                    <li key={i} className="proof-point-item">
                      <i className="fas fa-check-circle proof-icon"></i>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* 5. CTA Buttons row */}
              <div className="button-greeting-div">
                <a href="#projects" className="cta-link">
                  <button className={isDark ? "dark-mode cta-button cta-primary" : "cta-button cta-primary"}>
                    <i className="fas fa-rocket"></i> View Projects
                  </button>
                </a>
                {greeting.resumeLink && (
                  <a
                    href={resumeSection.resumeLink}
                    download="Vishvrajsinh_Solanki_Resume.pdf"
                    className="cta-link"
                  >
                    <button className={isDark ? "dark-mode cta-button cta-resume" : "cta-button cta-resume"}>
                      <i className="fas fa-file-download"></i> Download Resume
                    </button>
                  </a>
                )}
                <a href="#contact" className="cta-link">
                  <button className={isDark ? "dark-mode cta-button cta-secondary" : "cta-button cta-secondary"}>
                    <i className="fas fa-paper-plane"></i> Contact Me
                  </button>
                </a>
              </div>

              {/* 6. Social media icons row (Moved below buttons) */}
              <div className="greeting-social-div">
                <SocialMedia />
              </div>

              {/* 5b. Stat Chips Badges */}
              {greeting.stats && (
                <div className="stat-chips-container">
                  {greeting.stats.map((stat, i) => (
                    <div key={i} className={isDark ? "dark-mode stat-chip" : "stat-chip"}>
                      <span className="stat-emoji">{stat.emoji}</span>
                      <span className="stat-text">{stat.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <div className="hero-lottie-wrapper">
                <DisplayLottie animationData={ml} />
              </div>
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
