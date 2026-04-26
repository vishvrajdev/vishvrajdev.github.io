import React, {useContext} from "react";
import "./AboutMe.scss";
import {Fade} from "react-reveal";
import {aboutSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import thinking from "../../assets/lottie/codingPerson.json";

export default function AboutMe() {
  const {isDark} = useContext(StyleContext);
  if (!aboutSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="about-main" id="aboutMe">
        <div className="about-content">
          <div className="about-text-div">
            <h1 className={isDark ? "dark-mode about-heading" : "about-heading"}>
              {aboutSection.title}
            </h1>
            <p className={isDark ? "dark-mode about-text" : "about-text"}>
              {aboutSection.content}
            </p>
          </div>
          <div className="about-image-div">
            <DisplayLottie animationData={thinking} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
