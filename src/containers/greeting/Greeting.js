import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import chatbot from "../../assets/lottie/chatbot.json";
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
              {/* Internship Seeking Badge */}
              <div className={isDark ? "dark-mode internship-badge" : "internship-badge"}>
                <span className="internship-dot"></span>
                🎯 Actively seeking internships in AI & Data Science
              </div>

              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>

              {/* Proof Points */}
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

              <SocialMedia />

              {/* CTA Buttons — single horizontal row */}
              <div className="button-greeting-div">
                <a href="#projects" className="cta-link">
                  <button className={isDark ? "dark-mode cta-button cta-primary" : "cta-button cta-primary"}>
                    <i className="fas fa-rocket"></i> View Projects
                  </button>
                </a>
                {greeting.resumeLink && (
                  <a
                    href={require("./resume.pdf")}
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

              {/* Resume Highlight */}
              {resumeSection.display && (
                <div className={isDark ? "dark-mode resume-highlight" : "resume-highlight"}>
                  <i className="fas fa-file-alt resume-highlight-icon"></i>
                  <div>
                    <span className="resume-highlight-title">Resume Available</span>
                    <span className="resume-highlight-desc">AI & Data Science — B.Tech (2025–2029)</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
             <DisplayLottie animationData={chatbot} />
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
